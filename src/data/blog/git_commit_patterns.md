---
banner_alt: Git Commit Patterns
banner: https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: GIT
title: Git Commit Patterns
description: Publicado inicialmente por iuricode no Github.
date: '2023-11-22'
---

**[forked from iuricode](https://github.com/iuricode/padroes-de-commits)**

# Padrões de commits 📜

De acordo com a documentação do **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**, commits semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

Esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de uma palavra e emoji que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

## Tipo e descrição 🦄

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).

- `raw` - Commits to tipo raw indicam mudanças relacionadas a arquivos de configurações, dados, features, parametros.

- `cleanup` - Commits do tipo cleanup são utilizados para remover código comentado, trechos desnecessários ou qualquer outra forma de limpeza do código-fonte, visando aprimorar sua legibilidade e manutenibilidade.

- `remove` - Commits do tipo remove indicam a exclusão de arquivos, diretórios ou funcionalidades obsoletas ou não utilizadas, reduzindo o tamanho e a complexidade do projeto e mantendo-o mais organizado.

## Recomendações 🎉

- Adicione um tipo consistente com o título do conteúdo.
- Recomendamos que na primeira linha deve ter no máximo 4 palavras.
- Para descrever com detalhes, usar a descrição do commit.
- Usar um emoji no início da mensagem de commit representando sobre o commit.
- Os links precisam ser adicionados em sua forma mais autêntica, ou seja: sem encurtadores de link e links afiliados.

## Complementos de commits 💻

- **Rodapé:** informação sobre o revisor e número do card no Trello ou Jira. Exemplo: Reviewed-by: Elisandro Mello Refs #133
- **Corpo:** descrições mais precisas do que está contido no commit, apresentando impactos e os motivos pelos quais foram empregadas as alterações no código, como também instruções essenciais para intervenções futuras. Exemplo: see the issue for details on typos fixed.
- **Descrições:** uma descrição sucinta da mudança. Exemplo: correct minor typos in code

## Padrões de emojis 💈

