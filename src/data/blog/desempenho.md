---
banner_alt: Métricas de Avaliação de Desempenho
banner: https://images.unsplash.com/photo-1700773429980-ed1d3287fe1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: Desempenho
title: Métricas de Avaliação de Desempenho
description: Métricas de avaliação de desempenho são utilizadas para medir e avaliar o sucesso ou o fracasso de uma estratégia, projeto ou iniciativa.
date: '2024-07-02'
---

# Precisão, Recall, F1, WSS@R e a métrica que realmente importa quando o dataset é desbalanceado

Quando alguém começa a trabalhar com classificação usando Machine Learning, normalmente aprende quatro métricas logo de cara: precisão, recall, acurácia e F1-score.

E aí acontece um negócio curioso.

Você treina um modelo, roda a avaliação, vê uma acurácia de 99% e pensa: "pronto, resolvido".

Só que muitas vezes o modelo é péssimo.

Parece contraditório, mas não é.

O problema é que métricas isoladas contam histórias incompletas. Dependendo do contexto, elas podem até esconder os erros mais importantes do modelo. E isso fica ainda pior quando estamos lidando com datasets desbalanceados, que são extremamente comuns no mundo real.

Antes de falar de WSS@R e AWSS@R, que são as métricas usadas em revisão sistemática automatizada, vale entender por que as métricas tradicionais nem sempre são suficientes.

## Tudo começa na matriz de confusão

Toda métrica de classificação nasce da mesma estrutura: a matriz de confusão.

Ela compara o que o modelo previu com o que realmente aconteceu.

|               | Predito Positivo | Predito Negativo |
| ------------- | ---------------- | ---------------- |
| Real Positivo | TP               | FN               |
| Real Negativo | FP               | TN               |

Onde:

* **TP (True Positive)**: positivo previsto corretamente.
* **TN (True Negative)**: negativo previsto corretamente.
* **FP (False Positive)**: negativo previsto como positivo.
* **FN (False Negative)**: positivo previsto como negativo.

A partir desses quatro números surgem praticamente todas as métricas clássicas de classificação.

## Precisão: quando o modelo diz "sim", ele costuma estar certo?

A precisão mede quantas das previsões positivas realmente eram positivas.

A fórmula é simples:

$$
Precisão = \frac{TP}{TP + FP}
$$

Quanto maior a precisão, menor a quantidade de falsos positivos.

Pense em um detector de spam.

Se ele marcar cem e-mails como spam e noventa e nove realmente forem spam, a precisão é alta.

Se metade deles forem mensagens legítimas, a precisão é ruim.

A pergunta que a precisão responde é:

> Das coisas que o modelo marcou como positivas, quantas realmente eram positivas?

## Recall: quantas coisas importantes o modelo encontrou?

O recall olha para o problema pelo lado oposto.

$$
Recall = \frac{TP}{TP + FN}
$$

Aqui o foco não é evitar falsos positivos.

O foco é evitar perder casos importantes.

A pergunta passa a ser:

> De tudo que realmente era positivo, quanto o modelo conseguiu encontrar?

Em detecção de fraude, diagnóstico médico ou sistemas de segurança, recall costuma ser mais importante do que precisão.

Um falso positivo pode gerar trabalho extra.

Um falso negativo pode gerar prejuízo, risco ou até perda de vidas.

## Acurácia: a métrica mais mal interpretada

A fórmula da acurácia é:

$$
Acurácia = \frac{TP + TN}{TP + TN + FP + FN}
$$

Ela mede a proporção total de previsões corretas.

O problema é que ela funciona muito bem apenas quando as classes estão equilibradas.

Imagine um conjunto com:

* 97 exemplos negativos
* 3 exemplos positivos

Se um modelo simplesmente responder "negativo" para tudo, ele acertará 97 casos.

A acurácia será:

$$
97%
$$

Só que ele falhou em encontrar todos os positivos.

Na prática, é um modelo inútil.

Por isso acurácia sozinha raramente é suficiente.

## F1-Score: tentando equilibrar precisão e recall

O F1-Score existe justamente para combinar as duas métricas anteriores.

$$
F1 = 2 \times \frac{Precisão \times Recall}{Precisão + Recall}
$$

Ele usa a média harmônica, penalizando situações onde uma métrica é muito alta e a outra muito baixa.

Se a precisão é excelente mas o recall é péssimo, o F1 também será ruim.

