import React from "react";
import './Reserve.css';
import Reserve from "../../images/Reserve.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";
import {useState, useEffect } from "react";


function Reserver(){

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
    
    
if(sessionStorage.getItem("username")!==null){
    if(typeof Data === "object"){
    return(
            <div>
                <div>
                    <img className="imge1" src={Reserve} alt="" />
                    <div  className="Reserve">
                      <p>Reserver</p>
                    </div>
                    
                    
                </div>
                <div className="Afichages">
                 {
                    Data.map((item, index) => (
                        <div className="Card1">
                            <img className="img2" src={Img2} alt="" />
                            <div className="info">
                                <p>Apart:  {item.Circulation[0]}</p>
                                <p>Circulation:  {item.Circulation[1]}</p>
                                <p>Avant:  {item.Circulation[2]}</p>
                            </div>
                            <div className="info">
                                <p>Date: {item.Date_depart.toString().split("T")[0]}</p>
                                <p></p>
                                <p>Prix: {item.Prix[2]} Dh</p>
                            </div>
                            <div className="info">
                                <p>Hours depart: {item.Hours_Circulation[1]}</p>
                                <p>Hours Circulation: {item.Hours_Circulation[1]}</p>
                                <button className="but">Reserver</button>
                            </div>
                    
                    </div>
                    ))
                }
                </div>
            </div>
        
    );
    
}else{

}



}else{
    console.log("aaaaaaaaaaaaaa")
}
}

export default Reserver;