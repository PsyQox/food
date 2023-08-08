import React from "react";


const Pagination = ({recipesPerPage,totalRecipes,paginate,page}) =>{
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++){
        pageNumbers.push(i)
    }
    
    return(
        <div>
            <button onClick={()=>paginate(page-1)}>Anterior</button>
                {pageNumbers.map(number => {
                    if (number === page) {
                        return <button key={number} disabled>{number}</button>
                    }    
                    return <button key={number} onClick={()=>paginate(number)}>{number}</button>    
                }
                )}
            <button onClick={()=>paginate(page+1)}>Siguiente</button>
        </div>
    )
}

export default Pagination