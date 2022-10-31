


import React from "react";
import './Rougister.css';
import img4 from '../../images/jonathan-borba-LnggkK8864c-unsplash.jpg';
import { useForm } from 'react-hook-form';



function Login(){
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        const newData = new FormData();
        newData.append("UserName", data.UserName);
        newData.append("Gmail", data.Gmail);
        newData.append("Password", data.Password);
    //    console.log(data); 
      
        fetch('http://localhost:5000/User/Register', 
        {

            method:"POST", 
            body:JSON.stringify({
                "UserName" : data.UserName,
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
            <form methode="post" onSubmit={handleSubmit(onSubmit)} >
            <img className="BackgroundImages" src={img4} alt="" />
            <div className="Log">
            <p className="p1">Cree Un Compte</p>
            <p className="p">USerName</p>
                <input 
                type="text"
                {...register("UserName")}
                 required 
                  />
                <p className="p">Gmail</p>
                <input type="gmail"
                name="Gmail"
                {...register("Gmail")}
                required/>
                <p className="p">Password</p>
                <input type="Password"
                {...register("Password")}
                required/>
                <button type="submit" value="Add" className="Conect">Cree Compt</button>
            </div>
            </form>
            
            
        </div>
);
}

export default Login;