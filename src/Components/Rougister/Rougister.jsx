


import React from "react";
import './Rougister.css';
import img4 from '../../images/jonathan-borba-LnggkK8864c-unsplash.jpg'


function Login(){
    return(
        <div className="Login">
            <img className="BackgroundImages" src={img4} alt="" />
            <div className="Log">
            <p className="p1">Cree Un Compte</p>
            <p className="p">USerName</p>
                <input type="text" />
                <p className="p">Gmail</p>
                <input type="text" />
                <p className="p">Password</p>
                <input type="Password" />
                <button className="Conect">Cree Compt</button>
            </div>
            
            
            
        </div>
);
}

export default Login;