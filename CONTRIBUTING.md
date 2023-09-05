# Guía de contribución de Jinen

## Requisitos previos

- Node.js (versión 18 o superior): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/es/>
- Docker: <https://www.docker.com/>

## Flujo de trabajo

Este proyecto utiliza trunk-based development para el control de versiones y el proceso de despliegue. Trunk-based development es un enfoque de desarrollo que implica la integración continua de cambios en una única rama principal, conocida como el tronco. Para obtener más información sobre trunk-based development, puede visitar este [enlace](https://trunkbaseddevelopment.com/).

Para comenzar a trabajar en una nueva característica, se deben seguir los siguientes pasos:

1. Asegúrese de que se encuentra en la rama principal:

   ```sh
   git checkout trunk
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

```sh
pnpm dev
```

- Docs (VitePress): <http://localhost:3000>
- Cms (PayloadCMS): <http://localhost:3001>
- Web (SvelteKit): <http://localhost:3002>

## Realizar despliegue

Para desplegar una nueva versión de este proyecto, se deben seguir los siguientes pasos:

1. Asegúrese de que se encuentra en la rama principal:

   ```sh
   git checkout trunk
   ```

2. Ejecutar el script `./scripts/release.sh` y seguir las instrucciones para especificar el tipo de versión que desea publicar ("major", "minor" o "patch") y si desea agregar un alcance a la versión (por ejemplo, "alpha", "beta" o "stable").

3. Verificar que los cambios y la etiqueta de Git se hayan publicado correctamente en el repositorio remoto. Adicionalmente, debe haber un workflow compilando las imágenes de Docker y publicándolas en Docker Hub.

## Reglas de codificación

Para garantizar consistencia en todo el código fuente, tener en cuenta estas reglas mientras trabaja:

- Todas las características o correcciones de errores **deben ser probadas** por uno o más especificaciones (pruebas unitarias).
- Todos los métodos de API públicos **deben ser documentados**.

## Formato del mensaje de commit

Este proyecto sigue la convención de commits convencionales. Puede obtener más información en la siguiente página: <https://www.conventionalcommits.org/en/v1.0.0/>

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
# Local

docker run -p 3000:80 -d jinen-docs
```

```sh
# Production

docker run -p 3000:80 -d ghcr.io/jinengroup/platform-next/docs
```

**Cms:**

```sh
# Local

docker run --network="jinen-network" --env-file apps/cms/.env -p 3001:3001 -d jinen-cms
```

```sh
# Production

docker run --network="jinen-network" --env-file apps/cms/.env -p 3001:3001 -d ghcr.io/jinengroup/platform-next/cms
```

**Web:**

```sh
# Local

docker run --env-file apps/web/.env -p 3002:3002 -d jinen-web
```

```sh
# Production

docker run --env-file apps/web/.env -p 3002:3002 -d ghcr.io/jinengroup/platform-next/web
```

### Ejecutar Docker Compose

**Development:**

```sh
export DOCKER_BUILDKIT=1 && docker-compose -f docker-compose.development.yaml up -d
```

**Production:**

```sh
docker-compose -f docker-compose.production.yaml pull && docker-compose -f docker-compose.production.yaml up -d
```

### Acceder al shell de la imagen

```sh
docker run -it image_id sh
```

### Acceder al shell del contenedor

```sh
docker exec -it container_name sh
```
