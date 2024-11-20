---
banner_alt: Métricas de Avaliação de Desempenho
banner: https://images.unsplash.com/photo-1700773429980-ed1d3287fe1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: Desempenho
title: Métricas de Avaliação de Desempenho
description: Métricas de avaliação de desempenho são utilizadas para medir e avaliar o sucesso ou o fracasso de uma estratégia, projeto ou iniciativa.
date: '2024-07-02'
---

### Métricas de Avaliação de Desempenho

Para avaliar e comparar a performance de modelos, é imprescindível o uso de métricas de desempenho. A escolha da métrica varia conforme o objetivo almejado. A Precisão, *Recall* e *F1 Score* estão entre as métricas frequentemente adotadas em avaliações de modelos de classificação. Além destas, existe o *Macro AVG*. Todas essas métricas são baseadas na matriz de confusão, que apresenta uma visão clara das predições corretas e incorretas feitas por um modelo em comparação com os valores reais.

#### Matriz de Confusão

A matriz de confusão compara as classificações previstas pelo modelo com os valores reais, registrando as concordâncias e discordâncias. Esta abordagem é exemplificada na tabela abaixo. As colunas da matriz representam as previsões do modelo (*Predicted Class*), enquanto as linhas indicam as classificações reais (*Actual Class*). Dessa forma, as classes são dispostas na mesma ordem tanto nas linhas quanto nas colunas. A diagonal principal, que se estende do canto superior esquerdo ao inferior direito, destaca as previsões e as classificações corretas.

|                  |                  | **Predicted Class** |                  |
|------------------|------------------|---------------------|------------------|
|                  |                  | Class 1             | Class 0          |
| **Actual Class** | **Class 1**      | **TP**              | FN               |
|                  | **Class 0**      | FP                  | **TN**           |

Onde:

- **True Positive (TP)**: representa os verdadeiros positivos, ou seja, as instâncias da Classe 1 corretamente previstas como Classe 1.
- **False Negative (FN)**: representa os falsos negativos, ou seja, as instâncias da Classe 1 incorretamente previstas como Classe 0.
- **False Positive (FP)**: representa os falsos positivos, ou seja, as instâncias da Classe 0 incorretamente previstas como Classe 1.
- **True Negative (TN)**: representa os verdadeiros negativos, ou seja, as instâncias da Classe 0 corretamente previstas como Classe 0.

Em problemas de classificação com múltiplas classes, a matriz de confusão se expande, apresentando uma linha e uma coluna específica para cada uma das classes.

### 1. Definições Clássicas: Precisão, Recall, Acurácia e F1-Score

### 1.1 Precisão (*Predicted Positives*)

A **Precisão** representa a proporção de itens relevantes entre os itens recuperados por um sistema de classificação. Em outras palavras, mede a capacidade do modelo de evitar falsos positivos.

- Fórmula:

$$

\text{Precisão} = \frac{\text{TP}}{\text{TP} + \text{FP}} 

$$

Onde:

- **TP**: True Positive
- **FP**: False Positive

### 1.2 Recall (Actual Positive)

O **Recall** mede a capacidade do sistema de recuperar todos os itens relevantes de uma amostra.

- Fórmula:

$$

\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}} 

$$

Onde:

- **TP**: True Positive
- **FN**: False Negative

### 1.3 Acurácia

A **Acurácia** avalia a proporção de previsões corretas (tanto positivas quanto negativas) em relação ao total de amostras.

- Fórmula:

$$
\text{Acurácia} = \frac{\text{TP} + \text{TN}}{\text{TP} + \text{TN} + \text{FP} + \text{FN}} 

$$

Onde:

- **TN**: True Negative

### 1.4 F1-Score

O **F1-Score** é a média harmônica entre a precisão e o recall. É útil em cenários onde há um equilíbrio entre a importância dessas duas métricas.

- Fórmula:

$$

F1 = 2 \times \frac{\text{Precisão} \times \text{Recall}}{\text{Precisão} + \text{Recall}} 

$$

### 2. Métrica WSS@R (Work Saved over Sampling)

A métrica **WSS@R** foi introduzida por **Cohen et al. (2006)** no contexto de revisões sistemáticas automatizadas. A WSS@R mede a fração de trabalho poupado ao usar um classificador automatizado em comparação com a amostragem aleatória.

