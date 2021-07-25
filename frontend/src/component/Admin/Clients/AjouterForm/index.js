import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
const AjouterForm = (props) => {
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [sexe, setSexe] = useState('Homme');
    const [dtn, setdtn] = useState(new Date());
    const [adresse, setAdress] = useState();
    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();
    const [role, setRole] = useState('acheteur');
    const [nomDeBoutique, setNomDeBoutique] = useState();
    const [startDate, setStartDate] = useState(new Date());


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!formValidation()){
            return false;
        }
        const data = {
            Nom: nom, Prenom: prenom, Sexe: sexe,
            DateNaissance: dtn.toISOString().slice(0, 19).replace('T', ' '), Adress: adresse,
            Email: email, Mdp: mdp, nom_boutique: nomDeBoutique
        };
        props.handleOnAjouter(data, role);
    }

    const formValidation = () => {
        if(nom.length ==0 || !nom.trim()){
            toast.error('le nom ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        if(prenom.length ==0 || !prenom.trim()){
            toast.error('le prenom ne peut pas être vide', { toastId: 2, autoClose: 6000 });
            return false;
        }
        if(adresse.length ==0 || !adresse.trim()){
            toast.error('adress ne peut pas être vide', { toastId: 4, autoClose: 6000 });
            return false;
        }
        if(email.length ==0 || !email.trim()){
            toast.error('email ne peut pas être vide', { toastId: 5, autoClose: 6000 });
            return false;
        }
        if(role==='vendeur'){
            if(nomDeBoutique.length ==0 || !nomDeBoutique.trim()){
                toast.error('nom de boutique ne peut pas être vide', { toastId: 7, autoClose: 6000 });
                return false;
            }
        }
        if(mdp.length ==0 || !mdp.trim() ){
            toast.error('mot de passe ne peut pas être vide', { toastId: 6, autoClose: 6000 });
            return false;
        }
        if(mdp.length < 6){
            toast.error('le mot de passe doit avoir 6 caractères ou plus', { toastId: 6, autoClose: 6000 });
            return false;
        }
        return true;
    }

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Ajouter Utilisateur</h4>
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
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required onChange={(e) => { setAdress(e.target.value) }}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Date De naissance</label>
                                    <br/>
                                    <DatePicker dateFormat="yyyy/MM/dd" className="form-group  form-control" selected={dtn} onChange={(date) => { setdtn(date) }}  showYearDropdown dropdownMode= "scroll"  />
                                </div>
                                <div className="form-group">
                                    <label>Mot de passe</label>
                                    <input type="password" className="form-control" required onChange={(e) => { setMdp(e.target.value) }} />
                                </div>
                                <div className="form-group">
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
                                {role === 'vendeur' &&
                                    <div className="form-group">
                                        <label>Nom de Boutique</label>
                                        <input type="text" className="form-control" required onChange={(e) => { setNomDeBoutique(e.target.value) }} />
                                    </div>
                                }

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler" />
                                <input type="submit" className="btn btn-success" value="Ajouter" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AjouterForm;