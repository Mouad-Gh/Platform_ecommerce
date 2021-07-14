const produit = (props) => {
    return (
        <div className="col-sm-6 col-md-4 product">
            <div className="body">
                <a href="#favorites" className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
                <a href="./"><img src={props.data.Produit_images[0]?.chemin_fichier} alt="Apple iMac 27 Retina" /></a>

                <div className="content">
                    <h1 className="h3">{props.data.nom}</h1>
                    <p className="price">{props.data.PU}</p>
                    <label>{props.data.Categorie.nom_categorie}</label>

                    <button className="btn btn-link"> <i className="ion-android-open"></i> Détails</button>
                    <button className="btn btn-primary btn-sm rounded"
                        onClick={() => {
                            props.handleAjouterPanier({
                                id:props.data.id,
                                nom: props.data.nom,
                                nom_categorie: props.data.Categorie.nom_categorie,
                                PU: props.data.PU,
                                qte: 1,
                                img:props.data.Produit_images[0]?.chemin_fichier
                            })
                        }}>
                        <i className="ion-bag"></i> Panier
                    </button>
                </div>
            </div>
        </div>
    );
}

export default produit;