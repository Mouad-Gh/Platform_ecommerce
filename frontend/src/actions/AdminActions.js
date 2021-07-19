exports.ajouterUtilisateur = (body, role) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/ajouter';
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
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

exports.RechercherUtilisateur = (body,role) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/find?Nom='+body.Nom+'&Prenom='+body.Prenom;
    console.log(url);
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
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

exports.getUtilisateurs = (role,page)=>{
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/tous/'+page+'/5';
    console.log(url);
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
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