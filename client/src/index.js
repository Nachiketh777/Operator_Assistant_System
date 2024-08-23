import React from 'react';
import ReactDOM from 'react-dom/client';
import TableCom from "./Components/AddTemp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

