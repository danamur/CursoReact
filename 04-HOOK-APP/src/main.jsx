import ReactDOM from 'react-dom/client';
import React from 'react';
//import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


document.body.classList.add('bg-dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
