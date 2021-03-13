import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import AppRoutes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
