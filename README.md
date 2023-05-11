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

- Web (Svelte-kit): [http://localhost:3002](http://localhost:3002)

  ```sh
  pnpm web:dev
  ```

## Docker

### Compilar imágenes

**Docs:**

```sh
docker build -t jinen-docs -f Dockerfile.docs .
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

**Web:**

```sh
docker run -p 3002:3002 -d jinen-web
```

## Guía de contribución

<https://github.com/JinenGroup/contributing>
