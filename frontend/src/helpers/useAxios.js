import { useEffect, useState } from "react";
import axios from 'axios';


const useAxios = (url) => {

    const [data, setData] = useState(null);
    useEffect(()=>{
        
        axios.get(url).then(res=>{
            console.log(res.data.results);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })

        
    },[url]);



    return {
        data
    }
}
 
export default useAxios;