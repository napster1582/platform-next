---
outline: deep
---

# Documentación para el despliegue de múltiples aplicaciones usando Docker, Kubernetes y Github Actions

## Introducción

Este documento proporciona una guía paso a paso para desplegar múltiples aplicaciones en un servidor On-premise utilizando Docker, Kubernetes y Github Actions.

## Tecnologías utilizadas

### Docker

Docker es una plataforma para desarrollar, desplegar y ejecutar aplicaciones en contenedores. En este proyecto, cada aplicación se empaquetará en un contenedor Docker para su posterior despliegue en un servidor On-premise.

### Kubernetes

Kubernetes es un sistema de orquestación de contenedores de código abierto que permite automatizar el despliegue, la escalabilidad y la gestión de aplicaciones en contenedores. En este proyecto, se utilizará Kubernetes para orquestar y gestionar los contenedores de las diferentes aplicaciones.

### Github Actions

Github Actions es un servicio de integración y entrega continua (CI/CD) que permite automatizar el proceso de construcción, prueba y despliegue de aplicaciones. En este proyecto, se utilizará Github Actions para automatizar el proceso de construcción y despliegue de las diferentes aplicaciones.

## Preparación del entorno

### Servidor On-premise

Es necesario contar con un servidor On-premise en el cual se desplegarán las diferentes aplicaciones. El servidor debe cumplir con los siguientes requisitos:

- Tener instalado Docker y Kubernetes.
- Contar con los recursos necesarios (memoria, CPU, almacenamiento) para soportar el despliegue de las diferentes aplicaciones.

### Configuración de Github Actions

Para utilizar Github Actions, es necesario crear un archivo de flujo de trabajo (workflow) que especifique las acciones que se deben realizar para construir, probar y desplegar las diferentes aplicaciones.

Para cada aplicación, se debe crear un flujo de trabajo que contemple las siguientes etapas:

1. Construcción del contenedor Docker.
2. Etiquetado del contenedor con la versión correspondiente.
3. Subida del contenedor a un registro de contenedores (Docker Hub, por ejemplo).
4. Despliegue del contenedor en el clúster de Kubernetes correspondiente.

::: info
Para el etiquetado del contenedor en entornos de no producción, se debe utilizar la variable GITHUB_SHA para obtener el SHA del último commit. En caso de que el despliegue sea a una rama de producción, se recomienda utilizar un Git tag en lugar del SHA del commit para identificar de manera clara la versión desplegada.
:::

El archivo de flujo de trabajo se puede definir en un archivo YAML en la carpeta `.github/workflows/` en el repositorio de Github. Por ejemplo, para una aplicación llamada "my-app", el archivo YAML puede tener el siguiente contenido:

```yaml
name: Deploy my-app
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: |
            my-docker-registry/my-app:latest
            my-docker-registry/my-app:${{ github.sha }}
      - name: Deploy to Kubernetes
        uses: appleboy/kubectl-action@master
        with:
          kubeconfig: ${{ secrets.KUBECONFIG }}
          command: apply
          args: -f k8s/my-app.yaml
```

En este ejemplo, se define un flujo de trabajo que se activa en cada push a la rama "main" del repositorio. El flujo de trabajo consta de una tarea llamada "deploy" que se ejecuta en una máquina virtual con la distro Ubuntu del sistema operativo GNU/Linux.

Las acciones que se realizan en la tarea "deploy" son las siguientes:

1. Se verifica el código del repositorio.
2. Se configura Docker Buildx para construir imágenes multiplataforma.
3. Se inicia sesión en Docker Hub utilizando las credenciales almacenadas en secretos de Github.
4. Se construye la imagen de Docker y se etiqueta con la versión "latest" y la versión del último commit de Github.
5. Se despliega la imagen en el clúster de Kubernetes utilizando el archivo k8s/my-app.yaml y las credenciales almacenadas en secretos de Github.

## Estructura del proyecto

Para el proyecto, utilizamos un repositorio en GitHub para almacenar el código fuente y gestionar el flujo de trabajo de integración continua y entrega continua (CI/CD). La estructura básica del proyecto es la siguiente:

```sh
app1/
├── Dockerfile
├── k8s/
│   ├── app1-deployment.yaml
│   └── app1-service.yaml
└── src/

app2/
├── Dockerfile
├── k8s/
│   ├── app2-deployment.yaml
│   └── app2-service.yaml
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
│   │   ├── app1/
│   │   │   ├── app1-deployment.yaml
│   │   │   └── app1-service.yaml
│   │   ├── app2/
│   │   │   ├── app2-deployment.yaml
│   │   │   └── app2-service.yaml
│   │   └── kustomization.yaml
│   ├── stage/
│   │   ├── app1/
│   │   │   ├── app1-deployment.yaml
│   │   │   └── app1-service.yaml
│   │   ├── app2/
│   │   │   ├── app2-deployment.yaml
│   │   │   └── app2-service.yaml
│   │   └── kustomization.yaml
│   └── prod/
│       ├── app1/
│       │   ├── app1-deployment.yaml
│       │   └── app1-service.yaml
│       ├── app2/
│       │   ├── app2-deployment.yaml
│       │   └── app2-service.yaml
│       └── kustomization.yaml
├── kustomization.yaml
└── README.md
```

Cada aplicación tendrá su propia carpeta con un Dockerfile para construir la imagen de Docker correspondiente y una carpeta k8s que contendrá los archivos de configuración de Kubernetes.

También tendrá una carpeta k8s en la raíz del proyecto que contendrá los recursos comunes de Kubernetes, como el espacio de nombres, secretos, ConfigMaps y servicios para la base de datos PostgreSQL.

Además, utilizamos la herramienta kustomize para gestionar las diferentes configuraciones de Kubernetes para los entornos de desarrollo, stage y producción.
