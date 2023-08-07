import React from "react";  
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
            <SearchBar />
            <Link to="/home">
                <button>Home</button>
            </Link>  
            <Link to="/form" >
                    <button>Nueva receta</button>
            </Link>
        </div>
    )
}

export default Navbar