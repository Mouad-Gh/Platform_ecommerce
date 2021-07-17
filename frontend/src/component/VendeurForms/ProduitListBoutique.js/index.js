import useAxios from "../../../helpers/useAxios";
import ProduitCard from "./ProduitCardBoutique";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ProduitListBoutique=(props)=>{

    const { data:boutique,setData:setBoutique }=useAxios('http://localhost:3000/api/boutique/'+props.idBoutique);

    const [produits,setProduits]= useState(boutique?boutique.Produits:[]);
    useEffect(()=>{
      if(boutique){
        setProduits(boutique.Produits);
      }
      
    },[boutique])
    console.log(boutique);
  
      return (
        <section className="products">
          <div className="container">
            <h2 className="upp align-center-xs"> Produits de votre boutique </h2>
            <hr className="offset-lg" />

            <div className="row">
              <div className="col-sm-6 col-md-3 product hidden-sm" >
                <div className="body">
                  <Link to={{pathname:"/ajouter",state:{BoutiqueId:props.idBoutique}}} >ajouter<i className="ion-android-create"></i></Link>
                  
                </div>
              </div>
              {produits && produits.map((produit, index) => {
                return <ProduitCard key={index} produit={produit} Produits={produits} setProduits={setProduits}  />
              }

              )}


            </div>

          </div>
        </section>
      );
  }
  export default ProduitListBoutique;