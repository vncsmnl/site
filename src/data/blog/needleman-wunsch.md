---
banner_alt: Needleman-Wunsch algorithm
banner: https://images.unsplash.com/photo-1732046801426-f32529468176?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: needleman-wunsch
title: Introdução Needleman-Wunsch
description: O alinhamento de sequências consiste em arranjar duas ou mais sequências de forma a maximizar a correspondência entre os seus elementos.
date: '2024-12-15'
---

# Alinhamento de Sequências: a Ferramenta que Sustenta a Bioinformática

A partir do momento em que aprendemos a sequenciar DNA e proteínas, a biologia mudou de natureza. Antes observávamos organismos. Agora podemos ler diretamente o código que os constrói.

Mas existe um problema: gerar sequências é fácil. Entender o que elas significam é a parte difícil.

É aqui que entra uma das ferramentas mais importantes da bioinformática: o alinhamento de sequências.

Se eu encontro um gene novo em uma bactéria desconhecida, como descubro o que ele faz? Se quero saber se duas proteínas compartilham uma origem evolutiva comum, por onde começo? Se preciso reconstruir a história evolutiva de um grupo de organismos, qual é a primeira etapa?

Na prática, quase tudo começa com alinhamento.

A ideia é simples. Pegamos duas ou mais sequências biológicas e tentamos colocá-las lado a lado da melhor forma possível. O objetivo é identificar regiões conservadas, mutações, inserções, deleções e padrões que possam indicar função ou ancestralidade comum.

Parece simples. Não é.

## O problema não é alinhar. É pontuar.

Muita gente imagina que alinhar sequências significa procurar letras iguais.

Se fosse só isso, qualquer editor de texto resolveria.

O problema real é decidir quais diferenças importam e quais são apenas consequência natural da evolução.

Quando duas sequências são comparadas, normalmente encontramos três situações:

* Correspondências diretas, quando um resíduo é igual ao outro.
* Substituições, quando um aminoácido ou nucleotídeo foi trocado ao longo da evolução.
* Lacunas (gaps), quando ocorreu uma inserção ou deleção.

Nem todas as substituições têm o mesmo peso. Trocar uma leucina por uma isoleucina costuma ser menos drástico do que trocar uma leucina por um ácido aspártico, porque as propriedades químicas continuam relativamente próximas.

Da mesma forma, abrir um gap geralmente recebe uma penalidade maior, porque inserções e deleções costumam representar eventos evolutivos mais significativos.

É por isso que alinhamento é essencialmente um problema de otimização. O algoritmo tenta encontrar a configuração que produz a maior pontuação possível considerando recompensas e penalidades.

Se o sistema de pontuação for ruim, o alinhamento também será.

## Programação dinâmica: a solução clássica

Existe um motivo para dois algoritmos aparecerem em praticamente qualquer curso de bioinformática: eles resolvem o problema de forma exata.

Não é aproximação. Não é heurística. Eles encontram o melhor alinhamento possível segundo o modelo de pontuação definido.

### Needleman-Wunsch

O Needleman-Wunsch faz alinhamento global.

Isso significa que ele tenta alinhar as sequências inteiras, do início ao fim.

Quando as sequências têm comprimentos semelhantes e existe expectativa de que compartilhem ancestralidade ao longo de toda a extensão, essa costuma ser a abordagem correta.

Imagine comparar duas proteínas ortólogas de espécies próximas. Faz sentido assumir que praticamente toda a sequência deve ser comparada.

Nesses casos, alinhamento global funciona muito bem.

### Smith-Waterman

O Smith-Waterman segue uma filosofia diferente.

Em vez de tentar alinhar tudo, ele procura apenas a região com maior similaridade.

O resto pode simplesmente ser ignorado.

Isso é particularmente útil quando queremos identificar domínios conservados, motivos funcionais ou pequenas regiões compartilhadas entre sequências que, no geral, são bastante diferentes.

Na prática, ele responde uma pergunta diferente.

Não é "quão parecidas são essas sequências?".

É "qual é a região mais parecida entre elas?".

Parece uma diferença sutil, mas muda completamente o resultado.

## O preço da precisão

Existe um motivo para nem todo mundo usar Needleman-Wunsch e Smith-Waterman o tempo todo.

Eles são computacionalmente caros.

Para sequências pequenas, isso não costuma ser problema. Mas quando começamos a falar de bancos contendo milhões de sequências ou genomas inteiros, o custo cresce rapidamente.

