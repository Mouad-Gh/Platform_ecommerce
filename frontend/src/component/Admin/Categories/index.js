//import './style.css';
import useFetch from '../../../helpers/useFetch';
import AjouterForm from './AjouterForm';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import { toast } from 'react-toastify';
import { useState } from 'react';
import RechercherForm from './RechercherForm';
import axios from 'axios';

const Categories = () => {

    const PAGE_SIZE = 5;
    
    const [CURRENT_PAGE,setCurrentPage]=useState(1);
    const {data:categories,setData:setCategories} = useFetch('http://localhost:3000/api/categorie/tous/'+CURRENT_PAGE+'/'+PAGE_SIZE);
    console.log(categories);
    const pages=new Array(categories.NombreDepages).fill(null).map((v,i)=>i);

    //pour la modification
    const [id,setId]=useState(null);
    //
    const [nom_categorie,setNom_categorie]=useState(null);

    const handleOnModifier=(e)=>{
        e.preventDefault();
        console.log(id,nom_categorie);
        fetch("http://localhost:3000/api/categorie/"+id,{
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({nom_categorie})
        }).then(()=>{
            RefreshData();
            toast.success('categorie est modifiée avec succès', { toastId: 1, autoClose: 4000 });
            console.log('updated');

        }).catch(err=>console.log(err));
    }
    const handleOnSupprimer=(e)=>{

        e.preventDefault();
        axios.delete("http://localhost:3000/api/categorie/"+id).then(response => {
            console.log((response.data))
            const newList=categories.filter(p=>{
                return p.id !== id;
            });
            setCategories(newList);
            toast.success('categorie est suprimée avec succès', { toastId: 1, autoClose: 4000 });

        })
    }
    const RefreshData = () => {
        const abortCont = new AbortController();
        fetch('http://localhost:3000/api/categorie/tous/'+CURRENT_PAGE+'/'+PAGE_SIZE, { signal: abortCont.signal })
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setCategories(data);
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
        fetch('http://localhost:3000/api/categorie/ajouter',
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
                toast.success('cette categorie est ajoutée avec succès', { toastId: 1, autoClose: 4000 });
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
        fetch('http://localhost:3000/api/categorie/nom/'+nom,
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
                setCategories([res] );
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
                                                <h2>Gérer <b>les categories</b></h2>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="ion-ios-plus-outline"></i> <span style={{ marginTop: 6 }}>ajouter une nouvelle categorie</span></a>
                                                <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="ion-ios-trash-outline"></i> <span style={{ marginTop: 6 }}>Supprimer</span></a>
                                                <a href="#FindUtilisateurModal" className="btn btn-warning" data-toggle="modal"><i className="ion-ios-search"></i> <span style={{ marginTop: 6 }}>Rechercher</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="selectAll" />
                                                        <label for="selectAll"></label>
                                                    </span>
                                                </th>
                                                <th>id</th>
                                                <th>nom de categorie</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories.Categories?.map(categorie =>{
                                                
                                                const handleClique= ()=>{
                                                    setId(categorie.id)
                                                }
                                                return <tr key={categorie.id}>
                                                    <td>
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                            <label htmlFor="checkbox1"></label>
                                                        </span>
                                                    </td>
                                                    <td>{categorie.id}</td>
                                                    <td>{categorie.nom_categorie}</td>
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
                                            
                                            <li className="page-item"><button disabled={CURRENT_PAGE===categories.NombreDepages?true:false} onClick={()=>setCurrentPage(CURRENT_PAGE+1)}  className="page-link">Next</button></li>
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
                                    <input type="text" onChange={(e) => { setNom_categorie(e.target.value) }} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" />
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
                                <p className="text-warning"><small>Cette action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <ScriptTag type="text/javascript" src="/assets/js/core.js" />
        </>
     );
}
 
export default Categories;