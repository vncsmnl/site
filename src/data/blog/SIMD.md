---
banner_alt: Usando SIMD no h3all
banner: https://images.unsplash.com/photo-1702802120584-11d6b70f47cd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: SIMD_h3all
title: Acelerando o Alinhamento de Sequências com SIMD
description: Este é um resumo do trabalho que publiquei no CARLA
date: '2026-06-03'
---


# Às vezes a solução mais lenta deixa o programa mais rápido

Recentemente eu estava trabalhando em uma otimização para um alinhador exato de sequências biológicas chamado PA-Star.

O objetivo parecia simples: reduzir o tempo total de execução.

Mas o caminho para chegar lá era contraintuitivo.

Na literatura de Multiple Sequence Alignment (MSA) existe uma heurística chamada h₂_all que é usada há bastante tempo para guiar buscas A-Star. Ela funciona bem, é relativamente barata de calcular e aparece em praticamente todas as implementações paralelas modernas.

O problema é que ela não é muito inteligente.

Ela estima o custo restante do alinhamento olhando apenas para pares de sequências.

E quando você está tentando alinhar várias sequências ao mesmo tempo, olhar apenas para pares significa perder muita informação.

A consequência é que o algoritmo A-Star acaba explorando muito mais estados do que realmente precisa.

E isso custa caro.

## A heurística melhor já existia

O curioso é que a literatura já conhecia uma alternativa melhor.

Ela se chama h₃_all.

Em vez de analisar pares de sequências, ela analisa trios.

Isso produz um limite inferior muito mais forte para o A-Star.

Na prática, significa que o algoritmo consegue eliminar muito mais caminhos inviáveis antes mesmo de explorá-los.

Menos nós expandidos.

Menos memória.

Menos trabalho.

Então surge uma pergunta natural:

Se h₃_all é melhor, por que ninguém usa?

Porque ela é absurdamente mais cara de calcular.

Enquanto a abordagem baseada em pares trabalha com programação dinâmica bidimensional, a abordagem baseada em trios exige programação dinâmica tridimensional.

O custo explode rapidamente.

Durante anos, isso fez com que h₃_all permanecesse mais como uma curiosidade teórica do que como uma solução prática.

## A aposta

Nós decidimos testar uma hipótese simples.

E se o ganho obtido durante a busca compensasse o custo extra do pré-processamento?

Em outras palavras:

E se gastar mais tempo calculando a heurística fizesse o programa terminar mais rápido?

Para descobrir isso, substituímos a heurística original do PA-Star por uma implementação baseada em h₃_all.

Mas havia um problema.

Se fizéssemos isso de forma ingênua, o pré-processamento se tornaria inviável.

Então precisávamos atacar o custo computacional diretamente.

## Paralelismo em dois níveis

A solução acabou combinando duas estratégias.

A primeira foi paralelizar os cálculos dos trios entre múltiplas threads.

Cada alinhamento de três sequências é independente dos demais.

Isso significa que podemos distribuir os trios entre diferentes núcleos sem praticamente nenhuma sincronização.

A segunda estratégia foi usar SIMD.

Reestruturamos a memória para armazenar as matrizes tridimensionais em vetores lineares contínuos.

Isso melhorou a localidade de cache e permitiu processar várias células simultaneamente usando instruções vetoriais.

A inspiração veio do trabalho clássico de Farrar sobre o algoritmo Striped Smith-Waterman.

Não copiamos a técnica diretamente, mas seguimos a mesma filosofia: reorganizar os acessos à memória para aproveitar melhor o hardware moderno.

## O resultado mais interessante

O que eu esperava encontrar era uma troca.

Algo como:

"o pré-processamento ficou mais rápido e a busca ficou parecida".

Não foi isso que aconteceu.

Na verdade, o pré-processamento ficou mais caro.

Mas a busca ficou muito mais barata.

Em um dos datasets, o tempo gasto calculando a heurística aumentou de praticamente zero para 0,67 segundos.

Parece ruim.

Só que a fase principal da busca caiu de 189 segundos para 78 segundos.

O resultado final foi uma redução do tempo total de execução de 189,65 segundos para 80,01 segundos.

Um speedup de 2,37x.

Tudo isso sem alterar o algoritmo A-Star em si.

A única mudança foi fornecer uma estimativa melhor.

## A melhor otimização nem sempre está no código quente

Esse trabalho reforçou uma coisa que eu vejo repetidamente em computação de alto desempenho.

Nem toda otimização vem de acelerar o trecho mais executado do programa.

Às vezes a melhor otimização é reduzir a quantidade de trabalho que precisa ser feito.

Foi exatamente isso que aconteceu aqui.

Gastamos mais processamento produzindo uma heurística melhor.

Em troca, o algoritmo passou a explorar muito menos estados.

O resultado foi menos tempo de execução e menos consumo de memória.

No maior caso avaliado, também observamos reduções superiores a 20% no uso de RAM.

## O que eu aprendi

Quando comecei esse projeto, eu enxergava h₃_all como uma heurística teoricamente interessante, mas impraticável.

Depois dos experimentos, minha opinião mudou.

O custo adicional existe.

Mas em muitos cenários ele é amplamente compensado pela redução do espaço de busca.

E isso muda completamente a conversa.

Durante anos a pergunta foi:

"Como podemos conviver com o custo de h₃_all?"

Talvez a pergunta correta seja:

"Como conseguimos viver tanto tempo sem usar h₃_all?"
