import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card =(props)=>{
    // console.log(props.id);
    const regexUUID = RegExp(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
    return (
        <div className={style.containerCard}>
            <img src={props.image} alt="" width="312" height="231"/>
            <h2>{props.title}</h2>
            <h2>Health Score: {props.healthScore}</h2>
            <h2>Tipos de dieta</h2>
            {props.diets.map((diet)=>{
                if (!regexUUID.test(props.id)) {
                    return <p key={diet}>{diet}</p>   
                }else{
                    return <p key={diet.name}>{diet.name}</p>
                }
            })}
            <Link to={`/detail/${props.id}`}>
                <button key='detalle'>Detalle</button>
            </Link>
        </div>
    )
}

export default Card