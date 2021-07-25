import useAxios from "../../../helpers/useAxios";
import ProduitCard from "./ProduitCardBoutique";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ProduitListBoutique=(props)=>{

    const { data:boutique,setData:setBoutique }=useAxios('http://localhost:3000/api/boutique/255');

    const [produits,setProduits]= useState(boutique?boutique.Produits:[]);
    useEffect(()=>{
      if(boutique){
        setProduits(boutique.Produits);
      }
      
    },[boutique])
    console.log('dada');
    console.log(boutique);
      return (
        <section className="products">
          <div className="container">
            <h2 className="upp align-center-xs"> Produits de votre boutique </h2>
            <hr className="offset-lg" />

            <div className="row">
              <div className="col-sm-6 col-md-2 product hidden-sm" >
                <div className="body">
                <Link style={{fontSize:18,marginLeft:60}} to={{pathname:"/ajouter",state:{BoutiqueId:props.idBoutique}}} >ajouter<i className="ion-android-create"></i></Link>
                </div>
              </div>
              <div className="col-sm-8 col-md-10 product">
                {!produits.length && <h1 className="text-center">Vous n'avez aucun produit</h1>}
              {produits && produits.map((produit, index) => {
                return <ProduitCard key={index} produit={produit} Produits={produits} setProduits={setProduits}  />
              }

              )}
              </div>
 


            </div>

          </div>
        </section>
      );
  }
  export default ProduitListBoutique;