// import React from "react";
// import './Chercher.css'
// import Reserve from "../../images/Reserve.jpg";
// import {useState, useEffect } from "react";
// import { useForm } from "react-hook-form";



// function Chercher(){
  

  
//     if(sessionStorage.getItem("username")===null){
//         window.location.href = "/login";
//     }

//     const pathArray = window.location.pathname.split('/');
//     const _id = pathArray[2]; 
//     console.log(_id)
//     const { register, handleSubmit, reset } = useForm();
    




//     const [Data ,setData]= useState({});
//     const [Voyages ,setVoyages]= useState([]);
//     useEffect(()=> {
//        const mydata= async ()=>{
//        const res = await  fetch('http://localhost:5000/Voyages/Chercher/'+_id, 
//        {
//            method:"GET", 
//            headers: {
//                'Access-Control-Allow-Origin':'*',
//                'Content-type': 'application/json; charset=UTF-8'
//            }
//        })
//        .then(response => response.json())
//        setData(res);
//        return res.Numero_Car
       
//        }
      
      
      
//        const mycar= async ()=>{
//         const num_car = await mydata()
//         console.log(num_car)
//         fetch('http://localhost:5000/Reserve/Numero/'+num_car, 
//         {
//             method:"GET", 
//             headers: {
//                 'Access-Control-Allow-Origin':'*',
//                 'Content-type': 'application/json; charset=UTF-8'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
           
//             for(var i = 0 ; i < data.length ; i++){
//                 let seat = data[i].NumeroPlace
//                 setVoyages(oldArray => [...oldArray, seat]);
//             }

//         });
//        }
//        mycar();
//         }, [])


//         const onSubmit = (data) => {

//             fetch("http://localhost:5000/Reserve/Add", {
//               method: "POST",
//               body: JSON.stringify({
//                 NomUtilisateur: data.NomUtilisateur,
//                 NumeroCar: data.NumeroCar,
//                 villeDepare: data.villeDepare,
//                 DateDepart: data.DateDepart,
//                 hoursDepart: data.hoursDepart,
//                 NumeroPlace: data.NumeroPlace,
//                 Prix: data.Prix
        
//               }),
//               headers: {
//                 "Access-Control-Allow-Origin": "*",
//                 "Content-type": "application/json; charset=UTF-8",
//               },
//             })
//               .then((response) => response.json())
//               .then((data) => console.log(data));
//             reset();
//           };
       
       
           
    
    
       
     
        

//         let J = 30;
//         let arr = [];
//         for(var i = 1; i <= J;i+=2) {
//             arr.push(i)
    
//         }

//         const array = arr.map((number) =>(
//             <div class="row">
                
//                  <div class="col">
//                 <input value={number} class="form-check-input" type="radio" name="NumeroPlace" {...register("NumeroPlace")}  id="exampleRadios1" disabled={Voyages.includes(number)? true : false}></input>
//                 <label class="form-check-label" for="exampleRadios1">
//                     {number}
//                 </label>
//                 </div>
//                 <div class="col">
//                 <input value={number+1} class="form-check-input" type="radio"  name="NumeroPlace" {...register("NumeroPlace")} id="exampleRadios1" disabled={Voyages.includes(number+1)? true : false}></input>
//                 <label class="form-check-label" for="exampleRadios1">
//                     {number+1}
//                 </label>
//                 </div>
//             </div>
//         )
        
//       );

//        if(Data.Date_depart !== undefined){
//         var Date3 = Data.Date_depart.toString().substr(0,10);
//        }
//       if(typeof Data === "object"){
//         console.log(Data)
//             return(

//                 <>
//                     <div>
//                         <img className="imge1" src={Reserve} alt="" />
//                         <div  className="Reserve">
//                         <p>Voyages</p>
//                         </div>
//                     </div>
//                     <form>
//                     <div style={{
//                         backgroundColor: "#ffffff",
//                         display:"flex",
//                         justifyContent:"space-evenly",
//                         paddingBottom: "4%",
//                     }}>
//                     <div class="row col-4">
                        
