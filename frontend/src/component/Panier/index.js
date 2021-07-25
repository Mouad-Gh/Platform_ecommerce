import { useEffect, useState } from "react";
import ScriptTag from 'react-script-tag';
import { Link } from "react-router-dom";
const Panier = (props) => {
    console.log(props.data);
    return (
        <div className="cart" data-toggle="inactive">
            <div className="label">
                <i className="ion-bag"></i> {props.data?.length}
            </div>

            <div className="overlay"></div>

            <div className="window">
                <div className="title">
                    <button type="button" className="close"><i className="ion-android-close"></i></button>
                    <h4 className="">Panier</h4>
                </div>
                
                <div>
                    <br /><br />
                    {!props.data?.length && <h1 className="text-center">le panier est vide</h1>}
                    {props.data && props.data.map(produit =>
                        <div className="media" key={produit.nom}>
                            <div className="media-left">
                                {/* <Link to={"/Produit/"+produit.id}>
                                <img className="media-object" src={produit.img} alt="HP Chromebook 11" />
                            </Link> */}
                                <a href="#">
                                    <img className="media-object" src={produit.img} alt="HP Chromebook 11" />
                                </a>
                            </div>
                            <div className="media-body">
                                <h2 className="h4 media-heading">{produit.nom}</h2>
                                <label>{produit.nom_categorie}</label>
                                <p className="price">{produit.PU} Dhs</p>
                            </div>
                            <div className="controls">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-sm" type="button" data-action="minus" 
                                            onClick={()=>{props.handleModfierPanier(produit.id,false)}}>

                                            <i className="ion-minus-round"></i>

                                        </button>
                                    </span>
                                    <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue={produit.qte} readOnly="" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default btn-sm" type="button" data-action="plus"
                                            onClick={()=>{props.handleModfierPanier(produit.id,true)}}>
                                            <i className="ion-plus-round"></i>
                                        </button>
                                    </span>
                                </div>

                                <a onClick={()=>{props.handleSupprimerPanier(produit.id)}}> <i className="ion-trash-b"></i> Supprimer </a>
                            </div>
                        </div>
                    )}
                    
                </div>


                <div className="checkout container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 align-right">
                            <Link className="btn btn-primary" to={'/Commande'}> Commander </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panier;