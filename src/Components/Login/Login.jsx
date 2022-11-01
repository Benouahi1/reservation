import React from "react";

import './Login.css';
import img4 from '../../images/jonathan-borba-LnggkK8864c-unsplash.jpg'
import { useForm } from 'react-hook-form';





function Login(){
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        const newData = new FormData();

        newData.append("Gmail", data.Gmail);
        newData.append("Password", data.Password);
    //    console.log(data); 
      
        fetch('http://localhost:5000/User/Login', 
        {

            method:"POST", 
            body:JSON.stringify({
               
                "Gmail" : data.Gmail,
                "Password" : data.Password
              }),
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));
        reset();
        // window.location.href = "/login";
    }
 return(
        <div className="Login">
            <img className="BackgroundImages" src={img4} alt="" />
            <form method="POST" onSubmit={handleSubmit(onSubmit)} >  
            <div className="Log">
                <p className="p1">Login</p>
                    <p className="p">Gmail</p>
                    <input type="text"
                     name="Gmail"
                     {...register("Gmail")}
                     required />
                    <p className="p">Password</p>
                    <input  type="Password"
                    {...register("Password")}
                    required/>
                    <a className="Cree" href="/Rougister">Cree un Compte</a>
                    <button type="submit" value="Add" className="Conect">Connecte</button>
            </div>
            </form>
          
            
            
            
        </div>
);
}

export default Login;