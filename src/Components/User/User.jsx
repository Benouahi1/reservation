import React from "react";

import Reserve from "../../images/Reserve.jpg";
import {useState, useEffect } from "react";












function User(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }

    
    const [Data ,setData]= useState();

    useEffect(()=> {
        fetch('http://localhost:5000/User', 
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
                      <p>User</p>
                    </div>
                    
                    
                </div>
                
               
                

               
                <div className="Afichages1">
                         <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Gmail</th>
                                <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                     {
                    Data.map((item, index) => (
                        <tr>
                            <td scope="row">{item.UserName}</td>
                            <td>{item.Gmail}</td>
                            <td>{item.Password}</td>
                         
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

export default User;