<table>
  <thead>
    <tr>
      <th>Tipo do commit</th>
      <th>Emoji</th>
      <th>Palavra-chave</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>Acessibilidade</td>
      <td>♿ <code>:wheelchair:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Adicionando um teste</td>
      <td>✅ <code>:white_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Atualizando a versão de um submódulo</td>
      <td>⬆️ <code>:arrow_up:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Retrocedendo a versão de um submódulo</td>
      <td>⬇️ <code>:arrow_down:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Adicionando uma dependência</td>
      <td>➕ <code>:heavy_plus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Alterações de revisão de código</td>
      <td>👌 <code>:ok_hand:</code></td>
      <td><code>style</code></td>
    </tr>
    <tr>
      <td>Animações e transições</td>
      <td>💫 <code>:dizzy:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>🐛 <code>:bug:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Comentários</td>
      <td>💡 <code>:bulb:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Commit inicial</td>
      <td>🎉 <code>:tada:</code></td>
      <td><code>init</code></td>
    </tr>
    <tr>
      <td>Configuração</td>
      <td>🔧 <code>:wrench:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Deploy</td>
      <td>🚀 <code>:rocket:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Documentação</td>
      <td>📚 <code>:books:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Em progresso</td>
      <td>🚧 <code>:construction:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Estilização de interface</td>
      <td>💄 <code>:lipstick:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Infraestrutura</td>
      <td>🧱 <code>:bricks:</code></td>
      <td><code>ci</code></td>
    </tr>
    <tr>
      <td>Lista de ideias (tasks)</td>
      <td>🔜 <code> :soon: </code></td>
      <td></td>
    </tr>
    <tr>
      <td>Mover/Renomear</td>
      <td>🚚 <code>:truck:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Novo recurso</td>
      <td>✨ <code>:sparkles:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Package.json em JS</td>
      <td>📦 <code>:package:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>⚡ <code>:zap:</code></td>
      <td><code>perf</code></td>
    </tr>
    <tr>
        <td>Refatoração</td>
        <td>♻️ <code>:recycle:</code></td>
        <td><code>refactor</code></td>
    </tr>
    <tr>
      <td>Limpeza de Código</td>
      <td>🧹 <code>:broom:</code></td>
      <td><code>cleanup</code></td>
    </tr>
    <tr>
      <td>Removendo um arquivo</td>
      <td>🗑️ <code>:wastebasket:</code></td>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <td>Removendo uma dependência</td>
      <td>➖ <code>:heavy_minus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Responsividade</td>
      <td>📱 <code>:iphone:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Revertendo mudanças</td>
      <td>💥 <code>:boom:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Segurança</td>
      <td>🔒️ <code>:lock:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>SEO</td>
      <td>🔍️ <code>:mag:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tag de versão</td>
      <td>🔖 <code>:bookmark:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Teste de aprovação</td>
      <td>✔️ <code>:heavy_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Testes</td>
      <td>🧪 <code>:test_tube:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Texto</td>
      <td>📝 <code>:pencil:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tipagem</td>
      <td>🏷️ <code>:label:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tratamento de erros</td>
      <td>🥅 <code>:goal_net:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Dados</td>
      <td>🗃️ <code>:card_file_box:</code></td>
      <td><code>raw</code></td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Commit Emoji</th>
      <th>Colon Syntax</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🎨</td>
      <td><code>:art:</code></td>
      <td>Improving structure or format of code</td>
    </tr>
    <tr>
      <td>⚡</td>
      <td><code>:zap:</code></td>
      <td>Improving performance</td>
    </tr>
    <tr>
      <td>🔥</td>
      <td><code>:fire:</code></td>
      <td>Removing code or files</td>
    </tr>
    <tr>
      <td>🐛</td>
      <td><code>:bug:</code></td>
      <td>Fixing a bug</td>
    </tr>
    <tr>
      <td>🚑</td>
      <td><code>:ambulance:</code></td>
      <td>Critical hotfix</td>
    </tr>
    <tr>
      <td>✨</td>
      <td><code>:sparkles:</code></td>
      <td>Introducing a new feature</td>
    </tr>
    <tr>
      <td>📝</td>
      <td><code>:memo:</code></td>
      <td>Writing documentation</td>
    </tr>
    <tr>
      <td>🚀</td>
      <td><code>:rocket:</code></td>
      <td>Deploying code</td>
    </tr>
    <tr>
      <td>💄</td>
      <td><code>:lipstick:</code></td>
      <td>Updating the UI or style files</td>
    </tr>
    <tr>
      <td>🎉</td>
      <td><code>:tada:</code></td>
      <td>Initial commit</td>
    </tr>
    <tr>
      <td>✅</td>
      <td><code>:white_check_mark:</code></td>
      <td>Adding tests</td>
    </tr>
    <tr>
      <td>🔒</td>
      <td><code>:lock:</code></td>
      <td>Fixing security issues</td>
    </tr>
    <tr>
      <td>🍎</td>
      <td><code>:apple:</code></td>
      <td>Fixing something with macOS</td>
    </tr>
    <tr>
      <td>🐧</td>
      <td><code>:penguin:</code></td>
      <td>Fixing something with Linux</td>
    </tr>
    <tr>
      <td>🏁</td>
      <td><code>:checkered_flag:</code></td>
      <td>Fixing something with Windows</td>
    </tr>
    <tr>
      <td>🍏</td>
      <td><code>:green_apple:</code></td>
      <td>Fixing something with iOS</td>
    </tr>
    <tr>
      <td>🔖</td>
      <td><code>:bookmark:</code></td>
      <td>Releasing / Versioning tags</td>
    </tr>
    <tr>
      <td>🚨</td>
      <td><code>:rotating_light:</code></td>
      <td>Removing linter warnings</td>
    </tr>
    <tr>
      <td>🚧</td>
      <td><code>:construction:</code></td>
      <td>Work in progress</td>
    </tr>
    <tr>
      <td>💚</td>
      <td><code>:green_heart:</code></td>
      <td>Fixing CI build</td>
    </tr>
    <tr>
      <td>⬇</td>
      <td><code>:arrow_down:</code></td>
      <td>Downgrading dependencies</td>
    </tr>
    <tr>
      <td>⬆</td>
      <td><code>:arrow_up:</code></td>
      <td>Upgrading dependencies</td>
    </tr>
    <tr>
      <td>📌</td>
      <td><code>:pushpin:</code></td>
      <td>Pinning dependencies to specific versions</td>
    </tr>
    <tr>
      <td>👷‍</td>
      <td><code>:construction_worker:</code></td>
      <td>Add CI build system</td>
    </tr>
    <tr>
      <td>📈</td>
      <td><code>:chart_with_upward_trend:</code></td>
      <td>Adding analytics or code tracking</td>
    </tr>
    <tr>
      <td>♻</td>
      <td><code>:recycle:</code></td>
      <td>Refactoring code</td>
    </tr>
    <tr>
      <td>🐳</td>
      <td><code>:whale:</code></td>
      <td>Work about Docker</td>
    </tr>
    <tr>
      <td>➕</td>
      <td><code>:heavy_plus_sign:</code></td>
      <td>Adding a dependency</td>
    </tr>
    <tr>
      <td>➖</td>
      <td><code>:heavy_minus_sign:</code></td>
      <td>Removing a dependency</td>
    </tr>
    <tr>
      <td>🔧</td>
      <td><code>:wrench:</code></td>
      <td>Changing configuration files</td>
    </tr>
    <tr>
      <td>🌐</td>
      <td><code>:globe_with_meridians:</code></td>
      <td>Internationalization and localization</td>
    </tr>
    <tr>
      <td>✏</td>
      <td><code>:pencil2:</code></td>
      <td>Fixing typos</td>
    </tr>
    <tr>
      <td>💩</td>
      <td><code>:hankey:</code></td>
      <td>Writing bad code that needs to be improved</td>
    </tr>
    <tr>
      <td>⏪</td>
      <td><code>:rewind:</code></td>
      <td>Reverting changes</td>
    </tr>
    <tr>
      <td>🔀</td>
      <td><code>:twisted_rightwards_arrows:</code></td>
      <td>Merging branches</td>
    </tr>
    <tr>
      <td>📦</td>
      <td><code>:package:</code></td>
      <td>Updating compiled files or packages</td>
    </tr>
    <tr>
      <td>👽</td>
      <td><code>:alien:</code></td>
      <td>Updating code due to external changes</td>
    </tr>
    <tr>
      <td>🚚</td>
      <td><code>:truck:</code></td>
      <td>Moving or renaming files</td>
    </tr>
    <tr>
      <td>📄</td>
      <td><code>:page_facing_up:</code></td>
      <td>Adding or updating license</td>
    </tr>
    <tr>
      <td>💥</td>
      <td><code>:boom:</code></td>
      <td>Introducing breaking changes</td>
    </tr>
    <tr>
      <td>🍱</td>
      <td><code>:bento:</code></td>
      <td>Adding or updating assets</td>
    </tr>
    <tr>
      <td>👌</td>
      <td><code>:ok_hand:</code></td>
      <td>Updating code due to code review changes</td>
    </tr>
    <tr>
      <td>♿</td>
      <td><code>:wheelchair:</code></td>
      <td>Improving accessibility</td>
    </tr>
    <tr>
      <td>💡</td>
      <td><code>:bulb:</code></td>
      <td>Documenting source code</td>
    </tr>
    <tr>
      <td>🍻</td>
      <td><code>:beers:</code></td>
      <td>WCD - Writing code drunkenly</td>
    </tr>
    <tr>
      <td>💬</td>
      <td><code>:speech_balloon:</code></td>
      <td>Updating text and literals</td>
    </tr>
    <tr>
      <td>🗃</td>
      <td><code>:card_file_box:</code></td>
      <td>Performing database related changes</td>
    </tr>
    <tr>
      <td>🔊</td>
      <td><code>:loud_sound:</code></td>
      <td>Adding logs</td>
    </tr>
    <tr>
      <td>🔇</td>
      <td><code>:mute:</code></td>
      <td>Removing logs</td>
    </tr>
    <tr>
      <td>👥</td>
      <td><code>:bust_in_silhouette:</code></td>
      <td>Adding contributors</td>
    </tr>
    <tr>
      <td>🚸</td>
      <td><code>:children_crossing:</code></td>
      <td>Improving user experience / usability</td>
    </tr>
    <tr>
      <td>🏗</td>
      <td><code>:building_construction:</code></td>
      <td>Making architectural changes</td>
    </tr>
    <tr>
      <td>📱</td>
      <td><code>:iphone:</code></td>
      <td>Working on responsive design</td>
    </tr>
    <tr>
      <td>🤡</td>
      <td><code>:clown_face:</code></td>
      <td>Mocking things</td>
    </tr>
    <tr>
      <td>🥚</td>
      <td><code>:egg:</code></td>
      <td>Adding an easter egg</td>
    </tr>
    <tr>
      <td>🙈</td>
      <td><code>:see_no_evil:</code></td>
      <td>Adding or updating a .gitignore file</td>
    </tr>
    <tr>
      <td>📸</td>
      <td><code>:camera_flash:</code></td>
      <td>Adding or updating snapshots</td>
    </tr>
    <tr>
      <td>⚗</td>
      <td><code>:alembic:</code></td>
      <td>Experimenting with new things</td>
    </tr>
    <tr>
      <td>🔍</td>
      <td><code>:mag:</code></td>
      <td>Improving SEO</td>
    </tr>
    <tr>
      <td>☸</td>
      <td><code>:wheel_of_dharma:</code></td>
      <td>Work about Kubernetes</td>
    </tr>
    <tr>
      <td>🏷</td>
      <td><code>:label:</code></td>
      <td>Adding or updating types (Flow, Typescript)</td>
    </tr>
  </tbody>
