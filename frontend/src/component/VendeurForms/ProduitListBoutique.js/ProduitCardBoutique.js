import { Link } from "react-router-dom";
import axios from "axios";

const ProduitCardBoutique = (props) => {
    const supprimer=(e)=>{
      axios.delete("http://localhost:3000/api/produit/"+props.produit.id).then(response => {
            console.log((response.data))
            const newList=props.Produits.filter(p=>{
              return p.id !== props.produit.id;
            })
            props.setProduits(newList);
        })
    }
  return (  
      <div className="col-sm-6 col-md-3 product" >
         <div className="body">
          <a href="#favorites" className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
          <a href="./"><img src={props.produit.Produit_images[0].chemin_fichier} alt={props.produit.nom} /></a>

          <div className="content align-center">
            <p className="price">${props.produit.PU}</p>
            <h2 className="h3">{props.produit.nom}</h2>
            <hr className="offset-sm" />

            <button className="btn btn-link"><Link to={{pathname:"/modifier",state:{ProduitId:props.produit.id}}} > <i className="ion-android-open"></i> Modifier</Link></button>
            <button className="btn btn-primary btn-sm rounded" onClick={supprimer}> <i className="ion-android-delete"></i> Supprimer</button>
          </div>
        </div>
      </div>
    );
}
 
export default ProduitCardBoutique;