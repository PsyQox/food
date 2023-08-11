import React from "react";
import axios from 'axios'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"


const Detail =()=>{
    const regexUUID = RegExp(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/)
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    useEffect( async ()=>{
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`) 
            setDetail(response.data)
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
            }
        }
    },[])

    if (regexUUID.test(id)) {
        return(<div>
            <h2>{detail.title}</h2>
            <h2>Imagen</h2>
                <img src={detail.image} alt="" width="556" height="370"></img>
            <h2>Resumen del plato</h2>
                <p>{detail.summary}</p>
            <h2>Nivel de comida saludable</h2>
                <p>{detail.healthScore}</p>
            <h2>Paso a paso</h2>
                {detail.steptostep}
            <h2>Tipos de dieta</h2>
                {detail.tbl_diets?.map((diet)=>{
                    return <p key={diet.id}>{diet.name}</p>
                })}
        </div>)
    }else{
        return(
            <div>
                <h2>{detail.title}</h2>
                <h2>Imagen</h2>
                    <img src={detail.image} alt="" width="556" height="370"></img>
                <h2>Resumen del plato</h2>
                    <div dangerouslySetInnerHTML={{__html:detail.summary}}></div>
                    {/* <p>{detail.summary}</p> */}
                <h2>Nivel de comida saludable</h2>
                    <p>{detail.healthScore}</p>
                <h2>Paso a paso</h2>
                    {detail.analyzedInstructions?.map((instruction)=>{
                         return instruction.steps?.map(step=>{
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
    
}

export default Detail