import React from "react";
import './AjouterCar.css';
import Reserve from "../../images/Reserve.jpg";

import { useForm } from 'react-hook-form';












function AjouterCar(){
    if(sessionStorage.getItem("username")!=="admin"){
        window.location.href = "/Admin";
    }

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        const newData = new FormData();

        newData.append("car", data.car);
        newData.append("chefeur", data.chefeur);
        newData.append("Numero_Car", data.Numero_Car);
    //  
      
        fetch('http://localhost:5000/Car/Add', 
        {

            method:"POST", 
            body:JSON.stringify({
               
                "car": data.car,
                "chefeur": data.chefeur,
                "Numero_Car":data.Numero_Car
                
              }),
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));
        reset();
        // window.location.reload();
        
       
       
    }
    
   
    
    

 
    return(
            <div>
                  <div>
                    <img className="imge1" src={Reserve} alt="" />
                    <div  className="Reserve">
                      <p>Car</p>
                    </div>
                    
                    
                </div>
                
                <form class="row g-3" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-2"></div>
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">Name Car</label>
                        <input type="text" class="form-control"
                        name="car"
                        {...register("car")}
                        id="inputEmail4" 
                        required
                        /> 
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">Chefour Car</label>
                        <input type="text" class="form-control" 
                         name="chefeur"
                         {...register("chefeur")}
                        id="inputPassword4" 
                        required
                        />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div class="col-6">
                        <label for="inputAddress" class="form-label">Numero car</label>
                        <input type="text" class="form-control" id="inputAddress"
                         name="Numero_Car"
                         {...register("Numero_Car")}
                        placeholder="1234-A-2" 
                        required
                        />
                    </div>
                    <div className="col-md-4"></div>
                    <div class="col-6">
                        <button type="submit" value="Add" class="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        
    );
            
    
    
}

export default AjouterCar;