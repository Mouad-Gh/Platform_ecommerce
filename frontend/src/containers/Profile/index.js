import Tags from "../../component/Profile/Tags";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InformationsForm from '../../component/Profile/InformationsForm';
import CommandeList from '../../component/Profile/CommandeList';
import ChangerMDP from '../../component/Profile/ChangerMDP';
import PrivateRoute from "../../component/PrivateRoute";
const Profile = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Tags path={path} />
            <Switch>
                <PrivateRoute exact path={path}>
                    <InformationsForm />
                </PrivateRoute>
                <PrivateRoute path={`${path}/informations`}>
                    <InformationsForm />
                </PrivateRoute>
                <PrivateRoute path={`${path}/Commandes`}>
                    <CommandeList />
                </PrivateRoute>
                <PrivateRoute path={`${path}/changermdp`}>
                    <ChangerMDP />
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default Profile;

