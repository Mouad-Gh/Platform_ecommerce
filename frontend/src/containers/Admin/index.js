import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Clients from "../../component/Admin/Clients";
import Tags from "../../component/Admin/Tags"
import Categories from "../../component/Admin/Categories";
import Marques from "../../component/Admin/Marques";
import PrivateRoute from "../../component/PrivateRoute";

const Admin = () => {
    let { path } = useRouteMatch();
    return (
        <div>
            <Tags path={path} />
            <Switch>
                <PrivateRoute exact path={path}>
                    <Redirect exact  from="/" to={`${path}/Clients`} />
                </PrivateRoute>
                <PrivateRoute exact path={`${path}/Clients`}>
                    <Clients />
                </PrivateRoute>
                {/* ajouter la route de Categorie */}
                <PrivateRoute path={`${path}/Categories`}>
                    <Categories />
                </PrivateRoute>
                <PrivateRoute path={`${path}/Marques`}>
                    <Marques />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default Admin;