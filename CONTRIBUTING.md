# Guía de contribución

## Estructura del repositorio
- `frontend/`: aplicación Angular
- `backend/`: API Spring Boot
- `database/`: scripts SQL y migraciones
- `docs/`: documento de análisis y diagramas

## Ramas
- `master` es la rama principal: no se trabaja directo en ella.
- Una rama por tarea: `feature/<modulo>-<tarea>`, `fix/<descripcion>`, `docs/<descripcion>` o `chore/<descripcion>`.

## Flujo de trabajo
1. `git checkout master` y `git pull origin master`
2. `git checkout -b feature/<modulo>-<tarea>`
3. Commits pequeños con mensaje claro, por ejemplo `feat(usuarios): ordena la lista alfabeticamente`
4. `git push -u origin <rama>` y abrir un Pull Request hacia `master`
5. Pedir revisión. Con 1 aprobación se hace merge y se borra la rama.

## Frontend
Para correrlo: `cd frontend`, `npm ci` y `npm start`.
Usar `npm ci` y no `npm install`, para no modificar package-lock.json. Solo se usa `npm install <paquete>` cuando se agrega una librería nueva a propósito.