import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//React va a tomar un documento que se llama root, en realidad un id

//dentro de este div, contenido en index.html
//encuentro todo lo que react está incorporando todo lo que nosotros configuramos, en este caso en el app.js
//ejemplo nuestro h1, toma ese h1 y lo lleva entremedio del div llamado root


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
