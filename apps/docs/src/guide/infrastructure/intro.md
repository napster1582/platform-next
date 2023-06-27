# Documentación para el despliegue de múltiples aplicaciones usando Docker, Kubernetes y Github Actions

## Introducción

Este documento proporciona una guía paso a paso para desplegar múltiples aplicaciones en un servidor On-premise utilizando Docker, Kubernetes y Github Actions.

## Tecnologías utilizadas

### Docker

Docker es una plataforma para desarrollar, desplegar y ejecutar aplicaciones en contenedores. En este proyecto, cada aplicación se empaquetará en un contenedor Docker para su posterior despliegue en un servidor On-premise.

### Kubernetes

Kubernetes es un sistema de orquestación de contenedores de código abierto que permite automatizar el despliegue, la escalabilidad y la gestión de aplicaciones en contenedores. En este proyecto, se utilizará Kubernetes para orquestar y gestionar los contenedores de las diferentes aplicaciones.

### Github Actions

Github Actions es un servicio de integración y entrega continua (CI/CD) que permite automatizar el proceso de construcción, prueba y despliegue de aplicaciones. En este proyecto, se utilizará Github Actions para automatizar el proceso de construcción y despliegue de las diferentes aplicaciones.

## Preparación del entorno

### Servidor On-premise

Es necesario contar con un servidor On-premise en el cual se desplegarán las diferentes aplicaciones. El servidor debe cumplir con los siguientes requisitos:

- Tener instalado Docker y Kubernetes.
- Contar con los recursos necesarios (memoria, CPU, almacenamiento) para soportar el despliegue de las diferentes aplicaciones.
