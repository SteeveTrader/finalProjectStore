import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './reset.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // eslint-disable-line no-undef
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
