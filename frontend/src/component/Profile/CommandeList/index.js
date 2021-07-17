import React from 'react';
import useFetch from '../../../helpers/useFetch';
const CommandeList = () => {
    const { data: commandes } = useFetch('http://localhost:3000/api/achteur/2/commandes');
    return (
        <div>
            {!commandes.length && <div>
                <hr className="offset-md" />
                <h1 className="text-center">Tu n'as fait aucune commande</h1>    
            </div>}
            {commandes.map(cmd =>

                <div className="container checkout">
                    <hr className="offset-md" />
                    <div className="row">
                        <div className="col-md-12 white">
                            <hr className="offset-md visible-xs visible-sm" />
                            <div className="checkout-cart">
                                <div className="content">
                                    
                                    <div className="media">
                                        <div className="media-body">
                                            <h2 className="h4 media-heading"><label>Date :</label> {cmd.date}</h2>
                                            <h2 className="h4 media-heading"><label>Adress :</label> {cmd.adress}</h2>

                                        </div>
                                        <div className="controls">
                                            <h2 className="h4 media-heading text-center"><label>Status</label> Pending</h2>
                                        </div>
                                    </div>
                                    
                                    {cmd.Produits.map(produit => 
                                        <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={produit.Produit_images[0].chemin_fichier} alt="iPad Air" />
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h2 className="h4 media-heading">{produit.nom}</h2>
                                            <label>Tablets</label>
                                            <p className="price">${produit.PU}</p>
                                        </div>
                                        <div className="controls ">
                                            <br />
                                            <h4 className="h4">Quantite: {produit.Ligne_commande.quantite} </h4>
                                        </div>
                                    </div>

                                    )}

                                    <div className="media">
                                        <div className="media-body">
                                            <h2 className="h4 media-heading text-right"><label>Total :</label> {cmd.total}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="offset-md visible-xs visible-sm" />

                        </div>


                    </div>
                </div>


            )}
        </div>


    );
}
export default CommandeList;