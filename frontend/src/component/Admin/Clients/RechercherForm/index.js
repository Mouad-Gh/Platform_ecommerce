import { useState } from "react";

const RechercherForm = (props)=>{
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [role, setRole] = useState('utilisateur');


    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const body = {Nom:nom,Prenom:prenom};
        props.handleOnRechercher(body,role);
    }

    return (
        <>
        <div id="FindUtilisateurModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleOnSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Trouver un utilisateur</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Nom</label>
                                <input type="text" className="form-control" required onChange={(e) => { setNom(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label>Prenom</label>
                                <input type="text" className="form-control" required onChange={(e) => { setPrenom(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <div className="group-select justify" tabIndex='1'>
                                    <input className="form-control select" id="role" name="role" defaultValue={role==='utilisateur' ? 'Tous' : role} placeholder="" required="" />

                                    <ul className="dropdown">
                                        <li data-value="Tous" onClick={(e) => { setRole('utilisateur') }}>Tous</li>
                                        <li data-value="acheteur" onClick={(e) => { setRole('acheteur') }}>Acheteur</li>
                                        <li data-value="vendeur" onClick={(e) => { setRole('vendeur') }}>Vendeur</li>
                                        <li data-value="admin" onClick={(e) => { setRole('admin') }}>Admin</li>
                                    </ul>

                                    <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler" />
                            <button className="btn btn-success">
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