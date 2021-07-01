FROM ubuntu:18.04 as build

RUN sed -i s/archive.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list && \
    sed -i s/security.ubuntu.com/mirrors.aliyun.com/g /etc/apt/sources.list && \
    apt update && \
    apt install -y git g++ make libssl-dev libgflags-dev libprotobuf-dev libprotoc-dev protobuf-compiler libleveldb-dev && \
    apt install -y libsnappy-dev libgoogle-perftools-dev libgoogle-glog-dev && \
    git clone https://github.com/apache/incubator-brpc.git && cd incubator-brpc && \
    sh config_brpc.sh --headers=/usr/include --libs=/usr/lib && \
    make && \
    cd example/echo_c++/ && make && \
    cd ../ && mv output / && mv example / && rm -rf /incubator-brpc