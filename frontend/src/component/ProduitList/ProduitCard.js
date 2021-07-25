import { Link } from "react-router-dom";
import FavorisActions from '../../actions/FavorisActions';
import {  toast } from 'react-toastify';
const ProduitCard = (props) => {

  
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
    <div className={props.dernier ? "col-sm-6 col-md-3 product hidden-sm" : "col-sm-4 col-md-3 product"} >
      <div className="body">
      <a onClick={()=>{handleAjouterFavoris(props.produit.id)}} className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
        <Link to={"/produit/" + props.produit.id}><img src={props.produit.Produit_images[0].chemin_fichier} alt={props.produit.nom} /></Link>

        <div className="content align-center">
          <p className="price">{props.produit.PU} Dhs</p>
          <h2 className="h3">{props.produit.nom}</h2>
          <hr className="offset-sm" />

          <button className="btn btn-link"><Link to={'/Produit/' + props.produit.id}><i className="ion-android-open"></i>  Details</Link></button>
          <button className="btn btn-primary btn-sm rounded"
            onClick={() => {
              props.handleAjouterPanier({
                id: props.produit.id,
                nom: props.produit.nom,
                nom_categorie: props.produit.Categorie.nom_categorie,
                PU: props.produit.PU,
                qte: 1,
                img: props.produit.Produit_images[0]?.chemin_fichier
              })
            }}>
            <i className="ion-bag"></i> Panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProduitCard;