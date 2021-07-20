const Pagination = (props) => {
    let totalPages = Math.ceil(props.TotalPages/5);

    const createLinks = ()=>{
        let elements = [];
        for(let i =0; i < totalPages; i++){
            elements.push(<li key={i+1} className="page-item" onClick={()=>{props.changePage(i+1)}}><a  className="page-link">{i + 1}</a></li>);
        }
        return elements;
    }
    return (
        <div className="clearfix">
            <div className="hint-text"><b>{props.currentPage}</b>/<b>{totalPages}</b></div>
            <ul className="pagination">
            {createLinks()}
            </ul>
        </div>
    );
}
export default Pagination;