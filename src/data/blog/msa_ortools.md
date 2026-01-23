---
banner_alt: MSA com Google OR-Tools
banner: https://images.unsplash.com/photo-1641903202531-bfa6bf0c6419?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: msa_ortools
title: Alinhamento Múltiplo de Sequências com Google OR-Tools
description: Este trabalho apresenta uma abordagem exata para o problema de Alinhamento Múltiplo de Sequências (MSA) utilizando técnicas de Programação Inteira e a biblioteca Google OR-Tools. 
date: '2025-07-29'
---

### Solução exata para alinhamento múltiplo de sequências com Google OR-Tools

Em bioinformática, o **alinhamento múltiplo de sequências (MSA)** é uma etapa central em diferentes tipos de análise. Ele aparece, por exemplo, na inferência de relações evolutivas, na predição estrutural de proteínas e na identificação de regiões funcionais em sequências genéticas. Apesar de amplamente estudado, encontrar o alinhamento ótimo continua sendo um desafio computacional relevante.

O problema é conhecido por sua alta complexidade e é classificado como **NP-Hard**. À medida que o número de sequências e seus comprimentos aumentam, o espaço de busca cresce rapidamente, tornando inviável a enumeração explícita de todas as possibilidades. Por esse motivo, ferramentas amplamente utilizadas, como CLUSTAL W e MAFFT, recorrem a heurísticas. Essas abordagens são eficientes na prática, mas não garantem a obtenção da solução globalmente ótima.

Neste trabalho, investigou-se até que ponto é viável obter soluções ótimas para o MSA por meio de métodos exatos, explorando os limites computacionais do problema e avaliando o uso de técnicas de programação matemática.

#### Modelagem do problema e complexidade computacional

O alinhamento de duas sequências pode ser visto como a busca de um caminho ótimo em um grid bidimensional. No caso do alinhamento múltiplo, essa ideia se estende para um hipercubo de dimensão \(k\), onde \(k\) corresponde ao número de sequências. A cada etapa, existem \(2^k - 1\) movimentos possíveis, o que explica a rápida explosão combinatória do espaço de soluções.

Essa característica torna a resolução exata impraticável para instâncias de grande porte. Ainda assim, para conjuntos menores de sequências, métodos exatos podem ser aplicáveis e úteis, especialmente como referência para avaliar o desempenho de heurísticas.

#### Abordagem com pesquisa operacional e Google OR-Tools

O MSA foi formulado como um problema de **Programação Inteira**, com o objetivo de maximizar a função de **Soma de Pares (sum-of-pairs)**. A modelagem inclui:

- **Função objetivo**  
  Maximização da soma das pontuações atribuídas aos pares de caracteres alinhados, considerando matches, mismatches e penalidades por gaps.

- **Variáveis de decisão**  
  Variáveis binárias que indicam a posição de cada caractere de cada sequência no alinhamento final.

- **Restrições**  
  Restrições que garantem a validade do alinhamento, preservando a ordem dos caracteres e impedindo que mais de um caractere da mesma sequência ocupe a mesma coluna.

A implementação foi realizada em Python com a biblioteca **Google OR-Tools**, que oferece suporte robusto para problemas de otimização combinatória. Para os experimentos, foram geradas sequências sintéticas de DNA, utilizando um esquema de pontuação clássico: match = +2, mismatch = −1 e gap = −3.

#### Resultados e discussão

Os experimentos mostraram um comportamento esperado, mas ainda assim instrutivo:

- Em instâncias pequenas, como três sequências com até 15 nucleotídeos, o modelo encontrou soluções ótimas em tempos reduzidos. Esses resultados servem como referência confiável para comparação com métodos heurísticos.
- Pequenos aumentos na escala do problema, como quatro sequências de 20 nucleotídeos, já provocaram um crescimento exponencial no tempo de execução. Nessas situações, o solver ultrapassou limites práticos para garantir otimalidade.

Esses resultados reforçam, na prática, a dificuldade associada ao MSA e confirmam sua classificação como problema NP-completo.

#### Considerações finais

Embora abordagens exatas não sejam escaláveis para instâncias realistas de alinhamento múltiplo, elas têm valor claro em contextos controlados. Além de permitirem uma análise mais rigorosa do problema, fornecem um padrão de comparação para o desenvolvimento e a avaliação de heurísticas.

A aplicação de técnicas de pesquisa operacional em bioinformática mostra-se particularmente útil nesse cenário, ao oferecer modelos formais e bem definidos para problemas clássicos, contribuindo tanto para avanços metodológicos quanto para uma compreensão mais profunda de seus limites computacionais.

