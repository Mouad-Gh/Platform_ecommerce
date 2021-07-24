import { useState } from "react";
import DatePicker from "react-datepicker";
import AdminActions from '../../actions/AdminActions'
import "react-datepicker/dist/react-datepicker.css";
import ScriptTag from "react-script-tag/lib/ScriptTag";
import "./style.css";
import { toast } from 'react-toastify';
import { history } from '../../helpers/history';

const Inscription = () => {

    const [nom, setNom] = useState();//
    const [prenom, setPrenom] = useState();//
    const [sexe, setSexe] = useState('Homme');
    const [dtn, setdtn] = useState(new Date());
    const [adresse, setAdress] = useState();//
    const [email, setEmail] = useState();//
    const [mdp, setMdp] = useState();
    const [Cmdp, setCmdp] = useState();
    const [role, setRole] = useState('acheteur');
    const [nomDeBoutique, setNomDeBoutique] = useState();

    const formValidation = () => {
        if(nom.length ==0 || !nom.trim()){
            toast.error('le nom ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        if(prenom.length ==0 || !prenom.trim()){
            toast.error('le prenom ne peut pas être vide', { toastId: 2, autoClose: 6000 });
            return false;
        }
        if(nom.length ==0 || !nom.trim()){
            toast.error('le nom ne peut pas être vide', { toastId: 3, autoClose: 6000 });
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
        if(mdp.length ==0 || !mdp.trim()){
            toast.error('mot de passe ne peut pas être vide', { toastId: 6, autoClose: 6000 });
            return false;
        }
        if(role==='vendeur'){
            if(nomDeBoutique.length ==0 || !nomDeBoutique.trim()){
                toast.error('nom de boutique ne peut pas être vide', { toastId: 7, autoClose: 6000 });
                return false;
            }
        }
        return true;
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(!formValidation()){
            return false;
        }
        if(mdp === Cmdp ){
            const data = {
                Nom: nom, Prenom: prenom, Sexe: sexe,
                DateNaissance: dtn.toISOString().slice(0, 19).replace('T', ' '), Adress: adresse,
                Email: email, Mdp: mdp, nom_boutique: nomDeBoutique
            };
            console.log(data);
            AdminActions.ajouterUtilisateur(data, role).then((res) => {
                if (res) {
                    console.log(res);
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