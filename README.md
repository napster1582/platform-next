# Jinen

⚓ Repositorio oficial del proyecto **Jinen**.

## Requisitos previos

- Node.js (versión 18 o superior): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/es/>
- Docker: <https://www.docker.com/>

## Contribución

Este proyecto utiliza trunk-based development para el control de versiones y el proceso de despliegue. Trunk-based development es un enfoque de desarrollo que implica la integración continua de cambios en una única rama principal, conocida como el tronco. Para obtener más información sobre trunk-based development, puede visitar este [enlace](https://trunkbaseddevelopment.com/).

Para comenzar a trabajar en una nueva característica, se deben seguir los siguientes pasos:

1. Asegúrese de que se encuentra en la rama principal:

   ```sh
   git checkout main
   ```

2. Cree una nueva rama a partir de la rama develop con el siguiente comando:

   ```sh
   git checkout -b nombre-de-la-rama
   ```

3. Desarrolle y pruebe la nueva característica en la rama recién creada.

4. Una vez que la característica está lista, haga una [solicitud de extracción (pull request)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) para integrar los cambios en la rama principal.

5. Si es necesario, haga ajustes en la característica y repita el proceso de revisión y solicitud de extracción.

## Ejecutar aplicación

1. Instalar `node_modules`.

   ```sh
   pnpm install
   ```

2. Ejecutar aplicaciones.

- Docs (Vitepress): [http://localhost:3000](http://localhost:3000)

  ```sh
  pnpm docs:dev
  ```

- Web (Sveltekit + TinaCMS): [http://localhost:3002](http://localhost:3002)

  ```sh
  pnpm web:dev
  ```

### Realizar despliegue

Para desplegar una nueva versión de este proyecto, se deben seguir los siguientes pasos:

1. Ejecutar el script `./scripts/release.sh` y seguir las instrucciones para especificar el tipo de versión que desea publicar ("major", "minor" o "patch") y si desea agregar un alcance a la versión (por ejemplo, "alpha", "beta" o "stable").

2. Verificar que los cambios y la etiqueta de Git se hayan publicado correctamente en el repositorio remoto. Adicionalmente, debe haber un workflow compilando las imágenes de Docker y publicándolas en Docker Hub.

## Docker

### Compilar imágenes

**Docs:**

```sh
docker buildx build -t jinen-docs:latest -f Dockerfile.docs .
```

**Cms:**

```sh
docker buildx build -t jinen-cms:latest -f Dockerfile.cms .
```

**Web:**

```sh
docker buildx build -t jinen-web:latest -f Dockerfile.web .
```

### Ejecutar imágenes

**Docs:**

```sh
docker run -p 3000:80 -d jinen-docs
```

**Cms:**

```sh
docker run --network="jinen-network" --env-file envs/development.env -e MONGODB_URI=mongodb://user:root@mongo:27017/?authMechanism=DEFAULT -p 3001:3001 -d jinen-cms
```

**Web:**

```sh
docker run -p 3002:3002 -d jinen-web
```

## Ejecutar Docker Compose

**Vendors:**

```sh
docker-compose up -d
```

**Development:**

```sh
export DOCKER_BUILDKIT=1 && docker-compose -f docker-compose.development.yaml up -d
```

**Production:**

```sh
export DOCKER_BUILDKIT=1 && docker-compose -f docker-compose.production.yaml up -d
```
