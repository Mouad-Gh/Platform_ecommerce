const { authHeader } = require("../helpers/auth-header");

exports.supprimerProduit_souhaite = (id) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/produits_souhaite/' + id;
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'DELETE',
            headers: authHeader()
        }
    )
        .then(res => res.json())
        .then((res) => {
            return res;
        })
        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                console.log(err.message);
            }
            return () => abortCont.abort();
        })

}

exports.ajouterProduit_souhaite = (body)=>{
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/produits_souhaite/ajouter';
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'POST',
            headers: authHeader(),
            body:JSON.stringify(body)
        }
    )
        .then(res => res.json())
        .then((res) => {
            return res;
        })
        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                console.log(err.message);
            }
            return () => abortCont.abort();
        })

}