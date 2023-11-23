---
banner_alt: Git Cheatsheet
banner: https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
title_prefix: GIT
title: Git Cheatsheet
description: Publicado inicialmente no Github gist.
date: '2023-11-22'
---

Git Cheatsheet
========

## vs Perguntas
1. http://stackoverflow.com/questions/804115 (rebase vs merge ).
2. https://www.atlassian.com/git/tutorials/merging-vs-rebasing (rebase vs merge)
3. https://www.atlassian.com/git/tutorials/undoing-changes/ (reset vs checkout vs revert)
4. http://stackoverflow.com/questions/2221658 (HEAD^ vs HEAD~) (Ver git rev-parse)
5. http://stackoverflow.com/questions/292357 (pull vs fetch)
6. http://stackoverflow.com/questions/39651 (stash vs branch)
7. http://stackoverflow.com/questions/8358035 (reset vs checkout vs revert)
8. http://stackoverflow.com/questions/5798930 (git reset vs git rm --cached)

## PERGUNTAS GERAIS
1. http://stackoverflow.com/questions/5788037 ( Recuperar de git reset --hard).
2. http://stackoverflow.com/questions/1146973/ ( Reverte todas as alterações locais no estado anterior )
3. http://effectif.com/git/recovering-lost-git-commits ( Recuperando o commit perdido )
4. https://stackoverflow.com/questions/79165 ( Migrando de SVN )
5. https://stackoverflow.com/questions/1425892 ( Mesclando dois git repo )

## WEBSITES REFERENCE
1. http://gitready.com/ Dicas e truques de git ( com explicação )
2. https://github.com/git-tips/tips ( Repo para dicas mais comuns de git )
3. http://gitimmersion.com/ ( Livro pequeno )
4. http://think-like-a-git.net/
5. https://github.com/nvie/gitflow (Modelo alternativo de ramificação para git.)
6. https://github.com/magit/magit (Git GUI para Emacs).

## ARTIGOS

1. http://www.nicoespeon.com/en/2013/08/which-git-workflow-for-my-project/ (Fluxo de trabalho de Git para projeto)
2. http://nvie.com/posts/a-successful-git-branching-model/
3. https://www.wearefine.com/mingle/env-branching-with-git/
4. https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333 (rebase vs merge)
5. https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History

## FAST GIT REFERENCE

0. Primeiro faça o download do cheetsheat do oficial: http://git-scm.com
1. Para iniciantes e intermediários, concentre-se apenas nesses comandos:
    - Configurando : config, help.
    - Criando : init, clone.
    - Fazer Mudanças: status, diff, add, commit, reset, rm, mv (not important).
    - Ramificação e Fusão: branch, checkout, merge, stash
    - Histórico de Revisão: log, tag, diff, show
    - Atualizar e Publicar: fetch, pull, push, remote.
    - Muito Imp: reflog. http://effectif.com/git/recovering-lost-git-commits
2. Comandos que não estão em cheatsheet oficial (e avançado): revert, apply, cherry-pick, rebase, clean, show-ref, update-ref, ls-files, rev-parse
    - Comandos de Depuração: bisect, blame.
3. git stash é uma alternativa leve para git branch.
4. O Git tem três (ou quatro) estágios:
    - Untracked (novos arquivos): Initial Stage. Significa que os dados aind não foram adicionados ao git.
    - Staged (tracked): Dados adicionados ao git, mas não confirmados.
    - Committed : significa que os dados são armazenados com segurança no git.
    - Modificado: (Aka Rastreado e não encenado). O quarto estágio ocorre quando os arquivos são modificados após a confirmação.
5. Fluxo de trabalho do git:
    - Diretório de trabalho: contém os arquivos reais
    - Índice: Atua como uma área de preparação. Ou seja, instantâneo para o próximo commit. Será feito por git add comando.
    - HEAD: Aponta para o último commit (e ramificação atual) que você fez.
6. Qualquer coisa comprometida no Git quase pode ser recuperada. No entanto, os arquivos que não foram confirmados não podem ser recuperados.
7. Descrição dos comandos de atualização e busca:
    - remote: ele gerencia apenas o conjunto de repositórios de faixas.
    - fetch: Você pode buscar novos trabalhos nesse servidor remoto após a clonagem. Não é semelhante a clone. Mais tarde, você pode mesclar esse repo com o existente com merge comando.
    - pull: Busque e mescle automaticamente o mais recente commit do servidor remoto para a filial local. Por padrão, combina buscar e mesclar.
    - push: Isso irá enviar para o servidor remoto a partir da ramificação local.
