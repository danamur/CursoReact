import ReactDOM from 'react-dom/client';
import React from 'react';

import { MultipleCustomHooks } from './03-example/MultipleCustomHooks';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { SimpleFormWithCustomHook } from './02-useEffect/SimpLeFormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { CounterApp } from './01-useState/CounterApp';

document.body.classList.add('bg-dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MultipleCustomHooks />
  //</React.StrictMode>,
)
