import React from "react";
import { Link } from "react-router-dom";        


const Landing = () =>{
    return (
        <div>
            <h1>¡Bienvenido!</h1>
            <Link to="/home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing