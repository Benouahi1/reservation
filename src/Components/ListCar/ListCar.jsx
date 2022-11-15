import React from "react";
import './ListCar.css';
import Reserve from "../../images/Reserve.jpg";
import Icon1 from "../../images/x-circle.svg";
import Icon2 from "../../images/archive.svg";
import {useState, useEffect } from "react";












function ListCar(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }

    
    const [Data ,setData]= useState();

    useEffect(()=> {
        fetch('http://localhost:5000/Car', 
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
                      <p>Car</p>
                    </div>
                    
                    
                </div>
                
               <div className="Back">
               <div style={{
                    textAlign: 'end'
                }}>
                <a class="btn btn-primary" 
                style={{
                    width:'10%',
                    marginLeft: '3%'
                }} 
                href="/AjouterCar">Ajouter</a>
                </div>
                <div className="Afichages1">
              
                         <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Name Car</th>
                                <th scope="col">Chefeur Car</th>
                                <th scope="col">Numero Car</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                     {
                    Data.map((item, index) => (
                        <tr>
                            <td scope="row">{item.car}</td>
                            <td>{item.chefeur}</td>
                            <td>{item.Numero_Car}</td>
                            <td><img src={Icon1} alt="" />
                            <a href="/AjouterCar/{item._id}"><img className="icon2" src={Icon2} alt="" /></a>
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

export default ListCar;