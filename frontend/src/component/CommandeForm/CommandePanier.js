import ProduitPanier from "./ProduitPanier";

const CommandePanier = () => {
    
    const jsonProduits = localStorage.getItem("panier");
    const produits=JSON.parse(jsonProduits);
    console.log(JSON.parse(jsonProduits));
    return ( 
        <div className="col-md-5 white">
            <hr className="offset-md visible-xs visible-sm" />
            <div className="checkout-cart">
                <div className="content">

                    

                    {produits && produits.map((produit)=>{
                        return (<ProduitPanier  key={produit.id} produit={produit} />);
                    })}

                    

                </div>
            </div>
            <hr className="offset-md visible-xs visible-sm" />
        </div>
     );
}
 
export default CommandePanier;