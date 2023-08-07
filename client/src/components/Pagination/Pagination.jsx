import React from "react";


const Pagination = ({recipesPerPage,totalRecipes,paginate}) =>{
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div>
                {pageNumbers.map(number => (
                        <button key={number} onClick={()=>paginate(number)}>{number}</button>    
                ))}
           
        </div>
    )
}

export default Pagination