</table>


## 💻 Exemplos

<table>
  <thead>
    <tr>
      <th>Comando Git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":tada: Commit inicial"</code>
      </td>
      <td>🎉 Commit inicial</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualização do README"</code>
      </td>
      <td>📚 docs: Atualização do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>🐛 fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Página de login"</code>
      </td>
      <td>✨ feat: Página de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bricks: ci: Modificação no Dockerfile"</code>
      </td>
      <td>🧱 ci: Modificação no Dockerfile</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":recycle: refactor: Passando para arrow functions"</code>
      </td>
      <td>♻️ refactor: Passando para arrow functions</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":zap: perf: Melhoria no tempo de resposta"</code>
      </td>
      <td>⚡ perf: Melhoria no tempo de resposta</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":boom: fix: Revertendo mudanças ineficientes"</code>
      </td>
      <td>💥 fix: Revertendo mudanças ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estilização CSS do formulário"</code>
      </td>
      <td>💄 feat: Estilização CSS do formulário</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":test_tube: test: Criando novo teste"</code>
      </td>
      <td>🧪 test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bulb: docs: Comentários sobre a função LoremIpsum( )"</code>
      </td>
      <td>💡 docs: Comentários sobre a função LoremIpsum( )</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":card_file_box: raw: RAW Data do ano aaaa"</code>
      </td>
      <td>🗃️ raw: RAW Data do ano aaaa</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":broom: cleanup: Eliminando blocos de código comentados e variáveis não utilizadas na função de validação de formulário"</code>
      </td>
      <td>🧹 cleanup: Eliminando blocos de código comentados e variáveis não utilizadas na função de validação de formulário</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":wastebasket: remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua"</code>
      </td>
      <td>🗑️ remove: Removendo arquivos não utilizados do projeto para manter a organização e atualização contínua</td>
    </tr>
  </tbody>
</table>

## Contribuição ✨

Ajude a comunidade tornando este projeto ainda mais incrível. Leia como contribuir clicando **[aqui](https://github.com/iuricode/padroes-de-commits/blob/main/CONTRIBUTING.md)** e a **[licença](https://github.com/iuricode/padroes-de-commits/blob/main/LICENSE.md)**. Estou convencido de que juntos alcançaremos coisas incríveis!

## Aprenda desenvolvimento frontend ❤️

Este repositório é um projeto gratuito para a comunidade de desenvolvedores, mas você pode me ajudar comprando o meu ebook "**[eFront - Estudando frontend do zero](https://iuricode.com/efront)**" se estiver interessado em aprender ou melhorar suas habilidades de desenvolvimento frontend. A sua compra me ajuda a produzir e fornecer mais conteúdo gratuito para a comunidade. Adquira agora e comece sua jornada no desenvolvimento frontend.


