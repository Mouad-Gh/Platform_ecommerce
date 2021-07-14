import CommandeForm from "../../component/CommandeForm";
import CommandePanier from "../../component/CommandeForm/CommandePanier";
import ScriptTag from 'react-script-tag';


const Commande = () => {
    return ( 

        <div>
            {/* <hr classNameName="offset-top" /> */}
            <hr className="offset-lg"/>
            <hr className="offset-lg"/>
            <div className="white">
                <div className="container checkout">
                    <h1>Vérifier la commande</h1>
                    <hr className="offset-sm" />
                </div>
            </div>
            <hr className="offset-md" />

            {/* body*/}
            <CommandeForm />

            <hr className="offset-lg" />
            <hr className="offset-sm" />

            <ScriptTag  type="text/javascript" src="/assets/js/bootstrap.min.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/store.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/checkout.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/jquery-ui-1.11.4.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/jquery.ui.touch-punch.js" />
            <ScriptTag  type="text/javascript" src="/assets/js//custom-scroll/jquery.mCustomScrollbar.concat.min.js" />


        </div>
    );
}
 
export default Commande;