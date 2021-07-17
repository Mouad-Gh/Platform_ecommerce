import Tags from "../../component/Profile/Tags";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InformationsForm from '../../component/Profile/InformationsForm';
import CommandeList from '../../component/Profile/CommandeList';
import ChangerMDP from '../../component/Profile/ChangerMDP';
const Profile = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Tags path={path} />
            <Switch>
            <Route exact path={path}>
                    <InformationsForm />
                </Route>
                <Route path={`${path}/informations`}>
                    <InformationsForm />
                </Route>
                <Route path={`${path}/Commandes`}>
                    <CommandeList />
                </Route>
                <Route path={`${path}/changermdp`}>
                    <ChangerMDP />
                </Route>
            </Switch>
        </>
    );
}

export default Profile;

