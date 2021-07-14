import React from "react";
import Pagination from "./pagination";
import Produit from './produit';
const Produits = (props) =>{
    return (
        <div className="col-sm-8 col-md-9">
            <hr className="offset-lg" />

            <div className="products">
                <div className="row">
                    {props.data.map(produit=>
                       <Produit key={produit.id} data={produit} handleAjouterPanier={props.handleAjouterPanier}  />
                    )}
                </div>
            </div>

            <Pagination nombreDePage={props.nombreDePage} handlePagination={props.handlePagination}/>
            
        </div>
    );
}

export default Produits;