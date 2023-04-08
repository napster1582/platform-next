# Jinen

⚓ Repositorio oficial del proyecto **Jinen**.

## Requisitos

- Node.js (versión 18 o superior): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/es/>
- Docker: <https://www.docker.com/>

## Iniciar proyectos API, CMS y Web en el entorno local

1. Instalar `node_modules`.

    ```sh
    pnpm install
    ```

2. Iniciar contenedores de docker en el entorno `development`.

    ```sh
    docker-compose up -d
    ```

3. Crear o actualizar base de datos en el entorno `development`.

    ```sh
    pnpm prisma:development:push
    ```

4. Ejecutar aplicaciones.

- API: [http://localhost:3000](http://localhost:3000)

    ```sh
    pnpm api:start
    ```

- CMS: [http://localhost:4201](http://localhost:4201)

    ```sh
    pnpm cms:start
    ```

- WEB [http://localhost:4200](http://localhost:4200)

    ```sh
    pnpm web:start
    ```

## Docker

### Compilar imágenes

**API:**

```bash
docker build -t jinen-api -f Dockerfile.api .
```

**CMS:**

```bash
docker build -t jinen-cms -f Dockerfile.cms .
```

**Web:**

```bash
docker build -t jinen-web -f Dockerfile.web .
```

### Ejecutar imágenes

**Api:**

```bash
# Development
docker run -p 3000:3000 --env-file envs/development.env -d jinen-api

# Production
docker run -p 3000:3000 --env-file envs/production.env -d jinen-api
```

**Web (nginx):**

```bash
docker run -p 4200:80 -d jinen-web
```

## Kubernetes

> No configurado

## Guía de contribución

<https://github.com/JinenGroup/contributing>
