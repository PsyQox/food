import React from "react";
import { useState } from "react";

const Form = ()=>{

    return(
        <div>
            <h1>Formulario</h1>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <br />
                <label htmlFor="">Resumen del plato</label>
                <input type="text" />
                <br />
                <label htmlFor="">Nivel de comida saludabe</label>
                <input type="text" />
                <br />
                <label htmlFor="">Paso a paso</label>
                <input type="text" />
                <br />
                <label htmlFor="">Imagen</label>
                <input type="text" />
                <br />
                <label htmlFor="">Tipos de dieta</label>
                <input type="text" />
                <br />
                <button>Crear Receta</button>
            </form>
        </div>
    )
}

export default Form