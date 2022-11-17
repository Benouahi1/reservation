import React from "react";
import moment from 'moment';
import Reserve from "../../images/Reserve.jpg";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import  Ville  from "../../dataVille/ville.json";

function AjouterVoyages() {
  if (sessionStorage.getItem("username") !== "admin") {
    window.location.href = "/Admin";
  }

  const now = moment();
  const today = now.format('YYYY-MM-DD');
  
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/Voyages/Add", {
      method: "POST",
      body: JSON.stringify({
        Name_Car: data.Name_Car,
        Numero_Car: data.Numero_Car,
        Date_depart: data.Date_depart,
        VilleDepart: data.VilleDepart,
        VilleFin: data.VilleFin,
        HoursDepares: data.HoursDepares,
        HoursFin: data.HoursFin,
        Prix: data.Prix

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

  if (typeof Data === "object") {
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
            <select name="Name_Car" {...register("Name_Car")} class="form-control" id="">
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
            <select  class="form-control" name="Numero_Car" {...register("Numero_Car")}   id="">
              <option selected>Numero Car</option>
              {Data.map((item, index) => (
                <option value={item.Numero_Car}>{item.Numero_Car}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Date
            </label>
            {/* <input name="Date_depart" {...register("Date_depart")} class="form-control" type="date" /> */}
            <input class="form-control" name="Date_depart" {...register("Date_depart")}
             type="date" id="date" min={today} placeholder="Departure Date"  />
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
            Ville Depart
            </label>
            <select name="VilleDepart" {...register("VilleDepart")} class="form-control"  id="">
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
            Hours Depart
            </label>
            <input name="HoursDepares" {...register("HoursDepares")} class="form-control" type="time" />
          </div>
          <div class="col-md-4">
             <label for="inputEmail4" class="form-label">
              Ville Fin
            </label>
            <select class="form-control" name="VilleFin" {...register("VilleFin")}   id="">
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
              Hours Fin
            </label>
            <input name="HoursFin" {...register("HoursFin")} class="form-control" type="time" />
           
          </div>
          <div class="col-md-4">
          <label for="inputEmail4" class="form-label">
              Prix
            </label>
            <input name="Prix" {...register("Prix")} class="form-control" placeholder="100 dh" type="text" />
          
         
           
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
