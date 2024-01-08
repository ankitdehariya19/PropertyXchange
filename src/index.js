import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import HouseContextProvider from './Components/Elements/HouseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>

);


reportWebVitals();
