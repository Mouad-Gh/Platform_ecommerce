import React from 'react';
const Tags = (props) => {
    return (
        <div className="tags">
            <div className="container">
                <div className="btn-group pull-right sorting">
                    <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i className="ion-arrow-down-b"></i> Tri par
                    </button>

                    <ul className="dropdown-menu">
                        <li className="active"><a onClick={(e)=>{props.handleTri('nom','ASC')}}> <i className="ion-arrow-down-c"></i> Nom [A-Z]</a></li>
                        <li><a onClick={(e)=>{props.handleTri('nom','DESC')}}> <i className="ion-arrow-up-c"></i> Nom [Z-A]</a></li>
                        <li><a onClick={(e)=>{props.handleTri('PU','ASC')}}> <i className="ion-arrow-down-c"></i> Prix [Bas-Haut]</a></li>
                        <li><a onClick={(e)=>{props.handleTri('PU','DESC')}}> <i className="ion-arrow-up-c"></i> Prix [Haut-Bas]</a></li>
                    </ul>
                </div>

                <p>Recherche par tags</p>
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-default btn-sm active" onClick={()=>props.handleChangeCategorie('All')}>
                        <input type="radio" name="options" id="option1" defaultChecked /> Tous les produits
                    </label>
                    {
                        props.data.map(categorie => 
                            <label className="btn btn-default btn-sm" key={categorie.id} onClick={()=>props.handleChangeCategorie(categorie.nom_categorie)}>
                                <input type="radio"  /> {categorie.nom_categorie}
                            </label>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Tags;