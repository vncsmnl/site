---
banner_alt: Simplificando a Orquestração de Contêineres com Docker Compose
banner: https://images.unsplash.com/photo-1646627927863-19874c27316b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: Docker
title: Docker 101 - Dominando os Conceitos Básicos
description: Publicado inicialmente por Leoni Mella for Ingresse no dev.to
date: '2024-02-03'
---

**[forked from Leoni Mella for Ingresse](https://dev.to/ingresse/docker-e-docker-compose-um-guia-para-iniciantes-48k8)**

# Docker e Docker Compose: Um Guia para Quem Está Começando

Quando comecei a usar Docker, entender os comandos não foi o problema.

Eu sabia criar imagens. Sabia executar containers. Sabia copiar exemplos da documentação.

O que eu não entendia era como tudo aquilo se encaixava em um projeto real.

Por que eu criaria uma imagem própria se já existem imagens prontas?

Quando devo usar um Dockerfile?

Qual é a diferença entre uma imagem e um container?

E por que todo mundo fala de Docker Compose como se fosse a solução para todos os problemas?

Foi só depois de quebrar algumas aplicações, recriar ambientes várias vezes e passar mais tempo do que gostaria lendo documentação que essas peças começaram a fazer sentido.

Este artigo é a explicação que eu gostaria de ter encontrado quando comecei.

Não vamos cobrir todos os recursos do Docker. O objetivo aqui é construir um modelo mental que ajude você a entender como imagens, containers e Docker Compose trabalham juntos.

## Antes de começar

Se você nunca teve contato com Docker, vale a pena passar pela documentação oficial primeiro.

O restante deste artigo assume que você já conseguiu instalar Docker e Docker Compose e executou pelo menos alguns comandos básicos.

A ideia não é ensinar a instalar as ferramentas, mas explicar como utilizá-las no dia a dia de desenvolvimento.

---

# Parte 01 — Imagens, Containers e Dockerfiles

Na minha experiência, a maior fonte de confusão para iniciantes não é o Dockerfile.

É entender a diferença entre imagem e container.

Sem isso, boa parte dos comandos do Docker parecem arbitrários.

Uma forma simples de pensar nisso é:

* A imagem é o molde.
* O container é a instância em execução desse molde.

Ou, fazendo um paralelo com programação orientada a objetos:

* A imagem seria uma classe.
* O container seria um objeto criado a partir dela.

Toda vez que você executa um container, existe uma imagem por trás dele.

Sempre.

Não existe container sem imagem.

O Dockerfile é simplesmente a receita usada para construir essa imagem.

Vamos usar um exemplo simples.

Suponha que queremos apenas executar:

```bash
elixir -v
```

Para isso precisamos de um ambiente que possua o interpretador Elixir instalado.

Criamos então um Dockerfile mínimo:

```Dockerfile
FROM elixir:1.10
```

Esse arquivo está dizendo:

> Construa minha imagem utilizando a imagem oficial do Elixir 1.10 como base.

Agora podemos gerar nossa própria imagem:

```bash
docker build -t elixir:example .
```

Um detalhe importante: o ponto (`.`) no final do comando indica o contexto de build. Quase todo iniciante esquece isso pelo menos uma vez.

Depois da construção podemos listar as imagens disponíveis:

```bash
docker image ls
```

Você verá algo parecido com:

```text
REPOSITORY       TAG
elixir           example
```

Agora sim podemos criar um container usando essa imagem:

```bash
docker run --rm elixir:example elixir -v
```

O que aconteceu aqui?

1. O Docker criou um container.
2. O container utilizou nossa imagem.
3. O comando `elixir -v` foi executado.
4. O container foi removido graças à flag `--rm`.

Perceba que a imagem continua existindo.

Quem foi destruído foi apenas o container.

Essa distinção é importante porque praticamente tudo no Docker gira em torno dela.

## Um detalhe que me confundiu no começo

Nesse exemplo nem precisaríamos ter criado um Dockerfile.

Poderíamos simplesmente executar:

```bash
docker run --rm elixir:1.10 elixir -v
```

O resultado seria praticamente o mesmo.

Então por que criar uma imagem própria?

Porque raramente uma aplicação precisa apenas de uma dependência.

Imagine que além do Elixir você também precise do Git.

Agora faz sentido criar uma imagem personalizada:

```Dockerfile
FROM elixir:1.10

RUN apt-get update && apt-get install -y git
```

Nesse momento a imagem deixa de ser apenas uma cópia da imagem oficial e passa a representar exatamente o ambiente que sua aplicação precisa para funcionar.

---

[👷‍♀️EM CONSTRUÇÃO]
