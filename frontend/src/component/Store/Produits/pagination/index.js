import React from "react";
const Pagination = (props) => {
    return (
        <nav>
            <ul className="pagination">
                {[...Array(props.nombreDePage)].map((x,i)=>
                    <li key={i}><a  onClick={(e)=>{props.handlePagination(i+1)}}>{i+1}</a></li>
                )}
            </ul>
        </nav>
    );
}

export default Pagination;