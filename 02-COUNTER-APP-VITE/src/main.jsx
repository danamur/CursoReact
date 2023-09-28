import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { FirstApp } from './FirstApp'

import './styles.css';

/** 
 * Configuración y renderizado de nuestra aplicación.
 * Usamos React Strict Mode para detectar posibles problemas y advertencias.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp name="Daniel Namur" title = "Desarrollador Full Stack"/>
  </React.StrictMode>
)