import { useState } from "react";

const RechercherForm = (props)=>{
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [role, setRole] = useState('Acheteur');


    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const body = {Nom:nom,Prenom:prenom};
        props.handleOnRechercher(body,role);
    }

    return (
        <>
        <div id="FindUtilisateurModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form onSubmit={handleOnSubmit}>
                        <div class="modal-header">
                            <h4 class="modal-title">Trouver un utilisateur</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Nom</label>
                                <input type="text" class="form-control" required onChange={(e) => { setNom(e.target.value) }} />
                            </div>
                            <div class="form-group">
                                <label>Prenom</label>
                                <input type="text" class="form-control" required onChange={(e) => { setPrenom(e.target.value) }} />
                            </div>
                            <div class="form-group">
                                <label>Role</label>
                                <div className="group-select justify" tabIndex='1'>
                                    <input className="form-control select" id="role" name="role" defaultValue={role} placeholder="" required="" />

                                    <ul className="dropdown">
                                        <li data-value="acheteur" onClick={(e) => { setRole('acheteur') }}>Acheteur</li>
                                        <li data-value="vendeur" onClick={(e) => { setRole('vendeur') }}>Vendeur</li>
                                        <li data-value="admin" onClick={(e) => { setRole('admin') }}>Admin</li>
                                    </ul>

                                    <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                </div>
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