# Configuración de Github Actions

Para utilizar Github Actions, es necesario crear un archivo de flujo de trabajo (workflow) que especifique las acciones que se deben realizar para construir, probar y desplegar las diferentes aplicaciones.

Para cada aplicación, se debe crear un flujo de trabajo que contemple las siguientes etapas:

1. Construcción del contenedor Docker.
2. Etiquetado del contenedor con la versión correspondiente.
3. Subida del contenedor a un registro de contenedores (Docker Hub, por ejemplo).
4. Despliegue del contenedor en el clúster de Kubernetes correspondiente.

::: warning
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
