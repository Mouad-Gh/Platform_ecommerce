const ProduitPanier = (props) => {
    const {nom,Produit_images,PU,Categorie}=props.produit;
    return ( 
        <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" src={Produit_images[0].chemin_fichier} alt="iPad Air" />
                            </a>
                        </div>
                        <div className="media-body">
                            <h2 className="h4 media-heading">{nom}</h2>
                            <label>{Categorie.nom_categorie} </label>
                            <p className="price">${PU}</p>
                        </div>
                        <div className="controls">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round"></i></button>
                                </span>
                                <input type="text" className="form-control input-sm" placeholder="Qty" value="1" readonly="" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default btn-sm" type="button" data-action="plus"><i className="ion-plus-round"></i></button>
                                </span>
                            </div>
                            {/* <!-- /input-group --> */}

                            <a href="#remove"> <i className="ion-trash-b"></i> Remove </a>
                        </div>
                    </div>
     );
}
 
export default ProduitPanier;