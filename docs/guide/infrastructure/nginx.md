# NGINX

Nginx es un servidor web de alto rendimiento que se utiliza ampliamente en la actualidad. Es rápido, ligero y eficiente, y puede manejar grandes cantidades de tráfico. También puede funcionar como un servidor proxy inverso y como balanceador de carga. En esta documentación, se explica cómo configurar Nginx y cómo utilizarlo para alojar los sitio webs de Jinen.

## Configuración básica de Nginx

La configuración básica de Nginx se encuentra en el archivo `nginx.conf`, que generalmente se encuentra en la ruta `/etc/nginx`. Esta configuración consta de dos bloques principales: events y http.

### Bloque de eventos

El bloque de eventos controla la configuración del modelo de eventos que se utiliza para manejar las conexiones de red. Aquí es donde se pueden configurar los eventos que Nginx debe estar atento, como la conexión, la desconexión, la lectura y la escritura.

En nuestra configuración, hemos dejado el bloque de eventos en blanco. Esto significa que Nginx utilizará la configuración predeterminada, que es adecuada para la mayoría de las situaciones.

### Bloque http

El bloque http es el bloque principal que contiene toda la configuración relacionada con HTTP. Este bloque contiene una serie de directivas que se utilizan para configurar Nginx para manejar solicitudes HTTP.

#### Bloque types

La directiva types define los tipos de archivos que Nginx puede servir. En nuestra configuración, hemos definido algunos tipos de archivos comunes que incluyen `JavaScript`, `CSS`, `SVG`, `JSON` y `HTML`.

#### Bloque server

El bloque server se utiliza para definir la configuración de un servidor virtual en Nginx. En nuestra configuración, hemos definido un servidor virtual que escucha en el puerto 80 y utiliza localhost como nombre del servidor.

La directiva root especifica la ruta del directorio raíz para este servidor virtual, que en nuestra configuración es `/usr/share/nginx/html`. La directiva index especifica qué archivo se debe servir como página de inicio, que en nuestra configuración es index.html.

#### Bloque location

El bloque location se utiliza para definir la configuración de una ubicación dentro de un servidor virtual. En nuestra configuración, hemos definido una ubicación para manejar todas las solicitudes que lleguen al servidor virtual.

La directiva `try_files` especifica que Nginx intentará servir el archivo solicitado si existe, y si no, intentará servir el archivo `index.html`. Esto se utiliza comúnmente en aplicaciones de una sola página (SPA) para manejar las rutas de la aplicación en el lado del servidor.
