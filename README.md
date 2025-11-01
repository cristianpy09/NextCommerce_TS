 PASOS DEL FLUJO DE TRABAJO
 1. Clonar el repositorio por primera vez

Cada integrante lo hace una sola vez:

git clone https://github.com/cristianpy09/NextCommerce_TS.git
cd <NOMBRE_DEL_PROYECTO>

 2. Cambiar a la rama develop

Antes de empezar a trabajar:

git checkout develop

 3. Actualizar develop

Siempre traigan todos los cambios que hayan en la rama antes de trabajar:

git pull origin develop

4. Crear una feature branch

Cada integrante trabaja su parte del código en una rama propia.

Ejemplo: estás desarrollando la página de login:

git checkout -b feature/login-page


 Esto crea una nueva rama basada en develop llamada feature/login-page.

 5. Trabajar en esa rama

Edita, crea o elimina archivos sin miedo.
Haz commits con mensajes claros:

git add .
git commit -m "feat: agrega formulario de login con validación"


Usa siempre prefijos de commit:

feat: → nueva funcionalidad

fix: → corrección

refactor: → mejora interna

style: → cambios visuales

docs: → documentación

 6. Subir tu rama al repositorio
git push origin feature/login-page


Esto crea la rama en GitHub para que los demás puedan verla.

 7. Crear un Pull Request (PR)

En GitHub:

Ve a la pestaña Pull Requests

Clic en New Pull Request

Selecciona:

Base: develop

Compare: tu rama (feature/login-page)

Describe tus cambios claramente

Espera revisión o aprobación del líder (tú)

 8. Revisión y Merge

Cuando el PR esté revisado y aprobado:

Se hace merge a develop

Luego se borra la rama de la feature (para mantener el repo limpio).

Puedes hacerlo desde GitHub con “Delete branch” después del merge, o por consola:

git branch -d feature/login-page
git push origin --delete feature/login-page

 9. Actualizar tu entorno local

Cada vez que algo se fusione en develop, los demás actualizan su código:

git checkout develop
git pull origin develop


Y si estás en otra feature:

git checkout feature/otra-tarea
git merge develop


