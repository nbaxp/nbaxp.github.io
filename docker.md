# Docker

## 概述

1. windows下安装docker desktop的同时会安装docker engiine和docker compose。
1. 开发时，使用docker compose 和 Dockerfile 进行测试,通过drone构建镜像并自动提交。
1. docker compose 默认使用当前目录下的.env文件加载环境变量
1. 映射/var/run/docker.sock路径时，windows下使用//var/run/docker.sock。建议在.env中为其配置环境变量，在windows启动脚本中重新设置该环境变量

## 常用命令

启动：`docker-compose up -d --remove-orphans`
停止：`docker-compose down --remove-orphans`


## 参考

1. [Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)
1. [Install Docker Engine](https://docs.docker.com/engine/install/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
2. [docker hub](https://hub.docker.com/)