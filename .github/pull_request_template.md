Este PR hace xyz

## Changelog

- changelog 1
- changelog 2

## Breaking changes

- breaking change 1
- breaking change 2

Issue: #issue-number

---

> "Eliminar los elementos que no son relevantes para la descripción"

### **PR:**

- [ ] El título del PR sigue el formato: "JINEN-NNNN: type(scope?): description"
- [ ] La descripción del PR es apropiada y puede ser incluida directamente en las "Notas de la versión".
- [ ] Se ha proporcionado un enlace al issue de GitHub.
- [ ] Se han mencionado en la descripción los cambios que pueden afectar la compatibilidad (Breaking changes).

### **General:**

- [ ] PR contiene cambios en la API

  - [ ] Los DTOs están cubiertos con decoradores de Swagger y class-validator.
  - [ ] Los decoradores de los DTO están colocados en el orden correcto:
    - `@IsNotEmpty` o `@IsOptional`
    - otros
  - [ ] Los decoradores de los controladores están colocados en el orden correcto:
    - `@Controller`
    - `@ApiTags`
    - `@Auth`
    - otros
  - [ ] Los controladores están protegidos correctamente con un acceso por roles a nivel de clase o de miembro.
  - [ ] Los números mágicos y otros valores están definidos en constantes configurables.
  - [ ] La API pública y el CMS no están mezclados en el mismo controlador.
  - [ ] Los decoradores heredan su identificador y marcas de tiempo del `BaseDto` o `BaseDtoWithTimestamps`
  - [ ] El identificador del usuario se decodifica del JWT a través del decorador `@Account` en lugar de pasarlo directamente como parámetro a un endpoint.
  - [ ] Los endpoints siguen estríctamente la arquitectura REST.
  - [ ] TSDocs agregados para nuevos métodos, constantes, servicios o cualquier otro recurso que requiera documentación debido a su complejidad.
  - [ ] Se han agregado pruebas de integración para cubrir nuevas características y validar todos los casos de uso.
  - [ ] Los campos opcionales contienen el safe operator (`?`).

- [ ] PR contiene cambios en el CMS

  - [ ] Todos los textos están establecidos en archivos i18n
  - [ ] Nueva característica o corrección es probada localmente en el entorno local.

- [ ] PR contiene cambios en el cliente web

  - [ ] Todos los textos están establecidos en archivos i18n
  - [ ] Nueva característica o corrección es probada localmente en el entorno local.
  - [ ] Estilos redundantes son abstraídos a componentes de CSS.

### **Características generales:**

- [ ] PR agrega una nueva característica opcional

  - [ ] Existe una forma apropiada de habilitarla o deshabilitarla.
  - [ ] API, CMS y cliente web funcionan correctamente después de agregar característica.

- [ ] El código implementado no agrega errores/advertencias en la consola.

### **Completado:**

- [ ] (Deshabilitado temporalmente) Documentación agregada al portal de documentación de Jinen.
- [ ] PR es publicado en el grupo de Jinen
