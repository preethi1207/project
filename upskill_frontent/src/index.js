// index.js or main entry point file
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Adjust the path as necessary
import './index.css'; // If you have global styles

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
