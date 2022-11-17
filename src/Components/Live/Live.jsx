import React from "react";
import './Live.css'



function Live(){

    const Logout = (e) =>{
        sessionStorage.clear();
       console.log(sessionStorage.getItem('username'))
       window.location.reload();
    }

    if(sessionStorage.getItem("username")=== null){
        
        return(
            <nav class="navbar navbar-dark bg-primary fixed-top">
             <div class="container-fluid">
                 <a class="navbar-brand" href="/">MOUSSAFIR</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                 style={{
                    width: '7%',
                 }}
                 data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MOUSSAFIR</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Reserve">Voyages</a>
                </li>
                </ul>
                 <div class="mb-12">
                <a href="/Login" class=" mb-12 bg-primary btn btn-success"
                style={{
                    width: '100%',
                }}
                type="submit">Login</a>
                </div>
            </div>
            </div>
        </div>
        </nav>
                );
    }else{
        if(sessionStorage.getItem("username")==="admin"){
            return(
                <nav class="navbar navbar-dark bg-primary fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MOUSSAFIR</a>
                    <button class="navbar-toggler" 
                     style={{
                        width: '7%',
                     }}
                     type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                   <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                   <div class="offcanvas-header">
                   <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">{sessionStorage.getItem("username")}</h5>
                   <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div class="offcanvas-body ">
                   <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/Dashbord">Dashbord</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/User">User</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/ListTicket">Ticket</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/ListCar">Car</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="/ListVoyages">Voyages</a>
                   </li>

                   </ul>
                    <div class="mb-12">
                   <a href="/Login" class=" mb-12 bg-primary btn btn-success"
                   style={{
                       width: '100%',
                   }}
                   type="submit"
                   onClick={Logout}
                   >Logout</a>
                   </div>
               </div>
               </div>
           </div>
           </nav>
                 );
        }else{
            return(
                <nav class="navbar navbar-dark bg-primary fixed-top">
             <div class="container-fluid">
                 <a class="navbar-brand" href="/">MOUSSAFIR</a>
                 <button class="navbar-toggler"
                  style={{
                    width: '7%',
                 }}
                  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">{sessionStorage.getItem("username")}</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Reserve">Voyages</a>
                </li>
                </ul>
                 <div class="mb-12">
                <a href="/Login" class=" mb-12 bg-primary btn btn-success"
                style={{
                    width: '100%',
                }}
                type="submit"
                onClick={Logout}
                >Logout</a>
                </div>
            </div>
            </div>
        </div>
        </nav>
                 );
        }
        
               
    }
    
}

export default Live;