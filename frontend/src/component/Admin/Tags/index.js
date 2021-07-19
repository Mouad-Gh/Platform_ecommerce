import { Link } from "react-router-dom";

const Tags = (props) => {
    return (
        <div className="tags">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            <hr className="offset-lg hidden-xs" />
            <div className="container">
                <div className="btn-group" data-toggle="buttons">
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/Clients`}>
                        <label className="btn btn-default btn-sm">
                             Les clients
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/commandes`}>
                        <label className="btn btn-default btn-sm">
                            Les commandes
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/marques`}>
                        <label className="btn btn-default btn-sm">
                            Les marques
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/categorie`}>
                        <label className="btn btn-default btn-sm">
                            Les categorie
                        </label>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default Tags;