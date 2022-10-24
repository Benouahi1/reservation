import React from "react";
import './Home.css';
import Img1 from "../../images/hobi-industri-C-zgN_LEKb8-unsplash.jpg"


function Home(){
    return(
            <div className="Home">
                <div className="img">
                    <img className="img1" src={Img1}>
                       
                    </img>
                    <div className="inscriotion">
                        <input className="InputRecherche" ></input>

                        <p className="Fin">Voyages</p>
                        <hr></hr>
                        <input className="InputRecherche2" ></input>

                        <button>Rechirche</button>
                    </div>
                </div>
            </div>
    );
}

export default Home;