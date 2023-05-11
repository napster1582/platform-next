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

- Docs (Vitepress): [http://localhost:3000](http://localhost:3000)

  ```sh
  pnpm docs:dev
  ```

  - Cms (ExpressJS): [http://localhost:3001](http://localhost:3001)

  ```sh
  pnpm cms:dev
  ```

- Web (Sveltekit): [http://localhost:4201](http://localhost:4201)

  ```sh
  pnpm web:dev
  ```

## Docker

### Compilar imágenes

**Docs:**

```sh
docker build -t jinen-docs -f Dockerfile.docs .
```

**Cms:**

```sh
docker build -t jinen-cms -f Dockerfile.cms .
```

**Web:**

```sh
docker build -t jinen-web -f Dockerfile.web .
```

### Ejecutar imágenes

**Docs:**

```sh
docker run -p 3000:3000 -d jinen-docs
```

**Cms:**

```sh
docker run -p 3001:3001 -d jinen-cms
```

**Web:**

```sh
docker run -p 3002:3002 -d jinen-web
```

## Guía de contribución

<https://github.com/JinenGroup/contributing>
