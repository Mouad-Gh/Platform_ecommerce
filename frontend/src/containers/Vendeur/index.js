import { useParams } from "react-router-dom";
import ProduitAjout from "../../component/VendeurForms/ProduitAjout";
import ProduitListBoutique from "../../component/VendeurForms/ProduitListBoutique.js";
const Vendeur = () => {
    const { id }=useParams();

    return ( 
        <div>
             <hr className="offset-lg"/>
            <hr className="offset-lg"/>
            
            <ProduitListBoutique idBoutique={id} /> 

        </div>
     );
}
 
export default Vendeur;