8. Quando você alterna a ramificação, os arquivos no diretório de trabalho são alterados para corresponder a essa ramificação.
9. Usando git reflog você pode recuperar seu commit destruído ( feito via git reset --hard) usando qualquer
    - git checkout -b newBranchName
    - git reset --hard Mas use-o em casos raros, porque você faz o reflog de manter o estado via sha e é difícil ver qual sha pertence ao commit específico.
10. git cherry-pick é uma versão de baixo nível de rebase
11. Para usuários avançados que desejam explorar mais, consulte gitflow. Extensões do Git para criar operações compromissadas usando diferentes modelos de ramificação.
12. O Git não rastreia pastas vazias. Funciona apenas com arquivos.

## GIT TIPS AND SHORTCUTS

Os comandos mais usados são: init, clone, status, log, add, commit, reset, rm, branch, checkout, merge, stash.

```bash
## -- Initializing a new git repository
        $$ git init

    ## -- Useful git log commands
        $$ git log --oneline        ## print short sha in one line
        $$ git log -3               ## show only first 3 commit
        $$ git log --author="John"  ## show commits only by this author


    ## Get the Full SHA of latest commit
        $$ git rev-parse HEAD       ## print something like: b70c9873ee020a3b0252fbfff3b2676475700380
        $$ git rev-parse --short HEAD   ## b70c9873
        $$ git rev-parse --verify HEAD


    ## -- Cloning a git repository
    ## The other protocols are: ssh, ftp, file://, http(s):// etc...
        $$ git clone git://github.com/something/foo.git

    ## -- Show the status of file
        $$ git status -s  # in short format

    ## -- Add the file to staging area.
        $$ git add foo.js bar.js   ## `--` is used to seperate files from `add` options.
        $$ git add .    # add all the files

    ## -- Show what have changed since you last commit
        $$ git diff  ## with a `--cached` option, show the changes that will go into the next commit snapshot.

    ## -- Commit the changes after you add the files to staging area
        $$ git commit -m 'with an inline message'
        ## Multi line commit
        $$ git commit -m 'one line' -m 'second line'
        ## Using heredoc for multi line comments
        ## $$ git commit -F- <<EOF  Message  more messages EOF
        ## For more ways including heredoc <<EOF ...messages... EOF. See: https://stackoverflow.com/questions/5064563

    ## -- Auto-commit and track changes to modified file.
    ## NOTE: The files you've not added doesn't track by commit with `-a` command.
        $$ git commit -a -m 'with an inline message'

    ## -- Ammend last commit (i.e, merge to previous commit or change commit message)
    ## <https://nathanhoad.net/git-amend-your-last-commit>
    ## After doing `git add .`
        $$ git commit --amend   # alternate is `git reset --soft HEAD~`, then `git commit -c ORIG_HEAD`
        ## amend a commit without changing previous message
        $$ git commit --amend --no-edit


    ## -- Unstage file from the index only.  See `git reset` also.
    ## See: <https://stackoverflow.com/questions/22620393> (various ways to remove local changes)
    ## NOTE: Always use dry run before executing any below command.
        ## FLAG FOR DRy RUN IS: -n or --dry-run.
        ## it's a combination of `rm -r .` and `git add .`.
        $$ git rm -r .  # don't do this. Will delete all tracked file recursively.


        $$ git rm --cached <filename> # exact opposite of git add. will untrack the file from git index but will not remove from working directory. Use `r` to do recursively.

        $$ git checkout <file>    # Remove unstaged tracked (modified) files.
        # if the branch name and file name are same, then do this
        $$ git checkout -- <file>

        ## for all changes (throw away local changes, three methods)
        $$ git clean -f     ## will delete only untracked (unstaged aka new) files.
        $$ git clean -f -d  ## remove untracked files with directory.
        $$ git clean -f -d -n ## with dry run.
                            ## NOTE: system `rm` command will delete files no matter if it is untracked or not.
        $$ git checkout -f  # remove staged tracked and unstaged tracked files both.
        $$ git reset --hard  # same as above. Unsafe operation, better to use git checkout.
        ## This is the best option.
        $$ git stash -u   # combination of git reset --hard (or git checkout -f) and git clean -f

    ## Delete a single entry from git reflog. (git reflog is useful as it keeps 2 months history).
        $$ git reflog delete HEAD@{N}    ## `N`: 1,2 etc... or <sha>

    ## Undo the last commit, but keep the history and adds a new history
    ## <http://stackoverflow.com/questions/27032850/> (for `git reset` vs `git revert` with image)
        $$ git revert

    ## -- check where HEAD is
        $$ git show-ref

    ## Remove the initial commit (git reset doesn't work here, it works only after second commit)
    ## <http://stackoverflow.com/questions/6632191/how-to-revert-initial-git-commit>
        $$ git update-ref -d HEAD


    ## Push a specific branch
        $$ git push origin <mylocalbranch>

    ## -- Detailed explaination of `git reset` (all three options). P.S. Use git checkout for time travel.
    ## <http://stackoverflow.com/a/6866485/2092405>
    ## NOTE: All the below three options remove log, so if you want to get back to previous state, you can pick
    ## <sha> from git reflog and do git reset on this.
    ## Suppose the structure is
         A-B-C
             ↑ (master)
    ## Then, nuke commit C and never see it again. Do this:
        $$ git reset --hard HEAD~1
        ## the result is:
             A-B
               ↑ (master)
       ## To undo this command, use;
           $$ git reset --hard <newShaOfReflog>  ## or (git reset --hard HEAD@{1})

    ## Undo the last commit, but keep your changes in working directory.
    ## It will delete the index the from git log also and show you untracked and unstaged files:
        $$ git reset HEAD~1  ## move the pointer one index back (or git reset --mixed HEAD~1)
        ## the result is:
        A-B-C
          ↑ (master)
        ## To undo this command, use;
            $$ git reset <newShaOfReflog>  ## or (git reset HEAD@{1})

    ## Undo the last commit, but don't touch the index and working directory.
    ## When you do git status, you'll see that the same files are in the index as before.
    ## In fact, right after this command, you could do `git commit` and you'd be redoing the same commit you just had.
        $$ git reset --soft HEAD~1


    ## Add a changed file to old commit (not last commit). I.E., fix up old commit
    ## <http://stackoverflow.com/a/2719659/2092405>

    ## merge a specific commit from one branch to another branch.
        ## make sure you're in the branch where you want merge.
        $$ git cherry-pick <commit-id-of-feature-branch>

    ## Merge two specific commit together (using rebase)
    ## <http://stackoverflow.com/questions/2563632/how-can-i-merge-two-commits-into-one>

    ## Using rebase to keep update on feature branch from master branch.
    ## see this article: <https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333>

    ## Modify a specific commit in git
    ## <http://stackoverflow.com/questions/1186535/how-to-modify-a-specified-commit-in-git>
    ## if you're getting this error. Needs a single revision. See this: http://stackoverflow.com/questions/26174757/
    ## Option: 2
        $$ git checkout <shaToThatCommit>
        $$ touch newfile.txt
        $$ git add .
        $$ git commit --amend --no-edit
        $$ git rebase --onto HEAD <shaToThatCommit> master  ## it will do automatic git checkout to master branch


    ## Branching and Merging
    ## ---------------------
    ## List out all the branches
        $$ git branch
    ## Create a new branch `testing` at your last commit
        $$ git branch testing
    ## Switch to branch
        $$ git checkout testing
    ## Switch to remote branch
        $$ git checkout <remote-branch-name>
        ## or
        $$ git fetch <remote-name> <branch-name> ## and then checkout.
    ## Shortcut to create a new branch and checkout
        $$ git checkout -b newbranch
    ## Delete a branch
        $$ git branch -d testing
    ## Merge the <branch> on the current working branch
    ## Merge tip: If you're doing merge say, from `wip` to `live` branch and you've edit `live` branch files
    ## then it will not undo changed file which is what we want.
    ## Also, merge conflict occurs when same file changed in both branch, you merged. You can reverse the merge conflict
    ## with `--abort` option
        $$ git merge testing    ## this will merge `testing` branch onto current (`master`) branch.
    ## checkout arbitrary commits instead of branch
        $$ git checkout HEAD~2
    ## Undo deleted branch
        $$ git reflog    ## to see the hash code of branch before deletion.
        $$ git checkout <hashcodeFromReflog>  ## to restore, and then create the same branch from there.
    ## Compare two branches
        ## https://stackoverflow.com/questions/9834689/
        ## https://stackoverflow.com/questions/822811
        $$ git diff branch_1..branch_2
        $$ git diff branch_1...branch_2
        $$ git diff --name-status master  ## compare current branch against master.

    ## Tagging (Used for release)
    ## --------------------------
    ## Mark a project with tag 1.0 with message.
        $$ git tag -a 1.0 -m 'release version'
    ## List the tag
        $$ git tag -l
    ## Checkout the tag
        $$ git checkout tags/<tagname>
    ## Update an existing tag
    ## See: https://stackoverflow.com/questions/7813194/
        $$ git tag <tagname> <tagname> -f  -m '<newmsg>'


    ## Check list of tracked files
    $$ git ls-files
    $$ git ls-files -r <branch-name>
```

