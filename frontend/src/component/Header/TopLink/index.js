import React from 'react';
import {Link} from 'react-router-dom';
import Connexion from '../Connexion';
import Inscription from '../Inscription'

const TopLink = (props) => {
    return (
        <>
            <div className="toplinks">
            <a href="#signin" data-toggle="modal" data-target="#Modal-Inscription"> <i className="ion-person"></i> Inscription</a>
             <a href="#signin" data-toggle="modal" data-target="#Modal-Connexion"> <i className="ion-unlocked"></i> Connexion</a>
              <Link to="/favorites"><i className="ion-ios-heart"></i> Favoris </Link>
             <a href="tel:+80005554465" className="hidden-xs"> <i className="ion-android-call"></i> +212-69999999 </a>
            </div>
            
            <Connexion />
            <Inscription />
        </>
        
    );
}

export default TopLink;