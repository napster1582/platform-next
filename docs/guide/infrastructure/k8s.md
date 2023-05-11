# Kubernetes (K8S)

[Kubernetes](https://kubernetes.io/) es un sistema de orquestación de contenedores de código abierto que permite automatizar el despliegue, la escalabilidad y la gestión de aplicaciones en contenedores. En este proyecto, se utiliza Kubernetes para orquestar y gestionar los contenedores de las diferentes aplicaciones.

## Tipos de objetos en Kubernetes

- **Pod**: Es la unidad básica de despliegue en Kubernetes. Un pod es un contenedor o conjunto de contenedores que se ejecutan en un mismo host y comparten un mismo espacio de red y almacenamiento. Cada pod tiene su propia dirección IP y puede tener uno o varios contenedores que se ejecutan en el mismo espacio de nombres.

- **Service**: Es un objeto de Kubernetes que define un conjunto de pods y una política de acceso a ellos. Un service permite acceder a un conjunto de pods de manera transparente, independientemente de su ubicación en el clúster. Los servicios se utilizan para abstraer la red subyacente y permitir que los pods se comuniquen entre sí sin tener que conocer sus direcciones IP.

- **Ingress**: Es un objeto de Kubernetes que proporciona una capa adicional de abstracción para el acceso a servicios dentro del clúster. Un ingress expone servicios HTTP y HTTPS en una dirección IP y un puerto específicos y se utiliza para enrutar el tráfico externo a los servicios internos en función de reglas de configuración definidas.

- **ConfigMap**: Es un objeto de Kubernetes que se utiliza para almacenar datos de configuración en formato clave-valor o como archivos de configuración. Las ConfigMaps se utilizan para separar la configuración de las aplicaciones del código fuente y permitir que se actualice de manera independiente.

- **Secret**: Es un objeto de Kubernetes que se utiliza para almacenar datos sensibles, como claves privadas, contraseñas y tokens de autenticación, de manera segura en el clúster. Los secretos se pueden montar como archivos en los pods y se utilizan para proporcionar información confidencial a las aplicaciones.

- **Volume**: Es un objeto de Kubernetes que se utiliza para proporcionar almacenamiento persistente a los contenedores en los pods. Un volumen es un directorio que existe en el host o en un sistema de almacenamiento externo y que se monta en un contenedor. Los volúmenes se utilizan para almacenar datos que deben persistir después de que el pod se detiene o se elimina.

- **Deployment**: Es un objeto de Kubernetes que se utiliza para desplegar y actualizar aplicaciones en el clúster. Un deployment define la especificación de un conjunto de pods y su réplica, así como la política de actualización y reversión.

- **StatefulSet**: Es un objeto de Kubernetes que se utiliza para desplegar aplicaciones que requieren identificadores únicos y un estado persistente, como bases de datos y sistemas de archivos distribuidos. Un StatefulSet asegura que cada instancia del pod tenga un nombre y una identidad únicos, y que mantenga su estado a través de las actualizaciones y escalados.

- **Job**: Es un objeto que se utiliza para ejecutar tareas de manera ad-hoc o programada en el clúster. Un job crea uno o varios pods que se ejecutan hasta que se completa la tarea especificada y luego se eliminan.

- **CronJob**: Es un objeto que se utiliza para programar tareas de manera periódica en el clúster. Un cronjob crea un job en función de un patrón de cron y lo ejecuta de manera programada.

- **DaemonSet**: Es un objeto que se utiliza para desplegar un conjunto de pods en cada nodo del clúster. Un DaemonSet se utiliza para implementar aplicaciones que deben ejecutarse en cada nodo, como agentes de monitoreo y controladores de red.

- **PersistentVolume**: Es un objeto que se utiliza para representar un volumen de almacenamiento en el clúster que puede ser utilizado por los pods. Un PersistentVolume se puede utilizar para proporcionar almacenamiento persistente a los pods y se puede configurar para utilizar diferentes tipos de almacenamiento, como discos en la nube, sistemas de archivos en red y dispositivos de almacenamiento locales.

- **Namespace**: Es un objeto que se utiliza para crear espacios lógicos en el clúster y separar los recursos por aplicación, equipo o entorno. Un Namespace permite a los usuarios y equipos trabajar en el clúster de manera aislada y segura.

- **HorizontalPodAutoscaler**: Es un objeto que se utiliza para escalar automáticamente el número de réplicas de un deployment o un StatefulSet en función de la carga de trabajo. Un HorizontalPodAutoscaler utiliza métricas como el uso de CPU y memoria para ajustar el número de réplicas de los pods y garantizar un rendimiento óptimo de la aplicación.

## Estructura del proyecto

Para el proyecto, utilizamos un repositorio en GitHub para almacenar el código fuente y gestionar el flujo de trabajo de integración continua y entrega continua (CI/CD). La estructura básica del proyecto es la siguiente:

```sh
docs/
├── Dockerfile
├── k8s/
│   ├── docs-deployment.yaml
│   └── docs-service.yaml
└── src/

web/
├── Dockerfile
├── k8s/
│   ├── web-deployment.yaml
│   └── web-service.yaml
└── src/
...

k8s/
├── base/
│   ├── namespace.yaml
│   ├── secret.yaml
│   ├── configmap.yaml
│   ├── postgres-deployment.yaml
│   └── postgres-service.yaml
├── overlays/
│   ├── dev/
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│   │   └── kustomization.yaml
│   ├── stage/
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│   │   └── kustomization.yaml
│   └── prod/
│   │   ├── docs/
│   │   │   ├── docs-deployment.yaml
│   │   │   └── docs-service.yaml
│   │   ├── web/
│   │   │   ├── web-deployment.yaml
│   │   │   └── web-service.yaml
│       └── kustomization.yaml
├── kustomization.yaml
└── README.md
```

Cada aplicación tendrá su propia carpeta con un Dockerfile para construir la imagen de Docker correspondiente y una carpeta k8s que contendrá los archivos de configuración de Kubernetes.

También tendrá una carpeta k8s en la raíz del proyecto que contendrá los recursos comunes de Kubernetes, como el espacio de nombres, secretos, ConfigMaps y servicios para la base de datos PostgreSQL.

Además, utilizamos la herramienta kustomize para gestionar las diferentes configuraciones de Kubernetes para los entornos de desarrollo, stage y producción.
