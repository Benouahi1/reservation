import React from "react";



function Live(){
    return(
<div
style={{
    display: 'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor:'#000000',
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
      
       listStyle: 'none', 
    }}
    >

    <li><a>Home</a></li>
    <li><a>Reserver</a></li>
    <li><a>Car</a></li>
    <li><a>Profil</a></li>
    </ul>
    <button
    style={{
        width:'8%',
        border: 'None',
        backgroundColor: '#FFBB3F',
        color: '#ffffff',
        height: '50px',
        marginTop: '2px',
        borderRadius: '5px',
        fontSize: '17px',
    }}
    >Login</button>
</div>
    );
}

export default Live;