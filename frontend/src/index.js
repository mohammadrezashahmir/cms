import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/dist/css/app.css';
import App from './App';

// رندر کردن App در ریشه 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
