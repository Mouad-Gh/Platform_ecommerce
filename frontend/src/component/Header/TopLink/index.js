import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { authenticationService } from '../../../services/authenticationService';
const TopLink = (props) => {
    const [currentUser,setCurrentUser] = useState(null);

    useEffect(()=>{
        if(authenticationService.currentUserValue){
            setCurrentUser(authenticationService.currentUserValue.utilisateur);
        }
    },[]);

    const handleLogOut=()=>{
        authenticationService.logout();
        window.location.reload();
    }
    return (
        <>
            <div className="toplinks">
             {currentUser && <a onClick={handleLogOut}> Se déconnecter</a>}
             {currentUser && <Link to="/Profile"><i className="ion-person"></i> {currentUser.Nom+' '+currentUser.Prenom}</Link>}
             {currentUser && currentUser.role==='vendeur' && <Link to="/Vendeur"><i className="ion-android-cart"></i> Mon boutique</Link>}
             {currentUser && currentUser.role==='admin' && <Link to="/Admin"><i className="ion-android-settings"></i> Admin</Link>}
             {!currentUser &&  <Link to="/Inscription"><i className="ion-person"></i> Inscription </Link>}
             {!currentUser && <Link to="/Login"><i className="ion-unlocked"></i> Connexion</Link>}
              <Link to="/favoris"><i className="ion-ios-heart"></i> Favoris </Link>
             <a href="tel:+80005554465" className="hidden-xs"> <i className="ion-android-call"></i> +212-69999999 </a>
            </div>
        </>
    );
}

export default TopLink;