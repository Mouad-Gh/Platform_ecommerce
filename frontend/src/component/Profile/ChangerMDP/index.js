import { useState } from "react";
import { toast } from 'react-toastify';
import {authHeader } from  '../../../helpers/auth-header'
const ChangerMDP = () => {
    const [mdpActuel,setMdpActuel]  = useState('');
    const [mdpNew,setMdpNew] = useState('');
    const [mdpNew2,setMdpNew2] = useState('');

    const formValidation = () => {
        if(mdpActuel.length ==0 || !mdpActuel.trim()){
            toast.error('mot de passe actuel ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            return false;
        }
        if(mdpNew.length ==0 || !mdpNew.trim()){
            toast.error('Nouveau mot de passe ne peut pas être vide', { toastId: 2, autoClose: 6000 });
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formValidation()){
            return false;
        }
        
        if(mdpNew2 !== mdpNew){
            toast.warning('les mots de passe ne correspondent pas', { toastId: 1, autoClose: 3000 });
        }
        else{ 
            const data = { MdpOld:mdpActuel,Mdp:mdpNew };
            console.log(data);
            fetch('http://localhost:3000/api/utilisateur/changerMDP/2', {
                method: 'PUT',
                headers: authHeader(),
                body: JSON.stringify(data)
            }).then((res) => res.json())
            .then(res => {
                console.log(res);
                if(res.success){
                    toast.success('votre mot de passe est modifiées avec succès', { toastId: 1, autoClose: 4000 });
                }
                else {
                    toast.error('Mot de passe Actuel n\'est pas correct', { toastId: 1, autoClose: 4000 });
                }
                
            }).catch(err => console.log(err));
        }

    }
    return (
        <div className="gray">
            <hr className="offset-lg" />

            <div className="container align-center">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <form className="contact" onSubmit={handleSubmit}>
                            <label>Votre mot de passe actuel</label>
                            <input type="password"  defaultValue="" required="" className="form-control" onChange={(e)=>{setMdpActuel(e.target.value)}} />
                            <br />
                            <label>Nouveau mot de passe</label>
                            <input type="password"  defaultValue="" required="" className="form-control" onChange={(e)=>{setMdpNew(e.target.value)}}/>
                            <br />
                            <label>Retapez le nouveau mot de passe</label>
                            <input type="password" defaultValue="" required="" className="form-control" onChange={(e)=>{setMdpNew2(e.target.value)}}/>
                            <br />

                            <button type="submit" className="btn btn-primary justify"> Changer </button>
                        </form>
                    </div>
                </div>
            </div>
            <br />
        </div>

    );
}

export default ChangerMDP;