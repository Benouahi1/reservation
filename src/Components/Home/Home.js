import React from "react";
import './Home.css';
import Img1 from "../../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";


function Home(){
    return(
            <div className="Home">
                <div className="img">
                    <img className="img1" src={Img1}>
                       
                    </img>
                    <div className="inscriotion">
                        <p className="Paragraph">début</p>
                        <input className="InputRecherche" ></input>

                        <p className="Fin">Voyages</p>
                        <hr></hr>
                        <p className="Paragraph2">Accéder</p>
                        <input className="InputRecherche2" ></input>

                        <button>Rechirche</button>
                    </div>
                </div>
                <div className="InfoVoyages">
                    <div className="Card ">
                    <img className="img1" src={Img2}></img>
                        <div className="info">

                        </div>
                    </div>
                    <div className="Card">
                        <div className="info">

                        </div>
                    </div>

                </div>
            </div>
    );
}

export default Home;