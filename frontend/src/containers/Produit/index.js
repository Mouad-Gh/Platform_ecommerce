import ProduitSlider from '../../component/ProduitSlider';
import ProduitInfo from '../../component/ProduitInfo';
import ProduitDetails from '../../component/ProduitDetails';
import ProduitReaction from '../../component/ProduitReaction';
import ProduitList from '../../component/ProduitList';
import ScriptTag from 'react-script-tag';
import { useParams } from 'react-router-dom';

import useAxios from '../../helpers/useAxios';
import { useEffect } from 'react';

const Produit= (props)=>{
    const { id }=useParams();
    const {data:produit} = useAxios('http://localhost:3000/api/produit/'+id);
    console.log(produit);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[id]);

    return(
        <div>
            <hr className="offset-lg"/>
            <hr className="offset-lg"/>
            <hr className="offset-lg hidden-xs"/>
            <section className="product">
            <div className="container">
                <div className="row">
                { produit && (<ProduitSlider images={produit.Produit_images} produit={produit.nom} />)}
                { produit && <ProduitInfo produit={produit} handleAjouterPanier={props.handleAjouterPanier} />}
                <ProduitReaction />
                </div>
                <hr className="offset-sm hidden-xs"/>

                <div className="row">
                { produit && <ProduitDetails specifications={produit.Produit_specifications} produit={produit.nom} desc={produit.description} />}
                
                </div>
            </div>
            
            
            </section>
            <hr className="offset-lg"/>
            {
            // liste des produits
}
            { produit && <ProduitList key={produit.Categorie.id} idCat={produit.Categorie.id} handleAjouterPanier={props.handleAjouterPanier} />}  

            
            
            { //sproduit && (<ProduitsParCategorie key={produit.Categorie.id} cat={produit.Categorie.nom_categorie} />)
            }
            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/carousel-product.js" />
            
    </div>
    );
}
export default Produit;