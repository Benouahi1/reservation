import React from "react";
import './dashbord.css';
import Reserve from "../../images/Reserve.jpg";
import User from "../../images/utilisateur.png";
import ticket from "../../images/billet.png";
import bus from "../../images/bus-scolaire.png";
import Voyages from "../../images/field-trip.png";

import {useState, useEffect } from "react";



import QRCode from "react-qr-code";





function Dashbord(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }else{
      
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
                      <p>Dashbord</p>
                    </div>
                    
                    
                </div>
                
                <div className="Afichages1">
                 {/* {
                    Data.map((item, index) => (
                        <div className="Card1">
                            
                            
                            
                            <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "18%", width: "18%" }}
                        value={`${item.Circulation} ${item.Date_depart.toString().split("T")[0]} ${item.Prix[2]} ${item.Hours_Circulation[1]} `}
                        viewBox={`0 0 256 256`}
                        />
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
                } */}

                <div className="listD">
                    
                    <a className="ListDashbord" href="">
                        <img className="Img10" src={User} alt="" />
                        Users</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="">
                        <img className="Img10" src={ticket} alt="" />
                        Ticket</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="">
                        <img className="Img10" src={bus} alt="" />
                        Cars</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="">
                        <img className="Img10" src={Voyages} alt="" />
                        Voyages</a>
                </div>
                </div>
            </div>
        
    );
    
}




}

export default Dashbord;