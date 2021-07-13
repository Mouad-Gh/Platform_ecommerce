import React, { useState } from "react";
const Filters = (props) => {
    const [marques, setMarques] = useState([]);
    const [minPrix, setMinPrix] = useState(-1);
    const [maxPrix, setMaxPrix] = useState(-1);

    const handleMarqueChanged = (marqueId) => {
        const index = marques.indexOf(marqueId);
        let cloneMarques = marques;
        if (index >= 0) {
            cloneMarques.splice(index, 1);
        }
        else {
            cloneMarques.push(marqueId);
        }
        setMarques(cloneMarques);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { marques, minPrix, maxPrix };
        props.handleRechercher(data);
    }



    return (
        <div className="col-sm-4 col-md-3">
            <hr className="offset-lg" />
            <div className="filter">
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <div className="title">
                            <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown"></i> Open</a>
                            <h1 className="h4">Prix</h1>
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Start" onChange={(e) => { setMinPrix(e.target.value) }} />
                            <span className="input-group-addon">-</span>
                            <input type="text" className="form-control" placeholder="End" onChange={(e) => { setMaxPrix(e.target.value) }} />
                        </div>
                    </div>
                    <br />

                    <div className="item">
                        <div className="title">
                            <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown"></i> Open</a>
                            <h1 className="h4">Fabricant</h1>
                        </div>

                        <div className="controls">
                            {
                                props.marques.map(marque =>
                                    <div className="checkbox-group" data-status="inactive" key={marque.id} onClick={() => handleMarqueChanged(marque.id)}>
                                        <div className="checkbox"><i className="ion-android-done"></i></div>
                                        <div className="label" data-value="Microsoft">{marque.nom}</div>
                                        <input type="checkbox" name="checkbox" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="item text-center w-100 p-3">
                        <hr className="offset-lg" />
                        <button className="btn btn-primary rounded" > Rechercher</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Filters;