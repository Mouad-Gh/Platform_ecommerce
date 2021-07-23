import { useEffect, useState } from 'react';
import { history } from '../../helpers/history';
import { authenticationService } from '../../services/authenticationService';
const Login = (props) => {

    const [email,setEmail] = useState(null);
    const [mdp,setMdp] = useState(null);

    useEffect(()=>{
        if (authenticationService.currentUserValue) { 
            history.push('/');
        }

    },[])

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        authenticationService.login(email,mdp)
        .then((utilisateur)=>{
            console.log(utilisateur);
        })
        .catch(err =>{
            console.log(err);
        });
    }

    return (
        <>
            <div className="container">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
                        <h1 className="align-center">Déjà client</h1>
                        <br />

                        <form className="signin" onSubmit={(e)=>{handleOnSubmit(e)}}>
                            <input type="email" name="email"  placeholder="E-mail" required="" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
                            <br />
                            <input type="password" name="password"  placeholder="Mot de passe" required="" className="form-control" onChange={(e)=>{setMdp(e.target.value)}} />
                            <br />

                            <button type="submit" className="btn btn-primary">Connexion</button>
                            <a href="#forgin-password" data-action="Forgot-Password" className="xs-margin">Mot de passe oublié? </a>
                            <br /><br />

                            <p>
                                Vous n'avez pas de compte? Créez-en un maintenant! <a href="../signup/">Inscription</a>
                            </p>

                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;