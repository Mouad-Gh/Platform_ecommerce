import './style.css';
import useFetch from '../../../helpers/useFetch';
import AjouterForm from './AjouterForm';
import ScriptTag from 'react-script-tag/lib/ScriptTag';
import { toast } from 'react-toastify';
import AdminActions from '../../../actions/AdminActions'
import { useState } from 'react';
import RechercherForm from './RechercherForm';

const Clients = () => {
    const PAGE_SIZE = 5;
    let CURRENT_PAGE=1;
    const [role, setRole] = useState('utilisateur');
    const { data, setData } = useFetch('http://localhost:3000/api/'+role+'/tous/1/'+PAGE_SIZE);
    console.log(data);

    const RefreshData = () => {
        const abortCont = new AbortController();
        fetch('http://localhost:3000/api/'+role+'/tous/1/'+PAGE_SIZE, { signal: abortCont.signal })
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setData(data);
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
                RefreshData();
                toast.success('vos informations est modifiées avec succès', { toastId: 1, autoClose: 4000 });
            }
        });

    }

    const handleOnRechercher = (body, role) => {
        AdminActions.RechercherUtilisateur(body, role).then((res) => {
            if (res) {
                setRole(role);
                setData(res);
            }
        });
    }

    const handleUtilisateurChange = (role) => {
        AdminActions.getUtilisateurs(role,CURRENT_PAGE).then((res) => {
            if (res) {
                setData(res);
            }
        });
    }

    return (
        <>
            <div className="container checkout">
                <hr className="offset-md" />
                <div className="form-group">
                    <div className="group-select justify" tabIndex='1'>
                        <input className="form-control select" id="role" name="role" defaultValue={role==='utilisateur' ? 'Tous':role } placeholder="" required="" />

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
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h2>Gérer <b>les clients</b></h2>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="ion-ios-plus-outline"></i> <span style={{ marginTop: 6 }}>ajouter un nouveau achteur</span></a>
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
                                                <th>Nom et Prénom</th>
                                                <th>Sexe</th>
                                                <th>Adress</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.utilisateurs?.map(utilisateur =>
                                                <tr key={utilisateur.id}>
                                                    <td>
                                                        <span className="custom-checkbox">
                                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                            <label htmlFor="checkbox1"></label>
                                                        </span>
                                                    </td>
                                                    <td>{utilisateur.Utilisateur.Nom + ' ' + utilisateur.Utilisateur.Prenom}</td>
                                                    <td>{utilisateur.Utilisateur.Sexe}</td>
                                                    <td>{utilisateur.Utilisateur.Adress}</td>
                                                    <td>{utilisateur.Utilisateur.Email}</td>
                                                    <td>
                                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="ion-android-create" data-toggle="tooltip" title="Edit"></i></a>
                                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="ion-ios-trash" data-toggle="tooltip" title="Delete"></i></a>
                                                    </td>
                                                </tr>

                                            )}
                                        </tbody>
                                    </table>
                                    <div className="clearfix">
                                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a href="#">Previous</a></li>
                                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
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
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
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
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
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

export default Clients;