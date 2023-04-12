# Kubernetes

[Kubernetes](https://kubernetes.io/) es un sistema de orquestación de contenedores de código abierto que permite automatizar el despliegue, la escalabilidad y la gestión de aplicaciones en contenedores. En este proyecto, se utiliza Kubernetes para orquestar y gestionar los contenedores de las diferentes aplicaciones.

## Estructura del proyecto

Para el proyecto, utilizamos un repositorio en GitHub para almacenar el código fuente y gestionar el flujo de trabajo de integración continua y entrega continua (CI/CD). La estructura básica del proyecto es la siguiente:

```sh
api/
├── Dockerfile
├── k8s/
│   ├── api-deployment.yaml
│   └── api-service.yaml
└── src/

cms/
├── Dockerfile
├── k8s/
│   ├── cms-deployment.yaml
│   └── cms-service.yaml
└── src/

admin/
├── Dockerfile
├── k8s/
│   ├── admin-deployment.yaml
│   └── admin-service.yaml
└── src/

web/
├── Dockerfile
├── k8s/
│   ├── web-deployment.yaml
│   └── web-service.yaml
└── src/

docs/
├── Dockerfile
├── k8s/
│   ├── docs-deployment.yaml
│   └── docs-service.yaml
└── src/

...

k8s/
├── base/
│   ├── namespace.yaml
│   ├── secret.yaml
│   ├── configmap.yaml
│   ├── postgres-deployment.yaml
│   └── postgres-service.yaml
├── overlays/
│   ├── dev/
│   │   ├── api/
│   │   │   ├── api-deployment.yaml
│   │   │   └── api-service.yaml
│   │   ├── cms/
│   │   │   ├── cms-deployment.yaml
│   │   │   └── cms-service.yaml
│   │   ├── admin/
│   │   │   ├── admin-deployment.yaml
│   │   │   └── admin-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│   │   └── kustomization.yaml
│   ├── stage/
│   │   ├── api/
│   │   │   ├── api-deployment.yaml
│   │   │   └── api-service.yaml
│   │   ├── cms/
│   │   │   ├── cms-deployment.yaml
│   │   │   └── cms-service.yaml
│   │   ├── admin/
│   │   │   ├── admin-deployment.yaml
│   │   │   └── admin-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│   │   └── kustomization.yaml
│   └── prod/
│   │   ├── api/
│   │   │   ├── api-deployment.yaml
│   │   │   └── api-service.yaml
│   │   ├── cms/
│   │   │   ├── cms-deployment.yaml
│   │   │   └── cms-service.yaml
│   │   ├── admin/
│   │   │   ├── admin-deployment.yaml
│   │   │   └── admin-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│       └── kustomization.yaml
├── kustomization.yaml
└── README.md
```

Cada aplicación tendrá su propia carpeta con un Dockerfile para construir la imagen de Docker correspondiente y una carpeta k8s que contendrá los archivos de configuración de Kubernetes.

También tendrá una carpeta k8s en la raíz del proyecto que contendrá los recursos comunes de Kubernetes, como el espacio de nombres, secretos, ConfigMaps y servicios para la base de datos PostgreSQL.

Además, utilizamos la herramienta kustomize para gestionar las diferentes configuraciones de Kubernetes para los entornos de desarrollo, stage y producción.

## Prerrequisitos

- Servidor on-premise con sistema operativo Linux.
- Acceso root al servidor.
- Se recomienda al menos 2 CPUs y 4 GB de RAM.

## Instalar y configurar Kubernetes en el servidor on-premise

### Instalar Docker

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

### Instalar Kubernetes

Para instalar Kubernetes en el servidor on-premise, se puede utilizar Minikube, una herramienta que permite crear un clúster de Kubernetes en un solo nodo. A continuación, se detallan los pasos para instalar Minikube:

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
