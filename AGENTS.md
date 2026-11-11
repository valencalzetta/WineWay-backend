# WineWay backend

Este repositorio contiene Express + Prisma + SQLite. El frontend Expo vive en el repositorio WineWay y se comunica por HTTP. No importar archivos de ese repositorio.

Requiere Node >=22.12.0. Usar npm ci para instalar. Ejecutar npm test, npm run lint, npm run typecheck y npm run build antes de dar una tarea por terminada.

## Backend de WineWay

- Seguí como referencia de trabajo la práctica `Práctica Prisma — Express + Prisma + SQLite + Expo`: explicá el recorrido de los datos entre la app, la API, la capa de persistencia y la base.
- Mantené una arquitectura sencilla por responsabilidades: Expo solicita y presenta datos; Express expone HTTP, procesa middleware y valida; Prisma define y consulta el modelo; la base persiste.
- No conectes Expo directamente a la base ni mezcles reglas de validación con la interfaz o con el schema de persistencia.
- Elegí implementaciones simples y justificá las decisiones relacionándolas con conceptos de la materia (capas, API REST, validación, persistencia y flujo request/response).
- Mientras implementás el backend, actualizá `Seguimiento de desarrollo.md` con resúmenes breves: qué se hizo, dónde está, por qué se resolvió así y qué concepto de la materia aplica. El archivo es local y está excluido de Git.
- Antes de elegir o crear el schema y las migraciones, acordá con la usuaria qué base de datos y qué datos requiere la app.

- Aplicá TDD al backend: escribí y ejecutá primero la prueba que falla, implementá la regla y refactorizá con las pruebas verdes. Registrá los ciclos y resultados en el seguimiento local.
- Los datos del catálogo y ratings de demostración se precargan únicamente en SQLite mediante el seed. El frontend los obtiene de la API, sin catálogos ni ratings alternativos hardcodeados.
