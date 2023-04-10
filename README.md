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

2. Iniciar contenedores de docker.

   ```sh
   docker-compose up -d
   ```

3. Crear o actualizar base de datos en el entorno `development`.

   ```sh
   pnpm prisma:development:push
   ```

4. Ejecutar aplicaciones.

- Api (NestJS): [http://localhost:3000](http://localhost:3000)

  ```sh
  pnpm api:dev
  ```

- Cms (ExpressJS): [http://localhost:3001](http://localhost:3001)

  ```sh
  pnpm cms:dev
  ```

- Admin (Angular): [http://localhost:4200](http://localhost:4200)

  ```sh
  pnpm admin:dev
  ```

- Web (Sveltekit): [http://localhost:4201](http://localhost:4201)

  ```sh
  pnpm web:dev
  ```

- Docs (Vitepress): [http://localhost:4202](http://localhost:4202)

  ```sh
  pnpm docs:dev
  ```

## Docker

### Compilar imágenes

**Api:**

```bash
docker build -t jinen-api -f Dockerfile.api .
```

**Cms:**

```bash
docker build -t jinen-cms -f Dockerfile.cms .
```

**Admin:**

```bash
docker build -t jinen-admin -f Dockerfile.admin .
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

**Cms:**

```bash
# Development
docker run -p 3001:3001 --env-file envs/development.env -d jinen-cms

# Production
docker run -p 3001:3001 --env-file envs/production.env -d jinen-cms
```

**Admin (nginx):**

```bash
docker run -p 4200:80 -d jinen-admin
```

**Web (nginx):**

```bash
docker run -p 4201:80 -d jinen-web
```

**Docs (nginx):**

```bash
docker run -p 4202:80 -d jinen-docs
```

## Kubernetes

> No configurado

## Guía de contribución

<https://github.com/JinenGroup/contributing>
