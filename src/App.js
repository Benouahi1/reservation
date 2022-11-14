import {Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Reserver from './Components/Reservation/Resevation';
import Login from './Components/Login-User/Login';
import Rougister from './Components/Rougister/Rougister';
import Dashbord from './Components/Dashbord/dashbord';
import Chercher from './Components/Chercher/Chercher';
import Admin from './Components/Admin/Admin';
import ListTicket from './Components/ListTicket/ListTicket';
import ListCar from './Components/ListCar/ListCar';
import AjouterCar from './Components/AjouterCar/AjouterCar';
import './App.css';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/AjouterCar" element={<AjouterCar />} ></Route>
        <Route path="/ListCar" element={<ListCar />}></Route>
      <Route path="/ListTicket" element={<ListTicket />}></Route>
       <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Chercher" element={<Chercher />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashbord" element={<Dashbord />}></Route>
        <Route path="/Reserve" element={<Reserver />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Rougister" element={<Rougister />}></Route>

      </Routes>
    </BrowserRouter>
    );
  }

}

export default App;
