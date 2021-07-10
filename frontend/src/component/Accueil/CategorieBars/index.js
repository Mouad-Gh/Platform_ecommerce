import React from "react";
const CategorieBars = () => {
    return (
        <div className="bars">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 no-padding padding-xs">
                        <div className="bar medium" data-background="assets/img/bars/macbook.jpg">
                            <h3 className="title black">MacBook Air</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <a href="./store/" rel="nofollow" className="btn btn-default black"> Buy now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="bar small" data-background="assets/img/bars/dellinspirion.jpg">
                            <h3 className="title black">Dell Inspirion 7000</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <a href="./store/" rel="nofollow" className="btn btn-primary black"> Buy now </a>
                                </div>
                            </div>
                        </div>

                        <hr className="offset-xs" />
                        <hr className="offset-xs" />

                        <div className="bar small" data-background="assets/img/bars/surfacestudio.jpg">
                            <h3 className="title">Surface Studio</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <a href="./store/" rel="nofollow" className="btn btn-primary black"> Buy now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 no-padding hidden-xs hidden-sm">
                        <div className="bar medium" data-background="assets/img/bars/accessories.jpg">
                            <h3 className="title black">Accessories</h3>

                            <div className="wrapper">
                                <div className="content">
                                    <hr className="offset-sm" />
                                    <a href="./store/" rel="nofollow" className="btn btn-primary black"> Buy now </a>
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