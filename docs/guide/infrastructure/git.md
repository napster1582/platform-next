# Git

Git es un sistema de control de versiones popular utilizado para realizar seguimiento de los cambios en proyectos de desarrollo de software.

## Git Flow

Git Flow es un modelo de ramificación que proporciona un enfoque estructurado para gestionar ramas y lanzamientos en Git.

### Rama principal (`main`)

La rama principal es la rama estable que contiene el código listo para producción. Esta rama siempre debe estar en un estado implementable y solo debe actualizarse cuando haya un nuevo lanzamiento disponible.

### Rama de desarrollo (`dev`)

La rama de desarrollo es la rama donde se desarrollan y prueban nuevas características antes de fusionarlas en la rama principal. Esta rama siempre debe contener los últimos cambios de código y debe usarse para el trabajo de desarrollo continuo.

Además de las dos ramas principales, Git Flow define tres tipos de ramas de soporte que se utilizan para gestionar el flujo de cambios de código entre las ramas principal y de desarrollo:

- **Ramas de características (`feature`)**: Las ramas de características se crean a partir de la rama de desarrollo y se utilizan para desarrollar nuevas características. Una vez que se completa una característica, la rama de características se fusiona de nuevo en la rama de desarrollo.

- **Ramas de lanzamiento (`release`)**: Las ramas de lanzamiento se crean a partir de la rama de desarrollo cuando hay un nuevo lanzamiento disponible. Se utilizan para estabilizar el código y solucionar cualquier problema antes de implementar el lanzamiento. Una vez que el lanzamiento está listo, la rama de lanzamiento se fusiona en la rama principal y se crea una nueva etiqueta ([git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging)) para asociar una versión al lanzamiento.

- **Ramas de versión (`version-`)**: Las ramas de versión se ramifican desde la rama principal y se utilizan para mantener versiones anteriores del software. Se utilizan para corregir problemas en versiones antiguas del software mientras se sigue desarrollando el software más reciente en la rama principal y la rama de desarrollo.

- **Ramas de bugfix (`bugfix`)**: Las ramas de bugfix se crean a partir de la rama de desarrollo y se utilizan para solucionar errores o bugs que se encuentran en la rama de desarrollo o en ramas de características. Una vez que se completa la solución de bugfix, la rama de bugfix se fusiona de nuevo en la rama de desarrollo para asegurar que los cambios se propaguen adecuadamente en el flujo de desarrollo.

- **Ramas de hotfix (`hotfix`)**: Las ramas de hotfix se crean a partir de la rama principal (`main`) y se utilizan para solucionar problemas críticos en el código de producción. Una vez que se completa la solución de hotfix, la rama de hotfix se fusiona de nuevo en la rama principal y se crea una nueva etiqueta para marcar el hotfix.

## Git Tags

Los Git Tags son marcadores que se pueden utilizar para etiquetar puntos específicos en el repositorio Git. Se utilizan para marcar hitos importantes, como lanzamientos o hotfixes, y se pueden utilizar para hacer referencia fácilmente a puntos específicos en el historial del repositorio.

### Crear Git Tags

Para crear un Git Tag, se puede utilizar el siguiente comando:

```sh
git tag <nombre-tag>
```

Por ejemplo, para crear un tag para un lanzamiento llamado "v1.0.0", se puede utilizar el siguiente comando:

```sh
git tag v1.0.0
```

Por defecto, los Git Tags se crean en el commit actual. También se pueden crear tags en commits específicos especificando el hash del commit:

```sh
git tag v1.0.0 abc1234
```

### Listar Git Tags

Para listar todos los Git Tags disponibles en el repositorio, se puede utilizar el siguiente comando:

```sh
git tag
```

Este comando lista todos los Git Tags disponibles en orden alfabético. También se pueden listar los tags por fecha usando el siguiente comando:

```sh
git tag --sort=-creatordate
```

Se puede ver información detallada sobre un Git Tag específico utilizando el siguiente comando:

```sh
git show <nombre-tag>
```
