import React from "react";
import './Reserve.css';
import Reserve from "../../images/Reserve.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";


function Reserver(){
    return(
            <div>
                <div>
                    <img className="img1" src={Reserve} alt="" />
                    <div  className="Reserve">
                      <p>Reserver</p>
                    </div>
                    
                </div>
                <div className="Afichages">
                    <div className="MonCard">
                     
                        <div className="Card">
                            <img className="img2" src={Img2} alt="" />
                            <div className="info">
                                <p>Apart:  Rabat</p>
                                <p>Avant:  Tanger</p>
                            </div>
                            <div className="info">
                                <p>Prix: 220 DH</p>
                                <p>Date: 22/11/2022</p>
                            </div>
                            <div className="info">
                                <p>Hours: 22:00</p>
                                <button className="but">Reserver</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Reserver;