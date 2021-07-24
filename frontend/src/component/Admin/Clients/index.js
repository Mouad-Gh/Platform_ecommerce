import './style.css';
import useFetch from '../../../helpers/useFetch';
import AjouterForm from './AjouterForm';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import { toast } from 'react-toastify';
import AdminActions from '../../../actions/AdminActions'
import { useEffect, useState } from 'react';
import RechercherForm from './RechercherForm';
import ModifierForm from './ModifierForm';
import axios from 'axios';
import Pagination from './Pagination';
import { authHeader } from '../../../helpers/auth-header';


const Clients = () => {
    const PAGE_SIZE = 5;
    const [CURRENT_PAGE, setCURRENT_PAGE] = useState(1);
    const [role, setRole] = useState('utilisateur');
    const [utilisateurId, setUtilisateurId] = useState(0);
    const { data, setData } = useFetch('http://localhost:3000/api/' + role + '/tous/1/' + PAGE_SIZE);
    
    
    const refreshData = (page = 1) => {
        const abortCont = new AbortController();
        var config = { headers: authHeader() };
        console.log('http://localhost:3000/api/' + role + '/tous/' + CURRENT_PAGE + '/' + PAGE_SIZE);
        axios('http://localhost:3000/api/' + role + '/tous/' + CURRENT_PAGE + '/' + PAGE_SIZE, config)
            .then((data) => {
                setData(data.data);
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

    const handleOnAjouter = (body, role) => {
        AdminActions.ajouterUtilisateur(body, role).then((res) => {
            if (res) {
                setRole(role);
                refreshData();
                toast.success('l\'utilisateur est ajouter avec succès', { toastId: 1, autoClose: 4000 });
            }
        });

    }

    const handleOnRechercher = (body, role) => {
        AdminActions.RechercherUtilisateur(body, role, 1).then((res) => {
            if (res) {
                setData(res);
            }
        });
    }

    const handleOnSupprimer = (id) => {
        AdminActions.deleteUtilisateur(id).then((res) => {
            if (res.message) {
                refreshData();
                toast.success('l\'utilisateur est supprimer avec succès', { toastId: 2, autoClose: 4000 });
            }
        })
    }

    const handleUtilisateurChange = (role) => {
        AdminActions.getUtilisateurs(role, CURRENT_PAGE).then((res) => {
            if (res) {
                setRole(role);
                setData(res);
            }
        });
    }

    const changeUtilisateurID = (id) => {
        setUtilisateurId(id);
    }

    const handleOnModifier = (body) => {
        AdminActions.updateUtilisateur(body, utilisateurId).then((res) => {
            if (res) {
                toast.success('vos informations est modifiées avec succès', { toastId: 3, autoClose: 4000 });
                refreshData();
            }
        });
    }

    const changePage = (page) => {
        setCURRENT_PAGE(page);
    }

    useEffect(() => {
        refreshData();
    }, [CURRENT_PAGE]);
    return (
        <>
            <div className="container checkout">
                <hr className="offset-md" />
                <div className="form-group">
                    <div className="group-select justify" tabIndex='1'>
                        <input className="form-control select" id="role" name="role" defaultValue={role === 'utilisateur' ? 'Tous' : role} placeholder="" required="" />

                        <ul className="dropdown">
                            <li data-value="Tous" onClick={(e) => { handleUtilisateurChange('utilisateur') }}>Tous</li>
                            <li data-value="acheteur" onClick={(e) => { handleUtilisateurChange('acheteur') }}>Acheteur</li>
                            <li data-value="vendeur" onClick={(e) => { handleUtilisateurChange('vendeur') }}>Vendeur</li>
                            <li data-value="admin" onClick={(e) => { handleUtilisateurChange('admin') }}>Admin</li>
                        </ul>

                        <div className="arrow bold"><i className="ion-chevron-down"></i></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 white">
                        <hr className="offset-md visible-xs visible-sm" />
                        <div className="container-xl">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h2>Gérer <b>les clients</b></h2>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="ion-ios-plus-outline"></i> <span style={{ marginTop: 6 }}>ajouter un nouveau achteur</span></a>
                                                <a href="#FindUtilisateurModal" className="btn btn-warning" data-toggle="modal"><i className="ion-ios-search"></i> <span style={{ marginTop: 6 }}>Rechercher</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    {!data.utilisateurs?.length && <h1 className="text-center">Il n'y a pas d'utilisateur</h1>}
                                    {!!data.utilisateurs?.length &&
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>
                                                    </th>
                                                    <th>Nom et Prénom</th>
                                                    <th>Sexe</th>
                                                    <th>Adress</th>
                                                    <th>Email</th>
                                                    <th>role</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.utilisateurs?.map(utilisateur =>
                                                    <tr key={utilisateur.Utilisateur.id}>
                                                        <td>
                                                        </td>
                                                        <td>{utilisateur.Utilisateur.Nom + ' ' + utilisateur.Utilisateur.Prenom}</td>
                                                        <td>{utilisateur.Utilisateur.Sexe}</td>
                                                        <td>{utilisateur.Utilisateur.Adress}</td>
                                                        <td>{utilisateur.Utilisateur.Email}</td>
                                                        <td>{utilisateur.role}</td>
                                                        <td>
                                                            <a href="#ModifierModal" className="edit" data-toggle="modal" onClick={(e) => { changeUtilisateurID(utilisateur.Utilisateur.id) }}><i className="ion-android-create" data-toggle="tooltip" title="Edit"></i></a>
                                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal" onClick={(e) => { changeUtilisateurID(utilisateur.Utilisateur.id) }}><i className="ion-ios-trash" data-toggle="tooltip" title="Delete"></i></a>
                                                        </td>
                                                    </tr>

                                                )}
                                            </tbody>
                                        </table>
                                    }
                                    <Pagination currentPage={CURRENT_PAGE} TotalPages={data.NombreDeLigne} changePage={changePage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AjouterForm handleOnAjouter={handleOnAjouter} />
            <RechercherForm handleOnRechercher={handleOnRechercher} />
            <ModifierForm utilisateurId={utilisateurId} role={role} handleOnModifier={handleOnModifier} />
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <div className="modal-header">
                                <h4 className="modal-title">Supprimer Client</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Êtes-vous sûr de vouloir supprimer ce client ?</p>
                                <p className="text-warning"><small>Cette action ne peut pas être annulée.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Annuler" />
                                <input type="submit" className="btn btn-danger" value="Supprimer" onClick={() => { handleOnSupprimer(utilisateurId) }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            

        </>
    );
}

export default Clients;