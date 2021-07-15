import React from 'react';
import useFetch from '../../helpers/useFetch';
import FavorisActions from '../../actions/FavorisActions';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import { Link } from 'react-router-dom';
const Favoris = (props) => {
    const { data: produits, setData } = useFetch('http://localhost:3000/api/produits_souhaite/2');

    const handleSuppimer = (id) => {
        FavorisActions.supprimerProduit_souhaite(id).then((res) => setData(res));
    }

    return (
        <div className="container">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <div className="row">
                <div className="col-sm-12">
                    <hr className="offset-lg" />

                    <div className="products">
                        <div className="row">
                            {!produits.length && <h1>il n'y a pas de produits dans votre liste de souhaits</h1>}
                            {produits.map((produit) =>
                                <div className="col-sm-6 col-md-4 product" key={produit.id}>
                                    <div className="body">
                                    <Link to={"/produit/"+produit.id}><img src={produit.Produit_images[0].chemin_fichier} alt="Lenovo Yoga 900" /></Link>

                                        <div className="content align-center">
                                            <p className="price">{produit.pu}</p>
                                            <h2 className="h3">{produit.nom}</h2>
                                            <hr className="offset-sm" />

                                            <button className="btn btn-link" onClick={() => { handleSuppimer(produit.id) }}>Supprimer</button>
                                            <button className="btn btn-primary btn-sm rounded"
                                                onClick={() => {
                                                    props.handleAjouterPanier({
                                                        id: produit.id,
                                                        nom: produit.nom,
                                                        nom_categorie: produit.Categorie.nom_categorie,
                                                        PU: produit.PU,
                                                        qte: 1,
                                                        img: produit.Produit_images[0]?.chemin_fichier
                                                    })
                                                }}>
                                            <i className="ion-bag"></i> Panier</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/carousel-product.js" />
        </div>


    );
}

export default Favoris;