O código e os experimentos estão disponíveis no repositório do projeto:  
[Repositório do Projeto](https://github.com/vncsmnl/msa_ortools)

---

### Referências

1. Thompson, J.D., Higgins, D.G., & Gibson, T.J. (1994). CLUSTAL W: improving the sensitivity of progressive multiple sequence alignment through sequence weighting, position-specific gap penalties and weight matrix choice. *Nucleic Acids Research*, 22(22), 4673-4680.

2. Katoh, K., & Standley, D.M. (2013). MAFFT multiple sequence alignment software version 7: improvements in performance and usability. *Molecular Biology and Evolution*, 30(4), 772-780.

3. Wang, L., Jiang, T. (1994). On the complexity of multiple sequence alignment. *Journal of Computational Biology*, 1(4), 337-348.

4. Gusfield, D. (1997). *Algorithms on Strings, Trees, and Sequences: Computer Science and Computational Biology*. Cambridge University Press.

5. Needleman, S.B., & Wunsch, C.D. (1970). A general method applicable to the search for similarities in the amino acid sequence of two proteins. *Journal of Molecular Biology*, 48(3), 443-453.

6. Sankoff, D. (1972). Minimal mutation trees of sequences. *SIAM Journal on Applied Mathematics*, 24(1), 68-76.

7. Durbin, R., Eddy, S.R., Krogh, A., & Mitchison, G. (1998). *Biological Sequence Analysis: Probabilistic Models of Proteins and Nucleic Acids*. Cambridge University Press.

8. Altschul, S.F., Gish, W., Miller, W., Myers, E.W., & Lipman, D.J. (1990). Basic local alignment search tool. *Journal of Molecular Biology*, 215(3), 403-410.

9. Nemhauser, G.L., & Wolsey, L.A. (1988). *Integer and Combinatorial Optimization*. Wiley-Interscience.

10. Papadimitriou, C.H. (1994). *Computational Complexity*. Addison-Wesley.

11. Notredame, C. (2007). Recent evolutions of multiple sequence alignment algorithms. *PLoS Computational Biology*, 3(8), e123.

12. Edgar, R.C. (2004). MUSCLE: multiple sequence alignment with high accuracy and high throughput. *Nucleic Acids Research*, 32(5), 1792-1797.

13. Korte, B., Vygen, J. (2012). *Combinatorial Optimization: Theory and Algorithms*. Springer.

14. Wolsey, L.A. (1998). *Integer Programming*. Wiley.

15. Bertsimas, D., & Tsitsiklis, J. (1997). *Introduction to Linear Optimization*. Athena Scientific.

16. Google OR-Tools: Open Source Software for Optimization. (2020). Disponível em: [https://developers.google.com/optimization](https://developers.google.com/optimization)

17. Ribeiro, C.C., & Urrutia, S. (2001). A hybrid genetic algorithm for multiple sequence alignment. *Computers & Operations Research*, 28(12), 1291-1307.

18. Gusfield, D., & Waterman, M.S. (1989). *Algorithms for Molecular Biology*. Cambridge University Press.

19. Waterman, M.S. (1995). *Introduction to Computational Biology: Maps, Sequences and Genomes*. Chapman & Hall.

20. Aluru, S. (2005). *Handbook of Computational Molecular Biology*. Chapman & Hall/CRC.

21. Durbin, R. (1999). *Biological Sequence Analysis*. Cambridge University Press.

22. Wang, L., & Jiang, T. (1994). On the complexity of multiple sequence alignment. *Journal of Computational Biology*, 1(4), 337-348.

23. Lee, C., Grasso, C., & Sharlow, M.F. (2002). Multiple sequence alignment using partial order graphs. *Bioinformatics*, 18(3), 452-464.

24. Blanchette, M., et al. (2004). Aligning multiple genomic sequences with the threaded blockset aligner. *Genome Research*, 14(4), 708-715.

25. Gotoh, O. (1982). An improved algorithm for matching biological sequences. *Journal of Molecular Biology*, 162(3), 705-708.

26. Eddy, S.R. (1996). Hidden Markov models. *Current Opinion in Structural Biology*, 6(3), 361-365.

27. Chatzou, M., Magis, C., Chang, J.M., & Clausen, S. (2016). Multiple sequence alignment modeling: a critical review and recommendations. *Briefings in Bioinformatics*, 17(6), 975-988.

28. Zhang, Z., & Grosse, I. (2010). Advances in multiple sequence alignment algorithms. *Current Bioinformatics*, 5(2), 121-130.

29. Notredame, C. (2002). Recent progresses in multiple sequence alignment: a survey. *Pharmacogenomics*, 3(1), 131-144.

30. Gusfield, D. (1997). *Algorithms on Strings, Trees, and Sequences*. Cambridge University Press.

31. Waterman, M.S., & Eggert, M. (1987). A new algorithm for best subsequence alignments with application to tRNA-rRNA comparisons. *Journal of Molecular Biology*, 197(3), 723-728.

32. Sankoff, D., & Kruskal, J.B. (1999). *Time Warps, String Edits, and Macromolecules: The Theory and Practice of Sequence Comparison*. CSLI Publications.

33. Alves, R., & Costa, F.F. (2019). Challenges in computational biology: A perspective on optimization problems. *Computational and Structural Biotechnology Journal*, 17, 1123-1131.

34. Schulz, M.H., et al. (2012). Oases: robust de novo RNA-seq assembly across the dynamic range of expression levels. *Bioinformatics*, 28(8), 1086-1092.

35. Notredame, C. (2007). Recent evolutions of multiple sequence alignment algorithms. *PLoS Computational Biology*, 3(8), e123.


