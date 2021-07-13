import useAxios from "../../helpers/useAxios";
import ProduitCard from "./ProduitCard";

const ProduitList=(props)=>{

  const { data:produits }=useAxios('http://localhost:3000/api/produit/categorie/'+props.idCat);

    return (
        <section className="products">
      <div className="container">
        <h2 className="upp align-center-xs"> Related products </h2>
        <hr className="offset-lg"/>

        <div className="row">

          {produits && produits.map((produit,index)=>{
            return <ProduitCard key={index} produit={produit} dernier={(index===3)} />
          }

          )}
          

        </div>

      </div>
    </section>
    );
}
export default ProduitList;