import ProduitPanier from "./ProduitPanier";

const CommandePanier = () => {
    const produits=[{
        id: 12,
        nom: "iPad Air",
        PU: 499.99,
        Produit_images: [
            {
                "id": 18,
                "chemin_fichier": "../assets/img/products/ipad-air.jpg",
                "estPrincipale": 1,
                "createdAt": "2021-07-12T20:58:43.000Z",
                "updatedAt": "2021-07-12T20:58:43.000Z",
                "ProduitId": 12
            }
        ],
        Categorie:{
            "id": 2,
            "nom_categorie": "Tablets",
            "createdAt": "2021-07-11T01:13:31.000Z",
            "updatedAt": "2021-07-11T01:13:31.000Z"
        }
    },
    {
        id: 13,
        nom: "Mi Pad 2",
        PU: 199.99,
        Produit_images: [
            {
                "id": 18,
                "chemin_fichier": "../assets/img/products/mi-pad-2.jpg",
                "estPrincipale": 1,
                "createdAt": "2021-07-12T20:58:43.000Z",
                "updatedAt": "2021-07-12T20:58:43.000Z",
                "ProduitId": 13
            }
        ],
        Categorie:{
            "id": 2,
            "nom_categorie": "Tablets",
            "createdAt": "2021-07-11T01:13:31.000Z",
            "updatedAt": "2021-07-11T01:13:31.000Z"
        }
    },
    {
        id: 14,
        nom: "Lenovo Yoga",
        PU: 199.99,
        Produit_images: [
            {
                "id": 18,
                "chemin_fichier": "../assets/img/products/lenovo-yoga.jpg",
                "estPrincipale": 1,
                "createdAt": "2021-07-12T20:58:43.000Z",
                "updatedAt": "2021-07-12T20:58:43.000Z",
                "ProduitId": 14
            }
        ],
        Categorie:{
            "id": 3,
            "nom_categorie": "Hybrid",
            "createdAt": "2021-07-11T01:13:31.000Z",
            "updatedAt": "2021-07-11T01:13:31.000Z"
        }
    },
    {
        id: 15,
        nom: "Surface Pro",
        PU: 199.99,
        Produit_images: [
            {
                "id": 18,
                "chemin_fichier": "../assets/img/products/surface-pro.jpg",
                "estPrincipale": 1,
                "createdAt": "2021-07-12T20:58:43.000Z",
                "updatedAt": "2021-07-12T20:58:43.000Z",
                "ProduitId": 15
            }
        ],
        Categorie:{
            "id": 3,
            "nom_categorie": "Hybrid",
            "createdAt": "2021-07-11T01:13:31.000Z",
            "updatedAt": "2021-07-11T01:13:31.000Z"
        }
    },
    {
        id: 16,
        nom: "ASUS Transformer",
        PU: 199.99,
        Produit_images: [
            {
                "id": 18,
                "chemin_fichier": "../assets/img/products/asus-transformer.jpg",
                "estPrincipale": 1,
                "createdAt": "2021-07-12T20:58:43.000Z",
                "updatedAt": "2021-07-12T20:58:43.000Z",
                "ProduitId": 16
            }
        ],
        Categorie:{
            "id": 3,
            "nom_categorie": "Hybrid",
            "createdAt": "2021-07-11T01:13:31.000Z",
            "updatedAt": "2021-07-11T01:13:31.000Z"
        }
    }
    ];
    return ( 
        <div className="col-md-5 white">
            <hr className="offset-md visible-xs visible-sm" />
            <div className="checkout-cart">
                <div className="content">

                    

                    {produits && produits.map((produit)=>{
                        return (<ProduitPanier produit={produit} />);
                    })}

                    

                </div>
            </div>
            <hr className="offset-md visible-xs visible-sm" />
        </div>
     );
}
 
export default CommandePanier;