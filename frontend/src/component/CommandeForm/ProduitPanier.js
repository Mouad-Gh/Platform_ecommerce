const ProduitPanier = (props) => {
    const {nom,img,PU,nom_categorie}=props.produit;
    return ( 
        <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" src={img} alt="iPad Air" />
                            </a>
                        </div>
                        <div className="media-body">
                            <h2 className="h4 media-heading">{nom}</h2>
                            <label>{nom_categorie} </label>
                            <p className="price">${PU}</p>
                        </div>
                        <div className="controls">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default btn-sm" type="button" data-action="minus"><i className="ion-minus-round"></i></button>
                                </span>
                                <input type="text" className="form-control input-sm" placeholder="Qty" defaultValue="1" readOnly="" />
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