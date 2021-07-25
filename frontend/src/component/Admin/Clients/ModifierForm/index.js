import { useEffect, useState } from "react";
import useFetch from '../../../../helpers/useFetch';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { toast } from "react-toastify";
const ModifierForm = (props) => {
    
    const { data:utilisateur } = useFetch('http://localhost:3000/api/utilisateur/'+props.utilisateurId+'/info');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('Homme');
    const [dtn, setdtn] = useState(new Date());
    const [adresse, setAdress] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        setNom(utilisateur.Nom);
        setPrenom(utilisateur.Prenom);
        setSexe(utilisateur.Sexe);
        let dateMysql = utilisateur.DateNaissance;
        if(dateMysql){
            let dateJS = new Date(Date.parse(dateMysql));
            setdtn(dateJS);
        }
        setAdress(utilisateur.Adress);
        setEmail(utilisateur.Email);
        
    },[utilisateur]);

    const handleOnSubmit = (e)=>{
        e.preventDefault(); 
        if(!formValidation()){
            return false;
        }
        const data = { Nom: nom, Prenom: prenom, Sexe: sexe, DateNaissance: dtn.toISOString().slice(0, 19).replace('T', ' '), Adress: adresse, Email: email}
        props.handleOnModifier(data);
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
        return true;
    }

    return (
        <>
        <div id="ModifierModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleOnSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Modifier l'utilisateur</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Nom</label>
                                <input type="text" className="form-control" required onChange={(e) => { setNom(e.target.value) }} value={nom} />
                            </div>
                            <div className="form-group">
                                <label>Prenom</label>
                                <input type="text" className="form-control" required onChange={(e) => { setPrenom(e.target.value) }} value={prenom} />
                            </div>
                            <div className="form-group">
                                <label>Sexe</label>
                                <div className="group-select justify" tabIndex='1'>
                                    <input className="form-control select" id="paiement" name="sexe" defaultValue={sexe}  placeholder="" required="" />

                                    <ul className="dropdown">
                                        <li data-value="Homme" onClick={(e) => { setSexe('Homme') }}>Homme</li>
                                        <li data-value="Femme" onClick={(e) => { setSexe('Femme') }}>Femme</li>
                                    </ul>

                                    <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" required value={email}  onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" required value={adresse}  onChange={(e) => { setAdress(e.target.value) }}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Date De naissance</label>
                                <DatePicker dateFormat="yyyy/MM/dd" className="form-group  form-control" selected={dtn} onChange={(date) => { setdtn(date) }}  showYearDropdown dropdownMode= "scroll"  />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Annuler" />
                            <button className="btn btn-success">
                                Modifier
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
    );
}

export default ModifierForm;