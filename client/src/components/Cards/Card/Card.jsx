import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card =(props)=>{
    // console.log(props.id);
    return (
        <div className={style.containerCard}>
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <h2>Health Score: {props.healthScore}</h2>
            <h2>Tipos de dieta</h2>
            {props.diets.map((diet)=>{
                return <p key={diet}>{diet}</p>   
            })}
            <Link to="/detail">
                <button key='detalle'>Detalle</button>
            </Link>
        </div>
    )
}

export default Card