import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Live from '../src/Components/Live/Live';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>

<Live />
    <App />
  </div>
    
  
);


reportWebVitals();
