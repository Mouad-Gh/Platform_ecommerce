

const ComboBox = ({onOptionChange,options,value,nom}) => {

    //const [option, setOption] = useState(null);
    
    return ( 
        <div className="row group">
            <div className="col-sm-4"><h2 className="h4">{nom}</h2></div>
            <div className="col-sm-8">
                { options && <select className="form-control" 
                value={value}
                onChange={(e)=>onOptionChange(e.target.value)}  >
                    { options.map(option=>{
                        return <option key={option.id} value={option.id}>{(nom==="Categorie")? option.nom_categorie:option.nom}</option>;
                    })}
                </select>}
            </div>
        </div>
     );
}
 
export default ComboBox;