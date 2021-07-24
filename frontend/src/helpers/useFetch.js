import { useEffect, useState } from "react";
import {authHeader} from '../helpers/auth-header';
const useFetch = (url) =>{

    const [data, setData] = useState([]);
    useEffect(()=>{
        const abortCont = new AbortController();
        
        const opt = {};
        opt.headers= authHeader();
        opt.signal=abortCont.signal;
        fetch(url,opt)
        .then(res =>{
            return res.json();
        })
        .then((data)=>{
            setData(data);
        })
        .catch((err)=>{
            if(err.name==='AbortError'){
                 console.log('fetch aborted');
            }else{
                console.log(err.message);
            }
        })

        return ()=>abortCont.abort();
    },[url]);



    return {
        data,
        setData
    }
}

export default useFetch;