---
banner_alt: MSA com Google OR-Tools
banner: https://images.unsplash.com/photo-1641903202531-bfa6bf0c6419?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: msa_ortools
title: Alinhamento Múltiplo de Sequências com Google OR-Tools
description: Este trabalho apresenta uma abordagem exata para o problema de Alinhamento Múltiplo de Sequências (MSA) utilizando técnicas de Programação Inteira e a biblioteca Google OR-Tools. 
date: '2025-07-29'
---


# Até onde dá para resolver Alinhamento Múltiplo de Sequências de forma exata?

Toda vez que alguém fala de alinhamento múltiplo de sequências (MSA), a conversa acaba indo para ferramentas como CLUSTAL W, MUSCLE ou MAFFT.

E faz sentido.

Se você precisa alinhar dezenas ou centenas de sequências, não existe muito espaço para romantismo matemático. Você usa heurísticas porque precisa de uma resposta antes do próximo milênio.

Mas isso sempre me deixou com uma dúvida.

Se essas ferramentas usam aproximações, qual seria a solução ótima de verdade?

Não uma solução boa. Não uma solução prática. A melhor solução possível segundo a função objetivo.

Resolvi investigar isso implementando um solucionador exato para MSA usando Pesquisa Operacional e Google OR-Tools.

O objetivo não era competir com MAFFT. Seria uma péssima ideia.

O objetivo era entender onde está o limite entre o que é matematicamente possível e o que é computacionalmente viável.

## O problema fica absurdo muito rápido

Quem já estudou alinhamento de pares conhece a ideia básica.

Você pode imaginar duas sequências como um grid e procurar o melhor caminho entre elas. É exatamente a lógica por trás de algoritmos clássicos como Needleman-Wunsch.

Mas quando saímos de duas sequências para três, quatro ou mais, o problema muda completamente de escala.

O grid vira um hipercubo.

Se existem (k) sequências, cada estado possui (2^k - 1) movimentos possíveis.

Parece um detalhe inocente.

Não é.

O espaço de busca explode numa velocidade que transforma problemas aparentemente pequenos em algo difícil de resolver por força bruta.

Existe um motivo para o alinhamento múltiplo de sequências ser classificado como NP-Hard.

Você sente isso na prática poucos minutos depois de começar a implementar.

## E se tratarmos MSA como um problema de otimização?

Em vez de seguir o caminho tradicional das heurísticas, resolvi modelar o problema como Programação Inteira.

A ideia é relativamente direta.

Primeiro definimos uma função objetivo baseada na métrica clássica de soma de pares (sum-of-pairs). Depois criamos variáveis binárias representando o posicionamento dos caracteres no alinhamento final e adicionamos restrições para garantir que o resultado seja válido.

O modelo precisa respeitar algumas regras fundamentais:

* a ordem original dos caracteres não pode ser alterada;
* um caractere só pode aparecer uma vez;
* duas posições da mesma sequência não podem ocupar a mesma coluna;
* gaps devem ser tratados explicitamente pela função de pontuação.

No papel parece simples.

Na prática, o número de variáveis cresce rapidamente.

Foi aí que entrou o Google OR-Tools.

## Por que OR-Tools?

Porque ele já resolve boa parte do trabalho pesado.

O OR-Tools oferece solvers modernos para otimização combinatória e programação inteira, permitindo modelar o problema de forma relativamente elegante sem precisar implementar um branch-and-bound do zero.

Para os experimentos, gerei sequências sintéticas de DNA e utilizei um esquema clássico de pontuação:

* Match: +2
* Mismatch: -1
* Gap: -3

Nada particularmente sofisticado. O objetivo era observar o comportamento computacional do modelo, não produzir alinhamentos biologicamente refinados.

## O que aconteceu?

Basicamente o que a teoria dizia que aconteceria.

Mas ver isso acontecendo na prática é sempre interessante.

Com três sequências de até 15 nucleotídeos, o solver encontra a solução ótima em tempos bastante razoáveis.

Nesse cenário, o modelo funciona muito bem como referência de verdade-terreno.

Você sabe que aquele alinhamento é o melhor possível segundo a função objetivo definida.

O problema aparece quando aumentamos um pouco a escala.

Não estou falando de centenas de sequências.

Estou falando de quatro sequências com cerca de 20 nucleotídeos.

Só isso.

Pequenos aumentos desse tipo já provocam um crescimento agressivo no tempo necessário para provar otimalidade.

Em vários experimentos o solver simplesmente ultrapassou limites que seriam aceitáveis em qualquer pipeline real.

Foi o momento em que a teoria deixou de ser uma frase em um livro e virou uma mensagem de timeout na tela.

## O que isso ensina?

Uma coisa que eu acho importante: heurísticas existem por um motivo.

É fácil olhar para ferramentas como CLUSTAL W ou MAFFT e pensar "eles estão abrindo mão da solução ótima".

Sim. Estão.

Mas a alternativa frequentemente é não ter solução nenhuma em tempo útil.

Depois de implementar um modelo exato, fica muito mais fácil entender por que a comunidade acabou convergindo para abordagens aproximadas.

Não foi preguiça.

Foi necessidade.

## Então vale a pena resolver MSA exatamente?

Para produção, quase nunca.

Para pesquisa, benchmarking e validação, sim.

Ter acesso à solução ótima em instâncias pequenas é extremamente útil para medir o quanto uma heurística está se afastando do resultado ideal.

Além disso, construir o modelo ajuda a enxergar a estrutura do problema de uma forma que nem sempre fica evidente quando usamos ferramentas prontas.

No fim das contas, esse projeto não me convenceu de que devemos abandonar heurísticas.

Pelo contrário.

Ele me convenceu de que elas são uma das razões pelas quais a bioinformática moderna funciona.

Mas também mostrou que existe valor em entender o problema na sua forma mais pura, mesmo quando sabemos de antemão que ele não escala.

Às vezes o experimento mais interessante não é encontrar uma solução melhor.

É descobrir exatamente por que a solução perfeita é tão difícil de obter.

O código completo, o paper, os experimentos e a modelagem estão disponíveis no GitHub: [Aqui](https://github.com/vncsmnl/msa_ortools)


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


