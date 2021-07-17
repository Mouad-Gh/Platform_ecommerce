import React from 'react';
import FavorisActions from '../../actions/FavorisActions';
import {  toast } from 'react-toastify';

const ProduitInfo = (props) => {
  const { id, nom, PU, quantite_dispo, description, Marque, Produit_images, Categorie } = props.produit;

  const handleAjouterFavoris = (ProduitId) => {
    FavorisActions.ajouterProduit_souhaite({ ProduitId }).then(data => {
      if (data.isAdded) {
        toast.success(data.message, { toastId: ProduitId, autoClose: 4000 });
      }
      else {
        toast.warning(data.message, { toastId: ProduitId, autoClose: 4000 });
      }
    });
  }

  return (
    <div className="col-sm-5 col-md-5 no-padding-xs">
      <div className="caption">
        {//<img src="../assets/img/brands/microsoft.png" alt="Microsoft" className="brand hidden-xs hidden-sm" />
        }

        <h1>{nom}</h1>

        <p> &middot; Nombre de pièces: {quantite_dispo} </p>
        <p> &middot; {description} </p>
        { Marque && <p> &middot; {Marque.nom} </p>}
        <hr className="offset-md hidden-sm" />
        <hr className="offset-sm visible-sm" />
        <hr className="offset-xs visible-sm" />

        <p className="price">${PU} </p>
        <p className="price through">$3 449.99</p>
        <hr className="offset-md" />

        <button className="btn btn-primary rounded"
          onClick={() => {
            props.handleAjouterPanier({
              id: id,
              nom: nom,
              nom_categorie: Categorie.nom_categorie,
              PU: PU,
              qte: 1,
              img: Produit_images[0]?.chemin_fichier
            })
          }}
        >
          <i className="ion-bag"></i> Add to cart
        </button>
        <button className="btn btn-link" onClick={()=>{handleAjouterFavoris(id)}}> <i className="ion-ios-heart"></i> See later </button>
      </div>
    </div>
  );
}

export default ProduitInfo;