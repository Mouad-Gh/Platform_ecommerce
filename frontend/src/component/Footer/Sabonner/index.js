import React from "react";
const Sabonner = () =>{
    return (
        <div className="subscribe">
        <div className="container align-center">
            <hr className="offset-md" />

            <h1 className="h3 upp">Rejoignez notre newsletter</h1>
            <p>Obtenez plus d'informations et recevez des remises spéciales sur nos produits.</p>
            <hr className="offset-sm" />

            <form action="index.php" method="post">
              <div className="input-group">
                <input type="email" name="email"  placeholder="E-mail" required="" className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-primary"> S'abonner <i className="ion-android-send"></i> </button>
                </span>
              </div>
            </form>
            <hr className="offset-lg" />
            <hr className="offset-md" />

            <div className="social">
              <a href="https://lpdw"><i className="ion-social-facebook"></i></a>
              <a href="https://lpdw"><i className="ion-social-twitter"></i></a>
              <a href="https://lpdw"><i className="ion-social-youtube-outline"></i></a>
            </div>


            <hr className="offset-md" />
            <hr className="offset-md" />
        </div>
      </div>
    );
} 

export default Sabonner;