//                         <label class="form-check-label" > Nome</label>
//                         <input class="form-control" value={sessionStorage.getItem("username")}
//                         name="NomUtilisateur" {...register("NomUtilisateur")}
//                         disabled/>
//                         <label class="form-check-label" >Ville Depart</label>
//                         <input class="form-control" value={Data.VilleDepart}
//                         name="villeDepare" {...register("villeDepare")}
//                         disabled/>
//                         <label class="form-check-label" >Ville Collection</label>
//                         <input class="form-control" value={Data.VilleFin}
//                         name="NomUtilisateur" {...register("NomUtilisateur")}
//                         disabled/>
                          
//                         <label class="form-check-label" >Date Depart</label>
//                         <input class="form-control" value={Date3}
//                         name="DateDepart" {...register("DateDepart")}
//                         disabled/>
//                         </div>
//                         <div class="row col-4">
//                         <label class="form-check-label" > Numero Car</label>
//                         <input class="form-control" value={Data.Numero_Car} 
//                         name="NumeroCar" {...register("NumeroCar")}
//                         disabled/>
//                         <label class="form-check-label" >Hours Depart</label>
//                         <input class="form-control" value={Data.HoursDepares}
//                         name="hoursDepart" {...register("hoursDepart")}
//                         disabled/>
//                         <label class="form-check-label" >Hours Collection</label>
//                         <input class="form-control" value={Data.HoursFin}
//                         disabled/>
                          
//                         <label class="form-check-label" > Numero Car</label>
//                         <input class="form-control" value={Data.Prix} 
//                         name="Prix" {...register("Prix")}
//                         disabled/>
                        
//                     </div>
//                     <div class="form-check" style={{
//                         width: "10%",
//                     }} >
//                         {array}
//                     </div>
//                    </div>
//                    <div
//             class="col-7"
//             style={{
//               textAlign: "end",
//             }}
//           >
//             <button type="submit" value="Add" class="btn btn-primary">
//               Ajouter
//             </button>
//           </div>
//                    </form>
//                 </>      
//             );
//                 }

// }

// export default Chercher;




import React from "react";
import './Chercher.css'
import Reserve from "../../images/Reserve.jpg";
import {useState, useEffect } from "react";
import { useForm } from "react-hook-form";



