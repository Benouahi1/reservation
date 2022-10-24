import React from "react";
import './Home.css';
import Img1 from "../../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";
import bus from "../../images/right-arrow-removebg-preview.png";


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
                    <img className="img2" src={Img2}></img>
                        <div className="info">
                            <p className="Ville">Rabat</p>
                            <img className="slach" src={bus}></img>
                            <p className="Ville">Fes</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Prix :200 DH</p>
                            <p className="Ville">Date :29/10/2022</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Hours : 11:00 AM</p>
                        </div>
                    </div>
                    <div className="Card">
                    <img className="img2" src={Img2}></img>
                        <div className="info">
                            <p className="Ville">Khemisset</p>
                            <img className="slach" src={bus}></img>
                            <p className="Ville">Tanger</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Prix :300 DH</p>
                            <p className="Ville">Date :31/10/2022</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Hours : 10:00 AM</p>
                        </div>
                    </div>
                    <div className="Card">
                    <img className="img2" src={Img2}></img>
                        <div className="info">
                            <p className="Ville">Meknes</p>
                            <img className="slach" src={bus}></img>
                            <p className="Ville">Safi</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Prix :200 DH</p>
                            <p className="Ville">Date :29/10/2022</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Hours : 8:00 AM</p>
                        </div>
                    </div>
                    <div className="Card">
                    <img className="img2" src={Img2}></img>
                        <div className="info">
                            <p className="Ville">Tanger</p>
                            <img className="slach" src={bus}></img>
                            <p className="Ville">Safi</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Prix :300 DH</p>
                            <p className="Ville">Date :24/10/2022</p>
                        </div>
                        <div className="info">
                            <p className="Ville">Hours : 02:00 AM</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p className="About">About</p>
                    </div>
                </div>
            </div>
    );
}

export default Home;