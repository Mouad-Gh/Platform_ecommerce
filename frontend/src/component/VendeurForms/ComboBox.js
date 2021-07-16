

const ComboBox = ({onOptionChange,options,value}) => {

    //const [option, setOption] = useState(null);
    
    return ( 
        <div className="row group">
            <div className="col-sm-4"><h2 className="h4">Paiement</h2></div>
            <div className="col-sm-8">
                <select class="form-control" 
                value={value}
                onChange={(e)=>onOptionChange(e.target.value)}  >
                    {options.map(option=>{
                        return <option value={option.id}>{option.nom}</option>;
                    })}
                </select>
            </div>
        </div>
     );
}
 
export default ComboBox;