import ReactDOM from 'react-dom/client';
import React from 'react';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';



document.body.classList.add('bg-dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
)
