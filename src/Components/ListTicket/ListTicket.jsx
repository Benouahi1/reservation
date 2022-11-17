import React from "react";
import './List.css';
import Reserve from "../../images/Reserve.jpg";
import Icon1 from "../../images/x-circle.svg";
import {useState, useEffect } from "react";












function ListTicket(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }

    
    const [Data ,setData]= useState();

    useEffect(()=> {
        fetch('http://localhost:5000/Reserve', 
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
                      <p>Ticket</p>
                    </div>
                    
                    
                </div>
                <div className="Afichages1">
                         <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">User Name</th>
                                <th scope="col">Numero Car</th>
                                <th scope="col">ville Depare</th>
                                <th scope="col">Date Depart</th>
                                <th scope="col">hours Depart</th>
                                <th scope="col">Num Place</th>
                                <th scope="col">ville Collections</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                     {
                    Data.map((item, index) => (
                        <tr>
                            <td scope="row">{item.NomUtilisateur}</td>
                            <td>{item.NumeroCar}</td>
                            <td>{item.villeDepare}</td>
                            <td>{item.DateDepart.toString().split("T")[0]}</td>
                            <td>{item.hoursDepart}</td>
                            <td>{item.NumeroPlace}</td>
                            <td>{item.villeCollections}</td>
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
        
    );
            
    }
    
}

export default ListTicket;