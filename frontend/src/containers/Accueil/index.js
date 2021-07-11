import React from 'react';
import Glissiere from '../../component/Accueil/Glissiere';
import CategorieBars from '../../component/Accueil/CategorieBars';
import ProduitsParCategorie from '../../component/Accueil/ProduitsParCategorie';
import useFetch from '../../helpers/useFetch';
import ScriptTag from 'react-script-tag';
const Accueil = ()=>{
    const {data:categories} = useFetch('http://localhost:3000/api/categorie/tous');
    return(
        <div className="Header">
            <Glissiere />
            <hr className="offset-lg"/>
            <hr className="offset-md"/>
            
            <CategorieBars />

            <hr className="offset-lg"/>
            <hr className="offset-md"/>
            
            {categories.length===0 && <h3 className="align-center">Il n'y a pas de catégories</h3>}
            {categories.map(categorie=>
                <ProduitsParCategorie key={categorie.id} cat={categorie.nom_categorie} />
            )}
            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/carousel.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/jquery.touchSwipe.min.js" />
            
        </div>
    );
}

export default Accueil; 