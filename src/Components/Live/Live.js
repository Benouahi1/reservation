import React from "react";



function Live(){
    return(
<div
style={{
    display: 'flex',
    flexDirection: 'row',
    color: '#ffffff',
    backgroundColor:'rgb(30 46 100)',
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
       marginTop: '10px', 
    }}
    >

    <li><i>Home</i></li>
    <li><i>Reserver</i></li>
    <li><i>Car</i></li>
    <li><i>Profil</i></li>
    </ul>
    <button
    style={{
        width:'10%',
        border: 'None',
        backgroundColor: 'rgb(0 57 255)',
        color: '#ffffff',
        height: '50px',
        marginTop: '2px',
        borderRadius: '5px',
        fontSize: '17px',
        fontWeight: '500',
        
    }}
    >Login</button>
</div>
    );
}

export default Live;