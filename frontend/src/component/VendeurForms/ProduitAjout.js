import ComboBox from "./ComboBox";
import { useState } from "react";
const ProduitAjout = () => {
    const [categorie, setCategorie] = useState(null);
    const [marque, setMarque] = useState(null);
    //const [categorie, setCategorie] = useState(null);
    return ( 
        <div >
            {/* Titre de la page */}
            <div className="white">
                <div className="container">
                    <h1>Ajouter un nouveau produit</h1>
                    <hr className="offset-sm" />
                </div>
            </div>
            <hr className="offset-md" />
            {/* Formulaire de la page */}
            <div className="container">
                <form onSubmit={''} >
                    <div className="col-md-7">
                        <div class="row group">
                            <div class="col-sm-4"><h2 class="h4">Nom du produit</h2></div>
                            <div class="col-sm-8"> <input type="text" class="form-control" name="nom"  required="" placeholder="" /></div>
                        </div>
                        
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Description</h2></div>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="Description" rows="1" required="" placeholder=""
                                // onChange={(e) => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                        </div>

                        <div class="row group">
                            <div class="col-sm-4"><h2 class="h4">Prix</h2></div>
                            <div class="col-sm-8"> <input type="text" class="form-control" name="prix"  required="" placeholder="" /></div>
                        </div>

                        <div class="row group">
                            <div class="col-sm-4"><h2 class="h4">Quantité</h2></div>
                            <div class="col-sm-8"> <input type="text" class="form-control" name="qte"  required="" placeholder="" /></div>
                        </div>

                        <ComboBox value={categorie} onOptionChange={setCategorie} options={[{id:1,nom:'c1'},{id:2,nom:'c2'},{id:3,nom:'c3'}]} />
                        <ComboBox value={marque} onOptionChange={setMarque} options={[{id:1,nom:'m1'},{id:2,nom:'m2'},{id:3,nom:'m3'}]} />
                        
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default ProduitAjout;