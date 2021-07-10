import React from 'react';

const Connexion = (props) => {
    return (
        <div className="modal fade" id="Modal-Connexion" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ion-android-close"></i></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="modal-title text-center">Sign In</h2>
                                    <br />

                                    <form className="signin" action="index.php" method="post">
                                        <input type="email" name="email" placeholder="E-mail" required="" className="form-control" />
                                        <br />
                                        <input type="password" name="password"  placeholder="Password" required="" className="form-control" />
                                        <br />

                                        <button type="submit" className="btn btn-primary">Ok</button>
                                        <a href="#forgin-password" data-action="Forgot-Password">Password recovery </a>
                                    </form>
                                    <br />

                                    <div className="social-login">
                                        <div className="or"><p>OR</p></div>
                                        <a href="/dadwa"><i className="icon" data-src="../assets/img/icons/facebook.svg"></i></a>
                                        <p>via</p>
                                        <a href="/dawdw"><i className="icon" data-src="../assets/img/icons/google-plus.svg"></i></a>
                                    </div>
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;