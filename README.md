# Geoportal Interativo de Monitoramento da Qualidade do Ar
### ECO Tecnologia e Análise Ambiental • Mina VIGA

Plataforma interativa para visualização espacial, temporal e regulatória dos dados de monitoramento da qualidade do ar (PTS e MP₁₀) do Complexo Minerário VIGA, em conformidade com as normas **ABNT NBR 9547**, **ABNT NBR 13412** e os padrões da **Resolução CONAMA nº 506/2024**.

---

## 🌐 Acesso Online via GitHub Pages

O portal pode ser acessado diretamente através do link:
👉 **[https://ecomonitorar.github.io/GEOPORTL-QAR/](https://ecomonitorar.github.io/GEOPORTL-QAR/)**

---

## 📌 Principais Funcionalidades

* **Mapa Interativo (Leaflet & Esri Satellite):**
  * Marcadores circulares dinâmicos exibindo os valores medidos diretamente no mapa.
  * Coloração automática conforme limites da **CONAMA nº 506/2024** (Verde $<50\%$, Amarelo $50-100\%$, Vermelho $>100\%$).
  * Alternância entre **Mapa Vetorial Claro** e **Imagem de Satélite de Alta Resolução**.
  * **Mapa de Calor (Heatmap de Dispersão):** Camada dinâmica de pluma de dispersão atmosférica interpolando as concentrações dos pontos.
  * **Ferramenta de Régua (Medição Geodésica):** Cálculo preciso de distâncias reais em metros e quilômetros no terreno.
  * Atalhos para enquadramento geral e foco no *Cluster Norte* (Operacional / Cava) e *Cluster Sul* (Comunidades).

* **Navegação Temporal & Player Dinâmico:**
  * Histórico de 96 campanhas regulares a cada 6 dias (de 04/01/2025 a 28/07/2026).
  * Seletor de data com carregamento automático da campanha mais recente.
  * Botão *Play/Pause* para animação da evolução temporal da qualidade do ar.
  * Seletor de poluentes (`PTS` | `MP10` | `MP2,5`).
  * Seletor de Estágios CONAMA 506/2024 (`PI-1 Vigente`, `PI-2`, `PI-3`, `PF Meta OMS`).

* **Dashboard & Painel Analítico:**
  * 7 Cards de Indicadores (KPIs): Estações Ativas, Conformidade %, Confortável, Atenção, Não Conforme, Média e Pico Máximo.
  * Gráfico comparativo de todas as estações na data vs Linha do Limite Legal.
  * Gráfico de evolução temporal agregada (sazonalidade seca vs chuvosa).
  * Gráfico da relação $\text{MP10} / \text{PTS}$ para as estações com monitoramento simultâneo.
  * Tabela interativa com busca em tempo real e exportação dos dados da campanha em **CSV**.

* **Detalhamento por Estação (Drawer Lateral):**
  * Coordenadas geodésicas projetadas (UTM Fuso 23S) e geográficas (WGS84 Lat/Long).
  * Série histórica completa com linha do limite legal e linha de tendência linear ($y = ax + b$).
  * Estatísticas descritivas (média histórica, máxima, mínima e desvio padrão).

---

## 📊 Metodologias e Padrões Legais

| Poluente | Metodologia de Amostragem | Padrão 24h CONAMA 506/2024 (PI-1) | Padrão Final (PF) |
| :--- | :--- | :---: | :---: |
| **PTS** | ABNT NBR 9547 (AGV / Hi-Vol 24h) | **240 µg/m³** | **240 µg/m³** |
| **MP₁₀** | ABNT NBR 13412 (AGV com Separador Inercial 24h) | **120 µg/m³** | **45 µg/m³** |
| **MP₂,₅** | ABNT NBR 16402 / Amostragem Gravimétrica 24h | **60 µg/m³** | **15 µg/m³** |

---

## 🛠️ Como Executar Localmente

### Opção 1: Execução Direta (Offline)
Abra o arquivo `index.html` em qualquer navegador.

### Opção 2: Servidor Python
```bash
python server.py
```
O servidor iniciará em `http://localhost:8080` e abrirá a aplicação automaticamente no navegador.

### Atualização da Base de Dados
Para processar novas medições adicionadas à planilha Excel:
```bash
python generate_data.py
```

---

## 🏢 Desenvolvimento
* **Empresa:** ECO Tecnologia e Análise Ambiental
* **Projeto:** Monitoramento da Qualidade do Ar • Mina VIGA
* **Disciplina:** Fundamentos de Inteligência Artificial e Machine Learning
