# git

## 资料

1. <https://www.progit.cn/>
1. [Learn Git Branching](https://learngitbranching.js.org/)
1. [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

## 概述

1. 服务器上搭建git： [gitea] (https://github.com/go-gitea/gitea)
2. windows 下安装git:<https://git-scm.com/download/win>
3. windows 下使用客户端： [TortoiseGit](https://tortoisegit.org/download/) 
4. 生成ssh公钥：使用 ssh-keygen 命令生成的公钥位于： %USERPROFILE%/.ssh
5. TortoiseGit 和 git bash 使用相同的 ssh 公钥：设置 TortoiseGit 的 Git.exe Path 为 %programfiles%\Git\bin

windows 下配置行尾
```
git config --global core.autocrlf false
```

## git flow