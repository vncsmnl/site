---
banner_alt: Interface do rwx mostrando a edição visual de permissões Unix, proprietário e grupo em um terminal
banner: https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: rwx
title: Parei de decorar chmod. Então escrevi um TUI pra isso.
description: Depois de anos abrindo o Google pra lembrar chmod 755, chmod -R e permissões Unix, resolvi escrever o rwx, um TUI em Rust que transforma permissões, ownership e bits especiais numa interface visual.
date: '2026-07-19'
---


Eu uso terminal o dia inteiro. Gerencio arquivos por CLI, quase tudo que faço passa por shell. E, ainda assim, toda vez que preciso mexer em permissões de arquivo, acontece exatamente a mesma coisa.

Eu paro.

Abro um terminal.

Escrevo `chmod`.

E aí trava.

Era `755` ou `775`? O diretório precisa de execute? Qual era mesmo a diferença entre `644` e `664`? E quando é recursivo, era `-R` antes ou depois do modo? Se preciso mudar dono e grupo junto, é `chown user:group` ou tenho que chamar `chgrp` separado?

O pior é que eu sei como permissões Unix funcionam. Não é falta de conhecimento. É simplesmente uma daquelas coisas que a gente usa com pouca frequência o suficiente pra nunca decorar completamente. Então lá vou eu abrir outra aba, pesquisar no Google "chmod 755", cair pela milésima vez na mesma calculadora de chmod ou num tutorial qualquer, confirmar o que eu já sabia mais ou menos e voltar pro terminal.

Toda vez.

E foi aí que percebi uma coisa. Será que alguém ja fez um TUI pra gerenciar chmod ? A resposta foi NÃO!

Se eu, que vivo no terminal, ainda preciso fazer esse ritual toda vez que vou dar permissão pra um arquivo, então provavelmente o problema não sou eu. O problema é a interface.

O Unix expõe permissões através de uma combinação de letras (`rwx`), representação simbólica (`u+rwx`, `g-w`) e notação octal (`0755`, `0644`, `4755`, `1777`). Tudo isso faz sentido quando você entende o modelo interno, mas não ajuda muito quando você só quer responder uma pergunta simples:

> "Quero que o dono tenha acesso total, o grupo só leia e execute, e o resto apenas leia."

Você acaba traduzindo mentalmente isso pra binário, depois pra octal, depois pro comando. É uma carga cognitiva completamente desnecessária.

Então, em vez de continuar pesquisando isso pro resto da vida, eu fiz o que sempre faço quando alguma tarefa repetitiva começa a me irritar: reservei um fim de semana e escrevi uma ferramenta pra resolver o problema.

Nasceu o **rwx**.

É um TUI escrito em Rust usando Ratatui e Crossterm que transforma permissões Unix em algo visual. Em vez de decorar números, você simplesmente enxerga as permissões e liga ou desliga cada bit.

O resultado é algo assim:

* abre qualquer arquivo ou diretório diretamente pelo terminal;
* navega pelo sistema de arquivos sem sair da aplicação;
* marca e desmarca Read, Write e Execute para Owner, Group e Others;
* vê imediatamente a representação simbólica (`drwxr-xr-x`) e o valor octal correspondente (`0755`);
* configura SetUID, SetGID e Sticky Bit sem precisar lembrar qual era o primeiro dígito;
* altera owner e group com validação em tempo real;
* aplica tudo recursivamente quando estiver trabalhando com diretórios.

A parte que mais gosto é justamente a mais simples.

Quando preciso dar permissão para um diretório, eu não penso mais em `755`.

Eu olho para uma grade de checkboxes e marco exatamente o que quero. O valor octal aparece sozinho. A representação simbólica aparece sozinha. Se estou fazendo alguma besteira, fica evidente antes mesmo de aplicar.

A ferramenta não substitui `chmod` nem `chown`. Ela continua usando os utilitários nativos do Unix por baixo. O objetivo nunca foi reinventar essas ferramentas. Foi construir uma interface melhor para algo que eu sempre esqueço.

Outro detalhe importante é o modo recursivo.

Quem já fez um `chmod -R` no diretório errado sabe que esse comando merece respeito. No `rwx`, a mudança é explícita. Você vê exatamente o alvo, ativa a opção recursiva quando realmente quer e só depois aplica as alterações.

Também fiz questão de suportar os casos menos comuns. Além das permissões tradicionais, dá para configurar SetUID, SetGID e Sticky Bit, editar diretamente o valor octal se você preferir trabalhar com números e alterar proprietário e grupo na mesma interface.

A instalação segue o mesmo padrão que venho adotando nos meus projetos recentes. Tem várias opções para evitar atrito:

```bash
# Homebrew
brew install vncsmnl/tap/rwx

# Script de instalação
curl --proto '=https' --tlsv1.2 -LsSf \
https://github.com/vncsmnl/rwx/releases/latest/download/rwx-installer.sh | sh

# Cargo
cargo install rwx

# cargo-binstall
cargo binstall rwx
```

Depois é só executar:

```bash
rwx
```

Ou abrir diretamente um arquivo ou diretório:

```bash
rwx /caminho/do/arquivo
```

No fim das contas, esse projeto não nasceu porque permissões Unix são difíceis.

Elas são na verdade kkkk.

Mas nasceu porque eu cansei de desperdiçar alguns minutos toda vez que precisava lembrar um detalhe que o computador poderia mostrar para mim.

É exatamente o tipo de ferramenta que provavelmente não muda a vida de ninguém, mas remove uma pequena fricção que aparece centenas de vezes ao longo dos anos. E esse costuma ser meu tipo favorito de projeto: pegar uma irritação recorrente do dia a dia e substituir por algo que simplesmente deixa de exigir esforço mental.

Agora, quando preciso lembrar qual permissão quero dar para um arquivo, eu não abro mais o Google.

Eu abro o `rwx`.

Link do [**Projeto**](https://github.com/vncsmnl/rwx)
