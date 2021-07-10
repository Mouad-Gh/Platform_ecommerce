import React from "react";
const Apropos = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <hr className="offset-md" />

                    <div className="col-xs-6 col-sm-3">
                        <div className="item">
                            <i className="ion-ios-telephone-outline"></i>
                            <h1>24/7 assistance <br /> <span>gratuite</span></h1>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="item">
                            <i className="ion-ios-star-outline"></i>
                            <h1>Bas prix <br /> <span>garantie</span></h1>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="item">
                            <i className="ion-ios-gear-outline"></i>
                            <h1> Garantie <br /> <span>constructeur</span></h1>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="item">
                            <i className="ion-ios-loop"></i>
                            <h1>Remboursement<br /> <span>garantie</span> </h1>
                        </div>
                    </div>

                    <hr className="offset-md" />
                </div>
            </div>
        </div>
    );
}

export default Apropos;