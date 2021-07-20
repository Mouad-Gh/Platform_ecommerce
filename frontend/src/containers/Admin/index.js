import { Route, Switch, useRouteMatch } from "react-router-dom";
import Clients from "../../component/Admin/Clients";
import Tags from "../../component/Admin/Tags"
import Categories from "../../component/Admin/Categories";

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
            </Switch>
        </div>
    );
}

export default Admin;