import { useEffect, useState } from "react";
import axios from 'axios';


const useAxios = (url) => {

    const [data, setData] = useState(null);
    useEffect(()=>{
        
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        axios.get(url,{
            cancelToken: source.token,
          }).then(res=>{
            console.log(res.data.results);
            setData(res.data);
        }).catch((err)=>{
            if (axios.isCancel(err)) {
                return "axios request cancelled";
               }
            console.log(err);
        })

        return () => source.cancel("axios request cancelled");
           
        
    },[url]);



    return {
        data
    }
}
 
export default useAxios;