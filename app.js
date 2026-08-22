/**
 * GEOPORTAL DE MONITORAMENTO DA QUALIDADE DO AR - ECO TECNOLOGIA
 * Lógica Principal da Aplicação (Leaflet + Chart.js + CONAMA 506/2024)
 */

(function () {
  'use strict';

  // ==========================================================================
  // ESTADO GLOBAL DA APLICAÇÃO
  // ==========================================================================
  const state = {
    data: window.AIR_QUALITY_DATA || null,
    conama: window.CONAMA_CONFIG || null,
    selectedDate: null,
    selectedDateIndex: -1,
    selectedParam: 'PTS',
    selectedStage: 'PI-1',
    selectedStationId: null,
    drawerParam: 'PTS',
    
    // Player temporal
    isPlaying: false,
    playerInterval: null,
    playbackSpeedMs: 1300,
    
    // Mapa e Camadas
    map: null,
    stationMarkers: {},
    baseLayers: {},
    activeBaseLayer: 'streets',
    isHeatmapActive: false,
    heatLayer: null,
    
    // Ferramenta de Medição de Distância
    isMeasuring: false,
    measurePoints: [],
    measureMarkers: [],
    measureLine: null,
    
    // Gráficos Chart.js
    chartDateComparison: null,
    chartTemporalTrend: null,
    chartRatioMP10PTS: null,
    chartStationHistory: null
  };

  // ==========================================================================
  // INICIALIZAÇÃO
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    if (!state.data || !state.data.records || state.data.records.length === 0) {
      console.error('[!] Erro: Base de dados não carregada.');
      alert('Erro ao carregar a base de dados do monitoramento.');
      return;
    }

    // Inicializa ícones Lucide
    if (window.lucide) lucide.createIcons();

    // Define a data inicial padrão (a mais recente disponível)
    state.selectedDateIndex = state.data.records.length - 1;
    state.selectedDate = state.data.records[state.selectedDateIndex].date;

    initMap();
    initDateSelector();
    initUIEventListeners();
    updateAllViews();
  });

  // ==========================================================================
  // INICIALIZAÇÃO DO MAPA (LEAFLET)
  // ==========================================================================
  function initMap() {
    // Criação do mapa Leaflet
    state.map = L.map('map', {
      zoomControl: false,
      attributionControl: true
    });

    // Controle de Zoom no canto inferior direito
    L.control.zoom({ position: 'bottomright' }).addTo(state.map);

    // 1. Camada Vetorial (CartoDB Voyager)
    state.baseLayers.streets = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
        maxZoom: 19
      }
    );

    // 2. Camada Satélite (Esri World Imagery)
    state.baseLayers.satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 19
      }
    );

    // Adiciona camada vetorial inicial
    state.baseLayers.streets.addTo(state.map);

    // Cria os marcadores das 11 estações
    const latLngs = [];
    Object.values(state.data.stations).forEach((st) => {
      if (st.lat && st.lng) {
        latLngs.push([st.lat, st.lng]);
        createStationMarker(st);
      }
    });

    // Cria a camada de calor (Heatmap) se o plugin estiver carregado
    if (typeof L.heatLayer === 'function') {
      state.heatLayer = L.heatLayer([], {
        radius: 48,
        blur: 32,
        maxZoom: 17,
        max: 1.0,
        minOpacity: 0.35,
        gradient: {
          0.15: '#10b981', // Verde
          0.40: '#34d399',
          0.60: '#f59e0b', // Amarelo
          0.80: '#f97316', // Laranja
          0.98: '#ef4444'  // Vermelho
        }
      });
    }

    // Enquadra o mapa para exibir todos os pontos com margem
    if (latLngs.length > 0) {
      state.map.fitBounds(L.latLngBounds(latLngs), { padding: [60, 60] });
    }

    // Eventos do mapa para medição de distância
    state.map.on('click', handleMapClickForMeasurement);
  }

  // ==========================================================================
  // CRIAÇÃO E ATUALIZAÇÃO DOS MARCADORES CIRCULARES
  // ==========================================================================
  function createStationMarker(st) {
    const customIcon = L.divIcon({
      className: 'station-div-icon',
      html: getMarkerHTML(st.id, null, 'na', '--'),
      iconSize: [48, 54],
      iconAnchor: [24, 27]
    });

    const marker = L.marker([st.lat, st.lng], { icon: customIcon });

    // Tooltip informativo ao passar o mouse
    marker.bindTooltip(
      `<div style="font-family:var(--font-family);font-size:0.78rem;">
        <strong>${st.name}</strong><br>
        <span style="color:#64748b;">${st.cluster}</span>
      </div>`,
      { direction: 'top', offset: [0, -26], opacity: 0.95 }
    );

    // Clique no marcador abre o Drawer de detalhes
    marker.on('click', (e) => {
      if (state.isMeasuring) return; // Não abre drawer durante medição
      openStationDrawer(st.id);
    });

    marker.addTo(state.map);
    state.stationMarkers[st.id] = marker;
  }

  function getMarkerHTML(stationId, value, statusClass, displayVal) {
    const unit = (value !== null && value !== undefined && !isNaN(value)) ? 'µg/m³' : '';
    return `
      <div class="custom-station-marker marker-${statusClass}" data-station="${stationId}">
        <div class="marker-circle">
          <span class="marker-value">${displayVal}</span>
          ${unit ? `<span class="marker-unit">${unit}</span>` : ''}
        </div>
        <span class="marker-label-tag">${stationId}</span>
      </div>
    `;
  }

  function updateStationMarkers() {
    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      const marker = state.stationMarkers[stId];
      if (!marker) return;

      const reading = currentRec.readings[stId] || {};
      const val = reading[state.selectedParam];
      const evaluation = state.conama.evaluateStatus(val, state.selectedParam, state.selectedStage);

      let displayVal = '--';
      if (val !== null && val !== undefined && !isNaN(val)) {
        displayVal = val.toFixed(1);
      }

      // Atualiza o ícone HTML do marcador
      const newIcon = L.divIcon({
        className: 'station-div-icon',
        html: getMarkerHTML(stId, val, evaluation.status, displayVal),
        iconSize: [48, 54],
        iconAnchor: [24, 27]
      });
      marker.setIcon(newIcon);

      // Atualiza Tooltip
      const limitStr = evaluation.limit ? `${evaluation.limit} µg/m³` : 'N/D';
      const pctStr = evaluation.percentage !== null ? `${evaluation.percentage}% do limite` : 'Não monitorado';
      
      marker.setTooltipContent(
        `<div style="font-family:var(--font-family);padding:2px 4px;">
          <div style="font-weight:800;font-size:0.85rem;color:#1e293b;">${st.name}</div>
          <div style="font-size:0.72rem;color:#64748b;margin-bottom:4px;">${st.cluster}</div>
          <div style="font-size:0.78rem;font-weight:700;color:${evaluation.color};">
            ${state.selectedParam}: ${displayVal} µg/m³
          </div>
          <div style="font-size:0.7rem;color:#475569;">Limite CONAMA: ${limitStr} (${pctStr})</div>
          <div style="font-size:0.68rem;color:#94a3b8;margin-top:2px;">Clique para abrir histórico</div>
        </div>`
      );
    });
  }

  // ==========================================================================
  // FERRAMENTA DE MEDIÇÃO DE DISTÂNCIAS (RÉGUA GEODÉSICA)
  // ==========================================================================
  function toggleMeasurementTool() {
    state.isMeasuring = !state.isMeasuring;
    const btn = document.getElementById('btnMeasureDistance');
    const card = document.getElementById('measureCard');

    if (state.isMeasuring) {
      btn.classList.add('measuring');
      card.classList.add('active');
      state.map.getContainer().style.cursor = 'crosshair';
      clearMeasurement();
    } else {
      btn.classList.remove('measuring');
      card.classList.remove('active');
      state.map.getContainer().style.cursor = '';
      clearMeasurement();
    }
  }

  function handleMapClickForMeasurement(e) {
    if (!state.isMeasuring) return;

    const latlng = e.latlng;
    state.measurePoints.push(latlng);

    // Cria pequeno marcador no vértice
    const vertexMarker = L.circleMarker(latlng, {
      radius: 5,
      color: '#0ea5e9',
      fillColor: '#ffffff',
      fillOpacity: 1,
      weight: 2
    }).addTo(state.map);
    state.measureMarkers.push(vertexMarker);

    // Atualiza ou cria a polilinha de medição
    if (state.measureLine) {
      state.measureLine.setLatLngs(state.measurePoints);
    } else {
      state.measureLine = L.polyline(state.measurePoints, {
        color: '#0ea5e9',
        weight: 3,
        dashArray: '6, 8',
        opacity: 0.9
      }).addTo(state.map);
    }

    // Calcula distância geodésica acumulada
    let totalDistMeters = 0;
    for (let i = 1; i < state.measurePoints.length; i++) {
      totalDistMeters += state.measurePoints[i - 1].distanceTo(state.measurePoints[i]);
    }

    const distValEl = document.getElementById('measureDistanceVal');
    const ptCountEl = document.getElementById('measurePointCount');

    ptCountEl.textContent = `${state.measurePoints.length} ponto${state.measurePoints.length > 1 ? 's' : ''}`;

    if (totalDistMeters >= 1000) {
      distValEl.textContent = `${(totalDistMeters / 1000).toFixed(2)} km`;
    } else {
      distValEl.textContent = `${Math.round(totalDistMeters)} m`;
    }
  }

  function clearMeasurement() {
    state.measurePoints = [];
    state.measureMarkers.forEach(m => state.map.removeLayer(m));
    state.measureMarkers = [];
    if (state.measureLine) {
      state.map.removeLayer(state.measureLine);
      state.measureLine = null;
    }
    const distValEl = document.getElementById('measureDistanceVal');
    const ptCountEl = document.getElementById('measurePointCount');
    if (distValEl) distValEl.textContent = '0.00 km';
    if (ptCountEl) ptCountEl.textContent = '0 pts';
  }

  // ==========================================================================
  // SELETOR DE DATA E PLAYER TEMPORAL
  // ==========================================================================
  function initDateSelector() {
    const select = document.getElementById('dateSelect');
    select.innerHTML = '';

    state.data.records.forEach((rec, idx) => {
      const opt = document.createElement('option');
      opt.value = rec.date;
      opt.textContent = `${rec.date_br} (${rec.day_of_week.substring(0, 3)})`;
      if (idx === state.selectedDateIndex) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      const newDate = e.target.value;
      const idx = state.data.records.findIndex(r => r.date === newDate);
      if (idx !== -1) {
        state.selectedDateIndex = idx;
        state.selectedDate = newDate;
        updateAllViews();
      }
    });
  }

  function nextDate() {
    if (state.selectedDateIndex < state.data.records.length - 1) {
      state.selectedDateIndex++;
    } else {
      state.selectedDateIndex = 0; // Volta para o início em loop
    }
    syncDateUI();
    updateAllViews();
  }

  function prevDate() {
    if (state.selectedDateIndex > 0) {
      state.selectedDateIndex--;
    } else {
      state.selectedDateIndex = state.data.records.length - 1;
    }
    syncDateUI();
    updateAllViews();
  }

  function syncDateUI() {
    state.selectedDate = state.data.records[state.selectedDateIndex].date;
    const select = document.getElementById('dateSelect');
    if (select) select.value = state.selectedDate;
  }

  function toggleTimelinePlayer() {
    state.isPlaying = !state.isPlaying;
    const btn = document.getElementById('btnPlayTimeline');
    const icon = document.getElementById('playIcon');

    if (state.isPlaying) {
      btn.classList.add('playing');
      btn.title = 'Pausar reprodução temporal';
      icon.setAttribute('data-lucide', 'pause');
      state.playerInterval = setInterval(() => {
        nextDate();
      }, state.playbackSpeedMs);
    } else {
      btn.classList.remove('playing');
      btn.title = 'Reproduzir evolução temporal';
      icon.setAttribute('data-lucide', 'play');
      clearInterval(state.playerInterval);
      state.playerInterval = null;
    }
    if (window.lucide) lucide.createIcons();
  }

  // ==========================================================================
  // ATUALIZAÇÃO INTEGRADA DAS VIEWS (MAPA + KPIS + DASHBOARD + TABELA)
  // ==========================================================================
  function updateAllViews() {
    updateStationMarkers();
    updateHeatmap();
    updateKPIs();
    updateLegend();
    updateDashboardCharts();
    updateMonitoringTable();
    if (state.selectedStationId) {
      renderStationDrawer(state.selectedStationId);
    }
  }

  // ==========================================================================
  // MAPA DE CALOR (HEATMAP DE DISPERSÃO)
  // ==========================================================================
  function toggleHeatmap() {
    state.isHeatmapActive = !state.isHeatmapActive;
    const btn = document.getElementById('btnToggleHeatmap');
    
    if (state.isHeatmapActive) {
      btn?.classList.add('active');
      if (state.heatLayer && !state.map.hasLayer(state.heatLayer)) {
        state.heatLayer.addTo(state.map);
      }
    } else {
      btn?.classList.remove('active');
      if (state.heatLayer && state.map.hasLayer(state.heatLayer)) {
        state.map.removeLayer(state.heatLayer);
      }
    }
    updateHeatmap();
  }

  function updateHeatmap() {
    if (!state.heatLayer) return;

    if (!state.isHeatmapActive) {
      if (state.map.hasLayer(state.heatLayer)) {
        state.map.removeLayer(state.heatLayer);
      }
      return;
    }

    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    const limit = state.conama.getLimit(state.selectedParam, state.selectedStage) || 100;
    const heatPoints = [];

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      if (!st.lat || !st.lng) return;
      const val = currentRec.readings[stId]?.[state.selectedParam];
      if (val !== null && val !== undefined && !isNaN(val)) {
        // Normaliza a intensidade (peso) proporcional ao limite legal
        const intensity = Math.min(Math.max(val / limit, 0.2), 1.0);
        heatPoints.push([st.lat, st.lng, intensity]);
      }
    });

    state.heatLayer.setLatLngs(heatPoints);

    if (!state.map.hasLayer(state.heatLayer) && heatPoints.length > 0) {
      state.heatLayer.addTo(state.map);
    }
  }

  // ==========================================================================
  // CÁLCULO E ATUALIZAÇÃO DOS KPIS
  // ==========================================================================
  function updateKPIs() {
    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    let totalActiveStations = 0;
    let countGood = 0;
    let countWarning = 0;
    let countDanger = 0;
    let countNA = 0;
    let validValues = [];
    let maxVal = -1;
    let maxStation = '--';
    let minVal = 999999;

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      const val = currentRec.readings[stId]?.[state.selectedParam];
      const evaluation = state.conama.evaluateStatus(val, state.selectedParam, state.selectedStage);

      if (val !== null && val !== undefined && !isNaN(val)) {
        totalActiveStations++;
        validValues.push(val);

        if (evaluation.status === 'good') countGood++;
        else if (evaluation.status === 'warning') countWarning++;
        else if (evaluation.status === 'danger') countDanger++;

        if (val > maxVal) {
          maxVal = val;
          maxStation = stId;
        }
        if (val < minVal) {
          minVal = val;
        }
      } else {
        countNA++;
      }
    });

    const limit = state.conama.getLimit(state.selectedParam, state.selectedStage);
    const meanVal = validValues.length > 0 ? (validValues.reduce((a, b) => a + b, 0) / validValues.length).toFixed(1) : '--';
    const compliancePct = totalActiveStations > 0 ? (((countGood + countWarning) / totalActiveStations) * 100).toFixed(0) : 100;

    // Atualiza elementos do DOM
    document.getElementById('kpiStationsCount').innerHTML = `${totalActiveStations} <span class="kpi-unit">pontos</span>`;
    document.getElementById('kpiStationsSub').textContent = state.selectedParam === 'PTS' ? '11 estações monitoradas' : (state.selectedParam === 'MP10' ? '5 estações monitoradas' : 'Sem sensores ativos');
    
    document.getElementById('kpiComplianceVal').innerHTML = `${compliancePct}<span class="kpi-unit">%</span>`;
    document.getElementById('kpiComplianceBadge').textContent = `${compliancePct}%`;
    document.getElementById('kpiComplianceSub').textContent = countDanger === 0 ? '100% em conformidade' : `${countDanger} estação acima do limite`;

    document.getElementById('kpiGoodCount').innerHTML = `${countGood} <span class="kpi-unit">est.</span>`;
    document.getElementById('kpiWarningCount').innerHTML = `${countWarning} <span class="kpi-unit">est.</span>`;
    document.getElementById('kpiDangerCount').innerHTML = `${countDanger} <span class="kpi-unit">est.</span>`;

    document.getElementById('kpiMeanVal').innerHTML = `${meanVal} <span class="kpi-unit">µg/m³</span>`;
    document.getElementById('kpiMeanSub').textContent = limit ? `Limite: ${limit} µg/m³` : 'Sem limite';

    document.getElementById('kpiMaxVal').innerHTML = maxVal >= 0 ? `${maxVal.toFixed(1)} <span class="kpi-unit">µg/m³</span>` : `-- <span class="kpi-unit">µg/m³</span>`;
    document.getElementById('kpiMaxStation').textContent = maxVal >= 0 ? `Estação: ${maxStation}` : 'Estação: --';

    // Salva contagens para a legenda
    state.counts = { countGood, countWarning, countDanger, countNA };
  }

  function updateLegend() {
    const limit = state.conama.getLimit(state.selectedParam, state.selectedStage);
    const limitBadge = document.getElementById('legendLimitBadge');
    if (limitBadge) {
      limitBadge.textContent = limit ? `Lim: ${limit} µg/m³ (${state.selectedStage})` : 'Sem Limite';
    }

    if (state.counts) {
      document.getElementById('legendCountGood').textContent = state.counts.countGood;
      document.getElementById('legendCountWarning').textContent = state.counts.countWarning;
      document.getElementById('legendCountDanger').textContent = state.counts.countDanger;
      document.getElementById('legendCountNA').textContent = state.counts.countNA;
    }
  }

  // ==========================================================================
  // TABELA INTERATIVA DE MONITORAMENTO
  // ==========================================================================
  function updateMonitoringTable() {
    const tbody = document.getElementById('monitoringTableBody');
    if (!tbody) return;

    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    const searchTerm = (document.getElementById('tableSearchInput')?.value || '').toLowerCase().trim();

    tbody.innerHTML = '';

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      if (searchTerm && !stId.toLowerCase().includes(searchTerm) && !st.cluster.toLowerCase().includes(searchTerm)) {
        return;
      }

      const val = currentRec.readings[stId]?.[state.selectedParam];
      const evaluation = state.conama.evaluateStatus(val, state.selectedParam, state.selectedStage);

      const tr = document.createElement('tr');
      
      const valStr = (val !== null && val !== undefined && !isNaN(val)) ? `${val.toFixed(1)} µg/m³` : '--';
      const pctStr = evaluation.percentage !== null ? `${evaluation.percentage}%` : '--';

      tr.innerHTML = `
        <td style="font-weight:700;color:var(--eco-primary-dark);">${st.name}</td>
        <td style="color:var(--text-muted);font-size:0.72rem;">${st.cluster.includes('Norte') ? 'Norte (Operacional)' : 'Sul (Comunidade)'}</td>
        <td style="font-weight:700;">${valStr}</td>
        <td>${pctStr}</td>
        <td><span class="table-status-pill pill-${evaluation.status}">${evaluation.shortLabel || evaluation.label}</span></td>
        <td>
          <button class="btn-measure-act btn-open-station" data-station="${stId}" style="color:var(--eco-blue);background:var(--eco-blue-light);font-weight:700;">
            Ver
          </button>
        </td>
      `;

      tr.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-open-station')) {
          openStationDrawer(stId);
        }
      });

      const btn = tr.querySelector('.btn-open-station');
      if (btn) {
        btn.addEventListener('click', () => openStationDrawer(stId));
      }

      tbody.appendChild(tr);
    });
  }

  // ==========================================================================
  // GRÁFICOS DO DASHBOARD (CHART.JS)
  // ==========================================================================
  function updateDashboardCharts() {
    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    document.getElementById('chartDateBadge').textContent = currentRec.date_br;

    renderChartDateComparison();
    renderChartTemporalTrend();
    renderChartRatioMP10PTS();
  }

  /**
   * Gráfico 1: Comparativo por Estação na Data Selecionada
   */
  function renderChartDateComparison() {
    const ctx = document.getElementById('chartDateComparison')?.getContext('2d');
    if (!ctx) return;

    const currentRec = state.data.records[state.selectedDateIndex];
    const limit = state.conama.getLimit(state.selectedParam, state.selectedStage);

    const labels = [];
    const dataValues = [];
    const bgColors = [];
    const borderColors = [];

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      const val = currentRec.readings[stId]?.[state.selectedParam];
      const evaluation = state.conama.evaluateStatus(val, state.selectedParam, state.selectedStage);

      labels.push(stId);
      dataValues.push(val !== null && val !== undefined ? val : 0);
      bgColors.push(evaluation.color);
      borderColors.push(evaluation.borderColor);
    });

    if (state.chartDateComparison) {
      state.chartDateComparison.destroy();
    }

    state.chartDateComparison = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: `${state.selectedParam} (µg/m³)`,
            data: dataValues,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const stationId = labels[idx];
            openStationDrawer(stationId);
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (item) => {
                const val = item.raw;
                if (val === 0 && !currentRec.readings[labels[item.dataIndex]]?.[state.selectedParam]) {
                  return 'Não monitorado';
                }
                const pct = limit ? ((val / limit) * 100).toFixed(1) : '--';
                return `${state.selectedParam}: ${val} µg/m³ (${pct}% do limite)`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'µg/m³', font: { size: 10 } },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10, weight: 'bold' } }
          }
        }
      }
    });
  }

  /**
   * Gráfico 2: Evolução Temporal da Média (2025 - 2026)
   */
  function renderChartTemporalTrend() {
    const ctx = document.getElementById('chartTemporalTrend')?.getContext('2d');
    if (!ctx) return;

    const dates = [];
    const means = [];
    const pointColors = [];
    const pointRadii = [];

    state.data.records.forEach((rec, idx) => {
      dates.push(rec.date_br);
      const vals = [];
      Object.values(rec.readings).forEach(r => {
        const v = r[state.selectedParam];
        if (v !== null && v !== undefined && !isNaN(v)) {
          vals.push(v);
        }
      });
      const mean = vals.length > 0 ? (vals.reduce((a, b) => a + b, 0) / vals.length) : null;
      means.push(mean);

      if (idx === state.selectedDateIndex) {
        pointColors.push('#0ea5e9'); // Ponto ativo azul destaque
        pointRadii.push(6);
      } else {
        pointColors.push('rgba(16, 185, 129, 0.7)');
        pointRadii.push(2);
      }
    });

    if (state.chartTemporalTrend) {
      state.chartTemporalTrend.destroy();
    }

    state.chartTemporalTrend = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: `Média de ${state.selectedParam} (µg/m³)`,
            data: means,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            borderWidth: 2,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii,
            fill: true,
            tension: 0.25
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            state.selectedDateIndex = idx;
            syncDateUI();
            updateAllViews();
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => `${dates[items[0].dataIndex]} (${state.data.records[items[0].dataIndex].day_of_week})`,
              label: (item) => `Média: ${item.raw ? item.raw.toFixed(1) : '--'} µg/m³ (Clique para ver no mapa)`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Média (µg/m³)', font: { size: 10 } },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: {
              maxTicksLimit: 8,
              font: { size: 9 }
            }
          }
        }
      }
    });
  }

  /**
   * Gráfico 3: Relação MP10 / PTS (Cluster Sul)
   */
  function renderChartRatioMP10PTS() {
    const ctx = document.getElementById('chartRatioMP10PTS')?.getContext('2d');
    if (!ctx) return;

    const southStations = ['QAR 60', 'QAR 61', 'QAR 62', 'QAR 63', 'QAR 64'];
    const currentRec = state.data.records[state.selectedDateIndex];

    const ptsValues = [];
    const mp10Values = [];

    southStations.forEach(stId => {
      const r = currentRec.readings[stId] || {};
      ptsValues.push(r['PTS'] || 0);
      mp10Values.push(r['MP10'] || 0);
    });

    if (state.chartRatioMP10PTS) {
      state.chartRatioMP10PTS.destroy();
    }

    state.chartRatioMP10PTS = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: southStations,
        datasets: [
          {
            label: 'PTS (µg/m³)',
            data: ptsValues,
            backgroundColor: '#2f4463',
            borderRadius: 4
          },
          {
            label: 'MP₁₀ (µg/m³)',
            data: mp10Values,
            backgroundColor: '#0ea5e9',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 10, weight: 'bold' }, boxWidth: 12 }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 } }
          }
        }
      }
    });
  }

  // ==========================================================================
  // DRAWER LATERAL DE DETALHAMENTO POR ESTAÇÃO
  // ==========================================================================
  function openStationDrawer(stationId) {
    state.selectedStationId = stationId;
    const st = state.data.stations[stationId];
    if (!st) return;

    state.drawerParam = st.parameters.includes(state.selectedParam) ? state.selectedParam : (st.parameters[0] || 'PTS');

    renderStationDrawer(stationId);

    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('stationDrawer').classList.add('open');

    // Centraliza o mapa na estação selecionada
    if (st.lat && st.lng) {
      state.map.flyTo([st.lat, st.lng], 14, { duration: 0.8 });
    }
  }

  function closeStationDrawer() {
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('stationDrawer').classList.remove('open');
    state.selectedStationId = null;
  }

  function renderStationDrawer(stationId) {
    const st = state.data.stations[stationId];
    if (!st) return;

    const currentRec = state.data.records[state.selectedDateIndex];
    const val = currentRec.readings[stationId]?.[state.drawerParam];
    const evaluation = state.conama.evaluateStatus(val, state.drawerParam, state.selectedStage);
    const limit = state.conama.getLimit(state.drawerParam, state.selectedStage);

    // Cabeçalho do Drawer
    document.getElementById('drawerStationName').innerHTML = `
      <i data-lucide="radio" style="width:20px;height:20px;color:var(--eco-accent);"></i>
      Estação ${st.name}
    `;
    document.getElementById('drawerStationCluster').textContent = `${st.cluster} • Fuso 23S`;

    // Métricas na data
    document.getElementById('drawerValDate').innerHTML = val !== null && val !== undefined ? `${val.toFixed(1)} <span style="font-size:0.75rem;font-weight:500;">µg/m³</span>` : `-- <span style="font-size:0.75rem;font-weight:500;">µg/m³</span>`;
    document.getElementById('drawerDateSelected').textContent = `Campanha: ${currentRec.date_br}`;

    document.getElementById('drawerPctLimit').innerHTML = evaluation.percentage !== null ? `${evaluation.percentage}<span style="font-size:0.75rem;font-weight:500;">%</span>` : `--`;
    document.getElementById('drawerStatusBadge').innerHTML = `<span class="table-status-pill pill-${evaluation.status}">${evaluation.label}</span>`;

    // Metadados Cadastrais
    document.getElementById('drawerUTMN').textContent = st.utm_n ? st.utm_n.toLocaleString('pt-BR') : 'Pendente';
    document.getElementById('drawerUTME').textContent = st.utm_e ? st.utm_e.toLocaleString('pt-BR') : 'Pendente';
    document.getElementById('drawerLat').textContent = st.lat ? st.lat.toFixed(6) : 'Pendente';
    document.getElementById('drawerLng').textContent = st.lng ? st.lng.toFixed(6) : 'Pendente';

    // Estatísticas da série da estação
    const stSeries = state.data.station_series[stationId]?.series[state.drawerParam];
    if (stSeries && stSeries.stats) {
      document.getElementById('drawerHistMean').innerHTML = `${stSeries.stats.mean} <span style="font-size:0.75rem;font-weight:500;">µg/m³</span>`;
      document.getElementById('drawerHistCount').textContent = `${stSeries.stats.count} campanhas`;
      document.getElementById('drawerHistMax').innerHTML = `${stSeries.stats.max} <span style="font-size:0.75rem;font-weight:500;">µg/m³</span>`;
      document.getElementById('drawerHistMin').textContent = `${stSeries.stats.min}`;
    }

    // Configura botões de parâmetro do Drawer
    const drawerParamContainer = document.getElementById('drawerParamSelector');
    if (drawerParamContainer) {
      drawerParamContainer.innerHTML = '';
      st.parameters.forEach(p => {
        const btn = document.createElement('button');
        btn.className = `param-btn ${p === state.drawerParam ? 'active' : ''}`;
        btn.style.padding = '3px 10px';
        btn.style.fontSize = '0.72rem';
        btn.textContent = p === 'MP10' ? 'MP₁₀' : p;
        btn.addEventListener('click', () => {
          state.drawerParam = p;
          renderStationDrawer(stationId);
        });
        drawerParamContainer.appendChild(btn);
      });
    }

    // Renderiza o gráfico da série histórica da estação
    renderStationHistoryChart(stationId, state.drawerParam, limit);

    if (window.lucide) lucide.createIcons();
  }

  function renderStationHistoryChart(stationId, param, limit) {
    const ctx = document.getElementById('chartStationHistory')?.getContext('2d');
    if (!ctx) return;

    const stSeries = state.data.station_series[stationId]?.series[param];
    if (!stSeries) return;

    const dates = stSeries.items.map(i => i.date_br);
    const values = stSeries.items.map(i => i.value);
    const trends = stSeries.trend || [];

    // Linha constante do Limite Legal CONAMA 506/2024
    const limitLine = limit ? new Array(dates.length).fill(limit) : [];

    // Destaque do ponto da data selecionada
    const pointColors = [];
    const pointRadii = [];
    values.forEach((v, idx) => {
      if (idx === state.selectedDateIndex) {
        pointColors.push('#0ea5e9'); // Destaque azul
        pointRadii.push(7);
      } else if (limit && v > limit) {
        pointColors.push('#ef4444'); // Ultrapassagem vermelha
        pointRadii.push(4);
      } else {
        pointColors.push('#2f4463');
        pointRadii.push(2);
      }
    });

    if (state.chartStationHistory) {
      state.chartStationHistory.destroy();
    }

    state.chartStationHistory = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: `Medições ${param} (µg/m³)`,
            data: values,
            borderColor: '#2f4463',
            backgroundColor: 'rgba(47, 68, 99, 0.06)',
            borderWidth: 2,
            pointBackgroundColor: pointColors,
            pointRadius: pointRadii,
            fill: true,
            tension: 0.2
          },
          {
            label: `Limite CONAMA 506/2024 (${limit || '--'} µg/m³)`,
            data: limitLine,
            borderColor: '#ef4444',
            borderWidth: 2,
            borderDash: [6, 6],
            pointRadius: 0,
            fill: false
          },
          {
            label: 'Linha de Tendência Linear',
            data: trends,
            borderColor: '#10b981',
            borderWidth: 2,
            borderDash: [4, 4],
            pointRadius: 0,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (evt, elements) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            state.selectedDateIndex = idx;
            syncDateUI();
            updateAllViews();
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 10, weight: 'bold' }, boxWidth: 12 }
          },
          tooltip: {
            callbacks: {
              title: (items) => `${dates[items[0].dataIndex]} (${stSeries.items[items[0].dataIndex].month}/${stSeries.items[items[0].dataIndex].year})`,
              label: (item) => {
                if (item.datasetIndex === 0) {
                  const val = item.raw;
                  const pct = limit ? ((val / limit) * 100).toFixed(1) : '--';
                  return `${param}: ${val} µg/m³ (${pct}% do limite)`;
                } else if (item.datasetIndex === 1) {
                  return `Limite CONAMA: ${item.raw} µg/m³`;
                } else {
                  return `Tendência: ${item.raw} µg/m³`;
                }
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Concentração (µg/m³)', font: { size: 10 } },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: {
              maxTicksLimit: 10,
              font: { size: 9 }
            }
          }
        }
      }
    });
  }

  // ==========================================================================
  // EXPORTAÇÃO DE DADOS (CSV)
  // ==========================================================================
  function exportCSV() {
    const currentRec = state.data.records[state.selectedDateIndex];
    if (!currentRec) return;

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Data;Estacao;Cluster;UTM_Norte;UTM_Leste;Latitude;Longitude;Parametro;Concentracao_ug_m3;Limite_CONAMA_506_2024;Percentual_Limite;Status_Conformidade\r\n";

    Object.entries(state.data.stations).forEach(([stId, st]) => {
      const val = currentRec.readings[stId]?.[state.selectedParam];
      const evaluation = state.conama.evaluateStatus(val, state.selectedParam, state.selectedStage);
      const valStr = val !== null && val !== undefined ? val.toString().replace('.', ',') : '';
      const limitStr = evaluation.limit ? evaluation.limit.toString().replace('.', ',') : '';
      const pctStr = evaluation.percentage !== null ? evaluation.percentage.toString().replace('.', ',') : '';

      csvContent += `${currentRec.date_br};${st.name};${st.cluster};${st.utm_n || ''};${st.utm_e || ''};${st.lat || ''};${st.lng || ''};${state.selectedParam};${valStr};${limitStr};${pctStr};${evaluation.label}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Qualidade_do_Ar_VIGA_${state.selectedParam}_${currentRec.date}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================================================
  // EVENT LISTENERS E INTERATIVIDADE DA UI
  // ==========================================================================
  function initUIEventListeners() {
    // 1. Seletor de Parâmetro
    const paramButtons = document.querySelectorAll('#paramSelector .param-btn');
    paramButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        paramButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedParam = btn.getAttribute('data-param');

        if (state.selectedParam === 'MP2.5') {
          alert('Aviso: O parâmetro MP2,5 não possui sensores instalados na base de dados atual. O Geoportal está preparado para exibir este parâmetro quando novas campanhas forem cadastradas.');
        }

        updateAllViews();
      });
    });

    // 2. Navegação Temporal
    document.getElementById('btnPlayTimeline')?.addEventListener('click', toggleTimelinePlayer);
    document.getElementById('btnNextDate')?.addEventListener('click', nextDate);
    document.getElementById('btnPrevDate')?.addEventListener('click', prevDate);

    // 3. Seletor de Estágio CONAMA
    document.getElementById('conamaStageSelect')?.addEventListener('change', (e) => {
      state.selectedStage = e.target.value;
      state.conama.current_stage = state.selectedStage;
      updateAllViews();
    });

    // 4. Camadas do Mapa (Streets vs Satellite)
    document.getElementById('btnLayerStreets')?.addEventListener('click', () => {
      document.getElementById('btnLayerStreets').classList.add('active');
      document.getElementById('btnLayerSatellite').classList.remove('active');
      state.map.removeLayer(state.baseLayers.satellite);
      state.baseLayers.streets.addTo(state.map);
    });

    document.getElementById('btnLayerSatellite')?.addEventListener('click', () => {
      document.getElementById('btnLayerSatellite').classList.add('active');
      document.getElementById('btnLayerStreets').classList.remove('active');
      state.map.removeLayer(state.baseLayers.streets);
      state.baseLayers.satellite.addTo(state.map);
    });

    // Alternar Mapa de Calor (Heatmap)
    document.getElementById('btnToggleHeatmap')?.addEventListener('click', toggleHeatmap);

    // 5. Enquadramento e Foco de Clusters
    document.getElementById('btnFitAll')?.addEventListener('click', () => {
      const latLngs = Object.values(state.data.stations).map(s => [s.lat, s.lng]).filter(p => p[0] && p[1]);
      if (latLngs.length > 0) {
        state.map.fitBounds(L.latLngBounds(latLngs), { padding: [60, 60] });
      }
    });

    document.getElementById('btnFocusNorth')?.addEventListener('click', () => {
      const northPts = Object.values(state.data.stations).filter(s => s.cluster.includes('Norte')).map(s => [s.lat, s.lng]);
      if (northPts.length > 0) {
        state.map.fitBounds(L.latLngBounds(northPts), { padding: [50, 50] });
      }
    });

    document.getElementById('btnFocusSouth')?.addEventListener('click', () => {
      const southPts = Object.values(state.data.stations).filter(s => s.cluster.includes('Sul')).map(s => [s.lat, s.lng]);
      if (southPts.length > 0) {
        state.map.fitBounds(L.latLngBounds(southPts), { padding: [50, 50] });
      }
    });

    // 6. Ferramenta de Medição de Distância
    document.getElementById('btnMeasureDistance')?.addEventListener('click', toggleMeasurementTool);
    document.getElementById('btnClearMeasure')?.addEventListener('click', clearMeasurement);
    document.getElementById('btnCloseMeasure')?.addEventListener('click', toggleMeasurementTool);

    // 7. Abas do Dashboard
    const tabBtns = document.querySelectorAll('.dash-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        document.getElementById(tabId)?.classList.add('active');
      });
    });

    // 8. Busca na Tabela de Monitoramento
    document.getElementById('tableSearchInput')?.addEventListener('input', updateMonitoringTable);

    // 9. Drawer Lateral de Estação
    document.getElementById('btnDrawerClose')?.addEventListener('click', closeStationDrawer);
    document.getElementById('drawerOverlay')?.addEventListener('click', closeStationDrawer);

    // 10. Modal Informativo
    document.getElementById('btnOpenInfo')?.addEventListener('click', () => {
      document.getElementById('infoModal')?.classList.add('open');
    });
    document.getElementById('btnCloseInfoModal')?.addEventListener('click', () => {
      document.getElementById('infoModal')?.classList.remove('open');
    });
    document.getElementById('btnOkInfoModal')?.addEventListener('click', () => {
      document.getElementById('infoModal')?.classList.remove('open');
    });

    // 11. Exportar CSV
    document.getElementById('btnExportCSV')?.addEventListener('click', exportCSV);
  }

})();
