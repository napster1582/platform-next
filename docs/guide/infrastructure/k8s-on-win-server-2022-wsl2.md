# Guía de Configuración de Kubernetes en Windows Server 2022 (WSL 2)

## Requisitos previos

Antes de comenzar, hay que asegurarse de que el servidor cumpla con los siguientes requisitos previos:

- Windows Server 2022 con las últimas actualizaciones instaladas
- WSL 2 habilitado
- Ubuntu 20.04 LTS instalado en WSL 2
- Al menos 4 GB de RAM asignados a WSL 2
- Internet habilitado para descargar los componentes necesarios

::: warning

En esta guía se asume que la distro instalada en WSL 2 está basada en Debian.

:::

## Paso 1: Instalar Docker en WSL 2

Para instalar Docker en WSL 2, se deben seguir los siguientes pasos:

1. Abrir una terminal de Ubuntu en WSL 2.
2. Actualizar los paquetes existentes en Ubuntu utilizando el siguiente comando:

    ```sh
    sudo apt-get update
    ```

3. Instalar los paquetes necesarios utilizando el siguiente comando:

    ```sh
    sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
    ```

4. Agregar la clave GPG oficial de Docker utilizando el siguiente comando:

    ```sh
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```

5. Agregar el repositorio de Docker a la lista de repositorios de Ubuntu utilizando el siguiente comando:

    ```sh
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```

6. Actualizar los paquetes de Ubuntu para incluir Docker utilizando el siguiente comando:

    ```sh
    sudo apt-get update
    ```

7. Instalar Docker utilizando el siguiente comando:

    ```sh
    sudo apt-get install docker-ce docker-ce-cli containerd.io
    ```

8. Verificar que Docker esté instalado y funcionando correctamente utilizando el siguiente comando:

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
    kubectl version --client
    ```

## Paso 3: Crear un cluster de Kubernetes

Una vez que Docker y kubectl están instalados en WSL 2, se puede crear un cluster de Kubernetes utilizando el siguiente comando en la terminal de Ubuntu:

```sh
kubectl cluster up
```

## Conclusión

En esta guía se explicó como crear un cluster de Kubernetes local en Windows Server 2022 utilizando WSL 2 y como comenzar a ejecutar aplicaciones en él.
