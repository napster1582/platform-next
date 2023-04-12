# Guía de Configuración de Kubernetes en Windows Server 2022

## Requisitos previos

Antes de comenzar, hay que asegurarse de que el servidor cumpla con los siguientes requisitos previos:

- Windows Server 2022 con las últimas actualizaciones instaladas
- Procesador de 64 bits compatible con SLAT (Second Level Address Translation)
- Al menos 8 GB de RAM
- Virtualización habilitada en la BIOS
- Internet habilitado para descargar los componentes necesarios

## Paso 1: Habilitar características necesarias

Para habilitar las características necesarias en Windows Server 2022, se deben seguir los siguientes pasos:

1. Abrir PowerShell como administrador.
2. Ejecuta el siguiente comando para habilitar las características de contenedores:

    ```PowerShell
    Enable-WindowsOptionalFeature -Online -FeatureName Containers -All
    ```

3. Ejecutar el siguiente comando para habilitar las características de Hyper-V:

    ```PowerShell
    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
    ```

4. Reiniciar el servidor.

## Paso 2: Descargar y configurar Docker Desktop

Docker Desktop es una herramienta que incluye Kubernetes y Docker Engine para Windows. Para descargar y configurar Docker Desktop, se deben seguir los siguientes pasos:

1. Descargar Docker Desktop desde el siguiente enlace: <https://www.docker.com/products/docker-desktop>
2. Ejecutar el instalador de Docker Desktop y seguir las instrucciones del asistente de instalación.
3. Después de la instalación, iniciar Docker Desktop desde el menú de inicio o desde la barra de tareas.
4. Hacer clic en el ícono de Docker Desktop en la barra de tareas y seleccionar "Settings".
5. Seleccionar "Kubernetes" en el menú de la izquierda y habilitar la opción "Enable Kubernetes".
6. Hacer clic en "Apply & Restart" para aplicar los cambios y reiniciar Docker Desktop.

## Paso 3: Crear un cluster de Kubernetes

Una vez que Docker Desktop está configurado, se puede crear un cluster de Kubernetes utilizando el siguiente comando en PowerShell:

```PowerShell
kubectl cluster up
```

Este comando creará un cluster de Kubernetes local utilizando Docker Desktop. Una vez que el cluster esté listo, se podrán ejecutar comandos de Kubernetes utilizando la herramienta "kubectl".

## Conclusión

En este documento se explicó como crear un cluster de Kubernetes local en Windows Server 2022 y como comenzar a ejecutar aplicaciones en él.
