# Comenzar

## Prerrequisitos

- [Node.js](https://nodejs.org/) version 16 or higher.
- Terminal para acceder a la lista de scripts de Jinen.
- Editor de texto con soporte de sintaxis [Markdown](https://en.wikipedia.org/wiki/Markdown).
  - Se recomienda [VSCode](https://code.visualstudio.com/), junto con las extensiones recomendadas [Jinen extensions](https://github.com/JinenGroup/platform-v2/blob/main/.vscode/extensions.json).

## Iniciar desarrollo

1. Instalar `node_modules`.

   ```sh
   pnpm install
   ```

2. Iniciar contenedores de docker.

   ```sh
   docker-compose up -d
   ```

3. Crear o actualizar base de datos en el entorno de desarrollo.

   ```sh
   pnpm prisma:development:push
   ```

4. Ejecutar aplicaciones.

    ::: code-group

    ```sh [Api]
    pnpm api:dev
    ```

    ```sh [Cms]
    pnpm cms:dev
    ```

    ```sh [Docs]
    pnpm docs:dev
    ```

    ```sh [Admin]
    pnpm admin:dev
    ```

    ```sh [Web]
    pnpm web:dev
    ```
  
    :::

## Entornos de desarrollo

### Api

- local: <http://localhost:3000>
- dev: <https://api.dev.jinen.com>
- stage: <https://api.stage.jinen.com>
- prod: <https://api.jinen.com>

### Cms

- local: <http://localhost:3001>
- dev: <https://cms.dev.jinen.com>
- stage: <https://cms.stage.jinen.com>
- prod: <https://cms.jinen.com>

### Docs

- local: <http://localhost:4200>
- dev: <https://docs.dev.jinen.com>
- stage: <https://docs.stage.jinen.com>
- prod: <https://docs.jinen.com>

### Admin

- local: <http://localhost:4201>
- dev: <https://admin.dev.jinen.com>
- stage: <https://admin.stage.jinen.com>
- prod: <https://admin.jinen.com>

### Web

- local: <http://localhost:4202>
- dev: <https://dev.jinen.com>
- stage: <https://stage.jinen.com>
- prod: <https://jinen.com>