## Git reset vs Git revert

NOTA: git revert é um comando avançado e pode excluir acidentalmente seus arquivos, se você não tiver cometido. http://stackoverflow.com/questions/8358035/whats-the-difference-between-git-revert-checkout-and-reset

Basicamente git revert desfazer alterações com o novo histórico de commit (ou seja, introduzir um novo commit que inverta o especificado) enquanto git reset (com --hard) CUIDADO. Quaisquer alterações nos arquivos rastreados na árvore de trabalho e no índice são descartadas. git reset (com --soft) A opção não toca no arquivo de índice nem na árvore de trabalho. Neste caso, o arquivo de índice é encenado, mas não confirmado e logo após este comando você pode usar git commit. git reset (com --mixed) Opção redefinir o índice, mas não a árvore de trabalho. Neste caso, o arquivo de índice não é encenado, então após este comando você tem que usar git add e git commit.

## Git rm and Git reset

git rm remova o arquivo do índice (com --cached opção). git reset é especificamente sobre a atualização do índice, movendo o HEAD. Essas duas opções são equivalent only when we first add a file. Depois disso com git reset você pode mover o índice enquanto estiver com git rm --cached, você destrói completamente o índice.

## Fix a head detached from message

Ver: http://stackoverflow.com/questions/10228760/fix-a-git-detached-head