Foi justamente daí que surgiram ferramentas como o BLAST.

O BLAST abre mão da garantia matemática de encontrar sempre o alinhamento ótimo em troca de velocidade. Em muitos cenários isso é uma troca aceitável.

Você recebe uma resposta em segundos em vez de esperar muito mais tempo por uma solução exata.

Mas quando a precisão é prioridade, os métodos clássicos continuam relevantes.

Não existe mágica. Precisão custa processamento.

## O alinhamento pode estar certo e ainda assim estar errado

Aqui está um detalhe que considero um dos mais importantes da área.

O algoritmo sempre vai produzir um alinhamento.

Sempre.

Você pode comparar duas proteínas relacionadas. Pode comparar um gene humano com uma sequência bacteriana. Pode comparar DNA real com uma sequência aleatória gerada por um script.

O software vai devolver um resultado.

A pergunta relevante não é se existe um alinhamento.

A pergunta é se aquele alinhamento tem significado biológico.

É uma diferença enorme.

Se você procurar o suficiente, sempre encontrará algum padrão. O problema é descobrir se aquele padrão surgiu por ancestralidade comum ou apenas por acaso.

É por isso que estatística é parte inseparável do alinhamento de sequências.

Métodos baseados em modelos probabilísticos, inferência bayesiana e distribuições estatísticas permitem estimar a probabilidade de um alinhamento ter ocorrido aleatoriamente.

Sem essa etapa, concluir que duas sequências são homólogas vira especulação.

## De onde vêm as matrizes de substituição?

Outro erro comum é imaginar que as pontuações usadas nos alinhamentos foram escolhidas arbitrariamente.

Não foram.

Matrizes como PAM e BLOSUM nasceram da observação de dados biológicos reais.

Pesquisadores analisaram milhares de proteínas já alinhadas e mediram quais substituições aconteciam com maior frequência ao longo da evolução.

O resultado foi um conjunto de matrizes que capturam tendências observadas na natureza.

Em outras palavras, a matemática não veio primeiro.

A biologia veio primeiro.

As matrizes são uma tentativa de transformar observações evolutivas em números que os algoritmos conseguem utilizar.

## O alinhamento continua no centro de tudo

Muita coisa mudou na bioinformática nas últimas décadas.

Sequenciadores ficaram mais rápidos. Bancos de dados cresceram. Surgiram GPUs, computação distribuída e modelos de aprendizado de máquina.

Mas o alinhamento continua aparecendo em praticamente todos os lugares.

Anotação de genes, identificação de proteínas, montagem de genomas, filogenia, busca em bancos de dados e análise evolutiva dependem direta ou indiretamente dele.

O que está mudando é a forma como fazemos isso.

Os volumes de dados atuais exigem algoritmos mais eficientes, paralelização agressiva e novas abordagens capazes de escalar para conjuntos gigantescos de sequências.

Ao mesmo tempo, modelos de aprendizado de máquina começam a complementar métodos clássicos, identificando padrões que nem sempre são capturados apenas por matrizes de substituição e programação dinâmica.

Mas vale lembrar: essas técnicas novas não substituem os fundamentos.

Elas são construídas em cima deles.

E poucos fundamentos são tão importantes para a bioinformática quanto o alinhamento de sequências.

## Referências

- Pearson, W. R. (1996). Similarities and differences in DNA and protein sequences. In _Computer analysis of sequence data_ (pp. 161-190). Humana Press.
- Pearson, W. R., & Miller, W. (1992). Dynamic programming algorithms for biological sequence comparison. _Methods in enzymology_, _210_, 575-601.
- Needleman, S. B., & Wunsch, C. D. (1970). A general method applicable to the search for similarities in the amino acid sequence of two proteins. _Journal of molecular biology_, _48_(3), 443-453.
- Smith, T. F., & Waterman, M. S. (1981). Identification of common molecular subsequences. _Journal of molecular biology_, _147_(1), 195-197.
- Dayhoff, M. O., Schwartz, R. M., & Orcutt, B. C. (1978). A model of evolutionary change in proteins. _Atlas of protein sequence and structure_, _5_(Suppl. 3), 345-352.
- Henikoff, S., & Henikoff, J. G. (1992). Amino acid substitution matrices from protein blocks. _Proceedings of the National Academy of Sciences_, _89_(22), 10915-10919.
- Vingron, M., & Waterman, M. S. (1994). Sequence alignment and penalty choice: Review of concepts, case studies and implications. _Journal of molecular biology_, _235_(1), 1-12.
