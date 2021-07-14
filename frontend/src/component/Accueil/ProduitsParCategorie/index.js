import React from 'react';
import Produit from './Produit';
import useFetch from '../../../helpers/useFetch';
const ProduitsParCategorie = (props) => {
    const {data:produits} = useFetch('http://localhost:3000/api/categorie/'+props.cat+'/meilleurProduits');
    
    return (
        <section className="products">
            <div className="container">
                <h2 className="h2 upp align-center"> {props.cat} </h2>
                <hr className="offset-lg" />

                <div className="row">
                    {produits.length===0 && <h3 className="align-center">Cette catégorie ne contient aucun produit</h3>}
                    {
                        produits.map(produit => 
                            <Produit key={produit.id} data={produit} handleAjouterPanier={props.handleAjouterPanier} />
                        )
                    }
                </div>

            </div>
        </section>
    );
}

export default ProduitsParCategorie;