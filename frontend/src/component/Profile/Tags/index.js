import { Link } from "react-router-dom";

const Tags = (props) => {
    return (
        <div className="tags">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <div className="container">
                <div className="btn-group" data-toggle="buttons">
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/informations`}>
                        <label className="btn btn-default btn-sm">
                             Informations
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/Commandes`}>
                        <label className="btn btn-default btn-sm">
                            Commandes
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/changermdp`}>
                        <label className="btn btn-default btn-sm">
                            Changer le mot de passe
                        </label>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default Tags;