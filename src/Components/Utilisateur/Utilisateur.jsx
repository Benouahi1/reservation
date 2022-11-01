import React from "react";


import {useState, useEffect } from "react";


function Utilisateur(){

const [Data ,setData]= useState();

useEffect(()=> {
    fetch('http://localhost:5000/User', 
        {
            method:"GET", 
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);

        });
    }, [])



if(typeof Data === "object"){
return(
        <div>
           
            <div className="Afichages">
             {
                Data.map((item, index) => (
                    <div className="Card1">
                   
                        <div className="info">
                            <p>Apart:  {item.UserName}</p>
                            
                        </div>
                        <div className="info">
                            <p>Date: {item.Gmail}</p>
                           
                        </div>
                        <div className="info">
                            <button className="but">Reserver</button>
                        </div>
                
                </div>
                ))
            }
            </div>
        </div>
    
);



}
}

export default Utilisateur;