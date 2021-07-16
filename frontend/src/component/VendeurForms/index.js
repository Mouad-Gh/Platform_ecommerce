import useAxios from "../../helpers/useAxios";

const VendeurForm = () => {
    
    const { data:produits }=useAxios('http://localhost:3000/api/produit/categorie/');
    return ( 
        <div></div>
     );
}
 
export default VendeurForm;