import React from "react";

import Reserve from "../../images/Reserve.jpg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import  Ville  from "../../dataVille/ville.json";

function AjouterVoyages() {
  if (sessionStorage.getItem("username") !== "admin") {
    window.location.href = "/Admin";
  }

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    fetch("http://localhost:5000/Voyages/Add", {
      method: "POST",
      body: JSON.stringify({
        car: data.car,
        chefeur: data.chefeur,
        Numero_Car: data.Numero_Car,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    reset();
  };

  const [Data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/Car", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

//   const [ville, setVille] = useState();


//   const getData=()=>{
//     fetch(VilleJson
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setVille(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])

//   useEffect(() => {
//     fetch(VilleJson, {
//       method: "GET",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setVille(response);
//       });
//   }, []);
console.log(Ville);

  if (typeof Data === "object" && typeof Ville === "object") {
    return (
      <div>
        <div>
          <img className="imge1" src={Reserve} alt="" />
          <div className="Reserve">
            <p>Voyages</p>
          </div>
        </div>

        <form
          className="From row g-3"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-md-2"></div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Name Car
            </label>
            <select class="form-control" name="" id="">
              <option selected>Name Car</option>
              {Data.map((item, index) => (
                <option value={item.car}>{item.car}</option>
              ))}
            </select>
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Name Car
            </label>
            <select class="form-control" name="" id="">
              <option selected>Ville Depart</option>
              {
                Ville.map((data) =>
                    <option value={data.ville}>{data.ville}</option>
                )
              }
            </select>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Date
            </label>
            <input class="form-control" type="date" />
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
            Ville Fin
            </label>
            <select class="form-control" name="" id="">
              <option selected>Ville Fin</option>
              {
                Ville.map((data) =>
                    <option value={data.ville}>{data.ville}</option>
                )
              }
            </select>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Date Depart
            </label>
            <input class="form-control" type="time" />
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Date Fin
            </label>
            <input class="form-control" type="time" />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Prix
            </label>
            <input class="form-control" placeholder="100 dh" type="text" />
          </div>
          
          <div
            class="col-10"
            style={{
              textAlign: "end",
            }}
          >
            <button type="submit" value="Add" class="btn btn-primary">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AjouterVoyages;
