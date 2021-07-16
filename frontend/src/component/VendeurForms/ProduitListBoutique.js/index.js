import useAxios from "../../../helpers/useAxios";
import ProduitCard from "./ProduitCardBoutique";
import { Link } from "react-router-dom";
const ProduitListBoutique=(props)=>{

    const { data:boutique }=useAxios('http://localhost:3000/api/boutique/'+props.idBoutique);
  
      return (
        <section className="products">
          <div className="container">
            <h2 className="upp align-center-xs"> Produits de votre boutique </h2>
            <hr className="offset-lg" />

            <div className="row">
              <div className="col-sm-6 col-md-3 product hidden-sm" >
                <div className="body">
                  <Link to="/"><i className="ion-android-create"></i></Link>
                </div>
              </div>
              {boutique && boutique.Produits.map((produit, index) => {
                return <ProduitCard key={index} produit={produit} dernier={(index === 3)} />
              }

              )}


            </div>

          </div>
        </section>
      );
  }
  export default ProduitListBoutique;