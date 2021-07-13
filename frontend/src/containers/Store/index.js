import React, { useEffect, useState } from 'react';
import Produits from '../../component/Store/Produits';
import Filters from '../../component/Store/Filters';
import Tags from '../../component/Store/Tags';
import useFetch from '../../helpers/useFetch';
import ScriptTag from 'react-script-tag';
const Store = () => {
    const [produits,setProduits] = useState([]);
    const [nombreDePage,setNombreDePage] = useState(1);
    const {data:categories} = useFetch('http://localhost:3000/api/categorie/tous/1/3');
    const {data:marques} = useFetch('http://localhost:3000/api/marque/tous');

    const [selectedCategorie,setSelectedCategorie]= useState('All');
    const [selectedOptions,setSelectedOptions]=useState(null);
    const [selectedTriOption,setSelectedTriOption]=useState(null);

    useEffect(()=>{
        const url = 'http://localhost:3000/api/produits/1/9';
        getProduits(url);
    },[]);
    
    const getProduits = (url)=>{
        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
        .then(res =>{
            return res.json();
        })
        .then((data)=>{
 
            setProduits(data.produits);
            if(data.NombreDeProduits!==-1){
                setNombreDePage(Math.ceil(data.NombreDeProduits/9));
            }
        })
        .catch((err)=>{
            if(err.name==='AbortError'){
                 console.log('fetch aborted');
            }else{
                console.log(err.message);
            }
        });
        
    }
    
    const handleChangeCategorie = (categorie)=>{
        setSelectedCategorie(categorie);
        let url = 'http://localhost:3000/api/categorie/'+categorie+'/produits/1/9' ;
        if(categorie == 'All'){
            url = 'http://localhost:3000/api/produits/1/9';
        }
        setSelectedOptions(null);
        setSelectedTriOption(null);
        getProduits(url);
    }
    
    const handleRechercher = (data)=>{
        let url='http://localhost:3000/api/produit/filter/1/9?';
        const min = parseInt(data.minPrix);
        const max  = parseInt(data.maxPrix);
        let options = '';
        if(selectedCategorie!=='All'){
            options += '&categorie='+selectedCategorie;
        }
        if(min>=0 && max<=20000 && max>min ){
            
            options += '&price1='+min+'&price2='+max;

        }
        if(data.marques.length!==0){
            data.marques.forEach(marque => {
                options += '&marques='+marque;
            });
        }
        setSelectedOptions(options);
        setSelectedTriOption(null);
        getProduits(url+options);
    }

    const handleTri = (Tri,par)=>{
        setSelectedTriOption('&triProperty='+Tri+'&triOption='+par);
        let url='http://localhost:3000/api/produit/filter/1/9?';

        if(selectedCategorie!=='All'){
            url += '&categorie='+selectedCategorie;
        }

        if(selectedOptions){
            url +=selectedOptions+'&triProperty='+Tri+'&triOption='+par;
        }
        else {
            url +='&triProperty='+Tri+'&triOption='+par;
        }
        getProduits(url);
    }

    const handlePagination = (page)=>{
        let url='http://localhost:3000/api/produit/filter/'+page+'/9?';

        if(selectedCategorie!=='All'){
            url += '&categorie='+selectedCategorie;
        }
        if(selectedOptions){
            url +=selectedOptions;
        }
        if(selectedTriOption){
            url+=selectedTriOption;
        }
        getProduits(url);
    }

    return (
        <div>
            <hr className="offset-top"/>
            <Tags data={categories} handleChangeCategorie={handleChangeCategorie} handleTri={handleTri} />
            <div className="container">
                <div className="row">
                    <Filters marques={marques} handleRechercher={handleRechercher} />
                    {produits.length!=0 && <Produits data={produits} nombreDePage={nombreDePage} handlePagination={handlePagination} />}
                </div>
            </div>
            <ScriptTag  type="text/javascript" src="/assets/js/core.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/carousel.js" />
            <ScriptTag  type="text/javascript" src="/assets/js/jquery.touchSwipe.min.js" />
            
        </div>

    );
}

export default Store;