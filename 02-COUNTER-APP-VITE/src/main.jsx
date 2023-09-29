import React from 'react'
import ReactDOM from 'react-dom/client'

//import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp'

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import 'bootstrap/dist/js/bootstrap.min.js';

/** 
 * Configuración y renderizado de nuestra aplicación.
 * Usamos React Strict Mode para detectar posibles problemas y advertencias.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value = { 0 }/> */}
    <FirstApp title='Bienvenido, Dwihgt'/>
  </React.StrictMode>
)