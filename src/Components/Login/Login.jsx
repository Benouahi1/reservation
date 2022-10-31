import React from "react";
// import { useState } from "react";
import './Login.css';
import img4 from '../../images/jonathan-borba-LnggkK8864c-unsplash.jpg'


// const loginUser = (Credentials) =>{
//     const response = fetch("http://localhost:4000/User/Login", {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: Json.stringify(Credentials)
//     })
//     return response.json();
// }


function Login(){
    // const [UserName, setUserName] = useState();
    // const [Password, setPassword] = useState();
    // const handleLogin = (e) =>
    //     { e.preventDefault();
    //         const response = loginUser({
    //             UserName,
    //             Password
    //         })
    //         props.setToken(response.token);

    //     }   
 return(
        <div className="Login">
            <img className="BackgroundImages" src={img4} alt="" />
            <form method="post" >  
            <div className="Log">
                <p className="p1">Login</p>
                    <p className="p">Gmail</p>
                    <input 
                    name="UserName"
                     type="text" 
                    //  onChange={e => setUserName(e.target.value)}
                     />
                    <p className="p">Password</p>
                    <input name="Password"
                     type="Password"
                    //  onChange={e => setPassword (e.target.value)}
                     />
                    <a className="Cree" href="/Rougister">Cree un Compte</a>
                    <button type="submit" className="Conect">Connecte</button>
            </div>
            </form>
          
            
            
            
        </div>
);
}

export default Login;