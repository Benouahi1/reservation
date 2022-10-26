import React from "react";
import './Home.css';
import Img1 from "../../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg";
import Img2 from "../../images/jonathan-borba-T5jzpRTVF1U-unsplash.jpg";
import bus from "../../images/right-arrow-removebg-preview.png";
import dollar from "../../images/dollar-removebg-preview.png";
import dollar2 from "../../images/security-removebg-preview.png";
import dollar3 from "../../images/placeholder-removebg-preview.png";
import Banc1 from "../../images/download (1).png";
import Banc2 from "../../images/download-removebg-preview (1) - Copy.png";
import Banc3 from "../../images/debit-card-removebg-preview - Copy.png";


function Home(){
    return(
            <div className="Home">
                <div className="img">
                    <img className="img1" src={Img1}>
                       
                    </img>
                    <div className="inscriotion">
                        <p className="Paragraph">Début</p>
                        <input className="InputRecherche" ></input>

                        <p className="Fin">Voyages</p>
                        <hr></hr>
                        <p className="Paragraph2">Accéder</p>
                        <input className="InputRecherche2" ></input>

                        <button>Rechirche</button>
                    </div>
                </div>
                <p className="Titre">Voyages</p>
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
                        <p className="Titre">Avantages</p>
                        <div className="InfoVoyages">
                            <div className="Card2 ">
                                <img className="img3" src={dollar}></img>
                                <div className="info">
                                    <p className="ParG">Sur notre site, nous vous garantissons de traiter avec des comptes bancaires ou de payer via les agences suivantes :</p>
                                </div>
                                <div className="info">
                                <img className="img4" src={Banc1}></img>
                                <img className="img4" src={Banc2}></img>
                                <img className="img4" src={Banc3}></img>
                                </div>
                                <div className="info">
                                         
                                </div>
                            </div>
                            <div className="Card2 ">
                                <img className="img3" src={dollar2}></img>
                                <div className="info">
                                    <p className="ParG">Nous garantissons votre argent, un voyage agréable à partir d'ici et votre confort</p>
                                </div>
                                <div className="info">
                               
                                </div>
                                <div className="info">
                                         
                                </div>
                            </div>
                            <div className="Card2 ">
                                <img className="img3" src={dollar3}></img>
                                <div className="info">
                                    <p className="ParG">Notre agence est située dans la ville de Safi. Vous pouvez voyager de partout dans le royaume</p>
                                </div>
                                <div className="info">
                                
                                </div>
                                <div className="info">
                                         
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
    );
}

export default Home;