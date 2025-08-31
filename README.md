# Ejercicio 1: Webapp con GitHub Actions

## Descripción
Esta aplicación es una web sencilla que contiene un formulario de registro de usuario. El proyecto incluye automatización de integración continua (CI) usando GitHub Actions.

## Estructura del proyecto
```
webapp/
  app.js         # Lógica JS compilada
  app.ts         # Lógica en TypeScript para el formulario
  index.html     # Página principal con el formulario
  styles.css     # Estilos de la web
.github/
  workflows/
    main.yml     # Workflow de GitHub Actions
```

## Funcionamiento de la aplicación
- El usuario ingresa su nombre, apellido paterno, edad y género en el formulario de `index.html`.
- Al enviar el formulario, el archivo `app.ts` (compilado a JS) captura el evento, valida los datos y muestra un mensaje de éxito o error en pantalla.
- La validación asegura que todos los campos estén completos y que la edad sea un número válido.

## Automatización con GitHub Actions
- El archivo `.github/workflows/main.yml` define un workflow que se ejecuta automáticamente al hacer push a la rama `main`.
- El workflow instala dependencias (si existe `package.json`), ejecuta pruebas (si están definidas) y muestra un mensaje de finalización.

## Cómo probar la aplicación
1. Abre `index.html` en tu navegador y completa el formulario.
2. Haz cambios en el código y realiza un push a la rama `main` para ver la ejecución automática del workflow en GitHub.

## Autor
Francisco Valdivia

Este proyecto es demostrativo para aprender sobre formularios web y automatización con GitHub Actions.



El archivo `main.yml` define un workflow de GitHub Actions que automatiza la integración continua (CI) del proyecto. Su funcionamiento es el siguiente:

- **name: CI Webapp**: Nombre del workflow.
- **on: push: branches: - main**: El workflow se ejecuta automáticamente cada vez que se realiza un push a la rama `main`.
- **jobs: build**: Define un trabajo llamado `build` que se ejecuta en un entorno Ubuntu.
- **steps**:
  1. *Checkout código*: Descarga el código fuente del repositorio.
  2. *Configurar Node.js*: Instala Node.js versión 18 para el entorno de ejecución.
  3. *Instalar dependencias*: Si existe un archivo `package.json`, ejecuta `npm install` para instalar las dependencias del proyecto.
  4. *Ejecutar pruebas*: Si hay pruebas definidas en `package.json`, ejecuta `npm test`. Si no existen pruebas, muestra un mensaje informativo. Si no hay `package.json`, indica que solo hay archivos estáticos.
  5. *Fin del workflow*: Muestra un mensaje indicando que el workflow ha finalizado.

Este workflow permite validar automáticamente los cambios realizados en el proyecto cada vez que se actualiza la rama principal, facilitando la detección temprana de errores y asegurando la calidad del código.
