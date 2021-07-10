import React from 'react';

const Inscription = (props) => {
    return (
        <div className="modal fade" id="Modal-Inscription" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ion-android-close"></i></span></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <h2 className="modal-title text-center">Registration</h2>
                                    <br />

                                    <form className="join" action="index.php" method="post">
                                        <input type="text" name="name"  placeholder="Name" required="" className="form-control" />
                                        <br />

                                        <input type="email" name="email"  placeholder="E-mail" required="" className="form-control" />
                                        <br />

                                        <input type="password" name="password"  placeholder="Password" required="" className="form-control" />
                                        <br />

                                        <input type="text" name="confirm"  placeholder="Password again" required="" className="form-control" />
                                        <br />

                                        <button type="submit" className="btn btn-primary btn-sm">Ok</button> &nbsp;&nbsp;
                                        <a href="https://lpdw">Terms </a>

                                        <br /><br />
                                        <p>
                                            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                                        </p>
                                    </form>
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

export default Inscription;