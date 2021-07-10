
import React from "react";

const Bas = ()=>{
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-9 payments">
            <p>Payez votre commande de la meilleure façon</p>

            <div className="payment-icons">
              <img src="assets/img/payments/paypal.svg" alt="paypal"/>
              <img src="assets/img/payments/visa.svg" alt="visa"/>
              <img src="assets/img/payments/master-card.svg" alt="mc"/>
              <img src="assets/img/payments/discover.svg" alt="discover"/>
              <img src="assets/img/payments/american-express.svg" alt="ae"/>
            </div>
            <br />

          </div>
          <div className="col-sm-4 col-md-3 align-right align-center-xs">
            <hr className="offset-sm hidden-sm" />
            <hr className="offset-sm" />
            <p>Unistore Pro © 2021 <br /></p>
            <hr className="offset-lg visible-xs" />
          </div>
        </div>
      </div>
    );
}

export default Bas;