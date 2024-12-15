---
banner_alt: Needleman-Wunsch algorithm
banner: https://images.unsplash.com/photo-1732046801426-f32529468176?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: needleman-wunsch
title: Introdução Needleman-Wunsch
description: O alinhamento de sequências consiste em arranjar duas ou mais sequências de forma a maximizar a correspondência entre os seus elementos.
date: '2024-12-15'
---

## O Alinhamento de Sequências Biológicas

O advento da biologia molecular e o subsequente desenvolvimento de técnicas de sequenciamento de DNA e proteínas revolucionaram a nossa compreensão dos sistemas vivos. Uma das ferramentas mais importantes que emergiram dessa revolução é o **alinhamento de sequências**, que permite aos cientistas comparar sequências biológicas e identificar semelhanças e diferenças.  Esta técnica é fundamental para uma vasta gama de aplicações, desde a **identificação de genes** e proteínas até a **reconstrução de relações evolutivas**.

### O Conceito de Alinhamento e os Modelos de Pontuação

O alinhamento de sequências consiste em **arranjar duas ou mais sequências** de forma a **maximizar a correspondência** entre os seus elementos.  Essa correspondência pode ser baseada na identidade entre os elementos (por exemplo, nucleotídeos em sequências de DNA ou aminoácidos em sequências de proteínas), ou na similaridade entre eles, considerando propriedades físico-químicas ou relações evolutivas.

Para avaliar a qualidade de um alinhamento, são utilizados **modelos de pontuação** que atribuem valores numéricos a diferentes tipos de correspondência. Os modelos mais comuns consideram:

* **Substituições:** pontuações positivas para pares de resíduos idênticos ou conservados (com propriedades físico-químicas semelhantes) e pontuações negativas para pares de resíduos não conservados.
* **Inserções e Deleções (Gaps):** penalidades para a introdução de gaps, que representam inserções ou deleções de elementos numa das sequências.

A escolha do modelo de pontuação é crucial para a **sensibilidade e especificidade** do alinhamento.

### Algoritmos de Alinhamento

Diversos algoritmos foram desenvolvidos para encontrar o alinhamento ótimo entre duas sequências. O mais conhecido é o algoritmo de **programação dinâmica**, que garante encontrar o alinhamento com a maior pontuação possível, dado o modelo de pontuação escolhido. Existem diferentes variantes da programação dinâmica, cada uma otimizada para um tipo específico de alinhamento, como:

* **Alinhamento Global (Needleman-Wunsch):** busca o melhor alinhamento ao longo de toda a extensão das duas sequências. Este algoritmo é útil quando as sequências são de tamanho similar e se espera que sejam relacionadas ao longo de toda a sua extensão.
* **Alinhamento Local (Smith-Waterman):** procura o alinhamento de maior pontuação entre subsequências das duas sequências. Esta abordagem é ideal quando se suspeita que as sequências compartilhem apenas uma região em comum, como um domínio proteico.
* **Alinhamento de Repetições:** identifica múltiplas cópias de uma sequência em outra.
* **Alinhamento de Sobreposição:**  utilizado quando se espera que uma sequência contenha a outra ou que haja sobreposição entre elas.

A programação dinâmica garante a otimalidade do alinhamento, mas pode ser computacionalmente **intensiva para sequências muito longas**. Por isso, também existem algoritmos heurísticos, como BLAST e FASTA, que sacrificam alguma sensibilidade em prol da velocidade.

### Avaliando a Significância de um Alinhamento

Encontrar um alinhamento com alta pontuação não garante que ele seja biologicamente significativo. Afinal, mesmo sequências aleatórias podem apresentar algum grau de similaridade. Para avaliar a significância de um alinhamento, é preciso determinar a probabilidade de que ele tenha ocorrido por acaso. Duas abordagens principais são utilizadas:

* **Comparação de Modelos (Abordagem Bayesiana):**  calcula a probabilidade de que as sequencias sejam relacionadas, dado o alinhamento observado e as probabilidades a priori de relação e não relação. 
* **Distribuição de Valores Extremos (Abordagem Clássica):**  analisa a distribuição estatística das pontuações de alinhamento entre sequências aleatórias e determina a probabilidade de obter uma pontuação igual ou superior à observada, assumindo que as sequencias não sejam relacionadas.

A significância estatística de um alinhamento é crucial para **inferir homologia** entre sequências e para **reconstruir relações evolutivas**.

![needleman-wunsch](https://image3.slideserve.com/6650937/needleman-wunsch-algorithm-l.jpg)

### Aprendendo com Dados Reais

A escolha dos parâmetros do modelo de pontuação, como as pontuações de substituição e as penalidades por gaps, tem um impacto direto na qualidade do alinhamento. Uma abordagem comum para otimizar esses parâmetros é **derivá-los de dados reais**, como alinhamentos de proteínas com homologia comprovada. As **matrizes PAM** e **BLOSUM** são exemplos de matrizes de substituição amplamente utilizadas, derivadas de grandes conjuntos de dados de alinhamentos de proteínas.

### Considerações Finais

O alinhamento de sequências é uma ferramenta fundamental para a biologia moderna, e novas variantes e aplicações continuam a ser desenvolvidas. O crescente volume de dados de sequenciamento e a complexidade dos problemas biológicos exigem o desenvolvimento de algoritmos mais eficientes e modelos de pontuação mais sofisticados. A combinação de técnicas de **aprendizado de máquina** com a **biologia evolutiva** promete impulsionar o desenvolvimento de novas ferramentas para a análise de sequências biológicas. 

### Referências

* **Para uma visão geral dos métodos de programação dinâmica para comparação de sequências biológicas:**
    * Pearson, W. R. (1996). Similarities and differences in DNA and protein sequences. In _Computer analysis of sequence data_ (pp. 161-190). Humana Press.
    * Pearson, W. R., & Miller, W. (1992). Dynamic programming algorithms for biological sequence comparison. _Methods in enzymology_, _210_, 575-601.
* **Para o desenvolvimento do algoritmo Needleman-Wunsch:** 
    * Needleman, S. B., & Wunsch, C. D. (1970). A general method applicable to the search for similarities in the amino acid sequence of two proteins. _Journal of molecular biology_, _48_(3), 443-453.
* **Para o desenvolvimento do algoritmo Smith-Waterman:**
    * Smith, T. F., & Waterman, M. S. (1981). Identification of common molecular subsequences. _Journal of molecular biology_, _147_(1), 195-197.
* **Para informações sobre as matrizes de substituição PAM:**
    * Dayhoff, M. O., Schwartz, R. M., & Orcutt, B. C. (1978). A model of evolutionary change in proteins. _Atlas of protein sequence and structure_, _5_(Suppl. 3), 345-352.
* **Para informações sobre as matrizes de substituição BLOSUM:**
    * Henikoff, S., & Henikoff, J. G. (1992). Amino acid substitution matrices from protein blocks. _Proceedings of the National Academy of Sciences_, _89_(22), 10915-10919.
* **Para uma discussão sobre a escolha de penalidades de gap:**
    * Vingron, M., & Waterman, M. S. (1994). Sequence alignment and penalty choice: Review of concepts, case studies and implications. _Journal of molecular biology_, _235_(1), 1-12.

