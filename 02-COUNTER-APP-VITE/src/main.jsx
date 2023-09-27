import React from 'react'
import ReactDOM from 'react-dom/client'

/* Componente que vamos a renderizar en nuestra aplicación */
const App = () => {
    return (<h1>Hola Mundo !!!</h1>)
}

/** 
 * Configuración y renderizado de nuestra aplicación.
 * Usamos React Strict Mode para detectar posibles problemas y advertencias.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)