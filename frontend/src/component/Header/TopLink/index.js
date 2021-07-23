import React from 'react';
import {Link} from 'react-router-dom';
import Connexion from '../Connexion';
import Inscription from '../Inscription'

const TopLink = (props) => {
    return (
        <>
            <div className="toplinks">
             <Link to="/Inscription"><i className="ion-person"></i> Inscription </Link>
             <Link to="/Login"><i className="ion-unlocked"></i> Connexion</Link>
              <Link to="/favoris"><i className="ion-ios-heart"></i> Favoris </Link>
             <a href="tel:+80005554465" className="hidden-xs"> <i className="ion-android-call"></i> +212-69999999 </a>
            </div>
            

        </>
        
    );
}

export default TopLink;