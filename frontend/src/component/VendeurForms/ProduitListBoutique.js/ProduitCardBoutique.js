const ProduitCardBoutique = (props) => {
    return (  
      <div className="col-sm-6 col-md-3 product hidden-sm" >
        <div className="body">
          <a href="#favorites" className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
          <a href="./"><img src={props.produit.Produit_images[0].chemin_fichier} alt={props.produit.nom} /></a>

          <div className="content align-center">
            <p className="price">${props.produit.PU}</p>
            <h2 className="h3">{props.produit.nom}</h2>
            <hr className="offset-sm" />

            <button className="btn btn-link"> <i className="ion-android-open"></i> Details</button>
            <button className="btn btn-primary btn-sm rounded"> <i className="ion-android-delete"></i> Supprimer</button>
          </div>
        </div>
      </div>
    );
}
 
export default ProduitCardBoutique;