Por isso ele costuma ser uma métrica mais equilibrada para comparação de classificadores.

## O exemplo do míssil

Imagine um sistema responsável por detectar ataques de mísseis.

Temos 100 eventos observados:

* 3 são mísseis reais.
* 97 são sinais falsos.

O sistema encontrou:

* TP = 2
* TN = 97
* FP = 0
* FN = 1

As métricas ficam:

**Precisão**

$$
\frac{2}{2+0}=100%
$$

**Recall**

$$
\frac{2}{2+1}=66,67%
$$

**Acurácia**

$$
\frac{2+97}{100}=99%
$$

**F1**

$$
0,8
$$

Percebe o problema?

A acurácia é 99%.

Mesmo assim o sistema deixou passar um míssil.

Em um cenário militar, isso seria um desastre.

É exatamente por isso que olhar apenas para acurácia pode induzir conclusões completamente erradas.

## Quando entra o WSS@R

Em revisões sistemáticas da literatura existe um problema diferente.

O objetivo normalmente não é apenas classificar corretamente.

O objetivo é reduzir trabalho humano.

É aí que entra a métrica **WSS@R (Work Saved over Sampling)**.

Ela foi proposta por Cohen e colaboradores em 2006 para medir quanto trabalho um classificador consegue economizar em comparação com uma seleção aleatória de artigos.

A fórmula é:

$$
WSS@R = \frac{TP + TN}{N}
$$

Onde:

* TP = verdadeiros positivos
* TN = verdadeiros negativos
* N = total de amostras

A interpretação é simples:

Quanto maior o valor da métrica, maior a quantidade de trabalho poupado para os revisores humanos.

Na prática, costuma-se fixar um recall alto (como 95%) e medir quanto esforço manual foi economizado mantendo esse nível de cobertura.

## O problema do desbalanceamento

Só que existe uma pegadinha.

Revisões sistemáticas costumam ter datasets extremamente desbalanceados.

É comum ter milhares de artigos irrelevantes para poucas dezenas realmente relevantes.

Nesse cenário, pequenas mudanças na distribuição das classes podem provocar grandes variações na WSS@R.

A métrica passa a ficar sensível demais ao desequilíbrio.

E foi justamente para atacar esse problema que surgiu a AWSS@R.

## AWSS@R: tentando corrigir a distorção

A AWSS@R (Adapted Work Saved over Sampling) introduz um ajuste para compensar o efeito do desbalanceamento.

De forma simplificada:

$$
AWSS@R =
\frac{TP + TN}{N}
\times
F(Class\ Imbalance)
$$

Onde a função de ajuste considera o grau de desequilíbrio das classes.

A ideia é produzir uma medida mais estável do trabalho efetivamente economizado, independentemente da proporção entre positivos e negativos.

Em estudos recentes, essa abordagem tem mostrado resultados mais consistentes para avaliar classificadores em revisões sistemáticas automatizadas.

## A lição

Toda métrica responde uma pergunta diferente.

* Precisão responde se os positivos encontrados realmente são positivos.
* Recall responde quanto dos positivos existentes foi recuperado.
* Acurácia mede o total de acertos.
* F1 tenta equilibrar precisão e recall.
* WSS@R mede trabalho economizado.
* AWSS@R tenta medir esse mesmo trabalho de forma mais robusta em datasets desbalanceados.

O erro mais comum é escolher uma única métrica e tratá-la como verdade absoluta.

Não existe métrica universal.

A métrica correta depende do problema que você está tentando resolver.

Em classificação tradicional, precisão, recall e F1 costumam ser suficientes.

Em revisão sistemática automatizada, onde o objetivo é reduzir esforço humano sem perder artigos relevantes, métricas como WSS@R e AWSS@R passam a fazer muito mais sentido.

E essa distinção importa mais do que ganhar alguns décimos percentuais em acurácia.

---

**Referências:**

- Cohen, A. M., Hersh, W. R., Peterson, K., & Yen, P. Y. (2006). Reducing workload in systematic review preparation using automated citation classification. *Journal of the American Medical Informatics Association*, 13(2), 206-219.
- van Dinter, et al. (2021). Sample Imbalance in SLRs. *Journal of Research Methodologies*, 2021.
- Maisa K. de Melo, et al. (2022). Few-shot Approach for Systematic Literature Review Classifications. *18th International Conference on Web Information Systems and Technologies (WEBIST)*.