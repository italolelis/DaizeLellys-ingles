import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// IMPORTANTE: O index.css tem de estar aqui no topo!
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Se usares Bootstrap CSS

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);