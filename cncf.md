# 云原生计算基金会

## 资料
1. <https://cncf.io/>
2. <https://raw.githubusercontent.com/cncf/trailmap/master/CNCF_TrailMap_latest.png>
3. <https://landscape.cncf.io/>
4. <https://radar.cncf.io/>

## 思维导图

```mermaid
graph LR
A(云原生技术栈)-->B1(容器云平台)
A-->B2(DevOps)
A-->B3(微服务)
B1-->C1(容器引擎:Docker)
B1-->C2(容器编排服务:Docker Swarm/Kubernetes)
B1-->C3(容器编排可视化:Portainer/Rancher)
B2-->D1(代码仓库:Gitlab/Gitea)
B2-->D2(代码质量管理:Sonar)
B2-->D3(CICD:Jenkins/Drone)
B2-->D4(镜像仓库:Docker Registry/Harbor)
B3-->E1(配置中心:)
B3-->E2(日志中心:)
B3-->E3(网关:)
B3-->E4(服务治理)
E4-->F1(服务注册与发现:)
```

## 路线图

[![](images/CNCF_TrailMap_latest.png)](images/CNCF_TrailMap_latest.png)
