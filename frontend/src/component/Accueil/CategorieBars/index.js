import React from "react";
import {Link} from "react-router-dom"
const CategorieBars = () => {
    return (
        <div className="bars">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 no-padding padding-xs">
                        <div className="bar medium" data-background="assets/img/bars/macbook.jpg">
                            <h3 className="title black">Chrome Book</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <Link rel="nofollow" className="btn btn-primary black" to="/produit/23">Acheter maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="bar small" data-background="assets/img/bars/dellinspirion.jpg">
                            <h3 className="title black">HP NoteBook</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <Link rel="nofollow" className="btn btn-primary black" to="/produit/23">Acheter maintenant</Link>
                                </div>
                            </div>
                        </div>

                        <hr className="offset-xs" />
                        <hr className="offset-xs" />

                        <div className="bar small" data-background="assets/img/bars/surfacestudio.jpg">
                            <h3 className="title">Dell Inspiron</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    
                                    <Link rel="nofollow" className="btn btn-primary black" to="/produit/26">Acheter maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 no-padding hidden-xs hidden-sm">
                        <div className="bar medium" data-background="assets/img/bars/accessories.jpg">
                            <h3 className="title black">Magasin</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <Link rel="nofollow" className="btn btn-primary black" to="/store">aller au magasin</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorieBars;