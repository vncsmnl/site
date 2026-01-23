---
banner_alt: Needleman-Wunsch algorithm
banner: https://images.unsplash.com/photo-1732046801426-f32529468176?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: needleman-wunsch
title: Introdução Needleman-Wunsch
description: O alinhamento de sequências consiste em arranjar duas ou mais sequências de forma a maximizar a correspondência entre os seus elementos.
date: '2024-12-15'
---

# O que é o Alinhamento de Sequências

Desde que aprendemos a ler o DNA e sequenciar proteínas, a biologia mudou de patamar. Deixamos de olhar apenas para a forma dos organismos e passamos a ler o código-fonte deles. Mas ter o código na mão é só o começo; o verdadeiro desafio é entender o que ele diz.

É aí que entra a minha ferramenta favorita (e provavelmente a mais importante da bioinformática): o **alinhamento de sequências**.

Basicamente, é a técnica que nos permite colocar duas ou mais sequências lado a lado para descobrir onde elas se parecem e onde diferem. É assim que descobrimos a função de um gene desconhecido ou reconstruímos a árvores genealógicas

## Como medimos similaridade?

Alinhar sequências é, no fundo, um problema de otimização. O objetivo é arranjar as letras (nucleotídeos ou aminoácidos) de forma a **maximizar a correspondência** entre elas.

Mas a natureza não é perfeita. A evolução é feita de mudanças. Por isso, não procuramos apenas identidade exata (A com A). Precisamos considerar:

1. **Substituições:** Quando um resíduo muda para outro. Se a mudança mantém as propriedades químicas (conservada), a pontuação é boa. Se muda drasticamente, a pontuação cai.
2. **Gaps (Lacunas):** Às vezes, a evolução insere ou deleta um pedaço do código. Para alinhar, precisamos abrir um espaço (gap). Como isso é um evento evolutivo mais drástico, o algoritmo aplica uma penalidade na pontuação.

A mágica está no modelo de pontuação. Se você calibra mal as recompensas por acertos e as multas por gaps, seu alinhamento não vai refletir a realidade biológica.

## Global vs. Local

Para resolver isso, usamos **programação dinâmica**. É um método matemático que garante que vamos encontrar o melhor alinhamento possível (o ótimo matemático). Existem duas variantes clássicas que todo bioinformata precisa conhecer:

### Needleman-Wunsch

Este é o algoritmo de **alinhamento global**. Ele tenta alinhar as duas sequências de ponta a ponta.

* **Quando usar:** Quando você tem sequências de tamanhos parecidos e acredita que elas são parentes em toda a sua extensão.

### Smith-Waterman

Este é o **alinhamento local**. Ele ignora o resto e foca apenas em encontrar a região de maior similaridade entre as sequências.

* **Quando usar:** Ideal para encontrar um domínio conservado (uma parte funcional da proteína) escondido em sequências muito diferentes ou de tamanhos distintos.

### Custo Computacional

A programação dinâmica é linda e exata, mas é "cara" computacionalmente. Alinhar genomas inteiros com esses métodos exatos pode levar uma eternidade. É por isso que, no dia a dia, muita gente usa heurísticas como o **BLAST**. O BLAST sacrifica um pouquinho da certeza matemática em troca de uma velocidade absurda.

Mas, para quem precisa de precisão absoluta (como no meu caso), os métodos exatos ainda são insubstituíveis.

Aqui entra um ponto que muita gente esquece: você pode alinhar qualquer coisa com qualquer coisa. Se eu tentar alinhar o DNA de um humano com uma sequência aleatória gerada no Excel, o algoritmo vai me dar um resultado.

A pergunta de um milhão de dólares é: **foi sorte ou é biologia?**

Para não cairmos em armadilhas, usamos estatística (como a Abordagem Bayesiana ou a Distribuição de Valores Extremos). Precisamos saber a probabilidade daquele alinhamento ter acontecido por puro acaso. Sem essa validação estatística, inferir homologia (parentesco evolutivo) é apenas um chute.

## Matrizes

Não tiramos os números da nossa cabeça. As matrizes de pontuação que usamos hoje, como a **PAM** e a **BLOSUM**, nasceram de dados reais. Cientistas analisaram milhares de alinhamentos confirmados para entender com que frequência um aminoácido é substituído por outro na natureza. É a biologia ensinando a matemática como se comportar.

## Conclusão

O alinhamento de sequências continua sendo a base de tudo, mas o campo não para. Com o volume de dados explodindo, precisamos de algoritmos cada vez mais eficientes (e paralelos!). A próxima fronteira parece ser a união desses métodos clássicos com o **Aprendizado de Máquina**, criando ferramentas capazes de detectar padrões evolutivos que passariam despercebidos pelos métodos tradicionais.

## Referências

- Pearson, W. R. (1996). Similarities and differences in DNA and protein sequences. In _Computer analysis of sequence data_ (pp. 161-190). Humana Press.
- Pearson, W. R., & Miller, W. (1992). Dynamic programming algorithms for biological sequence comparison. _Methods in enzymology_, _210_, 575-601.
- Needleman, S. B., & Wunsch, C. D. (1970). A general method applicable to the search for similarities in the amino acid sequence of two proteins. _Journal of molecular biology_, _48_(3), 443-453.
- Smith, T. F., & Waterman, M. S. (1981). Identification of common molecular subsequences. _Journal of molecular biology_, _147_(1), 195-197.
- Dayhoff, M. O., Schwartz, R. M., & Orcutt, B. C. (1978). A model of evolutionary change in proteins. _Atlas of protein sequence and structure_, _5_(Suppl. 3), 345-352.
- Henikoff, S., & Henikoff, J. G. (1992). Amino acid substitution matrices from protein blocks. _Proceedings of the National Academy of Sciences_, _89_(22), 10915-10919.
- Vingron, M., & Waterman, M. S. (1994). Sequence alignment and penalty choice: Review of concepts, case studies and implications. _Journal of molecular biology_, _235_(1), 1-12.
