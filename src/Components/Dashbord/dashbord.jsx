import React from "react";
import './dashbord.css';
import Reserve from "../../images/Reserve.jpg";
import User from "../../images/utilisateur.png";
import ticket from "../../images/billet.png";
import bus from "../../images/bus-scolaire.png";
import Voyages from "../../images/field-trip.png";











function Dashbord(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }else{
      
    }



        
    
    

    return(
            <div>
                  <div>
                    <img className="imge1" src={Reserve} alt="" />
                    <div  className="Reserve">
                      <p>Dashbord</p>
                    </div>
                    
                    
                </div>
                
                <div className="Afichages1">
                

                <div className="listD">
                    
                    <a className="ListDashbord" href="/User">
                        <img className="Img10" src={User} alt="" />
                        Users</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="/ListTicket">
                        <img className="Img10" src={ticket} alt="" />
                        Ticket</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="/ListCar">
                        <img className="Img10" src={bus} alt="" />
                        Cars</a>
                </div>
                <div className="listD">
                    
                    <a className="ListDashbord" href="/ListVoyages">
                        <img className="Img10" src={Voyages} alt="" />
                        Voyages</a>
                </div>
                </div>
            </div>
        
    );
    





}

export default Dashbord;