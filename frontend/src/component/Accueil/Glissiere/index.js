import React from 'react';
import {Link} from 'react-router-dom';
const Glissiere = () => {
    return (
        <header>
            <div className="carousel" data-count="3" data-current="1">

                <div className="items">
                    <button className="btn btn-control" data-direction="right"> <i className="ion-ios-arrow-right"></i></button>
                    <button className="btn btn-control" data-direction="left"> <i className="ion-ios-arrow-left"></i></button>


                    <div className="item center" data-marker="1">
                        <img src="assets/img/carousel/bckg-2.jpg" alt="Background" className="background hidden-xs hidden-sm" />
                        <img src="assets/img/carousel/bckg-2-sm.jpg" alt="Background" className="background visible-sm" />
                        <img src="assets/img/carousel/bckg-2-xs.jpg" alt="Background" className="background visible-xs" />

                        <div className="content">
                            <div className="outside-content">
                                <div className="inside-content">
                                    <div className="container align-right">

                                        <h1 className="h3 colorful blue hidden-xs">Fournir léger et puissant</h1>

                                        <hr className="offset-sm" />
                                        <h2 className="h1 lg upp colorful blue">nouveoux  <br />ORDINATEURS</h2>
                                        <hr className="offset-md" />
                                        <hr className="offset-md" />
                                        
                                        <Link to="/store" rel="nofollow" className="btn btn-primary btn-lg black">Voir les produits</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item" data-marker="2">
                        <img src="assets/img/carousel/bckg-1.jpg" alt="Background" className="background hidden-xs hidden-sm" />
                        <img src="assets/img/carousel/bckg-1-sm.jpg" alt="Background" className="background visible-sm" />
                        <img src="assets/img/carousel/bckg-1-xs.jpg" alt="Background" className="background visible-xs" />

                        <div className="content">
                            <div className="outside-content">
                                <div className="inside-content">
                                    <div className="container">

                                        <h1 className="h3 colorful blue hidden-xs"></h1>
                                        <hr className="offset-sm" />

                                        <h2 className="h1 lg upp colorful blue">meilleure qualité<br /> avec des prix bas</h2>
                                        <hr className="offset-md" />
                                        <hr className="offset-md" />
                                        <Link to="/store" rel="nofollow" className="btn btn-primary btn-lg black">Voir les produits</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item" data-marker="3">
                        <img src="assets/img/carousel/bckg-3.jpg" alt="Background" className="background hidden-xs hidden-sm" />
                        <img src="assets/img/carousel/bckg-3-sm.jpg" alt="Background" className="background visible-sm" />
                        <img src="assets/img/carousel/bckg-3-xs.jpg" alt="Background" className="background visible-xs" />

                        <div className="content">
                            <div className="outside-content">
                                <div className="inside-content">
                                    <div className="container align-right">

                                        <h1 className="h3 colorful blue hidden-xs"></h1>

                                        <hr className="offset-sm" />
                                        <h2 className="h1 lg upp colorful blue">marques <br className="hidden-xs" /> internationales</h2>
                                        <hr className="offset-md" />
                                        <hr className="offset-md" />
                                        <Link to="/store" rel="nofollow" className="btn btn-primary btn-lg black">Voir les produits</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="markers">
                    <li data-marker="1" data-style="white" className="active"></li>
                    <li data-marker="2" data-style="white"></li>
                    <li data-marker="3" data-style="white"></li>
                </ul>

            </div>
        </header>
    );
}

export default Glissiere;