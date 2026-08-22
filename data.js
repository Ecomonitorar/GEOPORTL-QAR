/* Geoportal Qualidade do Ar - Base de Dados Estruturada */
window.AIR_QUALITY_DATA = {
  "metadata": {
    "project_name": "Monitoramento da Qualidade do Ar - Mina VIGA",
    "client": "VIGA",
    "executor": "ECO Tecnologia e Análise Ambiental",
    "methodology_pts": "ABNT NBR 9547 (Amostrador de Grande Volume - AGV / Hi-Vol 24h)",
    "methodology_mp10": "ABNT NBR 13412 (AGV com Separador Inercial 24h)",
    "standard_regulation": "Resolução CONAMA nº 506/2024",
    "generated_at": "2026-08-22T14:53:51.355466",
    "total_campaigns": 96,
    "start_date": "2025-01-04",
    "end_date": "2026-07-28",
    "sampling_frequency_days": 6
  },
  "stations": {
    "PPE": {
      "id": "PPE",
      "name": "PPE",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 609328.0,
      "utm_n": 7783545.0,
      "lat": -20.041857,
      "lng": -43.95462,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 47": {
      "id": "QAR 47",
      "name": "QAR 47",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 607596.0,
      "utm_n": 7776159.0,
      "lat": -20.108687,
      "lng": -43.970743,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 48": {
      "id": "QAR 48",
      "name": "QAR 48",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 609117.0,
      "utm_n": 7773453.0,
      "lat": -20.133051,
      "lng": -43.956033,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 49": {
      "id": "QAR 49",
      "name": "QAR 49",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 596610.0,
      "utm_n": 7777143.0,
      "lat": -20.100378,
      "lng": -44.075876,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 50": {
      "id": "QAR 50",
      "name": "QAR 50",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 593272.0,
      "utm_n": 7773285.0,
      "lat": -20.135401,
      "lng": -44.107605,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 52": {
      "id": "QAR 52",
      "name": "QAR 52",
      "cluster": "Cluster Norte (Área Operacional / Cava)",
      "utm_e": 609618.0,
      "utm_n": 7786477.0,
      "lat": -20.015349,
      "lng": -43.952023,
      "has_coords": true,
      "parameters": [
        "PTS"
      ]
    },
    "QAR 60": {
      "id": "QAR 60",
      "name": "QAR 60",
      "cluster": "Cluster Sul (Comunidades / Entorno)",
      "utm_e": 616725.0,
      "utm_n": 7733995.0,
      "lat": -20.489093,
      "lng": -43.880694,
      "has_coords": true,
      "parameters": [
        "PTS",
        "MP10"
      ]
    },
    "QAR 61": {
      "id": "QAR 61",
      "name": "QAR 61",
      "cluster": "Cluster Sul (Comunidades / Entorno)",
      "utm_e": 613559.0,
      "utm_n": 7731184.0,
      "lat": -20.514682,
      "lng": -43.91087,
      "has_coords": true,
      "parameters": [
        "PTS",
        "MP10"
      ]
    },
    "QAR 62": {
      "id": "QAR 62",
      "name": "QAR 62",
      "cluster": "Cluster Sul (Comunidades / Entorno)",
      "utm_e": 608178.0,
      "utm_n": 7732231.0,
      "lat": -20.505539,
      "lng": -43.962536,
      "has_coords": true,
      "parameters": [
        "PTS",
        "MP10"
      ]
    },
    "QAR 63": {
      "id": "QAR 63",
      "name": "QAR 63",
      "cluster": "Cluster Sul (Comunidades / Entorno)",
      "utm_e": 610528.0,
      "utm_n": 7728641.0,
      "lat": -20.537837,
      "lng": -43.939778,
      "has_coords": true,
      "parameters": [
        "PTS",
        "MP10"
      ]
    },
    "QAR 64": {
      "id": "QAR 64",
      "name": "QAR 64",
      "cluster": "Cluster Sul (Comunidades / Entorno)",
      "utm_e": 608870.0,
      "utm_n": 7726220.0,
      "lat": -20.559807,
      "lng": -43.955532,
      "has_coords": true,
      "parameters": [
        "PTS",
        "MP10"
      ]
    }
  },
  "available_parameters": [
    {
      "id": "PTS",
      "name": "Partículas Totais em Suspensão",
      "unit": "µg/m³",
      "method": "ABNT NBR 9547",
      "monitored": true
    },
    {
      "id": "MP10",
      "name": "Partículas Inaláveis (MP₁₀)",
      "unit": "µg/m³",
      "method": "ABNT NBR 13412",
      "monitored": true
    },
    {
      "id": "MP2.5",
      "name": "Partículas Respiráveis (MP₂,₅)",
      "unit": "µg/m³",
      "method": "ABNT NBR 16402 / Gravimétrico",
      "monitored": false
    }
  ],
  "monitored_parameters": [
    "PTS",
    "MP10"
  ],
  "dates": [
    "2025-01-04",
    "2025-01-10",
    "2025-01-16",
    "2025-01-22",
    "2025-01-28",
    "2025-02-03",
    "2025-02-09",
    "2025-02-15",
    "2025-02-21",
    "2025-02-27",
    "2025-03-05",
    "2025-03-11",
    "2025-03-17",
    "2025-03-23",
    "2025-03-29",
    "2025-04-04",
    "2025-04-10",
    "2025-04-16",
    "2025-04-22",
    "2025-04-28",
    "2025-05-04",
    "2025-05-10",
    "2025-05-16",
    "2025-05-22",
    "2025-05-28",
    "2025-06-03",
    "2025-06-09",
    "2025-06-15",
    "2025-06-21",
    "2025-06-27",
    "2025-07-03",
    "2025-07-09",
    "2025-07-15",
    "2025-07-21",
    "2025-07-27",
    "2025-08-02",
    "2025-08-08",
    "2025-08-14",
    "2025-08-20",
    "2025-08-26",
    "2025-09-01",
    "2025-09-07",
    "2025-09-13",
    "2025-09-19",
    "2025-09-25",
    "2025-10-01",
    "2025-10-07",
    "2025-10-13",
    "2025-10-19",
    "2025-10-25",
    "2025-10-31",
    "2025-11-06",
    "2025-11-12",
    "2025-11-18",
    "2025-11-24",
    "2025-11-30",
    "2025-12-06",
    "2025-12-12",
    "2025-12-18",
    "2025-12-24",
    "2025-12-30",
    "2026-01-05",
    "2026-01-11",
    "2026-01-17",
    "2026-01-23",
    "2026-01-29",
    "2026-02-04",
    "2026-02-10",
    "2026-02-16",
    "2026-02-22",
    "2026-02-28",
    "2026-03-06",
    "2026-03-12",
    "2026-03-18",
    "2026-03-24",
    "2026-03-30",
    "2026-04-05",
    "2026-04-11",
    "2026-04-17",
    "2026-04-23",
    "2026-04-29",
    "2026-05-05",
    "2026-05-11",
    "2026-05-17",
    "2026-05-23",
    "2026-05-29",
    "2026-06-04",
    "2026-06-10",
    "2026-06-16",
    "2026-06-22",
    "2026-06-28",
    "2026-07-04",
    "2026-07-10",
    "2026-07-16",
    "2026-07-22",
    "2026-07-28"
  ],
  "records": [
    {
      "date": "2025-01-04",
      "date_br": "04/01/2025",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 38.3
        },
        "QAR 47": {
          "PTS": 37.1
        },
        "QAR 48": {
          "PTS": 36.3
        },
        "QAR 49": {
          "PTS": 35.3
        },
        "QAR 50": {
          "PTS": 32.1
        },
        "QAR 52": {
          "PTS": 28.6
        },
        "QAR 60": {
          "PTS": 30.3,
          "MP10": 6.3
        },
        "QAR 61": {
          "PTS": 24.6,
          "MP10": 6.7
        },
        "QAR 62": {
          "PTS": 29.4,
          "MP10": 9.1
        },
        "QAR 63": {
          "PTS": 38.3,
          "MP10": 9.4
        },
        "QAR 64": {
          "PTS": 30.2,
          "MP10": 7.9
        }
      }
    },
    {
      "date": "2025-01-10",
      "date_br": "10/01/2025",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 39.6
        },
        "QAR 47": {
          "PTS": 36.5
        },
        "QAR 48": {
          "PTS": 44.5
        },
        "QAR 49": {
          "PTS": 42.3
        },
        "QAR 50": {
          "PTS": 40.9
        },
        "QAR 52": {
          "PTS": 47.6
        },
        "QAR 60": {
          "PTS": 49.3,
          "MP10": 9.3
        },
        "QAR 61": {
          "PTS": 44.1,
          "MP10": 8.7
        },
        "QAR 62": {
          "PTS": 45.1,
          "MP10": 10.2
        },
        "QAR 63": {
          "PTS": 42.9,
          "MP10": 8.3
        },
        "QAR 64": {
          "PTS": 48.9,
          "MP10": 7.6
        }
      }
    },
    {
      "date": "2025-01-16",
      "date_br": "16/01/2025",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 33.3
        },
        "QAR 47": {
          "PTS": 32.6
        },
        "QAR 48": {
          "PTS": 30.3
        },
        "QAR 49": {
          "PTS": 29.9
        },
        "QAR 50": {
          "PTS": 31.6
        },
        "QAR 52": {
          "PTS": 33.6
        },
        "QAR 60": {
          "PTS": 30.9,
          "MP10": 7.9
        },
        "QAR 61": {
          "PTS": 29.6,
          "MP10": 7.2
        },
        "QAR 62": {
          "PTS": 34.6,
          "MP10": 8.1
        },
        "QAR 63": {
          "PTS": 37.1,
          "MP10": 9.5
        },
        "QAR 64": {
          "PTS": 28.3,
          "MP10": 6.9
        }
      }
    },
    {
      "date": "2025-01-22",
      "date_br": "22/01/2025",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 28.3
        },
        "QAR 47": {
          "PTS": 26.5
        },
        "QAR 48": {
          "PTS": 31.2
        },
        "QAR 49": {
          "PTS": 27.6
        },
        "QAR 50": {
          "PTS": 30.3
        },
        "QAR 52": {
          "PTS": 31.6
        },
        "QAR 60": {
          "PTS": 29.7,
          "MP10": 6.3
        },
        "QAR 61": {
          "PTS": 32.1,
          "MP10": 8.4
        },
        "QAR 62": {
          "PTS": 31.7,
          "MP10": 6.9
        },
        "QAR 63": {
          "PTS": 27.1,
          "MP10": 8.4
        },
        "QAR 64": {
          "PTS": 31.7,
          "MP10": 5.9
        }
      }
    },
    {
      "date": "2025-01-28",
      "date_br": "28/01/2025",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 31.2
        },
        "QAR 47": {
          "PTS": 30.9
        },
        "QAR 48": {
          "PTS": 33.6
        },
        "QAR 49": {
          "PTS": 32.6
        },
        "QAR 50": {
          "PTS": 34.6
        },
        "QAR 52": {
          "PTS": 29.6
        },
        "QAR 60": {
          "PTS": 28.4,
          "MP10": 8.3
        },
        "QAR 61": {
          "PTS": 28.3,
          "MP10": 7.1
        },
        "QAR 62": {
          "PTS": 30.9,
          "MP10": 11.1
        },
        "QAR 63": {
          "PTS": 30.4,
          "MP10": 8.6
        },
        "QAR 64": {
          "PTS": 30.7,
          "MP10": 7.6
        }
      }
    },
    {
      "date": "2025-02-03",
      "date_br": "03/02/2025",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 39.6
        },
        "QAR 47": {
          "PTS": 42.3
        },
        "QAR 48": {
          "PTS": 47.6
        },
        "QAR 49": {
          "PTS": 38.2
        },
        "QAR 50": {
          "PTS": 41.5
        },
        "QAR 52": {
          "PTS": 41.2
        },
        "QAR 60": {
          "PTS": 39.6,
          "MP10": 11.2
        },
        "QAR 61": {
          "PTS": 38.2,
          "MP10": 10.7
        },
        "QAR 62": {
          "PTS": 44.2,
          "MP10": 12.3
        },
        "QAR 63": {
          "PTS": 42.3,
          "MP10": 13.3
        },
        "QAR 64": {
          "PTS": 42.3,
          "MP10": 11.9
        }
      }
    },
    {
      "date": "2025-02-09",
      "date_br": "09/02/2025",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 32.3
        },
        "QAR 47": {
          "PTS": 37.2
        },
        "QAR 48": {
          "PTS": 35.6
        },
        "QAR 49": {
          "PTS": 34.1
        },
        "QAR 50": {
          "PTS": 37.6
        },
        "QAR 52": {
          "PTS": 37.4
        },
        "QAR 60": {
          "PTS": 35.9,
          "MP10": 6.1
        },
        "QAR 61": {
          "PTS": 34.5,
          "MP10": 7.2
        },
        "QAR 62": {
          "PTS": 37.1,
          "MP10": 8.2
        },
        "QAR 63": {
          "PTS": 36.6,
          "MP10": 9.6
        },
        "QAR 64": {
          "PTS": 35.9,
          "MP10": 8.9
        }
      }
    },
    {
      "date": "2025-02-15",
      "date_br": "15/02/2025",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 42.3
        },
        "QAR 47": {
          "PTS": 44.6
        },
        "QAR 48": {
          "PTS": 45.2
        },
        "QAR 49": {
          "PTS": 48.6
        },
        "QAR 50": {
          "PTS": 54.2
        },
        "QAR 52": {
          "PTS": 57.3
        },
        "QAR 60": {
          "PTS": 49.6,
          "MP10": 10.9
        },
        "QAR 61": {
          "PTS": 45.6,
          "MP10": 9.3
        },
        "QAR 62": {
          "PTS": 52.3,
          "MP10": 9.9
        },
        "QAR 63": {
          "PTS": 48.6,
          "MP10": 10.2
        },
        "QAR 64": {
          "PTS": 47.5,
          "MP10": 10.5
        }
      }
    },
    {
      "date": "2025-02-21",
      "date_br": "21/02/2025",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 48.9
        },
        "QAR 47": {
          "PTS": 51.9
        },
        "QAR 48": {
          "PTS": 53.6
        },
        "QAR 49": {
          "PTS": 52.6
        },
        "QAR 50": {
          "PTS": 58.6
        },
        "QAR 52": {
          "PTS": 62.5
        },
        "QAR 60": {
          "PTS": 58.3,
          "MP10": 12.6
        },
        "QAR 61": {
          "PTS": 52.9,
          "MP10": 12.1
        },
        "QAR 62": {
          "PTS": 54.3,
          "MP10": 10.4
        },
        "QAR 63": {
          "PTS": 52.6,
          "MP10": 11.6
        },
        "QAR 64": {
          "PTS": 52.3,
          "MP10": 11.6
        }
      }
    },
    {
      "date": "2025-02-27",
      "date_br": "27/02/2025",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 53.2
        },
        "QAR 47": {
          "PTS": 58.6
        },
        "QAR 48": {
          "PTS": 60.3
        },
        "QAR 49": {
          "PTS": 63.8
        },
        "QAR 50": {
          "PTS": 62.8
        },
        "QAR 52": {
          "PTS": 64.3
        },
        "QAR 60": {
          "PTS": 62.9,
          "MP10": 13.1
        },
        "QAR 61": {
          "PTS": 60.9,
          "MP10": 11.3
        },
        "QAR 62": {
          "PTS": 60.3,
          "MP10": 11.5
        },
        "QAR 63": {
          "PTS": 59.3,
          "MP10": 12.2
        },
        "QAR 64": {
          "PTS": 59.3,
          "MP10": 12.9
        }
      }
    },
    {
      "date": "2025-03-05",
      "date_br": "05/03/2025",
      "month": "Março",
      "month_num": 3,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 55.6
        },
        "QAR 47": {
          "PTS": 65.3
        },
        "QAR 48": {
          "PTS": 68.6
        },
        "QAR 49": {
          "PTS": 66.3
        },
        "QAR 50": {
          "PTS": 69.3
        },
        "QAR 52": {
          "PTS": 72.3
        },
        "QAR 60": {
          "PTS": 68.3,
          "MP10": 14.5
        },
        "QAR 61": {
          "PTS": 75.6,
          "MP10": 15.6
        },
        "QAR 62": {
          "PTS": 74.1,
          "MP10": 15.6
        },
        "QAR 63": {
          "PTS": 70.9,
          "MP10": 14.6
        },
        "QAR 64": {
          "PTS": 69.3,
          "MP10": 13.6
        }
      }
    },
    {
      "date": "2025-03-11",
      "date_br": "11/03/2025",
      "month": "Março",
      "month_num": 3,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 59.6
        },
        "QAR 47": {
          "PTS": 68.3
        },
        "QAR 48": {
          "PTS": 76.5
        },
        "QAR 49": {
          "PTS": 80.3
        },
        "QAR 50": {
          "PTS": 68.3
        },
        "QAR 52": {
          "PTS": 74.6
        },
        "QAR 60": {
          "PTS": 65.3,
          "MP10": 15.6
        },
        "QAR 61": {
          "PTS": 76.6,
          "MP10": 14.5
        },
        "QAR 62": {
          "PTS": 75.6,
          "MP10": 16.9
        },
        "QAR 63": {
          "PTS": 72.3,
          "MP10": 15.3
        },
        "QAR 64": {
          "PTS": 68.6,
          "MP10": 14.9
        }
      }
    },
    {
      "date": "2025-03-17",
      "date_br": "17/03/2025",
      "month": "Março",
      "month_num": 3,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 60.3
        },
        "QAR 47": {
          "PTS": 70.5
        },
        "QAR 48": {
          "PTS": 80.2
        },
        "QAR 49": {
          "PTS": 78.3
        },
        "QAR 50": {
          "PTS": 75.2
        },
        "QAR 52": {
          "PTS": 75.6
        },
        "QAR 60": {
          "PTS": 72.3,
          "MP10": 16.2
        },
        "QAR 61": {
          "PTS": 80.3,
          "MP10": 16.6
        },
        "QAR 62": {
          "PTS": 80.3,
          "MP10": 18.5
        },
        "QAR 63": {
          "PTS": 77.6,
          "MP10": 16.5
        },
        "QAR 64": {
          "PTS": 70.3,
          "MP10": 15.6
        }
      }
    },
    {
      "date": "2025-03-23",
      "date_br": "23/03/2025",
      "month": "Março",
      "month_num": 3,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 62.6
        },
        "QAR 47": {
          "PTS": 75.6
        },
        "QAR 48": {
          "PTS": 82.3
        },
        "QAR 49": {
          "PTS": 72.3
        },
        "QAR 50": {
          "PTS": 74.6
        },
        "QAR 52": {
          "PTS": 74.6
        },
        "QAR 60": {
          "PTS": 77.3,
          "MP10": 17.3
        },
        "QAR 61": {
          "PTS": 85.6,
          "MP10": 16.8
        },
        "QAR 62": {
          "PTS": 86.3,
          "MP10": 17.6
        },
        "QAR 63": {
          "PTS": 79.9,
          "MP10": 15.5
        },
        "QAR 64": {
          "PTS": 74.3,
          "MP10": 18.6
        }
      }
    },
    {
      "date": "2025-03-29",
      "date_br": "29/03/2025",
      "month": "Março",
      "month_num": 3,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 65.3
        },
        "QAR 47": {
          "PTS": 74.3
        },
        "QAR 48": {
          "PTS": 84.6
        },
        "QAR 49": {
          "PTS": 76.3
        },
        "QAR 50": {
          "PTS": 77.2
        },
        "QAR 52": {
          "PTS": 76.2
        },
        "QAR 60": {
          "PTS": 76.3,
          "MP10": 17.5
        },
        "QAR 61": {
          "PTS": 84.6,
          "MP10": 15.7
        },
        "QAR 62": {
          "PTS": 87.6,
          "MP10": 16.6
        },
        "QAR 63": {
          "PTS": 80.6,
          "MP10": 14.3
        },
        "QAR 64": {
          "PTS": 77.9,
          "MP10": 17.3
        }
      }
    },
    {
      "date": "2025-04-04",
      "date_br": "04/04/2025",
      "month": "Abril",
      "month_num": 4,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 70.5
        },
        "QAR 47": {
          "PTS": 83.2
        },
        "QAR 48": {
          "PTS": 108.6
        },
        "QAR 49": {
          "PTS": 88.3
        },
        "QAR 50": {
          "PTS": 86.3
        },
        "QAR 52": {
          "PTS": 81.2
        },
        "QAR 60": {
          "PTS": 84.3,
          "MP10": 16.5
        },
        "QAR 61": {
          "PTS": 84.2,
          "MP10": 16.6
        },
        "QAR 62": {
          "PTS": 98.6,
          "MP10": 15.6
        },
        "QAR 63": {
          "PTS": 87.3,
          "MP10": 16.3
        },
        "QAR 64": {
          "PTS": 84.4,
          "MP10": 15.3
        }
      }
    },
    {
      "date": "2025-04-10",
      "date_br": "10/04/2025",
      "month": "Abril",
      "month_num": 4,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 74.5
        },
        "QAR 47": {
          "PTS": 92.3
        },
        "QAR 48": {
          "PTS": 112.3
        },
        "QAR 49": {
          "PTS": 96.3
        },
        "QAR 50": {
          "PTS": 85.6
        },
        "QAR 52": {
          "PTS": 82.3
        },
        "QAR 60": {
          "PTS": 86.6,
          "MP10": 18.3
        },
        "QAR 61": {
          "PTS": 96.3,
          "MP10": 15.5
        },
        "QAR 62": {
          "PTS": 95.3,
          "MP10": 15.4
        },
        "QAR 63": {
          "PTS": 92.3,
          "MP10": 15.8
        },
        "QAR 64": {
          "PTS": 91.8,
          "MP10": 16.6
        }
      }
    },
    {
      "date": "2025-04-16",
      "date_br": "16/04/2025",
      "month": "Abril",
      "month_num": 4,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 80.3
        },
        "QAR 47": {
          "PTS": 102.6
        },
        "QAR 48": {
          "PTS": 102.2
        },
        "QAR 49": {
          "PTS": 91.2
        },
        "QAR 50": {
          "PTS": 84.6
        },
        "QAR 52": {
          "PTS": 86.6
        },
        "QAR 60": {
          "PTS": 85.9,
          "MP10": 19.2
        },
        "QAR 61": {
          "PTS": 105.6,
          "MP10": 18.6
        },
        "QAR 62": {
          "PTS": 105.6,
          "MP10": 14.5
        },
        "QAR 63": {
          "PTS": 97.7,
          "MP10": 16.5
        },
        "QAR 64": {
          "PTS": 99.2,
          "MP10": 18.1
        }
      }
    },
    {
      "date": "2025-04-22",
      "date_br": "22/04/2025",
      "month": "Abril",
      "month_num": 4,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 89.6
        },
        "QAR 47": {
          "PTS": 95.3
        },
        "QAR 48": {
          "PTS": 98.6
        },
        "QAR 49": {
          "PTS": 97.6
        },
        "QAR 50": {
          "PTS": 93.2
        },
        "QAR 52": {
          "PTS": 85.6
        },
        "QAR 60": {
          "PTS": 98.3,
          "MP10": 17.2
        },
        "QAR 61": {
          "PTS": 108.6,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 108.6,
          "MP10": 16.6
        },
        "QAR 63": {
          "PTS": 103.1,
          "MP10": 15.1
        },
        "QAR 64": {
          "PTS": 108.3,
          "MP10": 16.5
        }
      }
    },
    {
      "date": "2025-04-28",
      "date_br": "28/04/2025",
      "month": "Abril",
      "month_num": 4,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 84.2
        },
        "QAR 47": {
          "PTS": 97.3
        },
        "QAR 48": {
          "PTS": 94.5
        },
        "QAR 49": {
          "PTS": 102.3
        },
        "QAR 50": {
          "PTS": 94.5
        },
        "QAR 52": {
          "PTS": 89.3
        },
        "QAR 60": {
          "PTS": 105.3,
          "MP10": 20.1
        },
        "QAR 61": {
          "PTS": 112.2,
          "MP10": 18.2
        },
        "QAR 62": {
          "PTS": 107.0,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 108.6,
          "MP10": 14.9
        },
        "QAR 64": {
          "PTS": 112.2,
          "MP10": 19.1
        }
      }
    },
    {
      "date": "2025-05-04",
      "date_br": "04/05/2025",
      "month": "Maio",
      "month_num": 5,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 96.6
        },
        "QAR 47": {
          "PTS": 109.3
        },
        "QAR 48": {
          "PTS": 102.3
        },
        "QAR 49": {
          "PTS": 116.9
        },
        "QAR 50": {
          "PTS": 92.3
        },
        "QAR 52": {
          "PTS": 94.6
        },
        "QAR 60": {
          "PTS": 98.3,
          "MP10": 18.6
        },
        "QAR 61": {
          "PTS": 119.6,
          "MP10": 16.6
        },
        "QAR 62": {
          "PTS": 97.3,
          "MP10": 17.6
        },
        "QAR 63": {
          "PTS": 101.8,
          "MP10": 16.3
        },
        "QAR 64": {
          "PTS": 115.6,
          "MP10": 16.9
        }
      }
    },
    {
      "date": "2025-05-10",
      "date_br": "10/05/2025",
      "month": "Maio",
      "month_num": 5,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 106.3
        },
        "QAR 47": {
          "PTS": 116.8
        },
        "QAR 48": {
          "PTS": 118.5
        },
        "QAR 49": {
          "PTS": 118.6
        },
        "QAR 50": {
          "PTS": 98.6
        },
        "QAR 52": {
          "PTS": 105.7
        },
        "QAR 60": {
          "PTS": 108.6,
          "MP10": 19.6
        },
        "QAR 61": {
          "PTS": 125.6,
          "MP10": 18.9
        },
        "QAR 62": {
          "PTS": 95.6,
          "MP10": 19.3
        },
        "QAR 63": {
          "PTS": 105.4,
          "MP10": 15.9
        },
        "QAR 64": {
          "PTS": 121.6,
          "MP10": 19.6
        }
      }
    },
    {
      "date": "2025-05-16",
      "date_br": "16/05/2025",
      "month": "Maio",
      "month_num": 5,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 112.5
        },
        "QAR 47": {
          "PTS": 121.2
        },
        "QAR 48": {
          "PTS": 115.6
        },
        "QAR 49": {
          "PTS": 121.2
        },
        "QAR 50": {
          "PTS": 106.6
        },
        "QAR 52": {
          "PTS": 109.6
        },
        "QAR 60": {
          "PTS": 114.5,
          "MP10": 21.3
        },
        "QAR 61": {
          "PTS": 131.3,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 102.6,
          "MP10": 18.5
        },
        "QAR 63": {
          "PTS": 116.3,
          "MP10": 18.6
        },
        "QAR 64": {
          "PTS": 116.3,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2025-05-22",
      "date_br": "22/05/2025",
      "month": "Maio",
      "month_num": 5,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 95.6
        },
        "QAR 47": {
          "PTS": 115.2
        },
        "QAR 48": {
          "PTS": 110.2
        },
        "QAR 49": {
          "PTS": 125.6
        },
        "QAR 50": {
          "PTS": 110.2
        },
        "QAR 52": {
          "PTS": 101.1
        },
        "QAR 60": {
          "PTS": 116.6,
          "MP10": 22.2
        },
        "QAR 61": {
          "PTS": 121.2,
          "MP10": 20.2
        },
        "QAR 62": {
          "PTS": 115.6,
          "MP10": 19.3
        },
        "QAR 63": {
          "PTS": 117.2,
          "MP10": 19.3
        },
        "QAR 64": {
          "PTS": 118.6,
          "MP10": 22.4
        }
      }
    },
    {
      "date": "2025-05-28",
      "date_br": "28/05/2025",
      "month": "Maio",
      "month_num": 5,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 114.5
        },
        "QAR 47": {
          "PTS": 119.6
        },
        "QAR 48": {
          "PTS": 113.3
        },
        "QAR 49": {
          "PTS": 117.0
        },
        "QAR 50": {
          "PTS": 108.9
        },
        "QAR 52": {
          "PTS": 99.3
        },
        "QAR 60": {
          "PTS": 97.3,
          "MP10": 17.3
        },
        "QAR 61": {
          "PTS": 118.3,
          "MP10": 18.6
        },
        "QAR 62": {
          "PTS": 112.1,
          "MP10": 18.4
        },
        "QAR 63": {
          "PTS": 115.3,
          "MP10": 18.3
        },
        "QAR 64": {
          "PTS": 112.2,
          "MP10": 19.3
        }
      }
    },
    {
      "date": "2025-06-03",
      "date_br": "03/06/2025",
      "month": "Junho",
      "month_num": 6,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 127.5
        },
        "QAR 47": {
          "PTS": 124.2
        },
        "QAR 48": {
          "PTS": 125.6
        },
        "QAR 49": {
          "PTS": 124.2
        },
        "QAR 50": {
          "PTS": 119.6
        },
        "QAR 52": {
          "PTS": 119.6
        },
        "QAR 60": {
          "PTS": 109.6,
          "MP10": 19.6
        },
        "QAR 61": {
          "PTS": 128.9,
          "MP10": 19.6
        },
        "QAR 62": {
          "PTS": 119.6,
          "MP10": 19.6
        },
        "QAR 63": {
          "PTS": 127.6,
          "MP10": 18.9
        },
        "QAR 64": {
          "PTS": 119.3,
          "MP10": 20.3
        }
      }
    },
    {
      "date": "2025-06-09",
      "date_br": "09/06/2025",
      "month": "Junho",
      "month_num": 6,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 132.5
        },
        "QAR 47": {
          "PTS": 132.5
        },
        "QAR 48": {
          "PTS": 134.2
        },
        "QAR 49": {
          "PTS": 136.6
        },
        "QAR 50": {
          "PTS": 131.2
        },
        "QAR 52": {
          "PTS": 125.2
        },
        "QAR 60": {
          "PTS": 119.6,
          "MP10": 21.3
        },
        "QAR 61": {
          "PTS": 135.6,
          "MP10": 23.3
        },
        "QAR 62": {
          "PTS": 115.3,
          "MP10": 20.2
        },
        "QAR 63": {
          "PTS": 131.2,
          "MP10": 20.3
        },
        "QAR 64": {
          "PTS": 124.4,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2025-06-15",
      "date_br": "15/06/2025",
      "month": "Junho",
      "month_num": 6,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 138.6
        },
        "QAR 47": {
          "PTS": 131.2
        },
        "QAR 48": {
          "PTS": 129.6
        },
        "QAR 49": {
          "PTS": 131.2
        },
        "QAR 50": {
          "PTS": 135.3
        },
        "QAR 52": {
          "PTS": 123.3
        },
        "QAR 60": {
          "PTS": 136.6,
          "MP10": 23.2
        },
        "QAR 61": {
          "PTS": 138.6,
          "MP10": 24.2
        },
        "QAR 62": {
          "PTS": 128.6,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 135.6,
          "MP10": 21.3
        },
        "QAR 64": {
          "PTS": 127.9,
          "MP10": 22.6
        }
      }
    },
    {
      "date": "2025-06-21",
      "date_br": "21/06/2025",
      "month": "Junho",
      "month_num": 6,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 125.5
        },
        "QAR 47": {
          "PTS": 135.6
        },
        "QAR 48": {
          "PTS": 145.5
        },
        "QAR 49": {
          "PTS": 135.6
        },
        "QAR 50": {
          "PTS": 132.3
        },
        "QAR 52": {
          "PTS": 129.3
        },
        "QAR 60": {
          "PTS": 142.2,
          "MP10": 21.5
        },
        "QAR 61": {
          "PTS": 141.2,
          "MP10": 21.5
        },
        "QAR 62": {
          "PTS": 121.5,
          "MP10": 22.3
        },
        "QAR 63": {
          "PTS": 134.3,
          "MP10": 22.6
        },
        "QAR 64": {
          "PTS": 138.3,
          "MP10": 23.2
        }
      }
    },
    {
      "date": "2025-06-27",
      "date_br": "27/06/2025",
      "month": "Junho",
      "month_num": 6,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 142.5
        },
        "QAR 47": {
          "PTS": 142.3
        },
        "QAR 48": {
          "PTS": 135.8
        },
        "QAR 49": {
          "PTS": 141.5
        },
        "QAR 50": {
          "PTS": 142.2
        },
        "QAR 52": {
          "PTS": 135.2
        },
        "QAR 60": {
          "PTS": 138.3,
          "MP10": 20.8
        },
        "QAR 61": {
          "PTS": 145.6,
          "MP10": 22.2
        },
        "QAR 62": {
          "PTS": 129.6,
          "MP10": 21.6
        },
        "QAR 63": {
          "PTS": 133.3,
          "MP10": 24.3
        },
        "QAR 64": {
          "PTS": 134.2,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2025-07-03",
      "date_br": "03/07/2025",
      "month": "Julho",
      "month_num": 7,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 95.6
        },
        "QAR 47": {
          "PTS": 90.7
        },
        "QAR 48": {
          "PTS": 87.9
        },
        "QAR 49": {
          "PTS": 101.2
        },
        "QAR 50": {
          "PTS": 95.6
        },
        "QAR 52": {
          "PTS": 98.8
        },
        "QAR 60": {
          "PTS": 93.9,
          "MP10": 15.1
        },
        "QAR 61": {
          "PTS": 93.3,
          "MP10": 16.2
        },
        "QAR 62": {
          "PTS": 91.6,
          "MP10": 14.5
        },
        "QAR 63": {
          "PTS": 90.0,
          "MP10": 14.9
        },
        "QAR 64": {
          "PTS": 91.8,
          "MP10": 15.6
        }
      }
    },
    {
      "date": "2025-07-09",
      "date_br": "09/07/2025",
      "month": "Julho",
      "month_num": 7,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 101.7
        },
        "QAR 47": {
          "PTS": 100.9
        },
        "QAR 48": {
          "PTS": 97.5
        },
        "QAR 49": {
          "PTS": 112.8
        },
        "QAR 50": {
          "PTS": 111.0
        },
        "QAR 52": {
          "PTS": 111.5
        },
        "QAR 60": {
          "PTS": 101.9,
          "MP10": 18.6
        },
        "QAR 61": {
          "PTS": 109.4,
          "MP10": 18.6
        },
        "QAR 62": {
          "PTS": 101.9,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 117.8,
          "MP10": 18.8
        },
        "QAR 64": {
          "PTS": 104.7,
          "MP10": 18.8
        }
      }
    },
    {
      "date": "2025-07-15",
      "date_br": "15/07/2025",
      "month": "Julho",
      "month_num": 7,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 111.0
        },
        "QAR 47": {
          "PTS": 106.3
        },
        "QAR 48": {
          "PTS": 104.0
        },
        "QAR 49": {
          "PTS": 124.8
        },
        "QAR 50": {
          "PTS": 117.1
        },
        "QAR 52": {
          "PTS": 117.8
        },
        "QAR 60": {
          "PTS": 111.0,
          "MP10": 19.3
        },
        "QAR 61": {
          "PTS": 112.9,
          "MP10": 20.0
        },
        "QAR 62": {
          "PTS": 94.9,
          "MP10": 19.5
        },
        "QAR 63": {
          "PTS": 122.6,
          "MP10": 20.7
        },
        "QAR 64": {
          "PTS": 111.5,
          "MP10": 20.2
        }
      }
    },
    {
      "date": "2025-07-21",
      "date_br": "21/07/2025",
      "month": "Julho",
      "month_num": 7,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 92.3
        },
        "QAR 47": {
          "PTS": 88.3
        },
        "QAR 48": {
          "PTS": 92.3
        },
        "QAR 49": {
          "PTS": 89.3
        },
        "QAR 50": {
          "PTS": 92.3
        },
        "QAR 52": {
          "PTS": 102.0
        },
        "QAR 60": {
          "PTS": 94.3,
          "MP10": 12.3
        },
        "QAR 61": {
          "PTS": 86.3,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 83.3,
          "MP10": 21.8
        },
        "QAR 63": {
          "PTS": 94.3,
          "MP10": 21.1
        },
        "QAR 64": {
          "PTS": 97.3,
          "MP10": 22.1
        }
      }
    },
    {
      "date": "2025-07-27",
      "date_br": "27/07/2025",
      "month": "Julho",
      "month_num": 7,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 89.3
        },
        "QAR 47": {
          "PTS": 74.6
        },
        "QAR 48": {
          "PTS": 84.3
        },
        "QAR 49": {
          "PTS": 94.2
        },
        "QAR 50": {
          "PTS": 96.3
        },
        "QAR 52": {
          "PTS": 90.3
        },
        "QAR 60": {
          "PTS": 91.2,
          "MP10": 22.8
        },
        "QAR 61": {
          "PTS": 94.6,
          "MP10": 20.5
        },
        "QAR 62": {
          "PTS": 86.6,
          "MP10": 26.8
        },
        "QAR 63": {
          "PTS": 77.9,
          "MP10": 14.6
        },
        "QAR 64": {
          "PTS": 69.3,
          "MP10": 14.6
        }
      }
    },
    {
      "date": "2025-08-02",
      "date_br": "02/08/2025",
      "month": "Agosto",
      "month_num": 8,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 68.3
        },
        "QAR 47": {
          "PTS": 75.3
        },
        "QAR 48": {
          "PTS": 83.3
        },
        "QAR 49": {
          "PTS": 69.3
        },
        "QAR 50": {
          "PTS": 98.3
        },
        "QAR 52": {
          "PTS": 93.3
        },
        "QAR 60": {
          "PTS": 82.3,
          "MP10": 19.3
        },
        "QAR 61": {
          "PTS": 91.2,
          "MP10": 12.3
        },
        "QAR 62": {
          "PTS": 92.3,
          "MP10": 15.3
        },
        "QAR 63": {
          "PTS": 90.3,
          "MP10": 15.3
        },
        "QAR 64": {
          "PTS": 83.3,
          "MP10": 14.5
        }
      }
    },
    {
      "date": "2025-08-08",
      "date_br": "08/08/2025",
      "month": "Agosto",
      "month_num": 8,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 92.3
        },
        "QAR 47": {
          "PTS": 68.3
        },
        "QAR 48": {
          "PTS": 52.3
        },
        "QAR 49": {
          "PTS": 74.2
        },
        "QAR 50": {
          "PTS": 67.6
        },
        "QAR 52": {
          "PTS": 95.3
        },
        "QAR 60": {
          "PTS": 92.3,
          "MP10": 16.6
        },
        "QAR 61": {
          "PTS": 92.3,
          "MP10": 15.6
        },
        "QAR 62": {
          "PTS": 96.3,
          "MP10": 11.2
        },
        "QAR 63": {
          "PTS": 58.6,
          "MP10": 11.2
        },
        "QAR 64": {
          "PTS": 98.3,
          "MP10": 12.3
        }
      }
    },
    {
      "date": "2025-08-14",
      "date_br": "14/08/2025",
      "month": "Agosto",
      "month_num": 8,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 81.5
        },
        "QAR 47": {
          "PTS": 74.2
        },
        "QAR 48": {
          "PTS": 81.2
        },
        "QAR 49": {
          "PTS": 75.6
        },
        "QAR 50": {
          "PTS": 85.3
        },
        "QAR 52": {
          "PTS": 71.2
        },
        "QAR 60": {
          "PTS": 81.2,
          "MP10": 12.2
        },
        "QAR 61": {
          "PTS": 74.2,
          "MP10": 18.6
        },
        "QAR 62": {
          "PTS": 53.3,
          "MP10": 13.2
        },
        "QAR 63": {
          "PTS": 42.3,
          "MP10": 16.9
        },
        "QAR 64": {
          "PTS": 105.3,
          "MP10": 14.2
        }
      }
    },
    {
      "date": "2025-08-20",
      "date_br": "20/08/2025",
      "month": "Agosto",
      "month_num": 8,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 77.2
        },
        "QAR 47": {
          "PTS": 64.3
        },
        "QAR 48": {
          "PTS": 74.2
        },
        "QAR 49": {
          "PTS": 65.3
        },
        "QAR 50": {
          "PTS": 74.3
        },
        "QAR 52": {
          "PTS": 53.3
        },
        "QAR 60": {
          "PTS": 75.3,
          "MP10": 15.3
        },
        "QAR 61": {
          "PTS": 62.3,
          "MP10": 14.2
        },
        "QAR 62": {
          "PTS": 41.2,
          "MP10": 10.2
        },
        "QAR 63": {
          "PTS": 36.6,
          "MP10": 14.5
        },
        "QAR 64": {
          "PTS": 75.3,
          "MP10": 11.2
        }
      }
    },
    {
      "date": "2025-08-26",
      "date_br": "26/08/2025",
      "month": "Agosto",
      "month_num": 8,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 36.6
        },
        "QAR 47": {
          "PTS": 41.3
        },
        "QAR 48": {
          "PTS": 29.3
        },
        "QAR 49": {
          "PTS": 15.8
        },
        "QAR 50": {
          "PTS": 19.6
        },
        "QAR 52": {
          "PTS": 22.3
        },
        "QAR 60": {
          "PTS": 69.3,
          "MP10": 21.3
        },
        "QAR 61": {
          "PTS": 45.6,
          "MP10": 16.3
        },
        "QAR 62": {
          "PTS": 39.6,
          "MP10": 16.3
        },
        "QAR 63": {
          "PTS": 29.6,
          "MP10": 12.3
        },
        "QAR 64": {
          "PTS": 45.3,
          "MP10": 18.3
        }
      }
    },
    {
      "date": "2025-09-01",
      "date_br": "01/09/2025",
      "month": "Setembro",
      "month_num": 9,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 15.8
        },
        "QAR 47": {
          "PTS": 14.2
        },
        "QAR 48": {
          "PTS": 17.2
        },
        "QAR 49": {
          "PTS": 12.3
        },
        "QAR 50": {
          "PTS": 6.3
        },
        "QAR 52": {
          "PTS": 19.3
        },
        "QAR 60": {
          "PTS": 67.4,
          "MP10": 18.0
        },
        "QAR 61": {
          "PTS": 93.1,
          "MP10": 19.6
        },
        "QAR 62": {
          "PTS": 26.6,
          "MP10": 8.6
        },
        "QAR 63": {
          "PTS": 67.3,
          "MP10": 11.2
        },
        "QAR 64": {
          "PTS": 36.6,
          "MP10": 6.7
        }
      }
    },
    {
      "date": "2025-09-07",
      "date_br": "07/09/2025",
      "month": "Setembro",
      "month_num": 9,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 88.2
        },
        "QAR 47": {
          "PTS": 19.3
        },
        "QAR 48": {
          "PTS": 55.9
        },
        "QAR 49": {
          "PTS": 50.2
        },
        "QAR 50": {
          "PTS": 41.9
        },
        "QAR 52": {
          "PTS": 40.2
        },
        "QAR 60": {
          "PTS": 34.7,
          "MP10": 8.8
        },
        "QAR 61": {
          "PTS": 58.4,
          "MP10": 25.3
        },
        "QAR 62": {
          "PTS": 90.4,
          "MP10": 22.3
        },
        "QAR 63": {
          "PTS": 63.4,
          "MP10": 9.6
        },
        "QAR 64": {
          "PTS": 58.9,
          "MP10": 12.3
        }
      }
    },
    {
      "date": "2025-09-13",
      "date_br": "13/09/2025",
      "month": "Setembro",
      "month_num": 9,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 67.3
        },
        "QAR 47": {
          "PTS": 36.3
        },
        "QAR 48": {
          "PTS": 55.2
        },
        "QAR 49": {
          "PTS": 82.3
        },
        "QAR 50": {
          "PTS": 40.4
        },
        "QAR 52": {
          "PTS": 59.3
        },
        "QAR 60": {
          "PTS": 99.2,
          "MP10": 12.7
        },
        "QAR 61": {
          "PTS": 84.4,
          "MP10": 22.3
        },
        "QAR 62": {
          "PTS": 62.7,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 66.2,
          "MP10": 18.8
        },
        "QAR 64": {
          "PTS": 56.4,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2025-09-19",
      "date_br": "19/09/2025",
      "month": "Setembro",
      "month_num": 9,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 52.3
        },
        "QAR 47": {
          "PTS": 34.2
        },
        "QAR 48": {
          "PTS": 48.3
        },
        "QAR 49": {
          "PTS": 52.3
        },
        "QAR 50": {
          "PTS": 19.1
        },
        "QAR 52": {
          "PTS": 45.2
        },
        "QAR 60": {
          "PTS": 86.4,
          "MP10": 32.4
        },
        "QAR 61": {
          "PTS": 61.3,
          "MP10": 18.3
        },
        "QAR 62": {
          "PTS": 82.3,
          "MP10": 15.6
        },
        "QAR 63": {
          "PTS": 51.2,
          "MP10": 13.3
        },
        "QAR 64": {
          "PTS": 94.3,
          "MP10": 16.6
        }
      }
    },
    {
      "date": "2025-09-25",
      "date_br": "25/09/2025",
      "month": "Setembro",
      "month_num": 9,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 48.3
        },
        "QAR 47": {
          "PTS": 36.6
        },
        "QAR 48": {
          "PTS": 38.9
        },
        "QAR 49": {
          "PTS": 47.2
        },
        "QAR 50": {
          "PTS": 28.6
        },
        "QAR 52": {
          "PTS": 32.3
        },
        "QAR 60": {
          "PTS": 70.1,
          "MP10": 19.3
        },
        "QAR 61": {
          "PTS": 43.6,
          "MP10": 18.3
        },
        "QAR 62": {
          "PTS": 64.2,
          "MP10": 17.9
        },
        "QAR 63": {
          "PTS": 48.9,
          "MP10": 4.6
        },
        "QAR 64": {
          "PTS": 58.6,
          "MP10": 7.2
        }
      }
    },
    {
      "date": "2025-10-01",
      "date_br": "01/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 30.7
        },
        "QAR 47": {
          "PTS": 46.6
        },
        "QAR 48": {
          "PTS": 52.8
        },
        "QAR 49": {
          "PTS": 56.4
        },
        "QAR 50": {
          "PTS": 59.7
        },
        "QAR 52": {
          "PTS": 49.4
        },
        "QAR 60": {
          "PTS": 55.8,
          "MP10": 21.3
        },
        "QAR 61": {
          "PTS": 73.0,
          "MP10": 14.9
        },
        "QAR 62": {
          "PTS": 75.7,
          "MP10": 14.9
        },
        "QAR 63": {
          "PTS": 52.3,
          "MP10": 19.3
        },
        "QAR 64": {
          "PTS": 87.6,
          "MP10": 32.3
        }
      }
    },
    {
      "date": "2025-10-07",
      "date_br": "07/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 66.1
        },
        "QAR 47": {
          "PTS": 69.3
        },
        "QAR 48": {
          "PTS": 93.0
        },
        "QAR 49": {
          "PTS": 110.7
        },
        "QAR 50": {
          "PTS": 101.5
        },
        "QAR 52": {
          "PTS": 31.3
        },
        "QAR 60": {
          "PTS": 62.5,
          "MP10": 23.3
        },
        "QAR 61": {
          "PTS": 72.9,
          "MP10": 13.9
        },
        "QAR 62": {
          "PTS": 50.5,
          "MP10": 11.2
        },
        "QAR 63": {
          "PTS": 94.0,
          "MP10": 22.6
        },
        "QAR 64": {
          "PTS": 47.8,
          "MP10": 14.5
        }
      }
    },
    {
      "date": "2025-10-13",
      "date_br": "13/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 48.6
        },
        "QAR 47": {
          "PTS": 42.1
        },
        "QAR 48": {
          "PTS": 97.2
        },
        "QAR 49": {
          "PTS": 55.3
        },
        "QAR 50": {
          "PTS": 23.1
        },
        "QAR 52": {
          "PTS": 61.9
        },
        "QAR 60": {
          "PTS": 24.1,
          "MP10": 9.3
        },
        "QAR 61": {
          "PTS": 47.1,
          "MP10": 7.5
        },
        "QAR 62": {
          "PTS": 66.3,
          "MP10": 13.2
        },
        "QAR 63": {
          "PTS": 54.3,
          "MP10": 14.8
        },
        "QAR 64": {
          "PTS": 41.1,
          "MP10": 12.3
        }
      }
    },
    {
      "date": "2025-10-19",
      "date_br": "19/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 26.2
        },
        "QAR 47": {
          "PTS": 46.6
        },
        "QAR 48": {
          "PTS": 93.0
        },
        "QAR 49": {
          "PTS": 70.8
        },
        "QAR 50": {
          "PTS": 47.4
        },
        "QAR 52": {
          "PTS": 89.4
        },
        "QAR 60": {
          "PTS": 85.9,
          "MP10": 54.7
        },
        "QAR 61": {
          "PTS": 76.5,
          "MP10": 29.8
        },
        "QAR 62": {
          "PTS": 23.1,
          "MP10": 13.7
        },
        "QAR 63": {
          "PTS": 35.6,
          "MP10": 14.7
        },
        "QAR 64": {
          "PTS": 28.3,
          "MP10": 9.8
        }
      }
    },
    {
      "date": "2025-10-25",
      "date_br": "25/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 24.1
        },
        "QAR 47": {
          "PTS": 59.9
        },
        "QAR 48": {
          "PTS": 97.1
        },
        "QAR 49": {
          "PTS": 56.4
        },
        "QAR 50": {
          "PTS": 24.8
        },
        "QAR 52": {
          "PTS": 31.3
        },
        "QAR 60": {
          "PTS": 51.7,
          "MP10": 30.0
        },
        "QAR 61": {
          "PTS": 82.3,
          "MP10": 32.3
        },
        "QAR 62": {
          "PTS": 45.6,
          "MP10": 29.6
        },
        "QAR 63": {
          "PTS": 95.0,
          "MP10": 24.3
        },
        "QAR 64": {
          "PTS": 50.5,
          "MP10": 11.8
        }
      }
    },
    {
      "date": "2025-10-31",
      "date_br": "31/10/2025",
      "month": "Outubro",
      "month_num": 10,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 25.8
        },
        "QAR 47": {
          "PTS": 51.4
        },
        "QAR 48": {
          "PTS": 80.3
        },
        "QAR 49": {
          "PTS": 53.3
        },
        "QAR 50": {
          "PTS": 23.1
        },
        "QAR 52": {
          "PTS": 14.9
        },
        "QAR 60": {
          "PTS": 34.0,
          "MP10": 15.9
        },
        "QAR 61": {
          "PTS": 40.0,
          "MP10": 21.3
        },
        "QAR 62": {
          "PTS": 28.3,
          "MP10": 17.4
        },
        "QAR 63": {
          "PTS": 35.6,
          "MP10": 18.7
        },
        "QAR 64": {
          "PTS": 21.7,
          "MP10": 19.7
        }
      }
    },
    {
      "date": "2025-11-06",
      "date_br": "06/11/2025",
      "month": "Novembro",
      "month_num": 11,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 24.8
        },
        "QAR 47": {
          "PTS": 55.4
        },
        "QAR 48": {
          "PTS": 45.3
        },
        "QAR 49": {
          "PTS": 37.1
        },
        "QAR 50": {
          "PTS": 33.3
        },
        "QAR 52": {
          "PTS": 29.4
        },
        "QAR 60": {
          "PTS": 45.7,
          "MP10": 26.3
        },
        "QAR 61": {
          "PTS": 80.0,
          "MP10": 39.4
        },
        "QAR 62": {
          "PTS": 21.1,
          "MP10": 13.3
        },
        "QAR 63": {
          "PTS": 34.2,
          "MP10": 9.6
        },
        "QAR 64": {
          "PTS": 29.5,
          "MP10": 17.7
        }
      }
    },
    {
      "date": "2025-11-12",
      "date_br": "12/11/2025",
      "month": "Novembro",
      "month_num": 11,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 25.6
        },
        "QAR 47": {
          "PTS": 64.6
        },
        "QAR 48": {
          "PTS": 38.6
        },
        "QAR 49": {
          "PTS": 12.3
        },
        "QAR 50": {
          "PTS": 34.8
        },
        "QAR 52": {
          "PTS": 40.4
        },
        "QAR 60": {
          "PTS": 44.1,
          "MP10": 24.5
        },
        "QAR 61": {
          "PTS": 60.0,
          "MP10": 30.1
        },
        "QAR 62": {
          "PTS": 30.2,
          "MP10": 18.1
        },
        "QAR 63": {
          "PTS": 39.0,
          "MP10": 20.0
        },
        "QAR 64": {
          "PTS": 35.0,
          "MP10": 19.9
        }
      }
    },
    {
      "date": "2025-11-18",
      "date_br": "18/11/2025",
      "month": "Novembro",
      "month_num": 11,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 30.1
        },
        "QAR 47": {
          "PTS": 53.5
        },
        "QAR 48": {
          "PTS": 25.9
        },
        "QAR 49": {
          "PTS": 29.4
        },
        "QAR 50": {
          "PTS": 36.1
        },
        "QAR 52": {
          "PTS": 30.8
        },
        "QAR 60": {
          "PTS": 26.1,
          "MP10": 4.6
        },
        "QAR 61": {
          "PTS": 58.4,
          "MP10": 34.7
        },
        "QAR 62": {
          "PTS": 40.1,
          "MP10": 24.8
        },
        "QAR 63": {
          "PTS": 22.0,
          "MP10": 13.6
        },
        "QAR 64": {
          "PTS": 26.6,
          "MP10": 12.5
        }
      }
    },
    {
      "date": "2025-11-24",
      "date_br": "24/11/2025",
      "month": "Novembro",
      "month_num": 11,
      "year": 2025,
      "day_of_week": "Segunda-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 24.7
        },
        "QAR 47": {
          "PTS": 55.8
        },
        "QAR 48": {
          "PTS": 25.1
        },
        "QAR 49": {
          "PTS": 24.1
        },
        "QAR 50": {
          "PTS": 26.4
        },
        "QAR 52": {
          "PTS": 31.1
        },
        "QAR 60": {
          "PTS": 41.7,
          "MP10": 22.4
        },
        "QAR 61": {
          "PTS": 61.1,
          "MP10": 33.2
        },
        "QAR 62": {
          "PTS": 38.7,
          "MP10": 22.7
        },
        "QAR 63": {
          "PTS": 30.4,
          "MP10": 16.2
        },
        "QAR 64": {
          "PTS": 29.3,
          "MP10": 15.6
        }
      }
    },
    {
      "date": "2025-11-30",
      "date_br": "30/11/2025",
      "month": "Novembro",
      "month_num": 11,
      "year": 2025,
      "day_of_week": "Domingo",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 17.3
        },
        "QAR 47": {
          "PTS": 21.2
        },
        "QAR 48": {
          "PTS": 19.3
        },
        "QAR 49": {
          "PTS": 17.6
        },
        "QAR 50": {
          "PTS": 18.6
        },
        "QAR 52": {
          "PTS": 25.2
        },
        "QAR 60": {
          "PTS": 38.3,
          "MP10": 21.3
        },
        "QAR 61": {
          "PTS": 33.2,
          "MP10": 16.6
        },
        "QAR 62": {
          "PTS": 28.6,
          "MP10": 17.6
        },
        "QAR 63": {
          "PTS": 25.6,
          "MP10": 14.6
        },
        "QAR 64": {
          "PTS": 27.6,
          "MP10": 12.7
        }
      }
    },
    {
      "date": "2025-12-06",
      "date_br": "06/12/2025",
      "month": "Dezembro",
      "month_num": 12,
      "year": 2025,
      "day_of_week": "Sábado",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 14.2
        },
        "QAR 47": {
          "PTS": 20.3
        },
        "QAR 48": {
          "PTS": 18.6
        },
        "QAR 49": {
          "PTS": 12.6
        },
        "QAR 50": {
          "PTS": 21.3
        },
        "QAR 52": {
          "PTS": 23.3
        },
        "QAR 60": {
          "PTS": 40.6,
          "MP10": 19.6
        },
        "QAR 61": {
          "PTS": 31.2,
          "MP10": 15.3
        },
        "QAR 62": {
          "PTS": 30.3,
          "MP10": 16.3
        },
        "QAR 63": {
          "PTS": 26.3,
          "MP10": 12.3
        },
        "QAR 64": {
          "PTS": 29.6,
          "MP10": 11.3
        }
      }
    },
    {
      "date": "2025-12-12",
      "date_br": "12/12/2025",
      "month": "Dezembro",
      "month_num": 12,
      "year": 2025,
      "day_of_week": "Sexta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 12.3
        },
        "QAR 47": {
          "PTS": 18.6
        },
        "QAR 48": {
          "PTS": 16.6
        },
        "QAR 49": {
          "PTS": 15.3
        },
        "QAR 50": {
          "PTS": 16.3
        },
        "QAR 52": {
          "PTS": 21.2
        },
        "QAR 60": {
          "PTS": 36.2,
          "MP10": 18.6
        },
        "QAR 61": {
          "PTS": 28.6,
          "MP10": 16.3
        },
        "QAR 62": {
          "PTS": 28.6,
          "MP10": 15.2
        },
        "QAR 63": {
          "PTS": 25.2,
          "MP10": 9.6
        },
        "QAR 64": {
          "PTS": 28.3,
          "MP10": 10.6
        }
      }
    },
    {
      "date": "2025-12-18",
      "date_br": "18/12/2025",
      "month": "Dezembro",
      "month_num": 12,
      "year": 2025,
      "day_of_week": "Quinta-feira",
      "season": "Primavera (Transição Chuvosa)",
      "readings": {
        "PPE": {
          "PTS": 15.6
        },
        "QAR 47": {
          "PTS": 16.3
        },
        "QAR 48": {
          "PTS": 15.9
        },
        "QAR 49": {
          "PTS": 14.2
        },
        "QAR 50": {
          "PTS": 18.6
        },
        "QAR 52": {
          "PTS": 20.3
        },
        "QAR 60": {
          "PTS": 31.2,
          "MP10": 12.3
        },
        "QAR 61": {
          "PTS": 26.3,
          "MP10": 14.5
        },
        "QAR 62": {
          "PTS": 24.6,
          "MP10": 14.2
        },
        "QAR 63": {
          "PTS": 24.6,
          "MP10": 8.6
        },
        "QAR 64": {
          "PTS": 27.3,
          "MP10": 9.8
        }
      }
    },
    {
      "date": "2025-12-24",
      "date_br": "24/12/2025",
      "month": "Dezembro",
      "month_num": 12,
      "year": 2025,
      "day_of_week": "Quarta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 19.3
        },
        "QAR 47": {
          "PTS": 18.6
        },
        "QAR 48": {
          "PTS": 14.5
        },
        "QAR 49": {
          "PTS": 12.3
        },
        "QAR 50": {
          "PTS": 19.3
        },
        "QAR 52": {
          "PTS": 18.9
        },
        "QAR 60": {
          "PTS": 35.6,
          "MP10": 15.4
        },
        "QAR 61": {
          "PTS": 33.3,
          "MP10": 15.6
        },
        "QAR 62": {
          "PTS": 29.6,
          "MP10": 13.2
        },
        "QAR 63": {
          "PTS": 23.6,
          "MP10": 10.3
        },
        "QAR 64": {
          "PTS": 25.4,
          "MP10": 12.4
        }
      }
    },
    {
      "date": "2025-12-30",
      "date_br": "30/12/2025",
      "month": "Dezembro",
      "month_num": 12,
      "year": 2025,
      "day_of_week": "Terça-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 14.2
        },
        "QAR 47": {
          "PTS": 15.6
        },
        "QAR 48": {
          "PTS": 16.3
        },
        "QAR 49": {
          "PTS": 15.9
        },
        "QAR 50": {
          "PTS": 15.6
        },
        "QAR 52": {
          "PTS": 16.3
        },
        "QAR 60": {
          "PTS": 29.6,
          "MP10": 14.2
        },
        "QAR 61": {
          "PTS": 31.2,
          "MP10": 14.1
        },
        "QAR 62": {
          "PTS": 31.2,
          "MP10": 13.9
        },
        "QAR 63": {
          "PTS": 22.3,
          "MP10": 11.6
        },
        "QAR 64": {
          "PTS": 26.4,
          "MP10": 13.6
        }
      }
    },
    {
      "date": "2026-01-05",
      "date_br": "05/01/2026",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2026,
      "day_of_week": "Segunda-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 26.1
        },
        "QAR 47": {
          "PTS": 36.4
        },
        "QAR 48": {
          "PTS": 39.3
        },
        "QAR 49": {
          "PTS": 38.9
        },
        "QAR 50": {
          "PTS": 31.1
        },
        "QAR 52": {
          "PTS": 41.6
        },
        "QAR 60": {
          "PTS": 53.8,
          "MP10": 25.4
        },
        "QAR 61": {
          "PTS": 46.3,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 45.3,
          "MP10": 20.1
        },
        "QAR 63": {
          "PTS": 33.2,
          "MP10": 18.2
        },
        "QAR 64": {
          "PTS": 41.2,
          "MP10": 19.2
        }
      }
    },
    {
      "date": "2026-01-11",
      "date_br": "11/01/2026",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2026,
      "day_of_week": "Domingo",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 30.1
        },
        "QAR 47": {
          "PTS": 38.3
        },
        "QAR 48": {
          "PTS": 38.5
        },
        "QAR 49": {
          "PTS": 14.1
        },
        "QAR 50": {
          "PTS": 31.9
        },
        "QAR 52": {
          "PTS": 34.5
        },
        "QAR 60": {
          "PTS": 40.8,
          "MP10": 23.1
        },
        "QAR 61": {
          "PTS": 49.9,
          "MP10": 14.7
        },
        "QAR 62": {
          "PTS": 37.4,
          "MP10": 18.1
        },
        "QAR 63": {
          "PTS": 35.6,
          "MP10": 21.0
        },
        "QAR 64": {
          "PTS": 28.7,
          "MP10": 13.3
        }
      }
    },
    {
      "date": "2026-01-17",
      "date_br": "17/01/2026",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2026,
      "day_of_week": "Sábado",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 24.8
        },
        "QAR 47": {
          "PTS": 20.0
        },
        "QAR 48": {
          "PTS": 21.2
        },
        "QAR 49": {
          "PTS": 16.7
        },
        "QAR 50": {
          "PTS": 29.7
        },
        "QAR 52": {
          "PTS": 21.4
        },
        "QAR 60": {
          "PTS": 38.4,
          "MP10": 15.7
        },
        "QAR 61": {
          "PTS": 19.4,
          "MP10": 11.7
        },
        "QAR 62": {
          "PTS": 25.8,
          "MP10": 12.3
        },
        "QAR 63": {
          "PTS": 21.0,
          "MP10": 6.6
        },
        "QAR 64": {
          "PTS": 33.3,
          "MP10": 17.0
        }
      }
    },
    {
      "date": "2026-01-23",
      "date_br": "23/01/2026",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2026,
      "day_of_week": "Sexta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 30.8
        },
        "QAR 47": {
          "PTS": 23.8
        },
        "QAR 48": {
          "PTS": 15.0
        },
        "QAR 49": {
          "PTS": 19.0
        },
        "QAR 50": {
          "PTS": 24.2
        },
        "QAR 52": {
          "PTS": 20.9
        },
        "QAR 60": {
          "PTS": 38.9,
          "MP10": 16.1
        },
        "QAR 61": {
          "PTS": 21.2,
          "MP10": 7.5
        },
        "QAR 62": {
          "PTS": 30.1,
          "MP10": 13.9
        },
        "QAR 63": {
          "PTS": 38.0,
          "MP10": 17.2
        },
        "QAR 64": {
          "PTS": 20.0,
          "MP10": 10.2
        }
      }
    },
    {
      "date": "2026-01-29",
      "date_br": "29/01/2026",
      "month": "Janeiro",
      "month_num": 1,
      "year": 2026,
      "day_of_week": "Quinta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 28.6
        },
        "QAR 47": {
          "PTS": 19.9
        },
        "QAR 48": {
          "PTS": 6.1
        },
        "QAR 49": {
          "PTS": 15.9
        },
        "QAR 50": {
          "PTS": 17.7
        },
        "QAR 52": {
          "PTS": 19.7
        },
        "QAR 60": {
          "PTS": 35.5,
          "MP10": 14.2
        },
        "QAR 61": {
          "PTS": 60.1,
          "MP10": 29.1
        },
        "QAR 62": {
          "PTS": 29.3,
          "MP10": 13.4
        },
        "QAR 63": {
          "PTS": 16.3,
          "MP10": 11.0
        },
        "QAR 64": {
          "PTS": 18.0,
          "MP10": 8.7
        }
      }
    },
    {
      "date": "2026-02-04",
      "date_br": "04/02/2026",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2026,
      "day_of_week": "Quarta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 24.2
        },
        "QAR 47": {
          "PTS": 16.5
        },
        "QAR 48": {
          "PTS": 15.2
        },
        "QAR 49": {
          "PTS": 13.3
        },
        "QAR 50": {
          "PTS": 16.5
        },
        "QAR 52": {
          "PTS": 21.3
        },
        "QAR 60": {
          "PTS": 26.3,
          "MP10": 13.1
        },
        "QAR 61": {
          "PTS": 42.3,
          "MP10": 24.3
        },
        "QAR 62": {
          "PTS": 53.2,
          "MP10": 29.6
        },
        "QAR 63": {
          "PTS": 26.3,
          "MP10": 12.5
        },
        "QAR 64": {
          "PTS": 38.6,
          "MP10": 24.1
        }
      }
    },
    {
      "date": "2026-02-10",
      "date_br": "10/02/2026",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2026,
      "day_of_week": "Terça-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 19.3
        },
        "QAR 47": {
          "PTS": 12.6
        },
        "QAR 48": {
          "PTS": 13.2
        },
        "QAR 49": {
          "PTS": 14.5
        },
        "QAR 50": {
          "PTS": 14.4
        },
        "QAR 52": {
          "PTS": 12.2
        },
        "QAR 60": {
          "PTS": 18.9,
          "MP10": 9.5
        },
        "QAR 61": {
          "PTS": 39.3,
          "MP10": 23.1
        },
        "QAR 62": {
          "PTS": 41.2,
          "MP10": 24.1
        },
        "QAR 63": {
          "PTS": 28.6,
          "MP10": 13.5
        },
        "QAR 64": {
          "PTS": 34.2,
          "MP10": 21.6
        }
      }
    },
    {
      "date": "2026-02-16",
      "date_br": "16/02/2026",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2026,
      "day_of_week": "Segunda-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 26.6
        },
        "QAR 47": {
          "PTS": 16.6
        },
        "QAR 48": {
          "PTS": 14.5
        },
        "QAR 49": {
          "PTS": 15.5
        },
        "QAR 50": {
          "PTS": 15.2
        },
        "QAR 52": {
          "PTS": 16.6
        },
        "QAR 60": {
          "PTS": 22.3,
          "MP10": 12.12
        },
        "QAR 61": {
          "PTS": 35.6,
          "MP10": 22.1
        },
        "QAR 62": {
          "PTS": 35.6,
          "MP10": 19.6
        },
        "QAR 63": {
          "PTS": 32.3,
          "MP10": 16.2
        },
        "QAR 64": {
          "PTS": 29.6,
          "MP10": 18.6
        }
      }
    },
    {
      "date": "2026-02-22",
      "date_br": "22/02/2026",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2026,
      "day_of_week": "Domingo",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 12.2
        },
        "QAR 47": {
          "PTS": 18.6
        },
        "QAR 48": {
          "PTS": 15.9
        },
        "QAR 49": {
          "PTS": 13.9
        },
        "QAR 50": {
          "PTS": 16.3
        },
        "QAR 52": {
          "PTS": 14.2
        },
        "QAR 60": {
          "PTS": 17.3,
          "MP10": 9.5
        },
        "QAR 61": {
          "PTS": 31.2,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 28.6,
          "MP10": 16.9
        },
        "QAR 63": {
          "PTS": 26.6,
          "MP10": 12.6
        },
        "QAR 64": {
          "PTS": 31.5,
          "MP10": 20.1
        }
      }
    },
    {
      "date": "2026-02-28",
      "date_br": "28/02/2026",
      "month": "Fevereiro",
      "month_num": 2,
      "year": 2026,
      "day_of_week": "Sábado",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 9.6
        },
        "QAR 47": {
          "PTS": 12.6
        },
        "QAR 48": {
          "PTS": 14.6
        },
        "QAR 49": {
          "PTS": 16.8
        },
        "QAR 50": {
          "PTS": 13.8
        },
        "QAR 52": {
          "PTS": 16.3
        },
        "QAR 60": {
          "PTS": 21.2,
          "MP10": 11.7
        },
        "QAR 61": {
          "PTS": 29.6,
          "MP10": 18.4
        },
        "QAR 62": {
          "PTS": 31.2,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 28.3,
          "MP10": 14.2
        },
        "QAR 64": {
          "PTS": 33.3,
          "MP10": 19.6
        }
      }
    },
    {
      "date": "2026-03-06",
      "date_br": "06/03/2026",
      "month": "Março",
      "month_num": 3,
      "year": 2026,
      "day_of_week": "Sexta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 16.3
        },
        "QAR 47": {
          "PTS": 15.2
        },
        "QAR 48": {
          "PTS": 18.2
        },
        "QAR 49": {
          "PTS": 19.6
        },
        "QAR 50": {
          "PTS": 20.2
        },
        "QAR 52": {
          "PTS": 18.6
        },
        "QAR 60": {
          "PTS": 29.3,
          "MP10": 14.2
        },
        "QAR 61": {
          "PTS": 35.3,
          "MP10": 19.3
        },
        "QAR 62": {
          "PTS": 39.3,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 38.6,
          "MP10": 18.1
        },
        "QAR 64": {
          "PTS": 52.3,
          "MP10": 25.3
        }
      }
    },
    {
      "date": "2026-03-12",
      "date_br": "12/03/2026",
      "month": "Março",
      "month_num": 3,
      "year": 2026,
      "day_of_week": "Quinta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 5.5
        },
        "QAR 47": {
          "PTS": 6.2
        },
        "QAR 48": {
          "PTS": 8.6
        },
        "QAR 49": {
          "PTS": 6.8
        },
        "QAR 50": {
          "PTS": 5.2
        },
        "QAR 52": {
          "PTS": 6.2
        },
        "QAR 60": {
          "PTS": 7.4,
          "MP10": 4.1
        },
        "QAR 61": {
          "PTS": 12.6,
          "MP10": 7.6
        },
        "QAR 62": {
          "PTS": 19.3,
          "MP10": 9.3
        },
        "QAR 63": {
          "PTS": 18.2,
          "MP10": 9.6
        },
        "QAR 64": {
          "PTS": 19.6,
          "MP10": 10.2
        }
      }
    },
    {
      "date": "2026-03-18",
      "date_br": "18/03/2026",
      "month": "Março",
      "month_num": 3,
      "year": 2026,
      "day_of_week": "Quarta-feira",
      "season": "Verão (Período Chuvoso)",
      "readings": {
        "PPE": {
          "PTS": 8.9
        },
        "QAR 47": {
          "PTS": 9.3
        },
        "QAR 48": {
          "PTS": 10.2
        },
        "QAR 49": {
          "PTS": 8.6
        },
        "QAR 50": {
          "PTS": 6.6
        },
        "QAR 52": {
          "PTS": 7.2
        },
        "QAR 60": {
          "PTS": 10.5,
          "MP10": 5.6
        },
        "QAR 61": {
          "PTS": 19.3,
          "MP10": 12.1
        },
        "QAR 62": {
          "PTS": 32.3,
          "MP10": 14.8
        },
        "QAR 63": {
          "PTS": 25.6,
          "MP10": 10.6
        },
        "QAR 64": {
          "PTS": 26.6,
          "MP10": 15.1
        }
      }
    },
    {
      "date": "2026-03-24",
      "date_br": "24/03/2026",
      "month": "Março",
      "month_num": 3,
      "year": 2026,
      "day_of_week": "Terça-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 7.2
        },
        "QAR 47": {
          "PTS": 8.6
        },
        "QAR 48": {
          "PTS": 7.6
        },
        "QAR 49": {
          "PTS": 8.1
        },
        "QAR 50": {
          "PTS": 7.2
        },
        "QAR 52": {
          "PTS": 8.5
        },
        "QAR 60": {
          "PTS": 9.1,
          "MP10": 4.9
        },
        "QAR 61": {
          "PTS": 15.6,
          "MP10": 10.1
        },
        "QAR 62": {
          "PTS": 25.6,
          "MP10": 12.5
        },
        "QAR 63": {
          "PTS": 29.3,
          "MP10": 15.8
        },
        "QAR 64": {
          "PTS": 21.2,
          "MP10": 13.1
        }
      }
    },
    {
      "date": "2026-03-30",
      "date_br": "30/03/2026",
      "month": "Março",
      "month_num": 3,
      "year": 2026,
      "day_of_week": "Segunda-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 21.2
        },
        "QAR 47": {
          "PTS": 23.6
        },
        "QAR 48": {
          "PTS": 28.3
        },
        "QAR 49": {
          "PTS": 25.2
        },
        "QAR 50": {
          "PTS": 19.6
        },
        "QAR 52": {
          "PTS": 21.2
        },
        "QAR 60": {
          "PTS": 24.3,
          "MP10": 12.1
        },
        "QAR 61": {
          "PTS": 24.5,
          "MP10": 13.6
        },
        "QAR 62": {
          "PTS": 38.3,
          "MP10": 17.9
        },
        "QAR 63": {
          "PTS": 34.7,
          "MP10": 18.4
        },
        "QAR 64": {
          "PTS": 35.6,
          "MP10": 18.3
        }
      }
    },
    {
      "date": "2026-04-05",
      "date_br": "05/04/2026",
      "month": "Abril",
      "month_num": 4,
      "year": 2026,
      "day_of_week": "Domingo",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 29.3
        },
        "QAR 47": {
          "PTS": 32.3
        },
        "QAR 48": {
          "PTS": 36.6
        },
        "QAR 49": {
          "PTS": 39.6
        },
        "QAR 50": {
          "PTS": 37.2
        },
        "QAR 52": {
          "PTS": 32.3
        },
        "QAR 60": {
          "PTS": 42.3,
          "MP10": 27.918
        },
        "QAR 61": {
          "PTS": 46.3,
          "MP10": 30.2
        },
        "QAR 62": {
          "PTS": 49.6,
          "MP10": 33.1
        },
        "QAR 63": {
          "PTS": 44.3,
          "MP10": 25.1
        },
        "QAR 64": {
          "PTS": 47.5,
          "MP10": 25.6
        }
      }
    },
    {
      "date": "2026-04-11",
      "date_br": "11/04/2026",
      "month": "Abril",
      "month_num": 4,
      "year": 2026,
      "day_of_week": "Sábado",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 30.3
        },
        "QAR 47": {
          "PTS": 35.6
        },
        "QAR 48": {
          "PTS": 44.2
        },
        "QAR 49": {
          "PTS": 42.3
        },
        "QAR 50": {
          "PTS": 44.6
        },
        "QAR 52": {
          "PTS": 39.4
        },
        "QAR 60": {
          "PTS": 58.6,
          "MP10": 38.676
        },
        "QAR 61": {
          "PTS": 58.6,
          "MP10": 35.3
        },
        "QAR 62": {
          "PTS": 62.3,
          "MP10": 35.6
        },
        "QAR 63": {
          "PTS": 52.3,
          "MP10": 26.3
        },
        "QAR 64": {
          "PTS": 64.2,
          "MP10": 34.6
        }
      }
    },
    {
      "date": "2026-04-17",
      "date_br": "17/04/2026",
      "month": "Abril",
      "month_num": 4,
      "year": 2026,
      "day_of_week": "Sexta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 35.3
        },
        "QAR 47": {
          "PTS": 38.6
        },
        "QAR 48": {
          "PTS": 43.2
        },
        "QAR 49": {
          "PTS": 44.1
        },
        "QAR 50": {
          "PTS": 45.9
        },
        "QAR 52": {
          "PTS": 40.6
        },
        "QAR 60": {
          "PTS": 62.3,
          "MP10": 41.118
        },
        "QAR 61": {
          "PTS": 64.2,
          "MP10": 38.6
        },
        "QAR 62": {
          "PTS": 69.3,
          "MP10": 32.3
        },
        "QAR 63": {
          "PTS": 61.2,
          "MP10": 32.3
        },
        "QAR 64": {
          "PTS": 68.6,
          "MP10": 36.2
        }
      }
    },
    {
      "date": "2026-04-23",
      "date_br": "23/04/2026",
      "month": "Abril",
      "month_num": 4,
      "year": 2026,
      "day_of_week": "Quinta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 39.3
        },
        "QAR 47": {
          "PTS": 42.3
        },
        "QAR 48": {
          "PTS": 46.3
        },
        "QAR 49": {
          "PTS": 48.6
        },
        "QAR 50": {
          "PTS": 52.3
        },
        "QAR 52": {
          "PTS": 42.1
        },
        "QAR 60": {
          "PTS": 48.6,
          "MP10": 32.076
        },
        "QAR 61": {
          "PTS": 49.6,
          "MP10": 30.3
        },
        "QAR 62": {
          "PTS": 51.2,
          "MP10": 30.3
        },
        "QAR 63": {
          "PTS": 64.3,
          "MP10": 36.3
        },
        "QAR 64": {
          "PTS": 58.3,
          "MP10": 30.3
        }
      }
    },
    {
      "date": "2026-04-29",
      "date_br": "29/04/2026",
      "month": "Abril",
      "month_num": 4,
      "year": 2026,
      "day_of_week": "Quarta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 43.3
        },
        "QAR 47": {
          "PTS": 52.1
        },
        "QAR 48": {
          "PTS": 57.6
        },
        "QAR 49": {
          "PTS": 58.6
        },
        "QAR 50": {
          "PTS": 48.4
        },
        "QAR 52": {
          "PTS": 52.3
        },
        "QAR 60": {
          "PTS": 67.3,
          "MP10": 44.418
        },
        "QAR 61": {
          "PTS": 59.3,
          "MP10": 39.1
        },
        "QAR 62": {
          "PTS": 46.6,
          "MP10": 29.3
        },
        "QAR 63": {
          "PTS": 69.3,
          "MP10": 37.2
        },
        "QAR 64": {
          "PTS": 54.2,
          "MP10": 27.3
        }
      }
    },
    {
      "date": "2026-05-05",
      "date_br": "05/05/2026",
      "month": "Maio",
      "month_num": 5,
      "year": 2026,
      "day_of_week": "Terça-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 48.3
        },
        "QAR 47": {
          "PTS": 57.4
        },
        "QAR 48": {
          "PTS": 59.6
        },
        "QAR 49": {
          "PTS": 60.2
        },
        "QAR 50": {
          "PTS": 51.2
        },
        "QAR 52": {
          "PTS": 53.9
        },
        "QAR 60": {
          "PTS": 72.2,
          "MP10": 28.6
        },
        "QAR 61": {
          "PTS": 68.6,
          "MP10": 33.2
        },
        "QAR 62": {
          "PTS": 53.3,
          "MP10": 15.6
        },
        "QAR 63": {
          "PTS": 76.6,
          "MP10": 22.3
        },
        "QAR 64": {
          "PTS": 61.2,
          "MP10": 15.6
        }
      }
    },
    {
      "date": "2026-05-11",
      "date_br": "11/05/2026",
      "month": "Maio",
      "month_num": 5,
      "year": 2026,
      "day_of_week": "Segunda-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 46.5
        },
        "QAR 47": {
          "PTS": 53.2
        },
        "QAR 48": {
          "PTS": 62.8
        },
        "QAR 49": {
          "PTS": 61.2
        },
        "QAR 50": {
          "PTS": 55.5
        },
        "QAR 52": {
          "PTS": 49.6
        },
        "QAR 60": {
          "PTS": 65.6,
          "MP10": 25.4
        },
        "QAR 61": {
          "PTS": 69.3,
          "MP10": 28.6
        },
        "QAR 62": {
          "PTS": 55.6,
          "MP10": 18.9
        },
        "QAR 63": {
          "PTS": 82.2,
          "MP10": 31.2
        },
        "QAR 64": {
          "PTS": 65.6,
          "MP10": 14.2
        }
      }
    },
    {
      "date": "2026-05-17",
      "date_br": "17/05/2026",
      "month": "Maio",
      "month_num": 5,
      "year": 2026,
      "day_of_week": "Domingo",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 44.2
        },
        "QAR 47": {
          "PTS": 51.2
        },
        "QAR 48": {
          "PTS": 62.3
        },
        "QAR 49": {
          "PTS": 66.5
        },
        "QAR 50": {
          "PTS": 57.2
        },
        "QAR 52": {
          "PTS": 54.5
        },
        "QAR 60": {
          "PTS": 82.1,
          "MP10": 26.3
        },
        "QAR 61": {
          "PTS": 77.2,
          "MP10": 31.2
        },
        "QAR 62": {
          "PTS": 54.6,
          "MP10": 21.2
        },
        "QAR 63": {
          "PTS": 84.6,
          "MP10": 19.6
        },
        "QAR 64": {
          "PTS": 79.6,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2026-05-23",
      "date_br": "23/05/2026",
      "month": "Maio",
      "month_num": 5,
      "year": 2026,
      "day_of_week": "Sábado",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 32.3
        },
        "QAR 47": {
          "PTS": 42.2
        },
        "QAR 48": {
          "PTS": 41.5
        },
        "QAR 49": {
          "PTS": 52.6
        },
        "QAR 50": {
          "PTS": 44.2
        },
        "QAR 52": {
          "PTS": 50.3
        },
        "QAR 60": {
          "PTS": 74.5,
          "MP10": 22.2
        },
        "QAR 61": {
          "PTS": 66.5,
          "MP10": 24.5
        },
        "QAR 62": {
          "PTS": 41.5,
          "MP10": 18.6
        },
        "QAR 63": {
          "PTS": 64.2,
          "MP10": 16.5
        },
        "QAR 64": {
          "PTS": 71.5,
          "MP10": 22.6
        }
      }
    },
    {
      "date": "2026-05-29",
      "date_br": "29/05/2026",
      "month": "Maio",
      "month_num": 5,
      "year": 2026,
      "day_of_week": "Sexta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 56.0
        },
        "QAR 47": {
          "PTS": 52.3
        },
        "QAR 48": {
          "PTS": 48.6
        },
        "QAR 49": {
          "PTS": 39.6
        },
        "QAR 50": {
          "PTS": 36.5
        },
        "QAR 52": {
          "PTS": 38.6
        },
        "QAR 60": {
          "PTS": 61.2,
          "MP10": 19.6
        },
        "QAR 61": {
          "PTS": 52.3,
          "MP10": 18.6
        },
        "QAR 62": {
          "PTS": 38.7,
          "MP10": 16.6
        },
        "QAR 63": {
          "PTS": 44.5,
          "MP10": 15.2
        },
        "QAR 64": {
          "PTS": 68.6,
          "MP10": 20.7
        }
      }
    },
    {
      "date": "2026-06-04",
      "date_br": "04/06/2026",
      "month": "Junho",
      "month_num": 6,
      "year": 2026,
      "day_of_week": "Quinta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 42.2
        },
        "QAR 47": {
          "PTS": 39.3
        },
        "QAR 48": {
          "PTS": 41.2
        },
        "QAR 49": {
          "PTS": 32.3
        },
        "QAR 50": {
          "PTS": 42.3
        },
        "QAR 52": {
          "PTS": 41.5
        },
        "QAR 60": {
          "PTS": 54.2,
          "MP10": 23.2
        },
        "QAR 61": {
          "PTS": 66.3,
          "MP10": 26.3
        },
        "QAR 62": {
          "PTS": 35.2,
          "MP10": 13.9
        },
        "QAR 63": {
          "PTS": 58.6,
          "MP10": 22.8
        },
        "QAR 64": {
          "PTS": 52.3,
          "MP10": 20.3
        }
      }
    },
    {
      "date": "2026-06-10",
      "date_br": "10/06/2026",
      "month": "Junho",
      "month_num": 6,
      "year": 2026,
      "day_of_week": "Quarta-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 36.3
        },
        "QAR 47": {
          "PTS": 42.2
        },
        "QAR 48": {
          "PTS": 43.2
        },
        "QAR 49": {
          "PTS": 39.3
        },
        "QAR 50": {
          "PTS": 41.2
        },
        "QAR 52": {
          "PTS": 44.6
        },
        "QAR 60": {
          "PTS": 39.6,
          "MP10": 17.5
        },
        "QAR 61": {
          "PTS": 51.2,
          "MP10": 19.6
        },
        "QAR 62": {
          "PTS": 48.5,
          "MP10": 18.4
        },
        "QAR 63": {
          "PTS": 54.2,
          "MP10": 20.3
        },
        "QAR 64": {
          "PTS": 59.6,
          "MP10": 21.3
        }
      }
    },
    {
      "date": "2026-06-16",
      "date_br": "16/06/2026",
      "month": "Junho",
      "month_num": 6,
      "year": 2026,
      "day_of_week": "Terça-feira",
      "season": "Outono (Transição Seca)",
      "readings": {
        "PPE": {
          "PTS": 61.2
        },
        "QAR 47": {
          "PTS": 58.3
        },
        "QAR 48": {
          "PTS": 44.2
        },
        "QAR 49": {
          "PTS": 37.5
        },
        "QAR 50": {
          "PTS": 47.5
        },
        "QAR 52": {
          "PTS": 52.1
        },
        "QAR 60": {
          "PTS": 41.3,
          "MP10": 19.3
        },
        "QAR 61": {
          "PTS": 41.2,
          "MP10": 17.2
        },
        "QAR 62": {
          "PTS": 52.3,
          "MP10": 19.6
        },
        "QAR 63": {
          "PTS": 67.2,
          "MP10": 24.1
        },
        "QAR 64": {
          "PTS": 48.6,
          "MP10": 18.6
        }
      }
    },
    {
      "date": "2026-06-22",
      "date_br": "22/06/2026",
      "month": "Junho",
      "month_num": 6,
      "year": 2026,
      "day_of_week": "Segunda-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 52.2
        },
        "QAR 47": {
          "PTS": 49.3
        },
        "QAR 48": {
          "PTS": 43.8
        },
        "QAR 49": {
          "PTS": 38.6
        },
        "QAR 50": {
          "PTS": 38.9
        },
        "QAR 52": {
          "PTS": 49.6
        },
        "QAR 60": {
          "PTS": 34.2,
          "MP10": 16.1
        },
        "QAR 61": {
          "PTS": 48.6,
          "MP10": 18.1
        },
        "QAR 62": {
          "PTS": 37.6,
          "MP10": 15.1
        },
        "QAR 63": {
          "PTS": 42.1,
          "MP10": 16.8
        },
        "QAR 64": {
          "PTS": 37.9,
          "MP10": 16.1
        }
      }
    },
    {
      "date": "2026-06-28",
      "date_br": "28/06/2026",
      "month": "Junho",
      "month_num": 6,
      "year": 2026,
      "day_of_week": "Domingo",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 35.3
        },
        "QAR 47": {
          "PTS": 39.3
        },
        "QAR 48": {
          "PTS": 51.3
        },
        "QAR 49": {
          "PTS": 33.2
        },
        "QAR 50": {
          "PTS": 48.6
        },
        "QAR 52": {
          "PTS": 37.6
        },
        "QAR 60": {
          "PTS": 55.3,
          "MP10": 22.1
        },
        "QAR 61": {
          "PTS": 50.3,
          "MP10": 19.1
        },
        "QAR 62": {
          "PTS": 49.3,
          "MP10": 17.2
        },
        "QAR 63": {
          "PTS": 53.2,
          "MP10": 18.7
        },
        "QAR 64": {
          "PTS": 51.8,
          "MP10": 20.5
        }
      }
    },
    {
      "date": "2026-07-04",
      "date_br": "04/07/2026",
      "month": "Julho",
      "month_num": 7,
      "year": 2026,
      "day_of_week": "Sábado",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 37.3
        },
        "QAR 47": {
          "PTS": 35.2
        },
        "QAR 48": {
          "PTS": 42.1
        },
        "QAR 49": {
          "PTS": 32.3
        },
        "QAR 50": {
          "PTS": 51.2
        },
        "QAR 52": {
          "PTS": 34.2
        },
        "QAR 60": {
          "PTS": 59.6,
          "MP10": 32.3
        },
        "QAR 61": {
          "PTS": 48.6,
          "MP10": 22.1
        },
        "QAR 62": {
          "PTS": 55.6,
          "MP10": 25.3
        },
        "QAR 63": {
          "PTS": 51.5,
          "MP10": 26.3
        },
        "QAR 64": {
          "PTS": 56.3,
          "MP10": 29.6
        }
      }
    },
    {
      "date": "2026-07-10",
      "date_br": "10/07/2026",
      "month": "Julho",
      "month_num": 7,
      "year": 2026,
      "day_of_week": "Sexta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 35.2
        },
        "QAR 47": {
          "PTS": 41.5
        },
        "QAR 48": {
          "PTS": 46.5
        },
        "QAR 49": {
          "PTS": 46.6
        },
        "QAR 50": {
          "PTS": 42.1
        },
        "QAR 52": {
          "PTS": 39.6
        },
        "QAR 60": {
          "PTS": 60.3,
          "MP10": 29.6
        },
        "QAR 61": {
          "PTS": 46.6,
          "MP10": 20.6
        },
        "QAR 62": {
          "PTS": 61.2,
          "MP10": 24.3
        },
        "QAR 63": {
          "PTS": 55.6,
          "MP10": 28.2
        },
        "QAR 64": {
          "PTS": 51.2,
          "MP10": 27.6
        }
      }
    },
    {
      "date": "2026-07-16",
      "date_br": "16/07/2026",
      "month": "Julho",
      "month_num": 7,
      "year": 2026,
      "day_of_week": "Quinta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 41.2
        },
        "QAR 47": {
          "PTS": 44.5
        },
        "QAR 48": {
          "PTS": 52.3
        },
        "QAR 49": {
          "PTS": 58.6
        },
        "QAR 50": {
          "PTS": 36.6
        },
        "QAR 52": {
          "PTS": 45.2
        },
        "QAR 60": {
          "PTS": 54.5,
          "MP10": 29.3
        },
        "QAR 61": {
          "PTS": 49.6,
          "MP10": 21.3
        },
        "QAR 62": {
          "PTS": 52.3,
          "MP10": 22.3
        },
        "QAR 63": {
          "PTS": 64.2,
          "MP10": 32.3
        },
        "QAR 64": {
          "PTS": 55.8,
          "MP10": 31.2
        }
      }
    },
    {
      "date": "2026-07-22",
      "date_br": "22/07/2026",
      "month": "Julho",
      "month_num": 7,
      "year": 2026,
      "day_of_week": "Quarta-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 48.3
        },
        "QAR 47": {
          "PTS": 52.2
        },
        "QAR 48": {
          "PTS": 47.5
        },
        "QAR 49": {
          "PTS": 52.3
        },
        "QAR 50": {
          "PTS": 47.8
        },
        "QAR 52": {
          "PTS": 41.2
        },
        "QAR 60": {
          "PTS": 62.3,
          "MP10": 31.2
        },
        "QAR 61": {
          "PTS": 50.2,
          "MP10": 23.2
        },
        "QAR 62": {
          "PTS": 54.8,
          "MP10": 26.3
        },
        "QAR 63": {
          "PTS": 52.3,
          "MP10": 28.1
        },
        "QAR 64": {
          "PTS": 61.2,
          "MP10": 30.3
        }
      }
    },
    {
      "date": "2026-07-28",
      "date_br": "28/07/2026",
      "month": "Julho",
      "month_num": 7,
      "year": 2026,
      "day_of_week": "Terça-feira",
      "season": "Inverno (Período Seco / Crítico)",
      "readings": {
        "PPE": {
          "PTS": 51.2
        },
        "QAR 47": {
          "PTS": 41.2
        },
        "QAR 48": {
          "PTS": 42.3
        },
        "QAR 49": {
          "PTS": 42.3
        },
        "QAR 50": {
          "PTS": 45.1
        },
        "QAR 52": {
          "PTS": 47.3
        },
        "QAR 60": {
          "PTS": 58.6,
          "MP10": 30.4
        },
        "QAR 61": {
          "PTS": 47.3,
          "MP10": 20.5
        },
        "QAR 62": {
          "PTS": 49.6,
          "MP10": 24.1
        },
        "QAR 63": {
          "PTS": 57.2,
          "MP10": 28.3
        },
        "QAR 64": {
          "PTS": 57.2,
          "MP10": 29.6
        }
      }
    }
  ],
  "station_series": {
    "PPE": {
      "metadata": {
        "id": "PPE",
        "name": "PPE",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 609328.0,
        "utm_n": 7783545.0,
        "lat": -20.041857,
        "lng": -43.95462,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 38.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 39.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 33.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 28.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 31.2,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 39.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 32.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 42.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 48.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 53.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 55.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 59.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 60.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 62.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 65.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 70.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 74.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 80.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 89.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 84.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 96.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 106.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 112.5,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 95.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 114.5,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 127.5,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 132.5,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 138.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 125.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 142.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 95.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 101.7,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 111.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 92.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 89.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 68.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 92.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 81.5,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 77.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 36.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 15.8,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 88.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 67.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 52.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 48.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 30.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 66.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 48.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 26.2,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 24.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 25.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 24.8,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 25.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 30.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 24.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 17.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 14.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 12.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 15.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 19.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 14.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 26.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 30.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 24.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 30.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 28.6,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 24.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 19.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 26.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 12.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 9.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 16.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 5.5,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 8.9,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 7.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 21.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 29.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 30.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 35.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 39.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 43.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 48.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 46.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 44.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 32.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 56.0,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 42.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 36.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 61.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 52.2,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 35.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 37.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 35.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 41.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 48.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 51.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            38.3,
            39.6,
            33.3,
            28.3,
            31.2,
            39.6,
            32.3,
            42.3,
            48.9,
            53.2,
            55.6,
            59.6,
            60.3,
            62.6,
            65.3,
            70.5,
            74.5,
            80.3,
            89.6,
            84.2,
            96.6,
            106.3,
            112.5,
            95.6,
            114.5,
            127.5,
            132.5,
            138.6,
            125.5,
            142.5,
            95.6,
            101.7,
            111.0,
            92.3,
            89.3,
            68.3,
            92.3,
            81.5,
            77.2,
            36.6,
            15.8,
            88.2,
            67.3,
            52.3,
            48.3,
            30.7,
            66.1,
            48.6,
            26.2,
            24.1,
            25.8,
            24.8,
            25.6,
            30.1,
            24.7,
            17.3,
            14.2,
            12.3,
            15.6,
            19.3,
            14.2,
            26.1,
            30.1,
            24.8,
            30.8,
            28.6,
            24.2,
            19.3,
            26.6,
            12.2,
            9.6,
            16.3,
            5.5,
            8.9,
            7.2,
            21.2,
            29.3,
            30.3,
            35.3,
            39.3,
            43.3,
            48.3,
            46.5,
            44.2,
            32.3,
            56.0,
            42.2,
            36.3,
            61.2,
            52.2,
            35.3,
            37.3,
            35.2,
            41.2,
            48.3,
            51.2
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            77.34,
            76.8,
            76.26,
            75.71,
            75.17,
            74.63,
            74.09,
            73.55,
            73.01,
            72.47,
            71.92,
            71.38,
            70.84,
            70.3,
            69.76,
            69.22,
            68.68,
            68.13,
            67.59,
            67.05,
            66.51,
            65.97,
            65.43,
            64.89,
            64.34,
            63.8,
            63.26,
            62.72,
            62.18,
            61.64,
            61.1,
            60.55,
            60.01,
            59.47,
            58.93,
            58.39,
            57.85,
            57.3,
            56.76,
            56.22,
            55.68,
            55.14,
            54.6,
            54.06,
            53.51,
            52.97,
            52.43,
            51.89,
            51.35,
            50.81,
            50.27,
            49.72,
            49.18,
            48.64,
            48.1,
            47.56,
            47.02,
            46.48,
            45.93,
            45.39,
            44.85,
            44.31,
            43.77,
            43.23,
            42.69,
            42.14,
            41.6,
            41.06,
            40.52,
            39.98,
            39.44,
            38.9,
            38.35,
            37.81,
            37.27,
            36.73,
            36.19,
            35.65,
            35.11,
            34.56,
            34.02,
            33.48,
            32.94,
            32.4,
            31.86,
            31.32,
            30.77,
            30.23,
            29.69,
            29.15,
            28.61,
            28.07,
            27.53,
            26.98,
            26.44,
            25.9
          ],
          "stats": {
            "count": 96,
            "mean": 51.62,
            "min": 5.5,
            "max": 142.5,
            "std": 33.19
          }
        }
      }
    },
    "QAR 47": {
      "metadata": {
        "id": "QAR 47",
        "name": "QAR 47",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 607596.0,
        "utm_n": 7776159.0,
        "lat": -20.108687,
        "lng": -43.970743,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 37.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 36.5,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 32.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 26.5,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 30.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 42.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 37.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 44.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 51.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 58.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 65.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 68.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 70.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 75.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 74.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 83.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 92.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 102.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 95.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 97.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 109.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 116.8,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 121.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 115.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 119.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 124.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 132.5,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 131.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 135.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 142.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 90.7,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 100.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 106.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 88.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 74.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 75.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 68.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 74.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 64.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 41.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 14.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 19.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 36.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 34.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 36.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 46.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 69.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 42.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 46.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 59.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 51.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 55.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 64.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 53.5,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 55.8,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 21.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 20.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 18.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 18.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 15.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 36.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 38.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 20.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 23.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 19.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 16.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 12.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 16.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 18.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 12.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 15.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 6.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 9.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 8.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 23.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 32.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 35.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 38.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 42.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 52.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 57.4,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 53.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 51.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 42.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 52.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 39.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 42.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 58.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 49.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 39.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 35.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 41.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 44.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 52.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 41.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            37.1,
            36.5,
            32.6,
            26.5,
            30.9,
            42.3,
            37.2,
            44.6,
            51.9,
            58.6,
            65.3,
            68.3,
            70.5,
            75.6,
            74.3,
            83.2,
            92.3,
            102.6,
            95.3,
            97.3,
            109.3,
            116.8,
            121.2,
            115.2,
            119.6,
            124.2,
            132.5,
            131.2,
            135.6,
            142.3,
            90.7,
            100.9,
            106.3,
            88.3,
            74.6,
            75.3,
            68.3,
            74.2,
            64.3,
            41.3,
            14.2,
            19.3,
            36.3,
            34.2,
            36.6,
            46.6,
            69.3,
            42.1,
            46.6,
            59.9,
            51.4,
            55.4,
            64.6,
            53.5,
            55.8,
            21.2,
            20.3,
            18.6,
            16.3,
            18.6,
            15.6,
            36.4,
            38.3,
            20.0,
            23.8,
            19.9,
            16.5,
            12.6,
            16.6,
            18.6,
            12.6,
            15.2,
            6.2,
            9.3,
            8.6,
            23.6,
            32.3,
            35.6,
            38.6,
            42.3,
            52.1,
            57.4,
            53.2,
            51.2,
            42.2,
            52.3,
            39.3,
            42.2,
            58.3,
            49.3,
            39.3,
            35.2,
            41.5,
            44.5,
            52.2,
            41.2
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            81.39,
            80.82,
            80.26,
            79.69,
            79.12,
            78.56,
            77.99,
            77.42,
            76.86,
            76.29,
            75.72,
            75.16,
            74.59,
            74.02,
            73.46,
            72.89,
            72.32,
            71.76,
            71.19,
            70.62,
            70.06,
            69.49,
            68.93,
            68.36,
            67.79,
            67.23,
            66.66,
            66.09,
            65.53,
            64.96,
            64.39,
            63.83,
            63.26,
            62.69,
            62.13,
            61.56,
            60.99,
            60.43,
            59.86,
            59.29,
            58.73,
            58.16,
            57.59,
            57.03,
            56.46,
            55.89,
            55.33,
            54.76,
            54.19,
            53.63,
            53.06,
            52.49,
            51.93,
            51.36,
            50.79,
            50.23,
            49.66,
            49.09,
            48.53,
            47.96,
            47.39,
            46.83,
            46.26,
            45.7,
            45.13,
            44.56,
            44.0,
            43.43,
            42.86,
            42.3,
            41.73,
            41.16,
            40.6,
            40.03,
            39.46,
            38.9,
            38.33,
            37.76,
            37.2,
            36.63,
            36.06,
            35.5,
            34.93,
            34.36,
            33.8,
            33.23,
            32.66,
            32.1,
            31.53,
            30.96,
            30.4,
            29.83,
            29.26,
            28.7,
            28.13,
            27.56
          ],
          "stats": {
            "count": 96,
            "mean": 54.48,
            "min": 6.2,
            "max": 142.3,
            "std": 33.5
          }
        }
      }
    },
    "QAR 48": {
      "metadata": {
        "id": "QAR 48",
        "name": "QAR 48",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 609117.0,
        "utm_n": 7773453.0,
        "lat": -20.133051,
        "lng": -43.956033,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 36.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 44.5,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 30.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 31.2,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 33.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 47.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 35.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 45.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 53.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 60.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 68.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 76.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 80.2,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 82.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 84.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 108.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 112.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 102.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 98.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 94.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 102.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 118.5,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 115.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 110.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 113.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 125.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 134.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 129.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 145.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 135.8,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 87.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 97.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 104.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 92.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 84.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 83.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 52.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 81.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 74.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 29.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 17.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 55.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 55.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 48.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 38.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 52.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 93.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 97.2,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 93.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 97.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 80.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 45.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 38.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 25.9,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 25.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 19.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 18.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 16.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 15.9,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 14.5,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 39.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 38.5,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 21.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 15.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 6.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 15.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 13.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 14.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 15.9,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 14.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 18.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 8.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 10.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 7.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 28.3,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 36.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 44.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 43.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 46.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 57.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 59.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 62.8,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 62.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 41.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 48.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 41.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 43.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 44.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 43.8,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 51.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 42.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 46.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 52.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 47.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 42.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            36.3,
            44.5,
            30.3,
            31.2,
            33.6,
            47.6,
            35.6,
            45.2,
            53.6,
            60.3,
            68.6,
            76.5,
            80.2,
            82.3,
            84.6,
            108.6,
            112.3,
            102.2,
            98.6,
            94.5,
            102.3,
            118.5,
            115.6,
            110.2,
            113.3,
            125.6,
            134.2,
            129.6,
            145.5,
            135.8,
            87.9,
            97.5,
            104.0,
            92.3,
            84.3,
            83.3,
            52.3,
            81.2,
            74.2,
            29.3,
            17.2,
            55.9,
            55.2,
            48.3,
            38.9,
            52.8,
            93.0,
            97.2,
            93.0,
            97.1,
            80.3,
            45.3,
            38.6,
            25.9,
            25.1,
            19.3,
            18.6,
            16.6,
            15.9,
            14.5,
            16.3,
            39.3,
            38.5,
            21.2,
            15.0,
            6.1,
            15.2,
            13.2,
            14.5,
            15.9,
            14.6,
            18.2,
            8.6,
            10.2,
            7.6,
            28.3,
            36.6,
            44.2,
            43.2,
            46.3,
            57.6,
            59.6,
            62.8,
            62.3,
            41.5,
            48.6,
            41.2,
            43.2,
            44.2,
            43.8,
            51.3,
            42.1,
            46.5,
            52.3,
            47.5,
            42.3
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            86.06,
            85.46,
            84.86,
            84.26,
            83.66,
            83.07,
            82.47,
            81.87,
            81.27,
            80.67,
            80.07,
            79.47,
            78.87,
            78.28,
            77.68,
            77.08,
            76.48,
            75.88,
            75.28,
            74.68,
            74.09,
            73.49,
            72.89,
            72.29,
            71.69,
            71.09,
            70.49,
            69.9,
            69.3,
            68.7,
            68.1,
            67.5,
            66.9,
            66.3,
            65.71,
            65.11,
            64.51,
            63.91,
            63.31,
            62.71,
            62.11,
            61.52,
            60.92,
            60.32,
            59.72,
            59.12,
            58.52,
            57.92,
            57.33,
            56.73,
            56.13,
            55.53,
            54.93,
            54.33,
            53.73,
            53.14,
            52.54,
            51.94,
            51.34,
            50.74,
            50.14,
            49.54,
            48.95,
            48.35,
            47.75,
            47.15,
            46.55,
            45.95,
            45.35,
            44.76,
            44.16,
            43.56,
            42.96,
            42.36,
            41.76,
            41.16,
            40.57,
            39.97,
            39.37,
            38.77,
            38.17,
            37.57,
            36.97,
            36.38,
            35.78,
            35.18,
            34.58,
            33.98,
            33.38,
            32.78,
            32.18,
            31.59,
            30.99,
            30.39,
            29.79,
            29.19
          ],
          "stats": {
            "count": 96,
            "mean": 57.62,
            "min": 6.1,
            "max": 145.5,
            "std": 35.17
          }
        }
      }
    },
    "QAR 49": {
      "metadata": {
        "id": "QAR 49",
        "name": "QAR 49",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 596610.0,
        "utm_n": 7777143.0,
        "lat": -20.100378,
        "lng": -44.075876,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 35.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 42.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 29.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 27.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 32.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 38.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 34.1,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 48.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 52.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 63.8,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 66.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 80.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 78.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 72.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 76.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 88.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 96.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 91.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 97.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 102.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 116.9,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 118.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 121.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 125.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 117.0,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 124.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 136.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 131.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 135.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 141.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 101.2,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 112.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 124.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 89.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 94.2,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 69.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 74.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 75.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 65.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 15.8,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 12.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 50.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 82.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 52.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 47.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 56.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 110.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 55.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 70.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 56.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 53.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 37.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 12.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 29.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 24.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 17.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 12.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 15.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 14.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 12.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 15.9,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 38.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 14.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 16.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 19.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 15.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 13.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 14.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 15.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 13.9,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 16.8,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 19.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 6.8,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 8.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 8.1,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 25.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 39.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 42.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 44.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 48.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 58.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 60.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 61.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 66.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 52.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 39.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 32.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 39.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 37.5,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 38.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 33.2,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 32.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 46.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 58.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 52.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 42.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            35.3,
            42.3,
            29.9,
            27.6,
            32.6,
            38.2,
            34.1,
            48.6,
            52.6,
            63.8,
            66.3,
            80.3,
            78.3,
            72.3,
            76.3,
            88.3,
            96.3,
            91.2,
            97.6,
            102.3,
            116.9,
            118.6,
            121.2,
            125.6,
            117.0,
            124.2,
            136.6,
            131.2,
            135.6,
            141.5,
            101.2,
            112.8,
            124.8,
            89.3,
            94.2,
            69.3,
            74.2,
            75.6,
            65.3,
            15.8,
            12.3,
            50.2,
            82.3,
            52.3,
            47.2,
            56.4,
            110.7,
            55.3,
            70.8,
            56.4,
            53.3,
            37.1,
            12.3,
            29.4,
            24.1,
            17.6,
            12.6,
            15.3,
            14.2,
            12.3,
            15.9,
            38.9,
            14.1,
            16.7,
            19.0,
            15.9,
            13.3,
            14.5,
            15.5,
            13.9,
            16.8,
            19.6,
            6.8,
            8.6,
            8.1,
            25.2,
            39.6,
            42.3,
            44.1,
            48.6,
            58.6,
            60.2,
            61.2,
            66.5,
            52.6,
            39.6,
            32.3,
            39.3,
            37.5,
            38.6,
            33.2,
            32.3,
            46.6,
            58.6,
            52.3,
            42.3
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            85.07,
            84.45,
            83.83,
            83.22,
            82.6,
            81.99,
            81.37,
            80.75,
            80.14,
            79.52,
            78.9,
            78.29,
            77.67,
            77.06,
            76.44,
            75.82,
            75.21,
            74.59,
            73.97,
            73.36,
            72.74,
            72.13,
            71.51,
            70.89,
            70.28,
            69.66,
            69.04,
            68.43,
            67.81,
            67.2,
            66.58,
            65.96,
            65.35,
            64.73,
            64.11,
            63.5,
            62.88,
            62.27,
            61.65,
            61.03,
            60.42,
            59.8,
            59.18,
            58.57,
            57.95,
            57.34,
            56.72,
            56.1,
            55.49,
            54.87,
            54.25,
            53.64,
            53.02,
            52.41,
            51.79,
            51.17,
            50.56,
            49.94,
            49.32,
            48.71,
            48.09,
            47.48,
            46.86,
            46.24,
            45.63,
            45.01,
            44.39,
            43.78,
            43.16,
            42.55,
            41.93,
            41.31,
            40.7,
            40.08,
            39.46,
            38.85,
            38.23,
            37.62,
            37.0,
            36.38,
            35.77,
            35.15,
            34.53,
            33.92,
            33.3,
            32.68,
            32.07,
            31.45,
            30.84,
            30.22,
            29.6,
            28.99,
            28.37,
            27.75,
            27.14,
            26.52
          ],
          "stats": {
            "count": 96,
            "mean": 55.79,
            "min": 6.8,
            "max": 141.5,
            "std": 36.48
          }
        }
      }
    },
    "QAR 50": {
      "metadata": {
        "id": "QAR 50",
        "name": "QAR 50",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 593272.0,
        "utm_n": 7773285.0,
        "lat": -20.135401,
        "lng": -44.107605,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 32.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 40.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 31.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 30.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 34.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 41.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 37.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 54.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 58.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 62.8,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 69.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 68.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 75.2,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 74.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 77.2,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 86.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 85.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 84.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 93.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 94.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 92.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 98.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 106.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 110.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 108.9,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 119.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 131.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 135.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 132.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 142.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 95.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 111.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 117.1,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 92.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 96.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 98.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 67.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 85.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 74.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 19.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 6.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 41.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 40.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 19.1,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 28.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 59.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 101.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 23.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 47.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 24.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 23.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 33.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 34.8,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 36.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 26.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 18.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 21.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 18.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 19.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 15.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 31.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 31.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 29.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 24.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 17.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 16.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 14.4,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 15.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 16.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 13.8,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 20.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 5.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 6.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 7.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 19.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 37.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 44.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 45.9,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 52.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 48.4,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 51.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 55.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 57.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 44.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 36.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 42.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 41.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 47.5,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 38.9,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 48.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 51.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 42.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 36.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 47.8,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 45.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            32.1,
            40.9,
            31.6,
            30.3,
            34.6,
            41.5,
            37.6,
            54.2,
            58.6,
            62.8,
            69.3,
            68.3,
            75.2,
            74.6,
            77.2,
            86.3,
            85.6,
            84.6,
            93.2,
            94.5,
            92.3,
            98.6,
            106.6,
            110.2,
            108.9,
            119.6,
            131.2,
            135.3,
            132.3,
            142.2,
            95.6,
            111.0,
            117.1,
            92.3,
            96.3,
            98.3,
            67.6,
            85.3,
            74.3,
            19.6,
            6.3,
            41.9,
            40.4,
            19.1,
            28.6,
            59.7,
            101.5,
            23.1,
            47.4,
            24.8,
            23.1,
            33.3,
            34.8,
            36.1,
            26.4,
            18.6,
            21.3,
            16.3,
            18.6,
            19.3,
            15.6,
            31.1,
            31.9,
            29.7,
            24.2,
            17.7,
            16.5,
            14.4,
            15.2,
            16.3,
            13.8,
            20.2,
            5.2,
            6.6,
            7.2,
            19.6,
            37.2,
            44.6,
            45.9,
            52.3,
            48.4,
            51.2,
            55.5,
            57.2,
            44.2,
            36.5,
            42.3,
            41.2,
            47.5,
            38.9,
            48.6,
            51.2,
            42.1,
            36.6,
            47.8,
            45.1
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            80.41,
            79.84,
            79.27,
            78.69,
            78.12,
            77.55,
            76.97,
            76.4,
            75.83,
            75.26,
            74.68,
            74.11,
            73.54,
            72.96,
            72.39,
            71.82,
            71.25,
            70.67,
            70.1,
            69.53,
            68.96,
            68.38,
            67.81,
            67.24,
            66.66,
            66.09,
            65.52,
            64.95,
            64.37,
            63.8,
            63.23,
            62.66,
            62.08,
            61.51,
            60.94,
            60.36,
            59.79,
            59.22,
            58.65,
            58.07,
            57.5,
            56.93,
            56.36,
            55.78,
            55.21,
            54.64,
            54.06,
            53.49,
            52.92,
            52.35,
            51.77,
            51.2,
            50.63,
            50.06,
            49.48,
            48.91,
            48.34,
            47.76,
            47.19,
            46.62,
            46.05,
            45.47,
            44.9,
            44.33,
            43.75,
            43.18,
            42.61,
            42.04,
            41.46,
            40.89,
            40.32,
            39.75,
            39.17,
            38.6,
            38.03,
            37.45,
            36.88,
            36.31,
            35.74,
            35.16,
            34.59,
            34.02,
            33.45,
            32.87,
            32.3,
            31.73,
            31.15,
            30.58,
            30.01,
            29.44,
            28.86,
            28.29,
            27.72,
            27.15,
            26.57,
            26.0
          ],
          "stats": {
            "count": 96,
            "mean": 53.21,
            "min": 5.2,
            "max": 142.2,
            "std": 34.21
          }
        }
      }
    },
    "QAR 52": {
      "metadata": {
        "id": "QAR 52",
        "name": "QAR 52",
        "cluster": "Cluster Norte (Área Operacional / Cava)",
        "utm_e": 609618.0,
        "utm_n": 7786477.0,
        "lat": -20.015349,
        "lng": -43.952023,
        "has_coords": true,
        "parameters": [
          "PTS"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 28.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 47.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 33.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 31.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 29.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 41.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 37.4,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 57.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 62.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 64.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 72.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 74.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 75.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 74.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 76.2,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 81.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 82.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 86.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 85.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 89.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 94.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 105.7,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 109.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 101.1,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 99.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 119.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 125.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 123.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 129.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 135.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 98.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 111.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 117.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 102.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 90.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 93.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 95.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 71.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 53.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 22.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 19.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 40.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 59.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 45.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 32.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 49.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 31.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 61.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 89.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 31.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 14.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 29.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 40.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 30.8,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 31.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 25.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 23.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 21.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 20.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 18.9,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 41.6,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 34.5,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 21.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 20.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 19.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 21.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 12.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 16.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 14.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 16.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 18.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 6.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 7.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 8.5,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 21.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 32.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 39.4,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 40.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 42.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 52.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 53.9,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 49.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 54.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 50.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 38.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 41.5,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 44.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 52.1,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 49.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 37.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 34.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 39.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 45.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 41.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 47.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            28.6,
            47.6,
            33.6,
            31.6,
            29.6,
            41.2,
            37.4,
            57.3,
            62.5,
            64.3,
            72.3,
            74.6,
            75.6,
            74.6,
            76.2,
            81.2,
            82.3,
            86.6,
            85.6,
            89.3,
            94.6,
            105.7,
            109.6,
            101.1,
            99.3,
            119.6,
            125.2,
            123.3,
            129.3,
            135.2,
            98.8,
            111.5,
            117.8,
            102.0,
            90.3,
            93.3,
            95.3,
            71.2,
            53.3,
            22.3,
            19.3,
            40.2,
            59.3,
            45.2,
            32.3,
            49.4,
            31.3,
            61.9,
            89.4,
            31.3,
            14.9,
            29.4,
            40.4,
            30.8,
            31.1,
            25.2,
            23.3,
            21.2,
            20.3,
            18.9,
            16.3,
            41.6,
            34.5,
            21.4,
            20.9,
            19.7,
            21.3,
            12.2,
            16.6,
            14.2,
            16.3,
            18.6,
            6.2,
            7.2,
            8.5,
            21.2,
            32.3,
            39.4,
            40.6,
            42.1,
            52.3,
            53.9,
            49.6,
            54.5,
            50.3,
            38.6,
            41.5,
            44.6,
            52.1,
            49.6,
            37.6,
            34.2,
            39.6,
            45.2,
            41.2,
            47.3
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            80.84,
            80.26,
            79.69,
            79.11,
            78.53,
            77.96,
            77.38,
            76.8,
            76.22,
            75.65,
            75.07,
            74.49,
            73.92,
            73.34,
            72.76,
            72.18,
            71.61,
            71.03,
            70.45,
            69.88,
            69.3,
            68.72,
            68.14,
            67.57,
            66.99,
            66.41,
            65.84,
            65.26,
            64.68,
            64.1,
            63.53,
            62.95,
            62.37,
            61.8,
            61.22,
            60.64,
            60.06,
            59.49,
            58.91,
            58.33,
            57.76,
            57.18,
            56.6,
            56.02,
            55.45,
            54.87,
            54.29,
            53.72,
            53.14,
            52.56,
            51.98,
            51.41,
            50.83,
            50.25,
            49.68,
            49.1,
            48.52,
            47.94,
            47.37,
            46.79,
            46.21,
            45.64,
            45.06,
            44.48,
            43.9,
            43.33,
            42.75,
            42.17,
            41.6,
            41.02,
            40.44,
            39.86,
            39.29,
            38.71,
            38.13,
            37.56,
            36.98,
            36.4,
            35.82,
            35.25,
            34.67,
            34.09,
            33.52,
            32.94,
            32.36,
            31.78,
            31.21,
            30.63,
            30.05,
            29.48,
            28.9,
            28.32,
            27.74,
            27.17,
            26.59,
            26.01
          ],
          "stats": {
            "count": 96,
            "mean": 53.43,
            "min": 6.2,
            "max": 135.2,
            "std": 32.67
          }
        }
      }
    },
    "QAR 60": {
      "metadata": {
        "id": "QAR 60",
        "name": "QAR 60",
        "cluster": "Cluster Sul (Comunidades / Entorno)",
        "utm_e": 616725.0,
        "utm_n": 7733995.0,
        "lat": -20.489093,
        "lng": -43.880694,
        "has_coords": true,
        "parameters": [
          "PTS",
          "MP10"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 30.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 49.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 30.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 29.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 28.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 39.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 35.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 49.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 58.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 62.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 68.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 65.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 72.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 77.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 76.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 84.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 86.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 85.9,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 98.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 105.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 98.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 108.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 114.5,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 116.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 97.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 109.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 119.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 136.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 142.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 138.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 93.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 101.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 111.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 94.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 91.2,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 82.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 92.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 81.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 75.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 69.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 67.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 34.7,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 99.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 86.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 70.1,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 55.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 62.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 24.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 85.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 51.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 34.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 45.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 44.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 26.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 41.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 38.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 40.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 36.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 31.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 35.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 29.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 53.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 40.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 38.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 38.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 35.5,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 26.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 18.9,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 22.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 17.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 21.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 29.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 7.4,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 10.5,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 9.1,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 24.3,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 42.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 58.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 62.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 48.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 67.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 72.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 65.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 82.1,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 74.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 61.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 54.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 39.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 41.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 34.2,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 55.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 59.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 60.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 54.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 62.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 58.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            30.3,
            49.3,
            30.9,
            29.7,
            28.4,
            39.6,
            35.9,
            49.6,
            58.3,
            62.9,
            68.3,
            65.3,
            72.3,
            77.3,
            76.3,
            84.3,
            86.6,
            85.9,
            98.3,
            105.3,
            98.3,
            108.6,
            114.5,
            116.6,
            97.3,
            109.6,
            119.6,
            136.6,
            142.2,
            138.3,
            93.9,
            101.9,
            111.0,
            94.3,
            91.2,
            82.3,
            92.3,
            81.2,
            75.3,
            69.3,
            67.4,
            34.7,
            99.2,
            86.4,
            70.1,
            55.8,
            62.5,
            24.1,
            85.9,
            51.7,
            34.0,
            45.7,
            44.1,
            26.1,
            41.7,
            38.3,
            40.6,
            36.2,
            31.2,
            35.6,
            29.6,
            53.8,
            40.8,
            38.4,
            38.9,
            35.5,
            26.3,
            18.9,
            22.3,
            17.3,
            21.2,
            29.3,
            7.4,
            10.5,
            9.1,
            24.3,
            42.3,
            58.6,
            62.3,
            48.6,
            67.3,
            72.2,
            65.6,
            82.1,
            74.5,
            61.2,
            54.2,
            39.6,
            41.3,
            34.2,
            55.3,
            59.6,
            60.3,
            54.5,
            62.3,
            58.6
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            81.45,
            81.03,
            80.6,
            80.18,
            79.76,
            79.34,
            78.92,
            78.5,
            78.08,
            77.66,
            77.24,
            76.81,
            76.39,
            75.97,
            75.55,
            75.13,
            74.71,
            74.29,
            73.87,
            73.45,
            73.02,
            72.6,
            72.18,
            71.76,
            71.34,
            70.92,
            70.5,
            70.08,
            69.66,
            69.23,
            68.81,
            68.39,
            67.97,
            67.55,
            67.13,
            66.71,
            66.29,
            65.87,
            65.44,
            65.02,
            64.6,
            64.18,
            63.76,
            63.34,
            62.92,
            62.5,
            62.08,
            61.65,
            61.23,
            60.81,
            60.39,
            59.97,
            59.55,
            59.13,
            58.71,
            58.29,
            57.86,
            57.44,
            57.02,
            56.6,
            56.18,
            55.76,
            55.34,
            54.92,
            54.5,
            54.07,
            53.65,
            53.23,
            52.81,
            52.39,
            51.97,
            51.55,
            51.13,
            50.71,
            50.28,
            49.86,
            49.44,
            49.02,
            48.6,
            48.18,
            47.76,
            47.34,
            46.92,
            46.49,
            46.07,
            45.65,
            45.23,
            44.81,
            44.39,
            43.97,
            43.55,
            43.12,
            42.7,
            42.28,
            41.86,
            41.44
          ],
          "stats": {
            "count": 96,
            "mean": 61.44,
            "min": 7.4,
            "max": 142.2,
            "std": 30.79
          }
        },
        "MP10": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 6.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 9.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 7.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 6.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 8.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 11.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 6.1,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 10.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 12.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 13.1,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 14.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 15.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 16.2,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 17.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 17.5,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 16.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 18.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 19.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 17.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 20.1,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 18.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 19.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 21.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 22.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 17.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 19.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 21.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 23.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 21.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 20.8,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 15.1,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 18.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 19.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 12.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 22.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 19.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 16.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 12.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 15.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 21.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 18.0,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 8.8,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 12.7,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 32.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 19.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 21.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 23.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 9.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 54.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 30.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 15.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 26.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 24.5,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 4.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 22.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 21.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 19.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 18.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 12.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 15.4,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 14.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 25.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 23.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 15.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 16.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 14.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 13.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 9.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 12.12,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 9.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 11.7,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 14.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 4.1,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 5.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 4.9,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 12.1,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 27.918,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 38.676,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 41.118,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 32.076,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 44.418,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 28.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 25.4,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 26.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 22.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 19.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 23.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 17.5,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 19.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 16.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 22.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 32.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 29.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 29.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 31.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 30.4,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            6.3,
            9.3,
            7.9,
            6.3,
            8.3,
            11.2,
            6.1,
            10.9,
            12.6,
            13.1,
            14.5,
            15.6,
            16.2,
            17.3,
            17.5,
            16.5,
            18.3,
            19.2,
            17.2,
            20.1,
            18.6,
            19.6,
            21.3,
            22.2,
            17.3,
            19.6,
            21.3,
            23.2,
            21.5,
            20.8,
            15.1,
            18.6,
            19.3,
            12.3,
            22.8,
            19.3,
            16.6,
            12.2,
            15.3,
            21.3,
            18.0,
            8.8,
            12.7,
            32.4,
            19.3,
            21.3,
            23.3,
            9.3,
            54.7,
            30.0,
            15.9,
            26.3,
            24.5,
            4.6,
            22.4,
            21.3,
            19.6,
            18.6,
            12.3,
            15.4,
            14.2,
            25.4,
            23.1,
            15.7,
            16.1,
            14.2,
            13.1,
            9.5,
            12.12,
            9.5,
            11.7,
            14.2,
            4.1,
            5.6,
            4.9,
            12.1,
            27.918,
            38.676,
            41.118,
            32.076,
            44.418,
            28.6,
            25.4,
            26.3,
            22.2,
            19.6,
            23.2,
            17.5,
            19.3,
            16.1,
            22.1,
            32.3,
            29.6,
            29.3,
            31.2,
            30.4
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            13.18,
            13.3,
            13.42,
            13.54,
            13.66,
            13.79,
            13.91,
            14.03,
            14.15,
            14.27,
            14.39,
            14.51,
            14.63,
            14.75,
            14.87,
            14.99,
            15.11,
            15.23,
            15.36,
            15.48,
            15.6,
            15.72,
            15.84,
            15.96,
            16.08,
            16.2,
            16.32,
            16.44,
            16.56,
            16.68,
            16.8,
            16.93,
            17.05,
            17.17,
            17.29,
            17.41,
            17.53,
            17.65,
            17.77,
            17.89,
            18.01,
            18.13,
            18.25,
            18.37,
            18.5,
            18.62,
            18.74,
            18.86,
            18.98,
            19.1,
            19.22,
            19.34,
            19.46,
            19.58,
            19.7,
            19.82,
            19.94,
            20.07,
            20.19,
            20.31,
            20.43,
            20.55,
            20.67,
            20.79,
            20.91,
            21.03,
            21.15,
            21.27,
            21.39,
            21.51,
            21.64,
            21.76,
            21.88,
            22.0,
            22.12,
            22.24,
            22.36,
            22.48,
            22.6,
            22.72,
            22.84,
            22.96,
            23.08,
            23.21,
            23.33,
            23.45,
            23.57,
            23.69,
            23.81,
            23.93,
            24.05,
            24.17,
            24.29,
            24.41,
            24.53,
            24.65
          ],
          "stats": {
            "count": 96,
            "mean": 18.92,
            "min": 4.1,
            "max": 54.7,
            "std": 8.71
          }
        }
      }
    },
    "QAR 61": {
      "metadata": {
        "id": "QAR 61",
        "name": "QAR 61",
        "cluster": "Cluster Sul (Comunidades / Entorno)",
        "utm_e": 613559.0,
        "utm_n": 7731184.0,
        "lat": -20.514682,
        "lng": -43.91087,
        "has_coords": true,
        "parameters": [
          "PTS",
          "MP10"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 24.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 44.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 29.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 32.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 28.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 38.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 34.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 45.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 52.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 60.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 75.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 76.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 80.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 85.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 84.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 84.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 96.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 105.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 108.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 112.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 119.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 125.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 131.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 121.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 118.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 128.9,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 135.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 138.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 141.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 145.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 93.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 109.4,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 112.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 86.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 94.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 91.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 92.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 74.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 62.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 45.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 93.1,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 58.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 84.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 61.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 43.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 73.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 72.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 47.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 76.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 82.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 40.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 80.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 60.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 58.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 61.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 33.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 31.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 28.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 26.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 33.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 31.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 46.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 49.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 19.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 21.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 60.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 42.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 39.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 35.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 31.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 29.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 35.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 12.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 19.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 15.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 24.5,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 46.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 58.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 64.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 49.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 59.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 68.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 69.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 77.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 66.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 52.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 66.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 51.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 41.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 48.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 50.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 48.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 46.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 49.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 50.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 47.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            24.6,
            44.1,
            29.6,
            32.1,
            28.3,
            38.2,
            34.5,
            45.6,
            52.9,
            60.9,
            75.6,
            76.6,
            80.3,
            85.6,
            84.6,
            84.2,
            96.3,
            105.6,
            108.6,
            112.2,
            119.6,
            125.6,
            131.3,
            121.2,
            118.3,
            128.9,
            135.6,
            138.6,
            141.2,
            145.6,
            93.3,
            109.4,
            112.9,
            86.3,
            94.6,
            91.2,
            92.3,
            74.2,
            62.3,
            45.6,
            93.1,
            58.4,
            84.4,
            61.3,
            43.6,
            73.0,
            72.9,
            47.1,
            76.5,
            82.3,
            40.0,
            80.0,
            60.0,
            58.4,
            61.1,
            33.2,
            31.2,
            28.6,
            26.3,
            33.3,
            31.2,
            46.3,
            49.9,
            19.4,
            21.2,
            60.1,
            42.3,
            39.3,
            35.6,
            31.2,
            29.6,
            35.3,
            12.6,
            19.3,
            15.6,
            24.5,
            46.3,
            58.6,
            64.2,
            49.6,
            59.3,
            68.6,
            69.3,
            77.2,
            66.5,
            52.3,
            66.3,
            51.2,
            41.2,
            48.6,
            50.3,
            48.6,
            46.6,
            49.6,
            50.2,
            47.3
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            87.87,
            87.39,
            86.9,
            86.42,
            85.94,
            85.46,
            84.98,
            84.49,
            84.01,
            83.53,
            83.05,
            82.57,
            82.09,
            81.6,
            81.12,
            80.64,
            80.16,
            79.68,
            79.19,
            78.71,
            78.23,
            77.75,
            77.27,
            76.79,
            76.3,
            75.82,
            75.34,
            74.86,
            74.38,
            73.9,
            73.41,
            72.93,
            72.45,
            71.97,
            71.49,
            71.0,
            70.52,
            70.04,
            69.56,
            69.08,
            68.6,
            68.11,
            67.63,
            67.15,
            66.67,
            66.19,
            65.7,
            65.22,
            64.74,
            64.26,
            63.78,
            63.3,
            62.81,
            62.33,
            61.85,
            61.37,
            60.89,
            60.41,
            59.92,
            59.44,
            58.96,
            58.48,
            58.0,
            57.51,
            57.03,
            56.55,
            56.07,
            55.59,
            55.11,
            54.62,
            54.14,
            53.66,
            53.18,
            52.7,
            52.22,
            51.73,
            51.25,
            50.77,
            50.29,
            49.81,
            49.32,
            48.84,
            48.36,
            47.88,
            47.4,
            46.92,
            46.43,
            45.95,
            45.47,
            44.99,
            44.51,
            44.02,
            43.54,
            43.06,
            42.58,
            42.1
          ],
          "stats": {
            "count": 96,
            "mean": 64.98,
            "min": 12.6,
            "max": 145.6,
            "std": 32.53
          }
        },
        "MP10": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 6.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 8.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 7.2,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 8.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 7.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 10.7,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 7.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 9.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 12.1,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 11.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 15.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 14.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 16.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 16.8,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 15.7,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 16.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 15.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 18.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 19.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 18.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 16.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 18.9,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 19.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 20.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 18.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 19.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 23.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 24.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 21.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 22.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 16.2,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 18.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 20.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 19.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 20.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 12.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 15.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 18.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 14.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 16.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 19.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 25.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 22.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 18.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 18.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 14.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 13.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 7.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 29.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 32.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 21.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 39.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 30.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 34.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 33.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 16.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 15.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 14.5,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 15.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 14.1,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 19.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 14.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 11.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 7.5,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 29.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 24.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 23.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 22.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 19.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 18.4,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 19.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 7.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 12.1,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 10.1,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 13.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 30.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 35.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 38.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 30.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 39.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 33.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 28.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 31.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 24.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 18.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 26.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 19.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 17.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 18.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 19.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 22.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 20.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 21.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 23.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 20.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            6.7,
            8.7,
            7.2,
            8.4,
            7.1,
            10.7,
            7.2,
            9.3,
            12.1,
            11.3,
            15.6,
            14.5,
            16.6,
            16.8,
            15.7,
            16.6,
            15.5,
            18.6,
            19.3,
            18.2,
            16.6,
            18.9,
            19.3,
            20.2,
            18.6,
            19.6,
            23.3,
            24.2,
            21.5,
            22.2,
            16.2,
            18.6,
            20.0,
            19.3,
            20.5,
            12.3,
            15.6,
            18.6,
            14.2,
            16.3,
            19.6,
            25.3,
            22.3,
            18.3,
            18.3,
            14.9,
            13.9,
            7.5,
            29.8,
            32.3,
            21.3,
            39.4,
            30.1,
            34.7,
            33.2,
            16.6,
            15.3,
            16.3,
            14.5,
            15.6,
            14.1,
            19.3,
            14.7,
            11.7,
            7.5,
            29.1,
            24.3,
            23.1,
            22.1,
            19.3,
            18.4,
            19.3,
            7.6,
            12.1,
            10.1,
            13.6,
            30.2,
            35.3,
            38.6,
            30.3,
            39.1,
            33.2,
            28.6,
            31.2,
            24.5,
            18.6,
            26.3,
            19.6,
            17.2,
            18.1,
            19.1,
            22.1,
            20.6,
            21.3,
            23.2,
            20.5
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            13.52,
            13.65,
            13.77,
            13.89,
            14.01,
            14.13,
            14.26,
            14.38,
            14.5,
            14.62,
            14.75,
            14.87,
            14.99,
            15.11,
            15.23,
            15.36,
            15.48,
            15.6,
            15.72,
            15.84,
            15.97,
            16.09,
            16.21,
            16.33,
            16.45,
            16.58,
            16.7,
            16.82,
            16.94,
            17.07,
            17.19,
            17.31,
            17.43,
            17.55,
            17.68,
            17.8,
            17.92,
            18.04,
            18.16,
            18.29,
            18.41,
            18.53,
            18.65,
            18.78,
            18.9,
            19.02,
            19.14,
            19.26,
            19.39,
            19.51,
            19.63,
            19.75,
            19.87,
            20.0,
            20.12,
            20.24,
            20.36,
            20.49,
            20.61,
            20.73,
            20.85,
            20.97,
            21.1,
            21.22,
            21.34,
            21.46,
            21.58,
            21.71,
            21.83,
            21.95,
            22.07,
            22.2,
            22.32,
            22.44,
            22.56,
            22.68,
            22.81,
            22.93,
            23.05,
            23.17,
            23.29,
            23.42,
            23.54,
            23.66,
            23.78,
            23.9,
            24.03,
            24.15,
            24.27,
            24.39,
            24.52,
            24.64,
            24.76,
            24.88,
            25.0,
            25.13
          ],
          "stats": {
            "count": 96,
            "mean": 19.32,
            "min": 6.7,
            "max": 39.4,
            "std": 7.51
          }
        }
      }
    },
    "QAR 62": {
      "metadata": {
        "id": "QAR 62",
        "name": "QAR 62",
        "cluster": "Cluster Sul (Comunidades / Entorno)",
        "utm_e": 608178.0,
        "utm_n": 7732231.0,
        "lat": -20.505539,
        "lng": -43.962536,
        "has_coords": true,
        "parameters": [
          "PTS",
          "MP10"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 29.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 45.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 34.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 31.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 30.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 44.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 37.1,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 52.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 54.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 60.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 74.1,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 75.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 80.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 86.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 87.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 98.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 95.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 105.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 108.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 107.0,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 97.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 95.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 102.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 115.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 112.1,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 119.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 115.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 128.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 121.5,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 129.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 91.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 101.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 94.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 83.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 86.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 92.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 96.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 53.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 41.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 39.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 26.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 90.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 62.7,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 82.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 64.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 75.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 50.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 66.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 23.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 45.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 28.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 21.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 30.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 40.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 38.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 28.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 30.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 28.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 24.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 29.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 31.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 45.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 37.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 25.8,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 30.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 29.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 53.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 41.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 35.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 28.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 31.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 39.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 19.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 32.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 25.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 38.3,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 49.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 62.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 69.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 51.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 46.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 53.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 55.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 54.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 41.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 38.7,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 35.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 48.5,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 52.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 37.6,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 49.3,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 55.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 61.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 52.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 54.8,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 49.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            29.4,
            45.1,
            34.6,
            31.7,
            30.9,
            44.2,
            37.1,
            52.3,
            54.3,
            60.3,
            74.1,
            75.6,
            80.3,
            86.3,
            87.6,
            98.6,
            95.3,
            105.6,
            108.6,
            107.0,
            97.3,
            95.6,
            102.6,
            115.6,
            112.1,
            119.6,
            115.3,
            128.6,
            121.5,
            129.6,
            91.6,
            101.9,
            94.9,
            83.3,
            86.6,
            92.3,
            96.3,
            53.3,
            41.2,
            39.6,
            26.6,
            90.4,
            62.7,
            82.3,
            64.2,
            75.7,
            50.5,
            66.3,
            23.1,
            45.6,
            28.3,
            21.1,
            30.2,
            40.1,
            38.7,
            28.6,
            30.3,
            28.6,
            24.6,
            29.6,
            31.2,
            45.3,
            37.4,
            25.8,
            30.1,
            29.3,
            53.2,
            41.2,
            35.6,
            28.6,
            31.2,
            39.3,
            19.3,
            32.3,
            25.6,
            38.3,
            49.6,
            62.3,
            69.3,
            51.2,
            46.6,
            53.3,
            55.6,
            54.6,
            41.5,
            38.7,
            35.2,
            48.5,
            52.3,
            37.6,
            49.3,
            55.6,
            61.2,
            52.3,
            54.8,
            49.6
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            81.94,
            81.47,
            80.99,
            80.52,
            80.05,
            79.57,
            79.1,
            78.63,
            78.15,
            77.68,
            77.21,
            76.73,
            76.26,
            75.79,
            75.31,
            74.84,
            74.37,
            73.89,
            73.42,
            72.95,
            72.47,
            72.0,
            71.53,
            71.05,
            70.58,
            70.11,
            69.63,
            69.16,
            68.69,
            68.21,
            67.74,
            67.27,
            66.79,
            66.32,
            65.85,
            65.37,
            64.9,
            64.43,
            63.95,
            63.48,
            63.01,
            62.53,
            62.06,
            61.59,
            61.11,
            60.64,
            60.17,
            59.69,
            59.22,
            58.75,
            58.28,
            57.8,
            57.33,
            56.86,
            56.38,
            55.91,
            55.44,
            54.96,
            54.49,
            54.02,
            53.54,
            53.07,
            52.6,
            52.12,
            51.65,
            51.18,
            50.7,
            50.23,
            49.76,
            49.28,
            48.81,
            48.34,
            47.86,
            47.39,
            46.92,
            46.44,
            45.97,
            45.5,
            45.02,
            44.55,
            44.08,
            43.6,
            43.13,
            42.66,
            42.18,
            41.71,
            41.24,
            40.76,
            40.29,
            39.82,
            39.34,
            38.87,
            38.4,
            37.92,
            37.45,
            36.98
          ],
          "stats": {
            "count": 96,
            "mean": 59.46,
            "min": 19.3,
            "max": 129.6,
            "std": 29.45
          }
        },
        "MP10": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 9.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 10.2,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 8.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 6.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 11.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 12.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 8.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 9.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 10.4,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 11.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 15.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 16.9,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 18.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 17.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 16.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 15.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 15.4,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 14.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 16.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 18.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 17.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 19.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 18.5,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 19.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 18.4,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 19.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 20.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 18.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 22.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 21.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 14.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 18.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 19.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 21.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 26.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 15.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 11.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 13.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 10.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 16.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 8.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 22.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 18.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 15.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 17.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 14.9,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 11.2,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 13.2,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 13.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 29.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 17.4,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 13.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 18.1,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 24.8,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 22.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 17.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 16.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 15.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 14.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 13.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 13.9,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 20.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 18.1,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 12.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 13.9,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 13.4,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 29.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 24.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 19.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 16.9,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 18.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 18.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 9.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 14.8,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 12.5,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 17.9,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 33.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 35.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 32.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 30.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 29.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 15.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 18.9,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 21.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 18.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 16.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 13.9,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 18.4,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 19.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 15.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 17.2,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 25.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 24.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 22.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 26.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 24.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            9.1,
            10.2,
            8.1,
            6.9,
            11.1,
            12.3,
            8.2,
            9.9,
            10.4,
            11.5,
            15.6,
            16.9,
            18.5,
            17.6,
            16.6,
            15.6,
            15.4,
            14.5,
            16.6,
            18.6,
            17.6,
            19.3,
            18.5,
            19.3,
            18.4,
            19.6,
            20.2,
            18.6,
            22.3,
            21.6,
            14.5,
            18.6,
            19.5,
            21.8,
            26.8,
            15.3,
            11.2,
            13.2,
            10.2,
            16.3,
            8.6,
            22.3,
            18.6,
            15.6,
            17.9,
            14.9,
            11.2,
            13.2,
            13.7,
            29.6,
            17.4,
            13.3,
            18.1,
            24.8,
            22.7,
            17.6,
            16.3,
            15.2,
            14.2,
            13.2,
            13.9,
            20.1,
            18.1,
            12.3,
            13.9,
            13.4,
            29.6,
            24.1,
            19.6,
            16.9,
            18.6,
            18.6,
            9.3,
            14.8,
            12.5,
            17.9,
            33.1,
            35.6,
            32.3,
            30.3,
            29.3,
            15.6,
            18.9,
            21.2,
            18.6,
            16.6,
            13.9,
            18.4,
            19.6,
            15.1,
            17.2,
            25.3,
            24.3,
            22.3,
            26.3,
            24.1
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            13.24,
            13.33,
            13.42,
            13.52,
            13.61,
            13.7,
            13.8,
            13.89,
            13.98,
            14.08,
            14.17,
            14.26,
            14.36,
            14.45,
            14.54,
            14.64,
            14.73,
            14.82,
            14.92,
            15.01,
            15.1,
            15.2,
            15.29,
            15.38,
            15.48,
            15.57,
            15.66,
            15.76,
            15.85,
            15.94,
            16.04,
            16.13,
            16.22,
            16.32,
            16.41,
            16.5,
            16.6,
            16.69,
            16.78,
            16.88,
            16.97,
            17.06,
            17.16,
            17.25,
            17.34,
            17.44,
            17.53,
            17.62,
            17.72,
            17.81,
            17.9,
            18.0,
            18.09,
            18.18,
            18.28,
            18.37,
            18.46,
            18.56,
            18.65,
            18.74,
            18.84,
            18.93,
            19.02,
            19.12,
            19.21,
            19.3,
            19.4,
            19.49,
            19.58,
            19.68,
            19.77,
            19.86,
            19.96,
            20.05,
            20.14,
            20.24,
            20.33,
            20.42,
            20.52,
            20.61,
            20.7,
            20.8,
            20.89,
            20.98,
            21.08,
            21.17,
            21.26,
            21.36,
            21.45,
            21.54,
            21.64,
            21.73,
            21.82,
            21.92,
            22.01,
            22.1
          ],
          "stats": {
            "count": 96,
            "mean": 17.67,
            "min": 6.9,
            "max": 35.6,
            "std": 5.75
          }
        }
      }
    },
    "QAR 63": {
      "metadata": {
        "id": "QAR 63",
        "name": "QAR 63",
        "cluster": "Cluster Sul (Comunidades / Entorno)",
        "utm_e": 610528.0,
        "utm_n": 7728641.0,
        "lat": -20.537837,
        "lng": -43.939778,
        "has_coords": true,
        "parameters": [
          "PTS",
          "MP10"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 38.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 42.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 37.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 27.1,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 30.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 42.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 36.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 48.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 52.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 59.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 70.9,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 72.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 77.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 79.9,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 80.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 87.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 92.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 97.7,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 103.1,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 108.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 101.8,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 105.4,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 116.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 117.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 115.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 127.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 131.2,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 135.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 134.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 133.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 90.0,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 117.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 122.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 94.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 77.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 90.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 58.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 42.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 36.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 29.6,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 67.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 63.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 66.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 51.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 48.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 52.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 94.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 54.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 35.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 95.0,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 35.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 34.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 39.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 22.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 30.4,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 25.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 26.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 25.2,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 24.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 23.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 22.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 33.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 35.6,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 21.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 38.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 16.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 26.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 28.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 32.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 26.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 28.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 38.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 18.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 25.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 29.3,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 34.7,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 44.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 52.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 61.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 64.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 69.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 76.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 82.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 84.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 64.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 44.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 58.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 54.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 67.2,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 42.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 53.2,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 51.5,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 55.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 64.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 52.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 57.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            38.3,
            42.9,
            37.1,
            27.1,
            30.4,
            42.3,
            36.6,
            48.6,
            52.6,
            59.3,
            70.9,
            72.3,
            77.6,
            79.9,
            80.6,
            87.3,
            92.3,
            97.7,
            103.1,
            108.6,
            101.8,
            105.4,
            116.3,
            117.2,
            115.3,
            127.6,
            131.2,
            135.6,
            134.3,
            133.3,
            90.0,
            117.8,
            122.6,
            94.3,
            77.9,
            90.3,
            58.6,
            42.3,
            36.6,
            29.6,
            67.3,
            63.4,
            66.2,
            51.2,
            48.9,
            52.3,
            94.0,
            54.3,
            35.6,
            95.0,
            35.6,
            34.2,
            39.0,
            22.0,
            30.4,
            25.6,
            26.3,
            25.2,
            24.6,
            23.6,
            22.3,
            33.2,
            35.6,
            21.0,
            38.0,
            16.3,
            26.3,
            28.6,
            32.3,
            26.6,
            28.3,
            38.6,
            18.2,
            25.6,
            29.3,
            34.7,
            44.3,
            52.3,
            61.2,
            64.3,
            69.3,
            76.6,
            82.2,
            84.6,
            64.2,
            44.5,
            58.6,
            54.2,
            67.2,
            42.1,
            53.2,
            51.5,
            55.6,
            64.2,
            52.3,
            57.2
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            80.05,
            79.65,
            79.24,
            78.84,
            78.43,
            78.02,
            77.62,
            77.21,
            76.8,
            76.4,
            75.99,
            75.59,
            75.18,
            74.77,
            74.37,
            73.96,
            73.55,
            73.15,
            72.74,
            72.34,
            71.93,
            71.52,
            71.12,
            70.71,
            70.3,
            69.9,
            69.49,
            69.09,
            68.68,
            68.27,
            67.87,
            67.46,
            67.05,
            66.65,
            66.24,
            65.84,
            65.43,
            65.02,
            64.62,
            64.21,
            63.8,
            63.4,
            62.99,
            62.59,
            62.18,
            61.77,
            61.37,
            60.96,
            60.55,
            60.15,
            59.74,
            59.34,
            58.93,
            58.52,
            58.12,
            57.71,
            57.3,
            56.9,
            56.49,
            56.09,
            55.68,
            55.27,
            54.87,
            54.46,
            54.05,
            53.65,
            53.24,
            52.84,
            52.43,
            52.02,
            51.62,
            51.21,
            50.8,
            50.4,
            49.99,
            49.59,
            49.18,
            48.77,
            48.37,
            47.96,
            47.55,
            47.15,
            46.74,
            46.34,
            45.93,
            45.52,
            45.12,
            44.71,
            44.3,
            43.9,
            43.49,
            43.09,
            42.68,
            42.27,
            41.87,
            41.46
          ],
          "stats": {
            "count": 96,
            "mean": 60.76,
            "min": 16.3,
            "max": 135.6,
            "std": 31.92
          }
        },
        "MP10": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 9.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 8.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 9.5,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 8.4,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 8.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 13.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 9.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 10.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 11.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 12.2,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 14.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 15.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 16.5,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 15.5,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 14.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 16.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 15.8,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 16.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 15.1,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 14.9,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 16.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 15.9,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 18.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 19.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 18.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 18.9,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 20.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 21.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 22.6,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 24.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 14.9,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 18.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 20.7,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 21.1,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 14.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 15.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 11.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 16.9,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 14.5,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 12.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 11.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 9.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 18.8,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 13.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 4.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 19.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 22.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 14.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 14.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 24.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 18.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 9.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 20.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 13.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 16.2,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 14.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 12.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 9.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 8.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 10.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 11.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 18.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 21.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 6.6,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 17.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 11.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 12.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 13.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 16.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 12.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 14.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 18.1,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 9.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 10.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 15.8,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 18.4,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 25.1,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 26.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 32.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 36.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 37.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 22.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 31.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 19.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 16.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 15.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 22.8,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 20.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 24.1,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 16.8,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 18.7,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 26.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 28.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 32.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 28.1,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 28.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            9.4,
            8.3,
            9.5,
            8.4,
            8.6,
            13.3,
            9.6,
            10.2,
            11.6,
            12.2,
            14.6,
            15.3,
            16.5,
            15.5,
            14.3,
            16.3,
            15.8,
            16.5,
            15.1,
            14.9,
            16.3,
            15.9,
            18.6,
            19.3,
            18.3,
            18.9,
            20.3,
            21.3,
            22.6,
            24.3,
            14.9,
            18.8,
            20.7,
            21.1,
            14.6,
            15.3,
            11.2,
            16.9,
            14.5,
            12.3,
            11.2,
            9.6,
            18.8,
            13.3,
            4.6,
            19.3,
            22.6,
            14.8,
            14.7,
            24.3,
            18.7,
            9.6,
            20.0,
            13.6,
            16.2,
            14.6,
            12.3,
            9.6,
            8.6,
            10.3,
            11.6,
            18.2,
            21.0,
            6.6,
            17.2,
            11.0,
            12.5,
            13.5,
            16.2,
            12.6,
            14.2,
            18.1,
            9.6,
            10.6,
            15.8,
            18.4,
            25.1,
            26.3,
            32.3,
            36.3,
            37.2,
            22.3,
            31.2,
            19.6,
            16.5,
            15.2,
            22.8,
            20.3,
            24.1,
            16.8,
            18.7,
            26.3,
            28.2,
            32.3,
            28.1,
            28.3
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            11.71,
            11.82,
            11.94,
            12.05,
            12.16,
            12.27,
            12.38,
            12.49,
            12.61,
            12.72,
            12.83,
            12.94,
            13.05,
            13.16,
            13.28,
            13.39,
            13.5,
            13.61,
            13.72,
            13.83,
            13.95,
            14.06,
            14.17,
            14.28,
            14.39,
            14.5,
            14.62,
            14.73,
            14.84,
            14.95,
            15.06,
            15.17,
            15.29,
            15.4,
            15.51,
            15.62,
            15.73,
            15.85,
            15.96,
            16.07,
            16.18,
            16.29,
            16.4,
            16.52,
            16.63,
            16.74,
            16.85,
            16.96,
            17.07,
            17.19,
            17.3,
            17.41,
            17.52,
            17.63,
            17.74,
            17.86,
            17.97,
            18.08,
            18.19,
            18.3,
            18.41,
            18.53,
            18.64,
            18.75,
            18.86,
            18.97,
            19.08,
            19.2,
            19.31,
            19.42,
            19.53,
            19.64,
            19.75,
            19.87,
            19.98,
            20.09,
            20.2,
            20.31,
            20.42,
            20.54,
            20.65,
            20.76,
            20.87,
            20.98,
            21.09,
            21.21,
            21.32,
            21.43,
            21.54,
            21.65,
            21.76,
            21.88,
            21.99,
            22.1,
            22.21,
            22.32
          ],
          "stats": {
            "count": 96,
            "mean": 17.02,
            "min": 4.6,
            "max": 37.2,
            "std": 6.42
          }
        }
      }
    },
    "QAR 64": {
      "metadata": {
        "id": "QAR 64",
        "name": "QAR 64",
        "cluster": "Cluster Sul (Comunidades / Entorno)",
        "utm_e": 608870.0,
        "utm_n": 7726220.0,
        "lat": -20.559807,
        "lng": -43.955532,
        "has_coords": true,
        "parameters": [
          "PTS",
          "MP10"
        ]
      },
      "series": {
        "PTS": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 30.2,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 48.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 28.3,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 31.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 30.7,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 42.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 35.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 47.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 52.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 59.3,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 69.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 68.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 70.3,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 74.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 77.9,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 84.4,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 91.8,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 99.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 108.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 112.2,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 115.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 121.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 116.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 118.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 112.2,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 119.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 124.4,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 127.9,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 138.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 134.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 91.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 104.7,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 111.5,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 97.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 69.3,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 83.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 98.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 105.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 75.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 45.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 36.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 58.9,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 56.4,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 94.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 58.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 87.6,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 47.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 41.1,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 28.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 50.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 21.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 29.5,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 35.0,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 26.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 29.3,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 27.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 29.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 28.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 27.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 25.4,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 26.4,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 41.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 28.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 33.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 20.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 18.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 38.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 34.2,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 29.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 31.5,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 33.3,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 52.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 19.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 26.6,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 21.2,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 35.6,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 47.5,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 64.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 68.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 58.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 54.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 61.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 65.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 79.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 71.5,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 68.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 52.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 59.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 48.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 37.9,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 51.8,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 56.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 51.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 55.8,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 61.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 57.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            30.2,
            48.9,
            28.3,
            31.7,
            30.7,
            42.3,
            35.9,
            47.5,
            52.3,
            59.3,
            69.3,
            68.6,
            70.3,
            74.3,
            77.9,
            84.4,
            91.8,
            99.2,
            108.3,
            112.2,
            115.6,
            121.6,
            116.3,
            118.6,
            112.2,
            119.3,
            124.4,
            127.9,
            138.3,
            134.2,
            91.8,
            104.7,
            111.5,
            97.3,
            69.3,
            83.3,
            98.3,
            105.3,
            75.3,
            45.3,
            36.6,
            58.9,
            56.4,
            94.3,
            58.6,
            87.6,
            47.8,
            41.1,
            28.3,
            50.5,
            21.7,
            29.5,
            35.0,
            26.6,
            29.3,
            27.6,
            29.6,
            28.3,
            27.3,
            25.4,
            26.4,
            41.2,
            28.7,
            33.3,
            20.0,
            18.0,
            38.6,
            34.2,
            29.6,
            31.5,
            33.3,
            52.3,
            19.6,
            26.6,
            21.2,
            35.6,
            47.5,
            64.2,
            68.6,
            58.3,
            54.2,
            61.2,
            65.6,
            79.6,
            71.5,
            68.6,
            52.3,
            59.6,
            48.6,
            37.9,
            51.8,
            56.3,
            51.2,
            55.8,
            61.2,
            57.2
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            81.07,
            80.66,
            80.24,
            79.82,
            79.4,
            78.98,
            78.56,
            78.15,
            77.73,
            77.31,
            76.89,
            76.47,
            76.05,
            75.64,
            75.22,
            74.8,
            74.38,
            73.96,
            73.54,
            73.13,
            72.71,
            72.29,
            71.87,
            71.45,
            71.03,
            70.62,
            70.2,
            69.78,
            69.36,
            68.94,
            68.52,
            68.11,
            67.69,
            67.27,
            66.85,
            66.43,
            66.01,
            65.6,
            65.18,
            64.76,
            64.34,
            63.92,
            63.5,
            63.09,
            62.67,
            62.25,
            61.83,
            61.41,
            61.0,
            60.58,
            60.16,
            59.74,
            59.32,
            58.9,
            58.49,
            58.07,
            57.65,
            57.23,
            56.81,
            56.39,
            55.98,
            55.56,
            55.14,
            54.72,
            54.3,
            53.88,
            53.47,
            53.05,
            52.63,
            52.21,
            51.79,
            51.37,
            50.96,
            50.54,
            50.12,
            49.7,
            49.28,
            48.86,
            48.45,
            48.03,
            47.61,
            47.19,
            46.77,
            46.35,
            45.94,
            45.52,
            45.1,
            44.68,
            44.26,
            43.84,
            43.43,
            43.01,
            42.59,
            42.17,
            41.75,
            41.33
          ],
          "stats": {
            "count": 96,
            "mean": 61.2,
            "min": 18.0,
            "max": 138.3,
            "std": 31.73
          }
        },
        "MP10": {
          "items": [
            {
              "date": "2025-01-04",
              "date_br": "04/01/2025",
              "value": 7.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-10",
              "date_br": "10/01/2025",
              "value": 7.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-16",
              "date_br": "16/01/2025",
              "value": 6.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-22",
              "date_br": "22/01/2025",
              "value": 5.9,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-01-28",
              "date_br": "28/01/2025",
              "value": 7.6,
              "month": "Janeiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-03",
              "date_br": "03/02/2025",
              "value": 11.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-09",
              "date_br": "09/02/2025",
              "value": 8.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-15",
              "date_br": "15/02/2025",
              "value": 10.5,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-21",
              "date_br": "21/02/2025",
              "value": 11.6,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-02-27",
              "date_br": "27/02/2025",
              "value": 12.9,
              "month": "Fevereiro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-05",
              "date_br": "05/03/2025",
              "value": 13.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-11",
              "date_br": "11/03/2025",
              "value": 14.9,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-17",
              "date_br": "17/03/2025",
              "value": 15.6,
              "month": "Março",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-03-23",
              "date_br": "23/03/2025",
              "value": 18.6,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-03-29",
              "date_br": "29/03/2025",
              "value": 17.3,
              "month": "Março",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-04",
              "date_br": "04/04/2025",
              "value": 15.3,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-10",
              "date_br": "10/04/2025",
              "value": 16.6,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-16",
              "date_br": "16/04/2025",
              "value": 18.1,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-22",
              "date_br": "22/04/2025",
              "value": 16.5,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-04-28",
              "date_br": "28/04/2025",
              "value": 19.1,
              "month": "Abril",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-04",
              "date_br": "04/05/2025",
              "value": 16.9,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-10",
              "date_br": "10/05/2025",
              "value": 19.6,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-16",
              "date_br": "16/05/2025",
              "value": 21.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-22",
              "date_br": "22/05/2025",
              "value": 22.4,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-05-28",
              "date_br": "28/05/2025",
              "value": 19.3,
              "month": "Maio",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-03",
              "date_br": "03/06/2025",
              "value": 20.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-09",
              "date_br": "09/06/2025",
              "value": 21.3,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-15",
              "date_br": "15/06/2025",
              "value": 22.6,
              "month": "Junho",
              "year": 2025,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2025-06-21",
              "date_br": "21/06/2025",
              "value": 23.2,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-06-27",
              "date_br": "27/06/2025",
              "value": 21.3,
              "month": "Junho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-03",
              "date_br": "03/07/2025",
              "value": 15.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-09",
              "date_br": "09/07/2025",
              "value": 18.8,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-15",
              "date_br": "15/07/2025",
              "value": 20.2,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-21",
              "date_br": "21/07/2025",
              "value": 22.1,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-07-27",
              "date_br": "27/07/2025",
              "value": 14.6,
              "month": "Julho",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-02",
              "date_br": "02/08/2025",
              "value": 14.5,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-08",
              "date_br": "08/08/2025",
              "value": 12.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-14",
              "date_br": "14/08/2025",
              "value": 14.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-20",
              "date_br": "20/08/2025",
              "value": 11.2,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-08-26",
              "date_br": "26/08/2025",
              "value": 18.3,
              "month": "Agosto",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-01",
              "date_br": "01/09/2025",
              "value": 6.7,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-07",
              "date_br": "07/09/2025",
              "value": 12.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-13",
              "date_br": "13/09/2025",
              "value": 21.3,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-19",
              "date_br": "19/09/2025",
              "value": 16.6,
              "month": "Setembro",
              "year": 2025,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2025-09-25",
              "date_br": "25/09/2025",
              "value": 7.2,
              "month": "Setembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-01",
              "date_br": "01/10/2025",
              "value": 32.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-07",
              "date_br": "07/10/2025",
              "value": 14.5,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-13",
              "date_br": "13/10/2025",
              "value": 12.3,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-19",
              "date_br": "19/10/2025",
              "value": 9.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-25",
              "date_br": "25/10/2025",
              "value": 11.8,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-10-31",
              "date_br": "31/10/2025",
              "value": 19.7,
              "month": "Outubro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-06",
              "date_br": "06/11/2025",
              "value": 17.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-12",
              "date_br": "12/11/2025",
              "value": 19.9,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-18",
              "date_br": "18/11/2025",
              "value": 12.5,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-24",
              "date_br": "24/11/2025",
              "value": 15.6,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-11-30",
              "date_br": "30/11/2025",
              "value": 12.7,
              "month": "Novembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-06",
              "date_br": "06/12/2025",
              "value": 11.3,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-12",
              "date_br": "12/12/2025",
              "value": 10.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-18",
              "date_br": "18/12/2025",
              "value": 9.8,
              "month": "Dezembro",
              "year": 2025,
              "season": "Primavera (Transição Chuvosa)"
            },
            {
              "date": "2025-12-24",
              "date_br": "24/12/2025",
              "value": 12.4,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2025-12-30",
              "date_br": "30/12/2025",
              "value": 13.6,
              "month": "Dezembro",
              "year": 2025,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-05",
              "date_br": "05/01/2026",
              "value": 19.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-11",
              "date_br": "11/01/2026",
              "value": 13.3,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-17",
              "date_br": "17/01/2026",
              "value": 17.0,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-23",
              "date_br": "23/01/2026",
              "value": 10.2,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-01-29",
              "date_br": "29/01/2026",
              "value": 8.7,
              "month": "Janeiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-04",
              "date_br": "04/02/2026",
              "value": 24.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-10",
              "date_br": "10/02/2026",
              "value": 21.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-16",
              "date_br": "16/02/2026",
              "value": 18.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-22",
              "date_br": "22/02/2026",
              "value": 20.1,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-02-28",
              "date_br": "28/02/2026",
              "value": 19.6,
              "month": "Fevereiro",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-06",
              "date_br": "06/03/2026",
              "value": 25.3,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-12",
              "date_br": "12/03/2026",
              "value": 10.2,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-18",
              "date_br": "18/03/2026",
              "value": 15.1,
              "month": "Março",
              "year": 2026,
              "season": "Verão (Período Chuvoso)"
            },
            {
              "date": "2026-03-24",
              "date_br": "24/03/2026",
              "value": 13.1,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-03-30",
              "date_br": "30/03/2026",
              "value": 18.3,
              "month": "Março",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-05",
              "date_br": "05/04/2026",
              "value": 25.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-11",
              "date_br": "11/04/2026",
              "value": 34.6,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-17",
              "date_br": "17/04/2026",
              "value": 36.2,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-23",
              "date_br": "23/04/2026",
              "value": 30.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-04-29",
              "date_br": "29/04/2026",
              "value": 27.3,
              "month": "Abril",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-05",
              "date_br": "05/05/2026",
              "value": 15.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-11",
              "date_br": "11/05/2026",
              "value": 14.2,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-17",
              "date_br": "17/05/2026",
              "value": 21.3,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-23",
              "date_br": "23/05/2026",
              "value": 22.6,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-05-29",
              "date_br": "29/05/2026",
              "value": 20.7,
              "month": "Maio",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-04",
              "date_br": "04/06/2026",
              "value": 20.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-10",
              "date_br": "10/06/2026",
              "value": 21.3,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-16",
              "date_br": "16/06/2026",
              "value": 18.6,
              "month": "Junho",
              "year": 2026,
              "season": "Outono (Transição Seca)"
            },
            {
              "date": "2026-06-22",
              "date_br": "22/06/2026",
              "value": 16.1,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-06-28",
              "date_br": "28/06/2026",
              "value": 20.5,
              "month": "Junho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-04",
              "date_br": "04/07/2026",
              "value": 29.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-10",
              "date_br": "10/07/2026",
              "value": 27.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-16",
              "date_br": "16/07/2026",
              "value": 31.2,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-22",
              "date_br": "22/07/2026",
              "value": 30.3,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            },
            {
              "date": "2026-07-28",
              "date_br": "28/07/2026",
              "value": 29.6,
              "month": "Julho",
              "year": 2026,
              "season": "Inverno (Período Seco / Crítico)"
            }
          ],
          "values": [
            7.9,
            7.6,
            6.9,
            5.9,
            7.6,
            11.9,
            8.9,
            10.5,
            11.6,
            12.9,
            13.6,
            14.9,
            15.6,
            18.6,
            17.3,
            15.3,
            16.6,
            18.1,
            16.5,
            19.1,
            16.9,
            19.6,
            21.3,
            22.4,
            19.3,
            20.3,
            21.3,
            22.6,
            23.2,
            21.3,
            15.6,
            18.8,
            20.2,
            22.1,
            14.6,
            14.5,
            12.3,
            14.2,
            11.2,
            18.3,
            6.7,
            12.3,
            21.3,
            16.6,
            7.2,
            32.3,
            14.5,
            12.3,
            9.8,
            11.8,
            19.7,
            17.7,
            19.9,
            12.5,
            15.6,
            12.7,
            11.3,
            10.6,
            9.8,
            12.4,
            13.6,
            19.2,
            13.3,
            17.0,
            10.2,
            8.7,
            24.1,
            21.6,
            18.6,
            20.1,
            19.6,
            25.3,
            10.2,
            15.1,
            13.1,
            18.3,
            25.6,
            34.6,
            36.2,
            30.3,
            27.3,
            15.6,
            14.2,
            21.3,
            22.6,
            20.7,
            20.3,
            21.3,
            18.6,
            16.1,
            20.5,
            29.6,
            27.6,
            31.2,
            30.3,
            29.6
          ],
          "dates": [
            "2025-01-04",
            "2025-01-10",
            "2025-01-16",
            "2025-01-22",
            "2025-01-28",
            "2025-02-03",
            "2025-02-09",
            "2025-02-15",
            "2025-02-21",
            "2025-02-27",
            "2025-03-05",
            "2025-03-11",
            "2025-03-17",
            "2025-03-23",
            "2025-03-29",
            "2025-04-04",
            "2025-04-10",
            "2025-04-16",
            "2025-04-22",
            "2025-04-28",
            "2025-05-04",
            "2025-05-10",
            "2025-05-16",
            "2025-05-22",
            "2025-05-28",
            "2025-06-03",
            "2025-06-09",
            "2025-06-15",
            "2025-06-21",
            "2025-06-27",
            "2025-07-03",
            "2025-07-09",
            "2025-07-15",
            "2025-07-21",
            "2025-07-27",
            "2025-08-02",
            "2025-08-08",
            "2025-08-14",
            "2025-08-20",
            "2025-08-26",
            "2025-09-01",
            "2025-09-07",
            "2025-09-13",
            "2025-09-19",
            "2025-09-25",
            "2025-10-01",
            "2025-10-07",
            "2025-10-13",
            "2025-10-19",
            "2025-10-25",
            "2025-10-31",
            "2025-11-06",
            "2025-11-12",
            "2025-11-18",
            "2025-11-24",
            "2025-11-30",
            "2025-12-06",
            "2025-12-12",
            "2025-12-18",
            "2025-12-24",
            "2025-12-30",
            "2026-01-05",
            "2026-01-11",
            "2026-01-17",
            "2026-01-23",
            "2026-01-29",
            "2026-02-04",
            "2026-02-10",
            "2026-02-16",
            "2026-02-22",
            "2026-02-28",
            "2026-03-06",
            "2026-03-12",
            "2026-03-18",
            "2026-03-24",
            "2026-03-30",
            "2026-04-05",
            "2026-04-11",
            "2026-04-17",
            "2026-04-23",
            "2026-04-29",
            "2026-05-05",
            "2026-05-11",
            "2026-05-17",
            "2026-05-23",
            "2026-05-29",
            "2026-06-04",
            "2026-06-10",
            "2026-06-16",
            "2026-06-22",
            "2026-06-28",
            "2026-07-04",
            "2026-07-10",
            "2026-07-16",
            "2026-07-22",
            "2026-07-28"
          ],
          "trend": [
            12.05,
            12.16,
            12.28,
            12.39,
            12.51,
            12.62,
            12.73,
            12.85,
            12.96,
            13.07,
            13.19,
            13.3,
            13.42,
            13.53,
            13.64,
            13.76,
            13.87,
            13.99,
            14.1,
            14.21,
            14.33,
            14.44,
            14.55,
            14.67,
            14.78,
            14.9,
            15.01,
            15.12,
            15.24,
            15.35,
            15.46,
            15.58,
            15.69,
            15.81,
            15.92,
            16.03,
            16.15,
            16.26,
            16.38,
            16.49,
            16.6,
            16.72,
            16.83,
            16.94,
            17.06,
            17.17,
            17.29,
            17.4,
            17.51,
            17.63,
            17.74,
            17.85,
            17.97,
            18.08,
            18.2,
            18.31,
            18.42,
            18.54,
            18.65,
            18.76,
            18.88,
            18.99,
            19.11,
            19.22,
            19.33,
            19.45,
            19.56,
            19.68,
            19.79,
            19.9,
            20.02,
            20.13,
            20.24,
            20.36,
            20.47,
            20.59,
            20.7,
            20.81,
            20.93,
            21.04,
            21.15,
            21.27,
            21.38,
            21.5,
            21.61,
            21.72,
            21.84,
            21.95,
            22.07,
            22.18,
            22.29,
            22.41,
            22.52,
            22.63,
            22.75,
            22.86
          ],
          "stats": {
            "count": 96,
            "mean": 17.46,
            "min": 5.9,
            "max": 36.2,
            "std": 6.53
          }
        }
      }
    }
  },
  "global_stats": {
    "PTS": {
      "count": 1056,
      "mean": 57.64,
      "std": 33.18,
      "min": 5.2,
      "median": 49.6,
      "max": 145.6,
      "p95": 121.53
    },
    "MP10": {
      "count": 480,
      "mean": 18.08,
      "std": 7.11,
      "min": 4.1,
      "median": 17.45,
      "max": 54.7,
      "p95": 32.09
    }
  }
};