function Chercher(){
  

  
    if(sessionStorage.getItem("username")===null){
        window.location.href = "/login";
    }

    const pathArray = window.location.pathname.split('/');
    const _id = pathArray[2]; 
    console.log(_id)
   
    




    const [Data ,setData]= useState({});
    const [Voyages ,setVoyages]= useState([]);
    useEffect(()=> {
       const mydata= async ()=>{
       const res = await  fetch('http://localhost:5000/Voyages/Chercher/'+_id, 
       {
           method:"GET", 
           headers: {
               'Access-Control-Allow-Origin':'*',
               'Content-type': 'application/json; charset=UTF-8'
           }
       })
       .then(response => response.json())
       setData(res);
       return res.Numero_Car
       
       }
      
    
      
       const mycar= async ()=>{
        console.log("mycar");
        const num_car = await mydata()
        console.log(num_car)
        fetch('http://localhost:5000/Reserve/Numero/'+num_car, 
        {
            method:"GET", 
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            for(var i = 0 ; i < data.length ; i++){
                let seat = data[i].NumeroPlace
                setVoyages(oldArray => [...oldArray, seat]);
            }
        });
       }
       mycar();
       
        }, [])
        const { register, handleSubmit, reset } = useForm();
        const [seat , setSeat] = useState("");
        const onSubmit = (data) => {
          console.log(data.NumeroCar)
          console.log(Voyages)
            fetch("http://localhost:5000/Reserve/Add", {
              method: "POST",
              body: JSON.stringify({
                NomUtilisateur: data.NomUtilisateur,
                NumeroCar: data.NumeroCar,
                villeDepare: Data.VilleDepart,
                DateDepart: data.DateDepart,
                hoursDepart: data.hoursDepart,
                NumeroPlace: seat,
                Prix: data.Prix,
                villeCollections: "Rabat",
        
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
       
       
           
    
    
       
     
        

        let J = 30;
        let arr = [];
        for(var i = 1; i <= J;i+=2) {
            arr.push(i)
    
        }

        const array = arr.map((number) =>(
            <div class="row">
                
                 <div class="col">
                <input value={number} onClick={(e)=>{setSeat(e.target.value)}} class="form-check-input" type="radio" name="NumeroPlace" {...register("NumeroPlace")}  id="exampleRadios1" disabled={Voyages.includes(number)? true : false}></input>
                <label class="form-check-label" for="exampleRadios1">
                    {number}
                </label>
                </div>
                <div class="col">
                <input value={number+1} onClick={(e)=>{setSeat(e.target.value)}} class="form-check-input" type="radio"  name="NumeroPlace" {...register("NumeroPlace")} id="exampleRadios1" disabled={Voyages.includes(number+1)? true : false}></input>
                <label class="form-check-label" for="exampleRadios1">
                    {number+1}
                </label>
                </div>
            </div>
        )
        
      );

       if(Data.Date_depart !== undefined){
        var Date3 = Data.Date_depart.toString().substr(0,10);
       }
      if(typeof Data === "object"){
        console.log(Data)
            return(

                <>
                    <div>
                        <img className="imge1" src={Reserve} alt="" />
                        <div  className="Reserve">
                        <p>Voyages</p>
                        </div>
                    </div>
                    <form  
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <div style={{
                        backgroundColor: "#ffffff",
                        display:"flex",
                        justifyContent:"space-evenly",
                        paddingBottom: "4%",
                    }}>
                    <div class="row col-4">
                        
                        <label class="form-check-label" > Nome</label>
                        <input class="form-control" value={sessionStorage.getItem("username")}
                        name="NomUtilisateur"
                         {...register("NomUtilisateur")}
                        />
                        <label class="form-check-label" >Ville Depart</label>
                        <input class="form-control" value={Data.VilleDepart}
                        name="villeDepare"
                         {...register("villeDepare")}
                        />
                        <label class="form-check-label" >Ville Collection</label>
                        <input class="form-control" value={Data.VilleFin}
                        name="villeCollection"
                        {...register("villeCollections")}
                        />
                          
                        <label class="form-check-label" >Date Depart</label>
                        <input class="form-control" value={Date3}
                        name="DateDepart"
                         {...register("DateDepart")}
                        />
                        </div>
                        <div class="row col-4">
                        <label class="form-check-label" > Numero Car</label>
                        <input class="form-control" value={Data.Numero_Car} 
                        name="NumeroCar"
                        {...register("NumeroCar")}
                        />
                        <label class="form-check-label" >Hours Depart</label>
                        <input class="form-control" value={Data.HoursDepares}
                        name="hoursDepart" 
                        {...register("hoursDepart")}
                        />
                        <label class="form-check-label" >Hours Collection</label>
                        <input class="form-control" value={Data.HoursFin}
                        />
                          
                        <label class="form-check-label" > Prix</label>
                        <input class="form-control" value={Data.Prix} 
                        name="Prix" 
                        {...register("Prix")}
                        />
                        
                    </div>

                    <div class="form-check" style={{
                        width: "10%",
                    }}>
                        {array}
                    </div>
                   </div>
                   <div
            class="col-7"
            style={{
              textAlign: "end",
            }}
          >
            <button type="submit" value="Add" class="btn btn-primary">
              Ajouter
            </button>
          </div>
                   </form>
                </>      
            );
                }

}

export default Chercher;