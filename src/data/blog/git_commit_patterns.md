---
banner_alt: Git Commit Patterns
banner: https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: GIT
title: Git Commit Patterns
description: Como usar git commit de maneira menos burra
date: '2023-11-22'
---

# O Histórico Git é uma das Partes Mais Negligenciadas de um Projeto

Existe um momento inevitável em qualquer projeto.

Você está investigando um bug, abre o histórico do Git e encontra algo parecido com isso:

```text
update
fix
ajustes
mudanças
teste
```

Nesse instante você percebe que alguém sabotou a capacidade da equipe de entender o passado.

E esse alguém pode ter sido você.

Durante muito tempo eu tratei mensagens de commit como uma formalidade. O código estava funcionando, o pull request foi aprovado e o commit servia apenas para registrar que alguma coisa aconteceu.

O problema é que meses depois ninguém lembra o que aconteceu.

O Git registra todas as mudanças de um projeto. Mas sem mensagens consistentes, esse histórico vira apenas uma sequência de hashes difíceis de interpretar.

Foi por isso que comecei a usar Conventional Commits.

## O commit não serve para você de hoje

A maior parte dos desenvolvedores escreve commits pensando no presente.

Eu vejo isso acontecer o tempo todo:

```text
fix bug
ajustes finais
refatoração
```

No momento em que o commit é criado, o contexto ainda está fresco na cabeça de quem escreveu.

Parece suficiente.

Mas commits não existem para a pessoa que acabou de escrever o código.

Eles existem para a pessoa que vai tentar entender aquela mudança daqui a três meses.

Ou um ano.

Ou cinco anos.

Quando o histórico é bem estruturado, responder perguntas simples fica muito mais fácil:

* Quando essa funcionalidade foi adicionada?
* Qual commit introduziu esse bug?
* Quando essa dependência foi atualizada?
* Esta mudança foi uma correção ou uma refatoração?

Sem contexto, cada investigação vira uma arqueologia de software.

## O que são Conventional Commits?

A proposta é surpreendentemente simples.

Em vez de escrever mensagens arbitrárias, cada commit recebe um tipo que descreve sua intenção.

Por exemplo:

```text
feat: autenticação via OAuth
```

indica uma nova funcionalidade.

Já:

```text
fix: corrige expiração de token
```

indica uma correção.

Parece um detalhe pequeno, mas muda completamente a qualidade do histórico.

Você deixa de registrar apenas que algo mudou.

Passa a registrar por que aquilo mudou.

## O benefício aparece quando o projeto cresce

Em projetos pequenos, qualquer convenção parece exagero.

Em projetos maiores, a situação muda.

Quando dezenas de pessoas contribuem para o mesmo repositório, a consistência passa a ser mais importante do que a criatividade.

Um histórico padronizado permite filtrar mudanças por categoria, gerar changelogs automaticamente e até automatizar versionamento semântico.

Ferramentas conseguem identificar que:

* `feat` representa uma nova funcionalidade;
* `fix` representa uma correção;
* mudanças incompatíveis podem indicar uma nova versão major.

Ou seja, uma simples mensagem de commit passa a alimentar processos inteiros de entrega e versionamento.

## E os emojis?

Eu sei.

À primeira vista parece apenas estética.

Mas emojis funcionam como marcadores visuais.

Quando você abre um histórico com centenas de commits, identificar rapidamente uma correção 🐛, uma refatoração ♻️ ou uma nova funcionalidade ✨ reduz bastante o esforço visual.

Não é algo essencial.

Mas depois que você se acostuma, faz falta.

## A convenção é menos importante que a consistência

Existe uma discussão recorrente sobre qual padrão é melhor.

Conventional Commits.

Gitmoji.

Padrões internos da empresa.

Na prática, eu acho que essa é a pergunta errada.

A convenção escolhida importa menos do que sua aplicação consistente.

Um padrão imperfeito seguido por toda a equipe costuma ser mais útil do que um padrão excelente que ninguém respeita.

O objetivo não é produzir commits bonitos.

É produzir um histórico que continue útil quando o contexto original já desapareceu.

## Conclusão

A maioria dos problemas que resolvemos hoje vai voltar em algum momento.

Quando isso acontecer, o histórico Git provavelmente será uma das primeiras fontes de informação disponíveis.

A questão é se ele vai ajudar ou atrapalhar.

Mensagens de commit não mudam a arquitetura do sistema.

Não melhoram a performance.

Não corrigem bugs.

Mas tornam muito mais fácil entender como o software chegou ao estado atual.

E, na minha experiência, entender o passado costuma ser metade do trabalho de manutenção.

[Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

[Gitmoji](https://gitmoji.dev/)



