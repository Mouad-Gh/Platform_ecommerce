import React from 'react';
import { Link } from 'react-router-dom';
import FavorisActions from '../../../../actions/FavorisActions';
import {  toast } from 'react-toastify';
const Produit = (props) => {
    
    const handleAjouterFavoris = (ProduitId)=>{
        FavorisActions.ajouterProduit_souhaite({ProduitId}).then(data=>{
            if(data.isAdded){
                toast.success(data.message,{toastId: ProduitId,autoClose: 4000});
            }
            else {
                toast.warning(data.message,{toastId: ProduitId,autoClose: 4000});
            }
        });
    }

    return (
        <div className="col-sm-6 col-md-4 product">
            <div className="body">
            <a onClick={()=>{handleAjouterFavoris(props.data.id)}} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
                <Link to={"/produit/"+props.data.id}><img src={props.data.Produit_images[0].chemin_fichier} alt="produit_image" /></Link>
                <div className="content align-center">
                    <p className="price">{props.data.PU} DH</p>
                    <h2 className="h3">{props.data.nom}</h2>
                    <hr className="offset-sm" />

                    <button className="btn btn-link"><Link to={'/Produit/'+props.data.id}><i className="ion-android-open"></i>  Details</Link></button>
                    <button className="btn btn-primary btn-sm rounded"
                        onClick={() => {
                            props.handleAjouterPanier({
                                id: props.data.id,
                                nom: props.data.nom,
                                nom_categorie: props.data.Categorie.nom_categorie,
                                PU: props.data.PU,
                                qte: 1,
                                img:props.data.Produit_images[0]?.chemin_fichier
                            })
                        }}>
                        <i className="ion-bag"></i> Ajouter au panier
                    </button>
                </div>
            </div>
        </div>);
}

export default Produit;