- **Fórmula**:

$$

WSS@R = \frac{\text{TP} + \text{TN}}{N} 

$$

Onde:

- **TP**: True Positives
- **TN**: True Negatives
- **N**: Número total de amostras

A principal vantagem da WSS@R é que, ao fixar um nível de recall (geralmente 0.95), ela permite estimar o trabalho poupado pelos revisores humanos ao utilizar um sistema de classificação. No entanto, a métrica é sensível ao desequilíbrio de classes, o que pode gerar grandes variações nos resultados.

### 3. Métrica AWSS@R

Devido às limitações da WSS@R, foi proposta a **AWSS@R** (Adapted Work Saved over Sampling). Essa métrica tenta corrigir a sensibilidade ao desequilíbrio de classes, oferecendo uma avaliação mais estável do trabalho poupado, independentemente da distribuição de classes.

- **Fórmula**:

$$

AWSS@R = \frac{\text{TP} + \text{TN}}{N} \times F(\text{Class Imbalance}) 

$$

Onde:

$F(\text{Class Imbalance})$ é uma função que ajusta a métrica conforme o desequilíbrio de classes.

Os estudos iniciais com a AWSS@R mostram que ela apresenta maior robustez em cenários onde há uma desproporção significativa entre amostras positivas e negativas, o que a torna uma métrica mais confiável para validar classificadores em tarefas de revisão sistemática.

### 4. Exemplo Prático: Detecção de Mísseis

Um exemplo clássico envolve um sistema que detecta mísseis em meio a sinais simulados. Considere o seguinte cenário:

- **Amostras**: 100 ataques, dos quais 3 são mísseis (P = 3) e 97 são sinais simulados (N = 97).
- **Sistema detectou**: 2 mísseis (TP = 2) e 98 sinais (TN = 97), sem falsos positivos (FP = 0) e com 1 falso negativo (FN = 1).

As métricas calculadas seriam:

- **Precisão**:
$\frac{2}{2 + 0} = 100\%$
- **Recall**:
$\frac{2}{2 + 1} = 66.67\%$
- **Acurácia**:
$\frac{2 + 97}{100} = 99\%$
- F1 Score: 
$F1 = 2 \times \frac{1 \times \frac{2}{3}}{1 + \frac{2}{3}} = 2 \times \frac{\frac{2}{3}}{\frac{5}{3}} = 2 \times \frac{2}{5} = \frac{4}{5} = 0.8$

Apesar da alta precisão e acurácia, o fato de o sistema ter falhado em detectar um míssil (FN = 1) demonstra que é necessário melhorar o recall. Em situações críticas, como a detecção de fraudes ou diagnósticos médicos, o recall é particularmente importante, pois um falso negativo pode ter consequências graves.

### 5. Conclusão

As métricas de avaliação discutidas — precisão, recall, acurácia e F1-Score — são fundamentais para medir o desempenho de modelos de classificação. No entanto, em cenários com desequilíbrio de classes, como nas revisões sistemáticas automatizadas, a métrica WSS@R se mostra mais adequada para avaliar o impacto real de um classificador. Ainda assim, a WSS@R possui limitações, especialmente devido à variação causada pelo desequilíbrio de classes, o que levou ao desenvolvimento da métrica AWSS@R, que oferece uma avaliação mais estável e confiável.

Recomenda-se que, ao avaliar o desempenho de classificadores em tarefas com classes desbalanceadas, como revisões sistemáticas, os pesquisadores considerem não apenas métricas tradicionais, mas também métricas adaptadas como a AWSS@R para uma análise mais precisa e equilibrada.

---

**Referências:**

- Cohen, A. M., Hersh, W. R., Peterson, K., & Yen, P. Y. (2006). Reducing workload in systematic review preparation using automated citation classification. *Journal of the American Medical Informatics Association*, 13(2), 206-219.
- van Dinter, et al. (2021). Sample Imbalance in SLRs. *Journal of Research Methodologies*, 2021.
- Maisa K. de Melo, et al. (2022). Few-shot Approach for Systematic Literature Review Classifications. *18th International Conference on Web Information Systems and Technologies (WEBIST)*.