import React from "react";

import './Admin.css';
import img4 from '../../images/Facebook-Page-Admin.jpg'
import { useForm } from 'react-hook-form';
import Login from "../Login-User/Login";





function Admin(){
    if(sessionStorage.getItem("username")!=="admin"){
        
    }else{
        if(sessionStorage.getItem("username")===null){
            window.location.href = "/Dashbord";
        }else{
            window.location.href = "/";
        }
        
    }
    const { Login, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        const newData = new FormData();

        newData.append("GmailAdmin", data.GmailAdmin);
        newData.append("Password", data.Password);
    //  
      
        fetch('http://localhost:5000/Admin/Login', 
        {

            method:"POST", 
            body:JSON.stringify({
               
                
                "GmailAdmin" : data.GmailAdmin,
                "Password" : data.Password
              }),
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => sessionStorage.setItem("username" , "admin"));
       
        window.location.reload();
        
       
        reset();
        
    }

 return(
        <div className="Login">
            <img className="BackgroundImages" src={img4} alt="" />
            <form method="POST" className="LOG" onSubmit={handleSubmit(onSubmit)} >  
            <div className="Log">
                <p className="p1">Login Admin</p>
                    <p className="p">Gmail</p>
                    <input type="Gmail"
                     {...Login("Gmail")}
                     required />
                    <p className="p">Password</p>
                    <input  type="Password"
                    {...Login("Password")}
                    required/>
                  
                    <button type="submit" value="Add" className="Conect">Connecte</button>
            </div>
            </form>
          
            
            
            
        </div>
);
}

export default Admin;