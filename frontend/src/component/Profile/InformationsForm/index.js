import React, { useEffect, useState } from 'react';
import useFetch from '../../../helpers/useFetch';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import { toast } from 'react-toastify';
const InformationsFrom = () => {
    const { data: informations } = useFetch('http://localhost:3000/api/utilisateur/2');
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [sexe, setSexe] = useState();
    const [dateNaissance, setDateNaissance] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        setNom(informations.Nom);
        setPrenom(informations.Prenom);
        setSexe(informations.Sexe);
        setDateNaissance(informations.DateNaissance);
        setAdress(informations.Adress);
        setEmail(informations.Email);
    }, [informations]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = { Nom: nom, Prenom: prenom, Sexe: sexe, DateNaissance: dateNaissance, Adress: adress, Email: email }
        fetch('http://localhost:3000/api/utilisateur/2', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            toast.success('vos informations est modifiées avec succès', { toastId: 1, autoClose: 4000 });
        }).catch(err => console.log(err));
    }

    return (
        <div className="container checkout">
            <hr className="offset-md" />
            <form onSubmit={handleOnSubmit}>

                <div className="row">
                    <div className="col-md-12">
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Nom</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="nom" defaultValue={nom} required="" placeholder="Kamal" onChange={(e) => { setNom(e.target.value) }} /></div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Prenom</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="prenom" defaultValue={prenom} placeholder="Ben hamad" onChange={(e) => { setPrenom(e.target.value) }} /></div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">E-mail</h2></div>
                            <div className="col-sm-8"> <input type="email" className="form-control" name="email" defaultValue={email} required="" placeholder="john@yahoo.com" onChange={(e) => { setEmail(e.target.value) }} /></div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Adress</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="adress" defaultValue={adress} required="" placeholder="Avenue Pastor" onChange={(e) => { setAdress(e.target.value) }} /></div>
                        </div>


                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Sexe</h2></div>
                            <div className="col-sm-8">
                                <div className="group-select justify" tabIndex='1'>
                                    <input className="form-control select" id="paiement" name="sexe" defaultValue={sexe} placeholder="" required="" />

                                    <ul className="dropdown">
                                        <li data-value="Homme" onClick={(e) => { setSexe('Homme') }}>Homme</li>
                                        <li data-value="Femme" onClick={(e) => { setSexe('Femme') }}>Femme</li>
                                    </ul>

                                    <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                                </div>
                            </div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Date de naissance</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="date" defaultValue={dateNaissance} placeholder="YYYY/MM/JJ"  onChange={(e) => { setDateNaissance(e.target.value) }}  /></div>
                        </div>



                        {/* */}
                        <hr className="offset-lg visible-xs visible-sm" />
                        <hr className="offset-lg visible-xs" />
                    </div>

                </div>

                <div style={{ marginTop: 20 }} >
                    <button className="btn btn-primary pull-right" type="submit">Modifier</button>
                </div>
            </form>
            <ScriptTag type="text/javascript" src="/assets/js/bootstrap.min.js" />
            <ScriptTag type="text/javascript" src="/assets/js/core.js" />
        </div>
    );
}

export default InformationsFrom;