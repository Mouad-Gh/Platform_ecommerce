import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Layout from './containers/Layout';
import Accueil from './containers/Accueil';
import Store from './containers/Store';
import Produit from './containers/Produit';
import Commande from './containers/Commande';
import Panier from './component/Panier';
import './App.css';

function App() {

  //panier produits
  const [produits, setProduits] = useState(null);

  useEffect(() => {
    const jsonProduits = localStorage.getItem("panier");
    const localProduits = JSON.parse(jsonProduits);
    setProduits(localProduits);
  }, [produits]);

  //ajouter au panier
  const handleAjouterPanier = (produit) => {
    if (produits) {
      const produitsClone = produits.slice();
      let produitRechereche = produitsClone.find(p => p.id === produit.id);
      if(!produitRechereche){
        produitsClone.push(produit);
        setProduits(produitsClone);
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

    if (increase && produit.qte + 1 < 100) {
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
    <Router>
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
        <Route path="/Commande" > <Commande /> </Route>
      </Switch>

    </Layout>
  </Router>
  );
}

export default App;
