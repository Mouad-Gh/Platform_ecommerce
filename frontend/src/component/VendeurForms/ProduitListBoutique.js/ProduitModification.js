import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxios from "../../../helpers/useAxios";
import useFetch from "../../../helpers/useFetch";
import ComboBox from "../ComboBox"; 
import axios from "axios";
import { toast } from 'react-toastify';
const ProduitModification = (props) => {
    const location= useLocation();
    const  id = location.state.ProduitId;
    const {data:produit} = useAxios('http://localhost:3000/api/produit/'+id);
    console.log(id);
    const {data:categories}=useFetch('http://localhost:3000/api/categorie/tous');
    
    const {data:marques}=useFetch('http://localhost:3000/api/marque/tous');
    
    
    const [nom,setNom] = useState(produit?produit.nom:'');
    const [description,setDescription] = useState(produit?produit.description:'');
    const [PU,setPU] = useState(produit?produit.PU:0);
    const [quantite,setQuantite] = useState(produit?produit.quantite_dispo:'');
    const [categorie, setCategorie] = useState(produit?produit.CategorieId:'');
    const [marque, setMarque] = useState(produit?produit.MarqueId:'');
    const [specifications, setSpecifications] = useState([
       
    ]);


    
    const formValid=()=>{
        if(nom?.length ==0 || !nom?.trim() ){
            toast.error('Nom ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            return false;
        }
        if(description?.length ==0 || !description?.trim() ){
            toast.error('Description ne peut pas être vide', { toastId: 2, autoClose: 6000 });
            return false;
        }
        if(PU?.length ==0 || !PU ){
            toast.error('Prix ne peut pas être vide', { toastId: 3, autoClose: 6000 });
            return false;
        }
        if(quantite?.length ==0  ){
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

    useEffect(()=>{
        const list=[];
        if(produit){
            produit.Produit_specifications.forEach((specification,i)=>{
                list.push({id: specification.id ,nom:specification.nom, valeur: specification.valeur});
            });
            setSpecifications(list);
            setNom(produit.nom);
            setDescription(produit.description);
            setPU(produit.PU);
            setQuantite(produit.quantite_dispo);
            setCategorie(produit.CategorieId);
            setMarque(produit.MarqueId);
        }
        

    },[produit]);
    

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

    const modifier= (e)=>{

        e.preventDefault();
        if(!formValid()){
            return false;
        }

        let formData = new FormData();
        console.log(specifications);
        formData.append("specifications",JSON.stringify(specifications));
        formData.append("nom",nom);
        formData.append("description",description);
        formData.append("PU",PU);
        formData.append("quantite_dispo",quantite);
        formData.append("CategorieId",categorie);
        formData.append("MarqueId",marque);
        //formData.append("BoutiqueId",id);
        const data={
            nom,
            description,
            PU,
            quantite_dispo:quantite,
            CategorieId:categorie,
            MarqueId:marque,
            specifications
        }
        console.log(JSON.stringify(data));
        fetch("http://localhost:3000/api/produit/"+id,{
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(()=>{
            toast.success('Le produit a été modifier', { toastId: 10, autoClose: 6000 });
        }).catch(err=>console.log(err));
        // axios.put("http://localhost:3000/api/produit/"+id, JSON.stringify(data)).then(response => {
        //     console.log((response.data))
        // })

    }

    return ( 
        
        <div >
            <hr className="offset-lg"/>
            <hr className="offset-lg"/>
            <div className="white">
                <div className="container">
                    <h1>Modifier le produit</h1>
                    <hr className="offset-sm" />
                </div>
            </div>
            <hr className="offset-md" />
            {/* Formulaire de la page */}
            <div className="container">
                <form onSubmit={modifier} >
                    <div className="col-md-7">
                        <div className="row group">
                            <div className="col-sm-4"><h2 className="h4">Nom du produit</h2></div>
                            <div className="col-sm-8"> <input type="text" className="form-control" name="nom"
                                value={nom} onChange={(e) => setNom(e.target.value)} required="" placeholder="" /></div>
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
                                value={quantite} onChange={(e) => setQuantite(e.target.value)} required="" placeholder="" /></div>
                        </div>

                        <ComboBox nom="Categorie" value={categorie} onOptionChange={setCategorie} options={categories} />
                        <ComboBox nom="Marque" value={marque} onOptionChange={setMarque} options={marques} />

                    </div>
                    <div className="col-sm-5 no-padding-xs">
                        
                        <div className="form group" >
                            <h1 className="h4">specifications</h1>
                            {specifications.map((specification, i) => {
                                return <div key={i}>
                                    <div className="row group">
                                        <div className="col-sm-4"><h3 className="h4">Nom</h3></div>
                                        <div className="col-sm-8"> <input type="text" className="form-control" name="nom"
                                            value={specification.nom} onChange={e => handleChange(e, i)} required="" placeholder="" /></div>
                                    </div>
                                    <div className="row group">
                                        <div className="col-sm-4"><h3 className="h4">Valeur</h3></div>
                                        <div className="col-sm-8"> <input type="text" className="form-control" name="valeur"
                                            value={specification.valeur} onChange={e => handleChange(e, i)} required="" placeholder="" /></div>
                                    </div>
                                </div>
                            })}

                            <input type="button" className="btn btn-primary btn-sm rounded mt1" value="Ajouter une autre specification" onClick={handleAddinput} />
                        </div>

                    </div>
                    <hr className="offset-md" />
                    <button className="btn btn-danger col-6 mx-auto" type="submit">Modifier</button>


                </form>
            </div>
        </div>
     );
}
 
export default ProduitModification;