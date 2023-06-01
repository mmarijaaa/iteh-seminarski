import React, {useState }from 'react'
import './blog.css'
import JsonData from '../../assets/MOCK_DATAc.json'
import ReactPaginate from 'react-paginate'

const Blog = () => {

    const[users, setUsers] = useState(JsonData.slice(0,10))
    const [pageNumber, setPageNumber]=useState(0);

    const usersPerPage=1
    const pagesVisited=pageNumber*usersPerPage

    const displayArtical = users.slice(pagesVisited, pagesVisited+usersPerPage).map((user)=>{
        return(
            <div className="user">
            <h1 className='naslov'>{user.naslov}</h1>
            <img className='slika' src={user.imageSrc} alt="" />
            <h3 className='podnaslov'>{user.description}</h3>
            <p className='tekst'>{user.arical}</p>
            </div>
        )
    })


    const pageCount=Math.ceil(users.length/usersPerPage);

    const changePage=({selected})=>{
        setPageNumber(selected)
    };

    return (
        <div className="blog">
            {displayArtical}
            <ReactPaginate 
            previousLabel={"Prethodna"}
            nextLabel={"Sledeca"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButns"}
            previousLinkClassName={"prethodnoButn"}
            nextLinkClassName={"sledeceBtn"}
            disabledClassName={"paginationDis"}
            activeClassName={"paginationActive"}
            />
            </div>
    )
}

export default Blog