import React from "react";
import './Chercher.css'
import {useState, useEffect } from "react";



function Chercher(){
    if(sessionStorage.getItem("username")===''){
       
    }else{
        window.location.href = "/login";
    }
    const [Data ,setData]= useState();
    useEffect(()=> {
        fetch('http://localhost:5000/Voyages/Cherche', 
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
                    <div className="Afich">
                         {
                Data.map((item, index) => (
            
            
                    <div className="Car">
                    <div className="Circulation">
                    <p> {item.Circulation[0]} </p>
                    <p>{item.Circulation[1]} </p>
                    <p> {item.Circulation[2]}</p>
                 
                    </div>
                    
                    <div className="Circulation">
                    <p> {item.Hours_Circulation[0]}h</p>
                    <p>{item.Hours_Circulation[1]}h</p>
                    <p>{item.Hours_Circulation[2]}h</p>
                    
                    </div>
                   
                    <div className="Circulation">
                    <button>Reserver</button>
                    <p>{item.Prix[1]} DH</p>
                    <p>{item.Prix[2]} DH</p>
                    </div>
                    
                    </div>
                  

                 
                ))
                }
                
                
              
                    </div>
                
            );
             }

}

export default Chercher;