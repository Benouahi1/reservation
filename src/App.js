import {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Reserver from './Components/Reservation/Resevation';
import Login from './Components/Login/Login';
import Rougister from './Components/Rougister/Rougister';
import Dashbord from './Components/Dashbord/dashbord';
import './App.css';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashbord" element={<Dashbord />}></Route>
        <Route path="/Reserve" element={<Reserver />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Rougister" element={<Rougister />}></Route>
      </Routes>
    </BrowserRouter>
    );
  }

}

export default App;
