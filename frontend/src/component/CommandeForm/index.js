import { useEffect, useState } from "react";
import CommandePanier from "./CommandePanier";
const CommandeForm = (props) => {

    const [adress, setAdress] = useState('');
    const [total, setTotal] = useState();
    const [produits, setProduits] = useState([])
    useEffect(() => {
        const jsonProduits = localStorage.getItem("panier");
        const ProduitsPanier = JSON.parse(jsonProduits);
        let to=0;
        let produits=[];
        ProduitsPanier.forEach(produit=>{
            //console.log(produit.PU);
            to+=produit.PU;
            let prod={};
            prod.id=produit.id;
            prod.qte=produit.qte;
            produits.push(prod);
        });
        
        setTotal(to);
        setProduits(produits);
        //console.log(produits);


      }, []);
    const ajouterSubmit=(e)=>{
        e.preventDefault();
        const commande={adress,total,AcheteurId:1,produits:produits};
        console.log('here', JSON.stringify(commande));
        fetch('http://localhost:3000/api/commande/ajouter',{
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(commande)
        }).then(()=>{
            console.log('added');
        }).catch(err=>console.log(err));    
        
    }
    return (
        <div className="container checkout">
            <form onSubmit={ajouterSubmit} >

                <div className="row">
                    {/******** */}
                    <div className="col-md-7">
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Adress</h2></div>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="Adress" rows="1" value={adress} required="" placeholder=""
                                    onChange={(e) => setAdress(e.target.value)}></textarea>
                            </div>
                        </div>


                        <br />


                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Paiement</h2></div>
                            <div className="col-sm-8">
                                <div className="group-select justify" tabIndex='1'>
                                    <input className="form-control select" id="paiement" name="paiement" defaultValue="Cash on Delivery" placeholder="" required="" />

                                    <ul className="dropdown">
                                        <li data-value="Cash on Delivery">Paiement à la livraison</li>
                                        <li data-value="Credit Card">Carte de crédit</li>
                                        <li data-value="Paypall">Paypall</li>
                                    </ul>

                                    <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Code promo</h2></div>
                            <div className="col-sm-8"> 
                                <input type="text" className="form-control" name="promo" required="" placeholder="" />
                            </div>
                        </div>

                        <hr className="offset-lg visible-xs visible-sm" />
                        <hr className="offset-lg visible-xs" />
                    </div>
                    
                    {/************* */}
                    <CommandePanier handleSupprimerPanier={props.handleSupprimerPanier} />
                    <hr className="offset-lg hidden-xs" />

                        <div className="col-sm-12 white">
                            <hr className="offset-md" />
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <h3 className="h5 no-margin">Sub total: $1 200</h3>
                                    <h3 className="h4 no-margin">Total: ${total} </h3>
                                </div>
                                <div className="col-md-4 hidden-xs">
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <button className="btn btn-primary pull-right" type="submit">Confirm order</button>
                                </div>
                            </div>
                            <hr className="offset-md" />
                        </div>
                </div>
            </form>
        </div>
     );
}
 
export default CommandeForm;