import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Layout from './containers/Layout';
import Accueil from './containers/Accueil';
import Store from './containers/Store';
import Produit from './containers/Produit';
import Commande from './containers/Commande';
import Vendeur from './containers/Vendeur';
import Panier from './component/Panier';
import Favoris from './containers/favoris';
import ProduitAjout from './component/VendeurForms/ProduitAjout';
import ProduitModification from './component/VendeurForms/ProduitListBoutique.js/ProduitModification';
import Profile from './containers/Profile';
import './App.css';
import Admin from './containers/Admin';
import Inscription from './containers/Inscription';
import Login from './containers/Login';
import PrivateRoute from './component/PrivateRoute'
import { history } from './helpers/history';

function App() {

  //panier produits
  const [produits, setProduits] = useState(null);

  useEffect(() => {
    const jsonProduits = localStorage.getItem("panier");
    const localProduits = JSON.parse(jsonProduits);
    setProduits(localProduits);
  }, []);

  //ajouter au panier
  const handleAjouterPanier = (produit) => {
    if (produits) {
      const produitsClone = produits.slice();
      let produitRechereche = produitsClone.find(p => p.id === produit.id);
      if (!produitRechereche) {
        produitsClone.push(produit);
        setProduits(produitsClone);
        console.log(produitsClone);
        localStorage.setItem('panier', JSON.stringify(produitsClone));
      }
    }
    else {
      setProduits([produit]);
      localStorage.setItem('panier', JSON.stringify([produit]));
    }

  }

  //supprimer au panier
  const handleSupprimerPanier = (produitId) => {
    let produitsClone = produits.slice();
    produitsClone = produitsClone.filter(p => p.id != produitId);
    setProduits(produitsClone);
    localStorage.setItem('panier', JSON.stringify(produitsClone));
  }

  //modifier la quantite au panier
  const handleModfierPanier = (produitId, increase) => {
    let produitsClone = produits.slice();
    let produit = produitsClone.find(p => p.id === produitId);

    if (increase && produit.qte + 1 < 5) {
      produit.qte++;
    }
    if (!increase && produit.qte - 1 > 0) {
      produit.qte--;
    }

    for (let index = 0; index < produitsClone.length; index++) {
      if (produitsClone[index].id === produit.id) {
        produitsClone[index] = produit;
      }
    }

    setProduits(produitsClone);
    localStorage.setItem('panier', JSON.stringify(produitsClone));
  }

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Accueil handleAjouterPanier={handleAjouterPanier} />
          </Route>
          <Route exact path="/Accueil">
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Accueil handleAjouterPanier={handleAjouterPanier} />
          </Route>
          <Route path="/Store" >
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Store handleAjouterPanier={handleAjouterPanier} />
          </Route>
          <PrivateRoute path="/Commande" > <Commande handleSupprimerPanier={handleSupprimerPanier} /> </PrivateRoute>
          <Route path="/Produit/:id" >
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Produit handleAjouterPanier={handleAjouterPanier} />
          </Route>

          <PrivateRoute role="vendeur" path="/Vendeur" > <Vendeur /> </PrivateRoute>
          <PrivateRoute role="vendeur" path="/ajouter" > <ProduitAjout /> </PrivateRoute>
          <PrivateRoute role="vendeur" path="/modifier" > <ProduitModification /> </PrivateRoute>
          <Route path="/Profile" >
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Profile handleAjouterPanier={handleAjouterPanier} />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Inscription">
            <Inscription />
          </Route>
          <PrivateRoute path="/Favoris" >
            <Panier data={produits}
              handleSupprimerPanier={handleSupprimerPanier}
              handleModfierPanier={handleModfierPanier}
            />
            <Favoris handleAjouterPanier={handleAjouterPanier} />
          </PrivateRoute>
          <Route  path="/Admin">
            <Admin />
          </Route >
        </Switch>
        <ToastContainer />
      </Layout>
    </Router>
  );
}

export default App;
