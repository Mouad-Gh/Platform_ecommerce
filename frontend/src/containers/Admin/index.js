import { Route, Switch, useRouteMatch } from "react-router-dom";
import Clients from "../../component/Admin/Clients";
import Tags from "../../component/Admin/Tags"

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
            </Switch>
        </div>
    );
}

export default Admin;