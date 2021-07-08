ARG DOCKER_VERSION=19.03
ARG PYTHON_VERSION=3.7.10

ARG BUILD_ALPINE_VERSION=3.12
ARG BUILD_CENTOS_VERSION=7
ARG BUILD_DEBIAN_VERSION=slim-stretch

ARG RUNTIME_ALPINE_VERSION=3.12
ARG RUNTIME_CENTOS_VERSION=7
ARG RUNTIME_DEBIAN_VERSION=stretch-slim

ARG DISTRO=debian
FROM multiarch/qemu-user-static:x86_64-aarch64 as qemu
FROM arm64v8/docker:${DOCKER_VERSION} AS docker-cli
COPY --from=qemu /usr/bin/qemu-aarch64-static /usr/bin

FROM arm64v8/python:${PYTHON_VERSION}-${BUILD_DEBIAN_VERSION} AS build-debian
COPY --from=qemu /usr/bin/qemu-aarch64-static /usr/bin
RUN apt-get update && apt-get install --no-install-recommends -y \
    curl \
    gcc \
    git \
    libc-dev \
    libffi-dev \
    libgcc-6-dev \
    libssl-dev \
    make \
    openssl \
    zlib1g-dev

WORKDIR /tmp/python3/
ARG PYTHON_VERSION
RUN curl -L https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz | tar xzf - \
    && cd Python-${PYTHON_VERSION} \
    && ./configure --enable-optimizations --enable-shared --prefix=/usr LDFLAGS="-Wl,-rpath /usr/lib" \
    && make altinstall
RUN alternatives --install /usr/bin/python python /usr/bin/python2.7 50
RUN alternatives --install /usr/bin/python python /usr/bin/python$(echo "${PYTHON_VERSION%.*}") 60
RUN curl https://bootstrap.pypa.io/get-pip.py | python -

FROM build-${DISTRO} AS build
ENTRYPOINT ["sh", "/usr/local/bin/docker-compose-entrypoint.sh"]
RUN git clone --depth=1 https://github.com/docker/compose.git && mv compose /code
WORKDIR /code/
COPY docker-compose-entrypoint.sh /usr/local/bin/
COPY --from=docker-cli /usr/local/bin/docker /usr/local/bin/docker
RUN pip install \
    virtualenv==20.4.0 \
    tox==3.21.2
COPY requirements-dev.txt .
COPY requirements-indirect.txt .
COPY requirements.txt .
RUN pip install -r requirements.txt -r requirements-indirect.txt -r requirements-dev.txt
COPY .pre-commit-config.yaml .
COPY tox.ini .
COPY setup.py .
COPY README.md .
COPY compose compose/
RUN tox -e py37 --notest
#COPY . .
ARG GIT_COMMIT=unknown
ENV DOCKER_COMPOSE_GITSHA=$GIT_COMMIT
RUN script/build/linux-entrypoint

FROM arm64v8/scratch AS bin
ARG TARGETARCH
ARG TARGETOS
COPY --from=build /usr/local/bin/docker-compose /docker-compose-${TARGETOS}-${TARGETARCH}

FROM alpine:${RUNTIME_ALPINE_VERSION} AS runtime-alpine
FROM debian:${RUNTIME_DEBIAN_VERSION} AS runtime-debian
FROM centos:${RUNTIME_CENTOS_VERSION} AS runtime-centos
FROM runtime-${DISTRO} AS runtime
COPY docker-compose-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["sh", "/usr/local/bin/docker-compose-entrypoint.sh"]
COPY --from=docker-cli  /usr/local/bin/docker           /usr/local/bin/docker
COPY --from=build       /usr/local/bin/docker-compose   /usr/local/bin/docker-compose