# Jinen

⚓ Repositorio oficial del proyecto **Jinen**.

## Requisitos previos

- Node.js (versión 18 o superior): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/es/>
- Docker: <https://www.docker.com/>

## Iniciar desarrollo

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

## Guía de contribución

<https://github.com/JinenGroup/contributing>
