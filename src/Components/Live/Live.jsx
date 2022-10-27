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
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        color: 'white',
       listStyle: 'none',
       marginTop: '10px', 
       textDecoration: 'none',
    }}
    >
    <li> <a
    style={{
       
    }} href="/">Home</a></li>
    <li><a href="/Reserve">Reserve</a></li>
  
    </ul>
    <a href="/Login" 
     style={{
        padding: '1%',
        width: '7%',
        textAlign: 'center',
        border: 'None',
        backgroundColor: '#007bff',
        color: '#ffffff',
       
        borderRadius: '5px',
        fontSize: '17px',
        fontWeight: '500',
        
    }}

> 
    Login</a>
     
</div>
    );
}

export default Live;