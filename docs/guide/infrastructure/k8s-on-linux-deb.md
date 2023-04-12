# Guía de Configuración de Kubernetes en distros de Linux basadas en Debian

## Requisitos previos

Antes de comenzar, hay que asegurarse de que el servidor cumpla con los siguientes requisitos previos:

- Servidor con sistema operativo GNU/Linux y distro basada en Debian.
- Acceso root al servidor.
- Procesador de 64 bits
- Al menos 8 GB de RAM
- Internet habilitado para descargar los componentes necesarios

### Paso 1: Instalar Docker

Kubernetes utiliza contenedores Docker, por lo que es necesario instalar Docker en el servidor. Para instalar Docker, siga los siguientes pasos:

1. Agregar la clave GPG oficial de Docker:

    ```sh
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    ```

2. Agregue el repositorio de Docker a las fuentes de apt-get:

    ```sh
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    ```

3. Actualizar la lista de paquetes e instalar Docker:

    ```sh
    sudo apt-get update
    sudo apt-get install docker-ce
    ```

4. Verificar que Docker esté instalado correctamente:

    ```sh
    sudo docker run hello-world
    ```

### Paso 2: Instalar Kubernetes

Para instalar Kubernetes en el servidor, se puede utilizar Minikube, una herramienta que permite crear un clúster de Kubernetes en un solo nodo. A continuación, se detallan los pasos para instalar Minikube:

1. Descargar e instalar Minikube:

    ```sh
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
    && sudo install minikube-linux-amd64 /usr/local/bin/minikube
    ```

2. Instalar el controlador de hipervisor para Minikube:

    ::: code-group

    ```sh [VirtualBox]
    sudo apt-get install virtualbox
    ```

    ```sh [KVM]
    sudo apt-get install libvirt-daemon-system libvirt-clients kvm qemu-kvm && sudo usermod -aG libvirt $(whoami) && newgrp libvirt
    ```

    :::

3. Iniciar Minikube:

    ```sh
    minikube start --driver=<driver>
    ```

    Donde `<driver>` es el nombre del controlador de hipervisor a utilizar (por ejemplo, virtualbox o kvm2).

4. Verificar que el clúster de Kubernetes se haya creado correctamente:

    ```sh
    kubectl get nodes
    ```

    Esto debería mostrar la información del nodo en el clúster de Kubernetes.

### Configurar Kubernetes

Una vez instalado Kubernetes, se puede configurar según las necesidades del proyecto. A continuación, se detallan algunos aspectos a tener en cuenta:

- Se pueden crear y administrar contenedores a través de la línea de comandos de Kubernetes (`kubectl`).
- Los recursos de Kubernetes, como los pods y los servicios, se definen en archivos de configuración YAML.
- Es recomendable utilizar herramientas como Helm para instalar y administrar aplicaciones en Kubernetes de forma más eficiente.
- Se puede utilizar un panel de control como Kubernetes Dashboard para visualizar y administrar el clúster de Kubernetes de forma gráfica.

## Conclusión

En este documento se explicó como crear un cluster de Kubernetes local en distros basadas en Debian y como comenzar a ejecutar aplicaciones en él.
