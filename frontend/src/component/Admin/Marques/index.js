import axios from "axios";
import { useState } from "react";
import ScriptTag from "react-script-tag/lib/ScriptTag";
import { toast } from "react-toastify";
import useFetch from "../../../helpers/useFetch";
import AjouterForm from "./AjouterForm";
import RechercherForm from "./RechercherForm";

const Marques = () => {
    
    const PAGE_SIZE = 5;
    
    const [CURRENT_PAGE,setCurrentPage]=useState(1);
    const {data:marques,setData:setMarques} = useFetch('http://localhost:3000/api/marque/tous/'+CURRENT_PAGE+'/'+PAGE_SIZE);
    console.log(marques);
    const pages=new Array(marques.NombreDepages).fill(null).map((v,i)=>i);

    //pour la modification
    const [id,setId]=useState(null);
    //
    const [nom,setNom]=useState(null);
    const [pays,setPays]=useState(null);

    const handleOnModifier=(e)=>{
        e.preventDefault();
        
        if(!formValidation()){
            return false;
        }
        fetch("http://localhost:3000/api/marque/"+id,{
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({nom,pays})
        }).then(()=>{
            RefreshData();
            toast.success('marque est modifiée avec succès', { toastId: 1, autoClose: 4000 });
            console.log('updated');

        }).catch(err=>console.log(err));
    }

    const formValidation = () => {
        if(nom.length ==0 || !nom.trim()){
            toast.error('le nom de marque ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        if(pays.length ==0 || !pays.trim()){
            toast.error('pays de marque ne peut pas être vide', { toastId: 1, autoClose: 6000 });
            
            return false;
        }
        return true;
    }

    const handleOnSupprimer=(e)=>{

        e.preventDefault();
        axios.delete("http://localhost:3000/api/marque/"+id).then(response => {

            const newList=marques.Marques.filter(m=>{
                return m.id !== id;
            })
            let newMarques = JSON.parse(JSON.stringify(marques));
            newMarques.Marques = newList;
            setMarques(newMarques);
            toast.success('marque est suprimée avec succès', { toastId: 1, autoClose: 4000 });

        })
    }
    const RefreshData = () => {
        const abortCont = new AbortController();
        fetch('http://localhost:3000/api/marque/tous/'+CURRENT_PAGE+'/'+PAGE_SIZE, { signal: abortCont.signal })
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setMarques(data);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.log(err.message);
                }
            })

        return () => abortCont.abort();
    }

    

    const handleOnAjouter=(data)=>{

        const abortCont = new AbortController();
        fetch('http://localhost:3000/api/marque/ajouter',
            {
                signal: abortCont.signal,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
            .then(res => {
                RefreshData();
                toast.success('cette marque est ajoutée avec succès', { toastId: 1, autoClose: 4000 });
                console.log(res.json())
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.log(err.message);
                }
                return () => abortCont.abort();
            });
    }
    
    const handleOnRechercher=(nom)=>{

        const abortCont = new AbortController();
        fetch('http://localhost:3000/api/marque/nom/'+nom,
            {
                signal: abortCont.signal,
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        .then(res =>{
            return res.json();
        })
            .then(res =>{
                console.log(res);
                setMarques({Marques:[res],NombreDepages:1} );
                setCurrentPage(1);
            } )
            
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.log(err.message);
                }
                return () => abortCont.abort();
            })
    }

    return ( 
        <>
            <div className="container checkout">
                <hr className="offset-md" />
                <div className="row">
                    <div className="col-md-12 white">
                        <hr className="offset-md visible-xs visible-sm" />
                        <div className="container-xl">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h2>Gérer <b>les marques</b></h2>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="ion-ios-plus-outline"></i> <span style={{ marginTop: 6 }}>ajouter une nouvelle marque</span></a>
                                                <a href="#FindUtilisateurModal" className="btn btn-warning" data-toggle="modal"><i className="ion-ios-search"></i> <span style={{ marginTop: 6 }}>Rechercher</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>
                                                    
                                                </th>
                                                <th>id</th>
                                                <th>nom </th>
                                                <th>pays </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {marques.Marques?.map(marque =>{
                                                
                                                const handleClique= ()=>{
                                                    setId(marque.id)
                                                }
                                                return <tr key={marque.id}>
                                                    <td>
                                                        
                                                    </td>
                                                    <td>{marque.id}</td>
                                                    <td>{marque.nom}</td>
                                                    <td>{marque.pays}</td>
                                                    <td>
                                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal" onClick={handleClique} ><i className="ion-android-create" data-toggle="tooltip" title="Edit"></i></a>
                                                        <a href="#deleteEmployeeModal" className="delete" onClick={handleClique} data-toggle="modal"><i className="ion-ios-trash" data-toggle="tooltip" title="Delete"></i></a>
                                                    </td>
                                                </tr>}

                                            )}
                                        </tbody>
                                    </table>
                                    <div className="clearfix">
                                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                        <ul className="pagination">
                                            <li className="page-item"  ><button disabled={CURRENT_PAGE===1?true:false}  onClick={()=>setCurrentPage(CURRENT_PAGE-1)}>Previous</button></li>
                                            {pages.map((pageIndex)=>(
                                                <li className="page-item"><button onClick={()=>setCurrentPage(pageIndex+1)} href="#" className="page-link">{pageIndex}</button></li>
                                            ))}
                                            
                                            <li className="page-item"><button disabled={CURRENT_PAGE===marques.NombreDepages?true:false} onClick={()=>setCurrentPage(CURRENT_PAGE+1)}  className="page-link">Next</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AjouterForm handleOnAjouter={handleOnAjouter} />
            <RechercherForm handleOnRechercher={handleOnRechercher} />
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnModifier}>
                            <div className="modal-header">
                                <h4 className="modal-title">Modifier une categorie</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" onChange={(e) => { setNom(e.target.value) }} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Pays</label>
                                    <input type="text" onChange={(e) => { setPays(e.target.value) }} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Annuler" />
                                <input type="submit" className="btn btn-info" value="Enregistre" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSupprimer}>
                            <div className="modal-header">
                                <h4 className="modal-title">Supprimer une categorie</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>êtes vous sûr ?</p>
                                <p className="text-warning"><small>cette action ne peut pas être annulée</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Annuler" />
                                <input type="submit" className="btn btn-danger" value="Supprimer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <ScriptTag type="text/javascript" src="/assets/js/core.js" />
        </>
     
     );
}
 
export default Marques;