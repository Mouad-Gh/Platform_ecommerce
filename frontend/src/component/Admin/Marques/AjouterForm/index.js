import { useState } from "react";
import { toast } from "react-toastify";
const AjouterForm = (props) => {
    const [nom, setNom] = useState(null);
    const [pays, setPays] = useState(null);
    
    const formValidation = () => {
        if(nom.length ==0 || !nom.trim()){
            toast.error('le nom de marque ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        if(pays.length ==0 || !pays.trim()){
            toast.error('pays de marque ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        return true;
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(!formValidation()){
            return false;
        }
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
                                <input type="submit" class="btn btn-success" value="Ajouter" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AjouterForm;