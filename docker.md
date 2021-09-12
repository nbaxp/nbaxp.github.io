# Docker

Dockerfile用于构建镜像；Docker Hub 公共仓库用于存储镜像； Docker Engine 可以命令行运行单个基于镜像的容器，Docker Compose 用于命令行运行多个基于配置文件的容器。

windows 下开发时，建议安装Docker Desktop。安装docker desktop的同时会安装 Docker Engine 和 Docker Compose。

开发时，建议使用docker compose 和 Dockerfile 进行本地测试和构建镜像。由于在windows命令行下映射容器和宿主机的/var/run/docker.sock映射需要使用//var/run/docker.sock，因此需要该映射的，建议执行命令时先输入bash，再执行命令即可忽略该问题。

常用命令：
删除tag为none的镜像
```
docker images | grep none | awk '{ print $3; }' | xargs docker rmi
```


## Dockerfile

### 换源

debian 使用国内源安装包
```
FROM ubuntu:18.04

RUN sed -i s/archive.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list && \
    sed -i s/security.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list && \
    apt update && \
    apt install -y git && \
    apt purge -y git && \
    apt autoremove -y && \
    rm -rf /var/lib/apt/lists/*
```

ubuntu 使用国内源安装包
```
FROM debian:buster

RUN sed -i s/deb.debian.org/mirrors.aliyun.com/g /etc/apt/sources.list && \
    sed -i s/security.debian.org/mirrors.aliyun.com/g /etc/apt/sources.list && \
    apt update && \
    apt install -y git && \
    apt purge -y git && \
    apt autoremove -y && \
    rm -rf /var/lib/apt/lists/*

```

## Docker Compose

Docker Compose 可以通过命令行或加载env文件来使用环境变量，默认在加载配置文件下的.env文件。

常用命令:

启动：`docker-compose up -d --remove-orphans`
停止：`docker-compose down --remove-orphans`

## 参考

1. [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)
1. [Install Docker Engine](https://docs.docker.com/engine/install/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
2. [docker hub](https://hub.docker.com/)