Resumo: Basicamente, faça o checkout da ramificação usando git checkout branchname

## Relative Refs

https://www.atlassian.com/git/tutorials/refs-and-the-reflog/refspecs

O ~ o personagem permite que você alcance os commits dos pais. Por exemplo: O seguinte mostra o avô de HEAD: git show HEAD~2. O ~ o personagem sempre seguirá o primeiro pai de um commit de mesclagem. Se você quiser seguir um pai diferente, use ^ personagem Por exemplo: Se HEAD é o commit de mesclagem, então a seguir retorna o segundo pai de HEAD: git show HEAD^2 Alguns exemplos:

```bash
# Only list commits that are parent of the second parent of a merge commit
    $$ git log HEAD^2
    # Remove the last 3 commits from the current branch
    $$ git reset HEAD~3
    # Interactively rebase the last 3 commits on the current branch
    $$ git rebase -i HEAD~3
```
Git fetch, pull, push, remote

NOTA: Não é possível enviar para o repositório não vazio se as ramificações forem as mesmas no servidor remoto e local

Por padrão, a atualização da ramificação atual com o repositório não nulo é negada. Se você é o único usuário, você pode definir git config git config --bool core.bare true e então exclua todos os arquivos, exceto .git no remoto.

Alguns urls comuns do git:

```bash
ssh://[user@]host.xz[:port]/path/to/repo.git/
    git://host.xz[:port]/path/to/repo.git/
    http[s]://host.xz[:port]/path/to/repo.git/
    ftp[s]://host.xz[:port]/path/to/repo.git/
    [user@]host.xz:path/to/repo.git/
    /path/to/repo.git/
    file:///path/to/repo.git/
```

git pull é basicamente uma abreviação para git fetch seguido por git merge FETCH_HEAD git fetch: Downlaod novos dados e ramificações do repositório remoto git push: Empurre suas novas ramificações para o repositório remoto. git remote: Gerenciar (listar, adicionar e excluir) aliases de repositório remoto.

1. Para enviar o repositório local para o servidor

```bash
## On your server (create a bare repository)
    $$ git init --bare repo.git
    ## On local
    $$ git remote add origin ssh://server/var/www/frontend.git
    $$ git push origin master
    ## After that, use:
    $$ cd /var/www/; git init; git clone frontend.git

    ## or alternative way without bare repository
    ## switch to different branch locally
    ## and then on your server
    $$ git init
    ## from local repository
    $$ git push ssh://server/path/to/git otherBranch
    ## then merge the otherBranch to master in remote repository

    ## Shortcut without switching repository
    $$ git remote add origin ssh://server/path/to/git
    $$ git push origin master:someOtherBranch       ## this push from master to `someOtherBranch`.
```