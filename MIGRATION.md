# Separación del backend

Importado desde `backend/` de https://github.com/vitogiaquinta14/WineWay, commit `f294aad0b3399f885d60ff69f2104b66ae6df778`. El historial anterior permanece en ese repositorio. Este repo inicia un historial propio.

La estructura de `backend/` pasa a la raíz. Las pruebas de interfaz y del cliente HTTP permanecen en el frontend. Se conservan schema, migraciones, seed, catálogo y documentación de referencia sin modificar reglas de negocio. Los comandos ya no requieren `--prefix backend`.

Los archivos de `specs/` describen el plan histórico y pueden mencionar la distribución anterior.

Verificación de la separación: 83 pruebas originales en verde; 68 pruebas de backend en este repo y 15 trasladadas al frontend (20 allí, contando las 5 previas). Lint, tipos y build del backend correctos; el generador de códigos funciona desde esta raíz.
