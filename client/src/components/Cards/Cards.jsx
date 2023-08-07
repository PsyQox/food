import React from "react";
import Card from './Card/Card'
import style from './Cards.module.css'

const Cards = (props)=>{
    
    return(
        <div className={style.containerCards}>
            {props.recipes?.map((recipe)=>{
                return <Card 
                key={recipe.id} 
                id={recipe.id} 
                title={recipe.title} 
                image={recipe.image} 
                diets={recipe.diets}
                healthScore={recipe.healthScore}
                />
            })}
        </div>
    )

}

export default Cards