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
- **True Negative (VN)**: representa os verdadeiros negativos, ou seja, as instâncias da Classe 0 corretamente previstas como Classe 0.

Em problemas de classificação com múltiplas classes, a matriz de confusão se expande, apresentando uma linha e uma coluna específica para cada uma das classes.

#### Precisão

É calculada pela proporção de Verdadeiros Positivos *(TP)* em relação ao total de elementos classificados como positivos pelo modelo. Esta métrica mostra o grau de confiabilidade do modelo ao identificar um elemento como Positivo.

$$
\text{Precisão} = \frac{\mathit{TP}}{\mathit{TP} + \mathit{FP}}
$$

#### Recall

Representa a proporção de Verdadeiros Positivos *(TP)* em relação ao conjunto de instâncias que são de fato positivas. Essa métrica avalia a habilidade do modelo em detectar corretamente todas as ocorrências da classe positiva no conjunto de dados.

$$
\mathit{Recall} = \frac{\mathit{TP}}{\mathit{TP} + \mathit{FN}}
$$

#### F1 Score

É a média harmônica entre Precisão e *Recall*, oferecendo um equilíbrio entre ambas as métricas. Ele proporciona uma avaliação unificada do desempenho do modelo, sendo particularmente útil em cenários onde as classes estão desequilibradas.

$$
\textit{F1 Score} = \frac{2 \times \textit{Precisão} \times \mathit{Recall}}{\textit{Precisão} + \mathit{Recall}}
$$

#### Macro Average (AVG)
É a média simples das métricas (como Precisão, *Recall* e  *F1-Score*) para cada classe. Isso significa que todas as classes têm o mesmo peso na média, independentemente de quantas amostras de cada classe existam no conjunto de dados.

$$
\text{Macro Average Precision} = \frac{\sum_{k=1}^{K} \text{Precision}_k}{K}
$$

$$
\text{Macro Average Recall} = \frac{\sum_{k=1}^{K} \text{Recall}_k}{K}
$$

$$
\text{Macro Average F1-Score} = 2 \times \frac{\text{MacroAveragePrecision} \times \text{MacroAverageRecall}}{\text{MacroAveragePrecision}^{-1} + \text{MacroAverageRecall}^{-1}}
$$