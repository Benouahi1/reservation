import React from "react";
import './Live.css'



function Live(){
    return(
<div
className="NAv"
style={{
    display: 'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor:'#344fa1',
    justifyContent: 'space-around',
    
}}
> 
    <h1>
        Bus
    </h1>

    <ul style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '30%',
        color: 'white',
       listStyle: 'none',
       marginTop: '10px', 
       textDecoration: 'none',
    }}
    >
    <li 
    style={{
        marginleft: '10px',
    }}
    > <a
    style={{
       
    }} href="/">Home</a></li>
    <li><a href="/Reserve">Reserve</a></li>
  
    </ul>
   
    <a href="/Login" 
    className="Boton"

> 
    Login</a>
     
</div>
    );
}

export default Live;