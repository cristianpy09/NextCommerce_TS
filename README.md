# FLUJO DE TRABAJO EN EQUIPO — NextCommerce_TS

Este documento describe el flujo de trabajo recomendado para colaborar correctamente en este proyecto.  
Sigue los pasos en orden para evitar conflictos y mantener un repositorio limpio y organizado.

---

##  1. Clonar el repositorio (solo la primera vez)

Cada integrante lo hace **una sola vez**:

```bash
git clone https://github.com/cristianpy09/NextCommerce_TS.git
cd <NOMBRE_DEL_PROYECTO>
```
##  2. Cambiar a la rama develop

Antes de empezar a trabajar:
```bash
git checkout develop
```
##  3. Actualizar develop

Siempre trae los cambios más recientes antes de trabajar:
```bash
git pull origin develop
```
##  4. Crear una rama feature

Cada integrante trabaja su parte del código en una rama propia basada en develop.

Ejemplo: estás desarrollando la página de login:
```bash
git checkout -b feature/login-page
```

Esto crea una nueva rama basada en develop llamada feature/login-page.

##  5. Trabajar en tu rama

Edita, crea o elimina archivos sin miedo.
Haz commits con mensajes claros y con prefijos:
```bash
git add .
git commit -m "feat: agrega formulario de login con validación"
```

## Usa siempre prefijos de commit:

| Prefijo     | Descripción                                  |
| ----------- | -------------------------------------------- |
| `feat:`     | Nueva funcionalidad                          |
| `fix:`      | Corrección de errores                        |
| `refactor:` | Mejora interna sin cambiar el comportamiento |
| `style:`    | Cambios visuales o de formato                |
| `docs:`     | Documentación                                |



##  6. Subir tu rama al repositorio
```bash
git push origin feature/login-page
```

Esto crea la rama en GitHub para que los demás puedan verla.

##  7. Crear un Pull Request (PR)

En GitHub:

Ve a la pestaña Pull Requests

Clic en New Pull Request

Selecciona:

Base: develop

Compare: tu rama (feature/login-page)

Describe tus cambios claramente

Espera revisión o aprobación del líder (tú)

##  8. Revisión y Merge

Cuando el PR esté revisado y aprobado:

Se hace merge a develop

Luego se borra la rama de la feature (para mantener el repo limpio).

Puedes hacerlo desde GitHub con “Delete branch” después del merge, o por consola:
```bash
git branch -d feature/login-page
git push origin --delete feature/login-page
```
##  9. Actualizar tu entorno local

Cada vez que algo se fusione en develop, los demás actualizan su código:
```bash
git checkout develop
git pull origin develop
```

Y si estás en otra feature:
```bash
git checkout feature/otra-tarea
git merge develop

```

