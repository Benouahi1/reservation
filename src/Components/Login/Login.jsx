


import React from "react";
import './Login.css';
import img4 from '../../images/jonathan-borba-LnggkK8864c-unsplash.jpg'


function Login(){
    return(
        <div className="Login">
            <img className="BackgroundImages" src={img4} alt="" />
            <div className="Log">
                <p className="p">Gmail</p>
                <input type="text" />
                <p className="p">Password</p>
                <input type="Password" />
                <a href="">Cree un Compte</a>
                <button className="Conect">Connecte</button>
            </div>
            
            
            
        </div>
);
}

export default Login;