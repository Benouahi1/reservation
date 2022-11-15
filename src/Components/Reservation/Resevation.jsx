
import React from "react";
import './Reserve.css';
import Reserve from "../../images/Reserve.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";
import {useState, useEffect } from "react";


function Reserver(){
    if(sessionStorage.getItem("username")!==null){

    }else{
        window.location.href = "/Login";
    }

const [Data ,setData]= useState();


    useEffect(()=> {
        fetch('http://localhost:5000/Voyages', 
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
                <div>
                    <img className="imge1" src={Reserve} alt="" />
                    <div  className="Reserve">
                      <p>Voyages</p>
                    </div>
                    
                    
                </div>
                <div class="row row-cols-1 bg-light  row-cols-md-3 g-4" 
                style={{
                 
                    paddingTop: '1%',
                    paddingBottom: '1%',
                }}
                >
                 {
                    Data.map((item, index) => (
                        
                         <div class="col">
                        <div class="card h-100">
                        <img src={Img2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{item.Name_Car}</h5>
                            <p class="card-text ">{item.VilleDepart} AU {item.VilleFin}</p>
                            <p class="card-text">{item.HoursDepares} Au {item.HoursFin} </p>
                            <p class="card-text">Date: {item.Date_depart.toString().split("T")[0]} </p>
                            <a class="btn btn-primary" href="">Reserver</a>
                        </div>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        
    );
    
}else{

}



}

export default Reserver;