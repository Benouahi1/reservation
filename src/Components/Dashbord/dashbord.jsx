import React from "react";
import './dashbord.css';

import Reserve from "../../images/Reserve.jpg";

// import {useState, useEffect } from "react";


function Dadshbord(){
    // const [Data ,setData]= useState();

    // useEffect(()=> {
    //     fetch('http://localhost:5000/Voyages', 
    //         {
    //             method:"GET", 
    //             headers: {
    //                 'Access-Control-Allow-Origin':'*',
    //                 'Content-type': 'application/json; charset=UTF-8'
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    
    //         });
    //     }, [])
    
    
    
    // if(typeof Data === "object"){
    // return(
    //         <div>
    //             <div>
    //                 <img className="imge1" src={Reserve} alt="" />
    //                 <div  className="Reserve">
    //                   <p>Dashbord</p>
    //                 </div>
                    
    //             </div>
    //             <div className="Afichages1">
    //              {
    //                 Data.map((item, index) => (
    //                     <div className="Card"
    //                     style={{
    //                         marginleft: '10px',
    //                     }}>
    //                         <img className="img5" src={Img2} alt="" />
    //                         <div className="info1">
    //                             <p>Apart:  {item.Circulation[0]}</p>
    //                             <p>Circulation:  {item.Circulation[1]}</p>
    //                             <p>Avant:  {item.Circulation[2]}</p>
    //                         </div>
    //                         <div className="info1">
    //                             <p>Date: {item.Date_depart}</p>
    //                             <p></p>
    //                             <p>Prix: {item.Prix[2]} Dh</p>
    //                         </div>
    //                         <div className="info1">
    //                             <p>Hours depart: {item.Hours_Circulation[1]}</p>
    //                             <p></p>
    //                             <p>Hours Circulation: {item.Hours_Circulation[1]}</p>
                                
    //                         </div>
                    
    //                 </div>
    //                 ))
    //             }
    //             </div>
    //         </div>
        
    // );
    
    
    
    // }


    return(
        <div>
                     <div>
                         <img className="imge1" src={Reserve} alt="" />
                         <div  className="Reserve">
                           <p>Dashbord</p>
                         </div>
                        
                    </div>
                    <div className="Afichages1">
                        <div className="Menu">
                            <ul className="ul">
                            <li className="li">Car</li>
                            <li className="li">Ajouter Car</li>
                            <li className="li">Voyages</li>
                            <li className="li">Ajouter Voyages</li>
                            <li className="li">Moudifier Voyages</li>
                            <li className="li">Utilisateur</li>
                           
                            </ul>
                        </div>
                        <div>
                            
                        </div>

                 
                    
                     </div>
                 </div>
    );
}

export default Dadshbord;   
                         