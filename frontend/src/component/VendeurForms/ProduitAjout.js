import ComboBox from "./ComboBox";
import { useEffect, useState } from "react";
import axios from "axios";
import ProduitSpecifications from "./produitSpecifications";
import useFetch from "../../helpers/useFetch";
import { useLocation, useParams } from "react-router-dom";
import { authHeader } from "../../helpers/auth-header";
import { toast } from 'react-toastify';

const ProduitAjout = (props) => {
    const location= useLocation();
    const  id = 1;
    const {data:categories}=useFetch('http://localhost:3000/api/categorie/tous');
    const {data:marques}=useFetch('http://localhost:3000/api/marque/tous');
    
    
    const [nom,setNom] = useState(null);
    const [description,setDescription] = useState(null);
    const [PU,setPU] = useState(null);
    const [quantite,setQuantite] = useState(null);
    const [categorie, setCategorie] = useState('');
    const [marque, setMarque] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [specifications, setSpecifications] = useState([
        {
            nom:" ",
            valeur:" "
        }
    ]);

    useEffect(()=>{
        setCategorie(categories[0]?.id);
        setMarque(marques[0]?.id);
    },[categories,marques]);
    //const [categorie, setCategorie] = useState(null);

    //specification inputs
    const handleChange=(e,i)=>{
        const {name,value}=e.target;
        const list= [...specifications];
        list[i][name]=value;
        setSpecifications(list);

    }
    //ajouter une autre specification input
    const handleAddinput= (e)=>{
        const list= [...specifications];
        list.push({nom:"",
        valeur:""});
        setSpecifications(list);
        console.log(specifications);
    }

    const formValid=()=>{
        if(nom?.length ==0 || !nom?.trim() ){
            toast.error('Nom ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            return false;
        }
        if(description?.length ==0 || !description?.trim() ){
            toast.error('Description ne peut pas être vide', { toastId: 2, autoClose: 6000 });
            return false;
        }
        if(PU?.length ==0 || !PU?.trim() ){
            toast.error('Prix ne peut pas être vide', { toastId: 3, autoClose: 6000 });
            return false;
        }
        if(quantite?.length ==0 || !quantite?.trim() ){
            toast.error('Quantite ne peut pas être vide', { toastId: 4, autoClose: 6000 });
            return false;
        }
        if(specifications[0].nom.length ==0 || !specifications[0].nom.trim()){
            toast.error('Nom de specification ne peut pas être vide', { toastId: 6, autoClose: 6000 });
            return false;
        }
        if(specifications[0].valeur.length ==0 || !specifications[0].valeur.trim()){
            toast.error('Valeur de specification ne peut pas être vide', { toastId: 7, autoClose: 6000 });
            return false;
        }
        return true;
    }

    const ajouter= (e)=>{
        e.preventDefault();
        if(!formValid()){
            return false;
        }
        
        let formData = new FormData();
        formData.append("specifications",JSON.stringify(specifications));
        formData.append("nom",nom);
        formData.append("description",description);
        formData.append("PU",PU);
        formData.append("quantite_dispo",quantite);
        formData.append("CategorieId",categorie);
        formData.append("MarqueId",marque);
        formData.append("BoutiqueId",id);
        for (const key of Object.keys(uploadedImages)) {
            formData.append('imagesArray', uploadedImages[key])
        }
        
        axios.post("http://localhost:3000/api/produit/ajouter", formData, {
            headers:authHeader()
        }).then(response => {
            if(response.data){
                toast.success('Le produit a été ajouté', { toastId: 2, autoClose: 6000 });
            }
        })



    }

    return ( 
        <div >
            <hr className="offset-lg"/><hr className="offset-lg"/>
            {/* Titre de la page */}
            <div className="white">
                <div className="container">
                    <h1>Ajouter un nouveau produit</h1>
                    <hr className="offset-sm" />
                </div>
            </div>
            <hr className="offset-md" />
            {/* Formulaire de la page */}
            <div className="container">
                <form onSubmit={ajouter} >
                    <div className="col-md-7">
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Nom du produit</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="nom" 
                            value={nom} onChange={(e) => setNom(e.target.value)}  required="" placeholder="" /></div>
                        </div>
                        
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Description</h2></div>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="Description" rows="1" required="" placeholder="" 
                                value={description} onChange={(e) => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Prix</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="prix" 
                            value={PU} onChange={(e) => setPU(e.target.value)} required="" placeholder="" /></div>
                        </div>

                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Quantité</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="qte" 
                            value={quantite} onChange={(e) => setQuantite(e.target.value)}  required="" placeholder="" /></div>
                        </div>

                        <ComboBox nom="Categorie" value={categorie} onOptionChange={setCategorie} options={categories} />
                        <ComboBox nom="Marque" value={marque} onOptionChange={setMarque} options={marques} />
                        
                    </div>
                    <div className="col-sm-5 no-padding-xs">
                        <div className="form group">
                            <h2 className="h4">les Images </h2>
                            <input className="form-control form-control-lg mb-3" type="file" required multiple name="imagesArray"
                             onChange={e => setUploadedImages(e.target.files)} />
                        </div>
                        <div className="form group" >
                            <h1 className="h4">specifications</h1>
                            { specifications.map((specification,i)=>{
                                return <div key={i}>
                                    <div className="row group">
                                        <div className="col-sm-4"><h3 className="h4">Nom</h3></div>
                                        <div className="col-sm-8"> <input type="text" className="form-control" name="nom"
                                        value={specification.nom} onChange={e=>handleChange(e,i)} required="" placeholder="" /></div>
                                    </div>
                                    <div className="row group">
                                        <div className="col-sm-4"><h3 className="h4">Valeur</h3></div>
                                        <div className="col-sm-8"> <input type="text" className="form-control" name="valeur"
                                        value={specification.valeur} onChange={e=>handleChange(e,i)} required="" placeholder="" /></div>
                                    </div>
                                </div>
                            })}
                            
                            <input type="button" className="btn btn-primary btn-sm rounded mt1" value="Ajouter une autre specification" onClick={handleAddinput} />
                        </div>
                            
                    </div>
                    <hr className="offset-md" />
                    <button className="btn btn-danger col-6 mx-auto"  type="submit">Ajouter</button>
                    
                    
                </form>
            </div>
        </div>
    );
}
 
export default ProduitAjout;