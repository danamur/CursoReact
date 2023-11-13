import ReactDOM from 'react-dom/client';
import React from 'react';

import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from './HeroesApp.jsx';
import './style.css';

document.body.classList.add('bg-black', 'text-white', 'mt-0');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
