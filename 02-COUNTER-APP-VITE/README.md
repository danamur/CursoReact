# Plantilla React + Vite

![Logo de React + Vite](enlace-a-tu-imagen-de-logo.png)

Esta plantilla proporciona una configuración mínima para integrar React de manera fluida con Vite, completa con Hot Module Replacement (HMR) y reglas esenciales de ESLint para mantener tu código limpio y sin errores.

## Plugins Oficiales

Mejora tu experiencia de desarrollo con estos plugins oficiales:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):** Utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Empezando

Crea una aplicación "Count" con esta plantilla. Te permite incrementar y decrementar un valor utilizando React Hooks, con una integración perfecta de Bootstrap 5 para el estilo y PropTypes para la validación de props.

### Instalación

Utiliza estos comandos para configurar las dependencias del proyecto:

```bash
npm install prop-types
npm install bootstrap
npm install react-bootstrap
```

## Pruebas Unitarias
Utilizamos Jest para pruebas unitarias. Instálalo junto con sus tipos utilizando estos comandos:

```bash
npm install --save-dev jest
npm install --save @types/jest
```

Se crea archivo babel.config.cjs para el correcto funcionamiento de las pruebas.

### Archivos de pruebas

```bash
02-template-string.js
05-funciones.js
06-deses-obj.js
07-deses-arr.js
```