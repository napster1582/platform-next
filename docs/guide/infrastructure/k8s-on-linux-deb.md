# Guía de Configuración de Kubernetes en distros de Linux basadas en Debian

## Requisitos previos

Antes de comenzar, hay que asegurarse de que el servidor cumpla con los siguientes requisitos previos:

- Servidor con sistema operativo GNU/Linux y distro basada en Debian.
- Acceso root al servidor.
- Procesador de 64 bits
- Al menos 4 GB de RAM
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

## Paso 2: Instalar kubectl

kubectl es una herramienta de línea de comandos para interactuar con clusters de Kubernetes. Para instalar kubectl en WSL 2, se deben seguir los siguientes pasos:

1. Descargar el archivo binario de kubectl utilizando el siguiente comando:

    ```sh
    curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
    ```

2. Mover el archivo binario de kubectl a un directorio en el PATH de Ubuntu utilizando el siguiente comando:

    ```sh
    sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
    ```

3. Verificar que kubectl esté instalado y funcionando correctamente utilizando el siguiente comando:

    ```sh
    kubectl version --client --output=yaml
    ```

## Paso 3: Instalar minikube e iniciar un cluster

Instalar minikube

```sh
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

Una vez que minikube esté instalado en linux, se puede crear un cluster de Kubernetes utilizando el siguiente comando en la terminal de Ubuntu:

```sh
minikube start
```

## Conclusión

En esta guía se explicó como crear un cluster de Kubernetes local en distros basadas en Debian y como comenzar a ejecutar aplicaciones en él.
