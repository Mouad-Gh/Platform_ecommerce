import { useState } from "react";
import DatePicker from "react-datepicker";
import AdminActions from '../../actions/AdminActions'
import "react-datepicker/dist/react-datepicker.css";
import ScriptTag from "react-script-tag/lib/ScriptTag";
import "./style.css";
import { toast } from 'react-toastify';
import { history } from '../../helpers/history';

const Inscription = () => {

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [sexe, setSexe] = useState('Homme');
    const [dtn, setdtn] = useState(new Date());
    const [adresse, setAdress] = useState();
    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();
    const [Cmdp, setCmdp] = useState();
    const [role, setRole] = useState('acheteur');
    const [nomDeBoutique, setNomDeBoutique] = useState();

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(mdp === Cmdp ){
            const data = {
                Nom: nom, Prenom: prenom, Sexe: sexe,
                DateNaissance: dtn.toISOString().slice(0, 19).replace('T', ' '), Adress: adresse,
                Email: email, Mdp: mdp, nom_boutique: nomDeBoutique
            };
            AdminActions.ajouterUtilisateur(data, role).then((res) => {
                if (res) {
                    toast.success('vous avez été enregistré avec succès vous pouvez vous connecter maintenant', { toastId: 1, autoClose: 6000 });
                    history.push('/login');
                }
            });
        }
        else{
            toast.error('Le mot de passe et le mot de passe de confirmation ne correspondent pas', { toastId: 2, autoClose: 6000 });
        }
        
    }

    return (
        <div className="container">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <div className="row">
                <div className="col-m-6 col-m-offset-3 col-md-4 col-md-offset-4 md-padding">
                    <h1 className="align-center">Nouveau client</h1>
                    <br />

                    <form className="join" onSubmit={(e)=>{handleOnSubmit(e)}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-m-12">
                                    <label>Nom</label>
                                    <input type="text" className="form-control" required onChange={(e) => { setNom(e.target.value) }} /><br />
                                </div>
                                <div className="col-m-12">
                                    <label>Prenom</label>
                                    <input type="text" className="form-control" required onChange={(e) => { setPrenom(e.target.value) }} /><br />
                                </div>
                                <div className="col-m-12" style={{ marginBottom: 10 }}>
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
                                <div className="col-m-12">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required onChange={(e) => { setEmail(e.target.value) }} /><br />
                                </div>
                                <div className="col-m-12" style={{ marginBottom: 10 }}>
                                    <label>Adresse</label>
                                    <textarea className="form-control" required onChange={(e) => { setAdress(e.target.value) }}></textarea><br />
                                </div>
                                <div className="col-m-12">
                                    <label>Date De naissance</label>
                                    <DatePicker dateFormat="yyyy/MM/dd" className="form-group  form-control" selected={dtn} onChange={(date) => { setdtn(date) }} showYearDropdown dropdownMode="scroll" /><br />
                                </div>
                                <div className="col-m-12" style={{ marginBottom: 10 }}>
                                    <label>Role</label>
                                    <div className="group-select justify" tabIndex='1'>
                                        <input className="form-control select" id="role" name="role" defaultValue={role} placeholder="" required="" />

                                        <ul className="dropdown">
                                            <li data-value="acheteur" onClick={(e) => { setRole('acheteur') }}>Acheteur</li>
                                            <li data-value="vendeur" onClick={(e) => { setRole('vendeur') }}>Vendeur</li>
                                        </ul>

                                        <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                    </div>
                                </div>
                                {role === 'vendeur' &&
                                     <div className="col-m-12">
                                        <label>Nom de Boutique</label>
                                        <input type="text" className="form-control" required onChange={(e) => { setNomDeBoutique(e.target.value) }} /> <br/>
                                    </div>
                                }
                                <div className="col-m-12">
                                    <label>Mot de passe</label>
                                    <input type="password" className="form-control" required onChange={(e) => { setMdp(e.target.value) }} /><br />
                                </div>
                                <div className="col-m-12">
                                    <label>Confimer mot de passe</label>
                                    <input type="password" name="mdp-confirm" required="" className="form-control" onChange={(e) => { setCmdp(e.target.value) }} /><br />
                                </div>
                            </div>
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary">Rejoindre gratuitement</button>


                        <br /><br />

                    </form>

                    <br className="hidden-sm hidden-md hidden-lg" />
                </div>
            </div>
            <ScriptTag type="text/javascript" src="/assets/js/core.js" />
        </div>
    );
}

export default Inscription;