import React from "react";
import axios from 'axios'
import { useEffect,useState } from "react";



const Detail =()=>{
    
    const [detail, setDetail] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3001/recipes/1')
        .then(response => setDetail(response.data))
    },[])

    console.log(detail);
    
    return(
        <div>
            <h2>id</h2>
            <h2>{detail.title}</h2>
            <h2>Imagen</h2>
            <img src={detail.image} alt=""></img>
            <h2>Resumen del plato</h2>
            {detail.summary}
            <h2>Nivel de comida saluda</h2>
            <p>{detail.healthScore}</p>
            <h2>Paso a paso</h2>
            {detail.analyzedInstructions?.map((instruction)=>{
                return instruction.steps?.map(step=>{
                    return <div><strong key={step.number}>{step.number}</strong> <p key={step.step}>{step.step}</p></div>
                })
            })}
            <h2>Tipos de dieta</h2>
            {detail.diets?.map((diet)=>{
                return <p>{diet}</p>
            })}
        </div>
    )
}

export default Detail