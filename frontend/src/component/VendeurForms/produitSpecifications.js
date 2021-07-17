const ProduitSpecifications = () => {
    return (  
        <div className="form group" >
            <h2 className="h4">specifications</h2>
            <div className="row group">
                <div className="col-sm-4"><h3 className="h4">Nom</h3></div>
                <div className="col-sm-8"> <input type="text" className="form-control" name="nom" required="" placeholder="" /></div>
            </div>
            <div className="row group">
                <div className="col-sm-4"><h3 className="h4">Valeur</h3></div>
                <div className="col-sm-8"> <input type="text" className="form-control" name="valeur" required="" placeholder="" /></div>
            </div>
        </div>
    );
}
 
export default ProduitSpecifications;