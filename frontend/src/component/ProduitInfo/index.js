
const ProduitInfo= (props)=>{
  const {nom,PU,quantite_dispo,description,Marque}=props.produit;

    return(
        <div className="col-sm-5 col-md-5 no-padding-xs">
            <div className="caption">
              {//<img src="../assets/img/brands/microsoft.png" alt="Microsoft" className="brand hidden-xs hidden-sm" />
              }

              <h1>{nom}</h1>

              <p> &middot; Nombre de pièces: {quantite_dispo} </p>
              <p> &middot; {description} </p>
              { Marque && <p> &middot; {Marque.nom} </p>}
              <hr className="offset-md hidden-sm"/>
              <hr className="offset-sm visible-sm"/>
              <hr className="offset-xs visible-sm"/>

              <p className="price">${PU} </p>
              <p className="price through">$3 449.99</p>
              <hr className="offset-md"/>

              <button className="btn btn-primary rounded"> <i className="ion-bag"></i> Add to cart</button>
              <button className="btn btn-link"> <i className="ion-ios-heart"></i> See later </button>
            </div>
          </div>
    );
}

export default ProduitInfo;