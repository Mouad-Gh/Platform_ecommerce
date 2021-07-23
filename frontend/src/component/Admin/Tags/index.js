import { Link } from "react-router-dom";

const Tags = (props) => {
    return (
        <div className="tags">
            <hr className="offset-lg" />
            <hr className="offset-lg" />
            
            <div className="container">
            <h1>Admin</h1>
                <div className="btn-group" data-toggle="buttons">
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/Clients`}>
                        <label className="btn btn-default btn-sm">
                             Les clients
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/Marques`}>
                        <label className="btn btn-default btn-sm">
                            Les marques
                        </label>
                    </Link>
                    <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`${props.path}/Categories`}>
                        <label className="btn btn-default btn-sm">
                            Les categories
                        </label>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default Tags;