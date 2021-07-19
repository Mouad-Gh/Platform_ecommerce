import { useState } from "react";

const AjouterForm = (props) => {
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [sexe, setSexe] = useState('Homme');
    const [dtn, setdtn] = useState();
    const [adresse, setAdress] = useState();
    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();
    const [role, setRole] = useState('client');

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const data = { Nom: nom, Prenom: prenom, Sexe: sexe, DateNaissance: dtn, Adress: adresse, Email: email, Mdp: mdp }
        props.handleOnAjouter(data,role);
    }
    return (
        <>
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div class="modal-header">
                                <h4 class="modal-title">Add Employee</h4>
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
                                    <label>Sexe</label>
                                    <div className="group-select justify" tabIndex='1'>
                                        <input className="form-control select" id="paiement" name="sexe" defaultValue={sexe} placeholder="" required="" />

                                        <ul className="dropdown">
                                            <li data-value="Homme" onClick={(e) => { setSexe('Homme') }}>Homme</li>
                                            <li data-value="Femme" onClick={(e) => { setSexe('Femme') }}>Femme</li>
                                        </ul>

                                        <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea class="form-control" required onChange={(e) => { setAdress(e.target.value) }}></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Date De naissance</label>
                                    <input type="text" class="form-control" required onChange={(e) => { setdtn(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <label>Mot de passe</label>
                                    <input type="password" class="form-control" required onChange={(e) => { setMdp(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <label>Role</label>
                                    <div className="group-select justify" tabIndex='1'>
                                        <input className="form-control select" id="role" name="role" defaultValue={role} placeholder="" required="" />

                                        <ul className="dropdown">
                                            <li data-value="acheteur" onClick={(e) => { setRole('acheteur') }}>Client</li>
                                            <li data-value="vendeur" onClick={(e) => { setRole('vendeur') }}>Vendeur</li>
                                            <li data-value="admin" onClick={(e) => { setRole('admin') }}>Admin</li>
                                        </ul>

                                        <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                    </div>
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