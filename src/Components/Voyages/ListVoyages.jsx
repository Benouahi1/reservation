import React from "react";
import Reserve from "../../images/Reserve.jpg";
import Icon1 from "../../images/x-circle.svg";
import {useState, useEffect } from "react";












function ListVoyages(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
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
                
               
                
                <div style={{
                    backgroundColor: 'white',
                }}
                class="p-2"
                    >
                <div style={{
                    textAlign: 'end'
                }}>
                <a class="btn btn-primary" href="/AjouterVoyages">Ajouter Voyages</a>
                </div>
             
                <div className="Afichages1">
                
                         <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Name Car</th>
                                <th scope="col">Numero Car</th>
                                <th scope="col">Date Depart</th>
                                <th scope="col">ville Depare</th>
                                <th scope="col">ville Fin</th>
                                <th scope="col">hours Depart</th>
                                <th scope="col">hours Fin</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                     {
                    Data.map((item, index) => (
                        <tr>
                            <td scope="row">{item.Name_Car}</td>
                            <td>{item.Numero_Car}</td>
                            <td>{item.Date_depart.toString().split("T")[0]}</td>
                            <td>{item.VilleDepart}</td>
                            <td>{item.VilleFin}</td>
                            <td>{item.HoursDepares}</td>
                            <td>{item.HoursFin}</td>
                            <td>{item.Prix}</td>
                            <td><img src={Icon1} alt="" />
                            {/* <img className="icon2" src={Icon2} alt="" /> */}
                            </td>
                            
                        </tr>
                    ))
                }
                               
                            </tbody>
                            </table>
                    </div> 
                    </div>
            </div>
        
    );
            
    }
    
}

export default ListVoyages;