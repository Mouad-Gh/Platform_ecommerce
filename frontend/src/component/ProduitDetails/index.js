

const ProduitDetails= (props)=>{


    return (
        <div className="col-sm-7 white sm-padding">
            <hr className="offset-sm visible-xs"/>

            <h2 className="h1">{props.produit}</h2>
            <br/>

            <p> {props.desc} </p>
            <br/>

             <h2>Product specifications</h2>
             <br/>

             { props.specifications &&  props.specifications.map((specification)=>{
               return(
                <div key={specification.id} className="row specification">
                <div className="col-sm-4"> <label>{specification.nom}</label> </div>
                <div className="col-sm-8"> <p>{specification.valeur}</p> </div>
                </div>
               )
             }) }

              
              <hr className="offset-lg"/>
        </div>
    );
}

export default ProduitDetails;