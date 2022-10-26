import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './Components/Home/Home';
// import Reserver from './Components/Reservation/Resevation';
import Footer  from '../src/Components/Footer/Footer';
import Live from '../src/Components/Live/Live';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>

    <Live />
    {/* <Reserver /> */}
    <Home />
   
    <Footer />


  </div>
    
  
);


reportWebVitals();
