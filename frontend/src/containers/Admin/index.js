import { Route, Switch, useRouteMatch } from "react-router-dom";
import Clients from "../../component/Admin/Clients";
import Tags from "../../component/Admin/Tags"
import Categories from "../../component/Admin/Categories";
import Marques from "../../component/Admin/Marques";

const Admin = () => {
    let { path } = useRouteMatch();
    return (
        <div>
            <Tags />
            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/Clients`}>
                    <Clients />
                </Route>
                <Route path={`${path}/Commandes`}>

                </Route>
                <Route path={`${path}/changermdp`}>

                </Route>
                {/* ajouter la route de Categorie */}
                <Route path={`${path}/Categories`}>
                    <Categories />
                </Route>
                <Route path={`${path}/Marques`}>
                    <Marques />
                </Route>
            </Switch>
        </div>
    );
}

export default Admin;