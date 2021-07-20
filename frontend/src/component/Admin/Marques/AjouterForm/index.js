import { useState } from "react";

const AjouterForm = (props) => {
    const [nom, setNom] = useState(null);
    const [pays, setPays] = useState(null);
    
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const data = { nom,pays }
        props.handleOnAjouter(data);
        

    }
    return ( 
        <>
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div class="modal-header">
                                <h4 class="modal-title">Ajouter une Marque</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Nom</label>
                                    <input type="text" class="form-control" required onChange={(e) => { setNom(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <label>Pays</label>
                                    <input type="text" class="form-control" required onChange={(e) => { setPays(e.target.value) }} />
                                </div>
                                
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" defaultValue="Annuler" />
                                <input type="submit" class="btn btn-success" defaultValue="Ajouter" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AjouterForm;