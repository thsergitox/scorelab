import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
// Asumiendo que App.tsx es otro componente que tal vez quieras usar, pero no está siendo usado en este ejemplo simplificado.
// import App from './App.tsx';
import './index.css';



// Obtén el elemento root del DOM. Asegúrate de que tu archivo index.html tenga un elemento con id 'root'.
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
