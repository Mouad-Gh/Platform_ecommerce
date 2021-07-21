import { useState } from "react";

const RechercherForm = (props) => {

    const [nom, setNom] = useState(null);
    const [pays, setPays] = useState(null);
    const handleOnSubmit= (e)=>{
        e.preventDefault();
       
        props.handleOnRechercher(nom);
    }
    return ( 
        <>
            <div id="FindUtilisateurModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div class="modal-header">
                                <h4 class="modal-title">Trouver une marque</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" class="form-control" required onChange={(e) => { setNom(e.target.value) }} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" defaultValue="Annuler" />
                                <button class="btn btn-success">
                                    Rechercher
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
        
     );
}
 
export default RechercherForm;