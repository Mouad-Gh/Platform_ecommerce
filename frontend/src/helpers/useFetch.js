import { useEffect, useState } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState([]);
    useEffect(()=>{
        const abortCont = new AbortController();
        

        fetch(url,{signal:abortCont.signal})
        .then(res =>{
            return res.json();
        })
        .then((data)=>{
            setData(data);
            console.log(data);
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
        data
    }
}

export default useFetch;