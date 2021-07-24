import { useParams } from "react-router-dom";
import ProduitAjout from "../../component/VendeurForms/ProduitAjout";
import ProduitListBoutique from "../../component/VendeurForms/ProduitListBoutique.js";
const Vendeur = () => {
    return ( 
        <div>
             <hr className="offset-lg"/>
            <hr className="offset-lg"/>
            {/* <ProduitAjout BoutiqueId={id} /> */}
            <ProduitListBoutique /> 
        </div>
     );
}
 
export default Vendeur;