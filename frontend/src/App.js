import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Layout from './containers/Layout';
import Accueil from './containers/Accueil';
import Store from './containers/Store';
import Produit from './containers/Produit';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/"><Accueil /></Route>
          <Route exact path="/Accueil"><Accueil /></Route>
          <Route path="/Store"><Store /></Route>
          <Route path="/Produit/:id" > <Produit /> </Route>
        </Switch>
        
      </Layout>
    </Router>
  );
}

export default App;
