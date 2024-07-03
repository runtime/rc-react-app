import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/estimate'
//import reportWebVitals from './reportWebVitals';


//CONTEXT PROVIDER WRAPS APP (./context/estimate.js) and acts as a public interfaace to components by injecting functions and states into the app.
// pages and components will use the methods in the context to create and edit and the context will
// handle the axios calls and state and pass down to children. children import specific functions and data as needed


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
