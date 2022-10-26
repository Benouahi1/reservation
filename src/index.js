import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import Footer  from '../src/Components/Footer/Footer';
import Live from '../src/Components/Live/Live';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>

    <Live />
   <App />
    <Footer />


  </div>
    
  
);


reportWebVitals();
