const Pagination = (peoplePerPage, allThePeople) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(peoplePerPage / allThePeople); i++) {
        pageNumbers.push(i);
        
        
    }
    return ( 
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a href="http://" className="page-link" >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;