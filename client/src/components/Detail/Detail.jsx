import React from "react";
import axios from 'axios'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"


const Detail =()=>{
    
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    useEffect( async ()=>{
        const response = await axios.get(`http://localhost:3001/recipes/${id}`) 
        setDetail(response.data)
        

    },[])

    
    return(
        <div>
            <h2>{detail.title}</h2>
            <h2>Imagen</h2>
                <img src={detail.image} alt=""></img>
            <h2>Resumen del plato</h2>
                <p>{detail.summary}</p>
            <h2>Nivel de comida saludable</h2>
                <p>{detail.healthScore}</p>
            <h2>Paso a paso</h2>
                {detail.analyzedInstructions?.map((instruction)=>{
                     instruction.steps?.map(step=>{
                        return <div><strong key={step.number}>{step.number}</strong> <p key={step.step}>{step.step}</p></div>
                    })
                })}
            <h2>Tipos de dieta</h2>
                {detail.diets?.map((diet)=>{
                    return <p key={diet}>{diet}</p>
                })}
        </div>
    )
}

export default Detail