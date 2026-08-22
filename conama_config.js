/**
 * Configuração dos Padrões de Qualidade do Ar - Resolução CONAMA nº 506/2024
 * ECO Tecnologia e Análise Ambiental
 * 
 * Estrutura modular e facilmente atualizável dos limites legais e critérios
 * de avaliação de conformidade ambiental para médias diárias de 24 horas.
 */

window.CONAMA_CONFIG = {
  norma: "Resolução CONAMA nº 506/2024",
  data_publicacao: "Julho/2024",
  tempo_amostragem: "24 horas",
  
  // Estágio padrão ativo inicialmente (PI-1 = Padrão Intermediário 1 - Vigente)
  current_stage: "PI-1",
  
  stages: {
    "PI-1": {
      name: "Padrão Intermediário 1 (PI-1) - Vigente",
      short_name: "PI-1 (Vigente)",
      description: "Padrão intermediário inicial aplicável conforme cronograma da CONAMA 506/2024"
    },
    "PI-2": {
      name: "Padrão Intermediário 2 (PI-2)",
      short_name: "PI-2",
      description: "Segundo estágio de metas intermediárias da CONAMA 506/2024"
    },
    "PI-3": {
      name: "Padrão Intermediário 3 (PI-3)",
      short_name: "PI-3",
      description: "Terceiro estágio de metas intermediárias da CONAMA 506/2024"
    },
    "PF": {
      name: "Padrão Final (PF) - Meta OMS",
      short_name: "PF (Meta Final)",
      description: "Padrão final de longo prazo alinhado às diretrizes recomendadas pela OMS"
    }
  },

  // Limites por parâmetro (µg/m³ - Média diária de 24 horas)
  limits: {
    "PTS": {
      name: "Partículas Totais em Suspensão",
      symbol: "PTS",
      unit: "µg/m³",
      methodology: "ABNT NBR 9547 (AGV 24h)",
      values: {
        "PI-1": 240,
        "PI-2": 240,
        "PI-3": 240,
        "PF": 240
      },
      annual_limit: {
        "PI-1": 80,
        "PF": 60
      },
      description: "Poeira total suspensa na atmosfera com diâmetro até aproximadamente 50 µm."
    },
    "MP10": {
      name: "Partículas Inaláveis (MP₁₀)",
      symbol: "MP10",
      unit: "µg/m³",
      methodology: "ABNT NBR 13412 (AGV com Separador Inercial 24h)",
      values: {
        "PI-1": 120,
        "PI-2": 100,
        "PI-3": 75,
        "PF": 45
      },
      annual_limit: {
        "PI-1": 40,
        "PI-2": 35,
        "PI-3": 30,
        "PF": 15
      },
      description: "Partículas inaláveis com diâmetro aerodinâmico menor ou igual a 10 µm."
    },
    "MP2.5": {
      name: "Partículas Respiráveis (MP₂,₅)",
      symbol: "MP2,5",
      unit: "µg/m³",
      methodology: "ABNT NBR 16402 / Amostragem Gravimétrica 24h",
      values: {
        "PI-1": 60,
        "PI-2": 50,
        "PI-3": 37,
        "PF": 15
      },
      annual_limit: {
        "PI-1": 20,
        "PI-2": 17,
        "PI-3": 15,
        "PF": 5
      },
      description: "Fração fina respirável com diâmetro aerodinâmico menor ou igual a 2,5 µm."
    }
  },

  /**
   * Obtém o limite aplicável para um determinado parâmetro e estágio.
   */
  getLimit: function(param, stage) {
    stage = stage || this.current_stage;
    const p = this.limits[param];
    if (!p || !p.values) return null;
    return p.values[stage] || p.values["PI-1"];
  },

  /**
   * Avalia a condição do valor em relação ao limite aplicável:
   * - Verde (good): valor < 50% do limite
   * - Amarelo (warning): valor >= 50% e <= 100% do limite
   * - Vermelho (danger): valor > 100% do limite
   * - Cinza (na): sem valor ou parâmetro não monitorado
   */
  evaluateStatus: function(value, param, stage) {
    if (value === null || value === undefined || isNaN(value)) {
      return {
        status: "na",
        label: "Não Monitorado / Sem Dados",
        color: "#94a3b8",
        textColor: "#ffffff",
        bgColor: "#f1f5f9",
        borderColor: "#cbd5e1",
        percentage: null,
        limit: this.getLimit(param, stage),
        isExceedance: false
      };
    }

    const limit = this.getLimit(param, stage);
    if (!limit) {
      return {
        status: "na",
        label: "Limite não definido",
        color: "#94a3b8",
        textColor: "#ffffff",
        bgColor: "#f1f5f9",
        borderColor: "#cbd5e1",
        percentage: null,
        limit: null,
        isExceedance: false
      };
    }

    const percentage = (value / limit) * 100;

    if (percentage < 50) {
      return {
        status: "good",
        label: "Condição Confortável (< 50% do limite)",
        shortLabel: "Confortável",
        color: "#10b981", // Verde Esmeralda / ECO
        textColor: "#ffffff",
        bgColor: "#ecfdf5",
        borderColor: "#059669",
        percentage: Number(percentage.toFixed(1)),
        limit: limit,
        isExceedance: false
      };
    } else if (percentage <= 100) {
      return {
        status: "warning",
        label: "Atenção / Moderado (50% a 100% do limite)",
        shortLabel: "Atenção",
        color: "#f59e0b", // Amarelo Âmbar
        textColor: "#ffffff",
        bgColor: "#fffbeb",
        borderColor: "#d97706",
        percentage: Number(percentage.toFixed(1)),
        limit: limit,
        isExceedance: false
      };
    } else {
      return {
        status: "danger",
        label: "Acima do Limite Legal (> 100%)",
        shortLabel: "Não Conforme",
        color: "#ef4444", // Vermelho Alerta
        textColor: "#ffffff",
        bgColor: "#fef2f2",
        borderColor: "#dc2626",
        percentage: Number(percentage.toFixed(1)),
        limit: limit,
        isExceedance: true
      };
    }
  }
};
