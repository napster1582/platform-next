# SemVer (Versionado semántico)

El versionado semántico, también conocido como SemVer, es un sistema de numeración de versiones utilizado para software y otros productos digitales. El objetivo principal del SemVer es proporcionar una forma consistente y estandarizada de indicar el nivel de compatibilidad entre diferentes versiones de un producto, lo que permite a los usuarios comprender mejor cómo evoluciona el software y cómo se deben aplicar las actualizaciones.

## Estructura de una versión SemVer

Una versión SemVer consta de tres números: `X.Y.Z`, donde `X`, `Y`, y `Z` son números enteros positivos. Estos números se utilizan para identificar el nivel de cambios que se han realizado en el software.

El número `X` indica cambios significativos que no son compatibles con versiones anteriores. Normalmente se utiliza para indicar la introducción de nuevas funcionalidades o cambios importantes en la arquitectura.

El número `Y` indica cambios que son compatibles con versiones anteriores, pero que incluyen nuevas funcionalidades o mejoras significativas en la funcionalidad existente.

El número `Z` indica correcciones de errores y mejoras menores que no afectan a la compatibilidad con versiones anteriores.

Por ejemplo, la versión `2.1.33` indica que es la versión mayor 2, la versión menor 1, y el parche 33.

## Reglas de versionado SemVer

El versionado semántico se basa en un conjunto de reglas y requisitos para asignar números de versión a los releases de un software.

1. Cambios en la versión mayor (`X`)
Se debe incrementar el número de versión mayor (`X`) cuando se realizan cambios significativos e incompatibles en la API del software. Esto incluye cambios en la estructura de la base de datos, cambios de formato de archivo, cambios de protocolo, y cambios en la forma en que el software interactúa con otros sistemas.

2. Cambios en la versión menor (`Y`)
Se debe incrementar el número de versión menor (`Y`) cuando se agregan nuevas funcionalidades compatibles con versiones anteriores. Esto incluye la adición de nuevas APIs o características que no rompen la compatibilidad con versiones anteriores.

3. Cambios en la versión de parche (`Z`)
Se debe incrementar el número de parche (`Z`) cuando se realizan correcciones de errores menores y compatibles con versiones anteriores. Esto incluye la corrección de errores de programación, corrección de errores de seguridad, y correcciones de errores de compatibilidad.

4. Etiquetas de pre-lanzamiento
Se pueden agregar etiquetas de pre-lanzamiento para indicar que un release está en una etapa de desarrollo previa al lanzamiento oficial. Las etiquetas de pre-lanzamiento se agregan después del número de versión, separadas por un guión. Por ejemplo, `1.0.0-alpha` indica una versión alpha del release `1.0.0`.
