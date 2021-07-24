const { authHeader } = require("../helpers/auth-header");


exports.ajouterUtilisateur = (body, role) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/ajouter';
    console.log(authHeader());
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'POST',
            headers: authHeader(),
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

exports.RechercherUtilisateur = (body, role, page) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/find/' + page + '/5' + '?Nom=' + body.Nom + '&Prenom=' + body.Prenom;
    console.log(url);
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'GET',
            headers: authHeader(),
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

exports.getUtilisateurs = (role, page) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/' + role + '/tous/' + page + '/5';
    console.log(url);
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'GET',
            headers: authHeader(),
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

exports.updateUtilisateur = (body, id, role) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/utilisateur/' + id+'/info';
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'PUT',
            headers: authHeader(),
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

exports.deleteUtilisateur = (id) => {
    const abortCont = new AbortController();
    let url = 'http://localhost:3000/api/utilisateur/'+id;
    return fetch(url,
        {
            signal: abortCont.signal,
            method: 'DELETE',
            headers: authHeader(),
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