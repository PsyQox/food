import React,{ useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import validation from "./validation";

const Form = ()=>{
    const [diets, setDiets] = useState([])
    const [checked, setChecked] = useState({})
    const [errors, setErrors] = useState("")
    const [form, setForm] = useState({
        title:"",
        image:"",
        summary:"",
        healthscore:"",
        steptostep:"",
        diet:[]
    })

    useEffect( async ()=>{
        try {
            if (diets.length <= 0) {
                const response = await axios(`http://localhost:3001/diets/`)
                setDiets(response.data)    
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
            }
        }
        
    },[])

    const handleInput = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
       setErrors(validation({...form,[event.target.name]:event.target.value}))
    }

    const handleChecbox = (event)=>{
        if (!form.diet.includes(event.target.value)) {
            setForm({...form, diet:[...form.diet,event.target.value]})
            setErrors(validation({...form, diet:[...form.diet,event.target.value]}))
            setChecked({...checked,[event.target.name]:true})
        }else{
            setForm({...form, diet:[...form.diet.filter(diet=> diet !== event.target.value)]})
            setErrors(validation({...form, diet:[...form.diet.filter(diet=> diet !== event.target.value)]}))
            setChecked({...checked,[event.target.name]:false})
        }
    }

    const handleForm = async (event)=>{
        event.preventDefault()
        if(Object.keys(errors) <= 0){
            try {
                const response = await axios.post(`http://localhost:3001/recipes/`,form)
                if (!response.data[1]) {
                    alert("No se pueden crear registros repetidos")
                }else{
                    alert(`El registro ${response.data[0].title} se ha creado exitosamente`)
                    setForm({
                        title:"",
                        image:"",
                        summary:"",
                        healthscore:"",
                        steptostep:"",
                        diet:[]
                    })
                    setChecked({})
                }
            } catch (error) {
                if (error.response) {
                    alert(error.response.data);
                } else {
                    alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
                }
            }
            
        }else{
            alert("Tienes errores, primero corrigelos")
        }
    }

  

    return(
        <div>
            <h1>Formulario</h1>
            <form action="" onSubmit={handleForm}>
                <label htmlFor="">Nombre</label> 
                <input type="text" name="title" onChange={handleInput} value={form.title}/>
                {errors.title ? <span style={{color:"red"}}>{errors.title}</span>:null}
                <br />
                <label htmlFor="">Imagen</label>
                <input type="text" name="image" onChange={handleInput} value={form.image}/>
                {errors.image ? <span style={{color:"red"}}>{errors.image}</span>:null}
                <br />
                <label htmlFor="">Resumen del plato</label>
                <input type="text" name="summary" onChange={handleInput} value={form.summary}/>
                {errors.summary ? <span style={{color:"red"}}>{errors.summary}</span>:null}
                <br />
                <label htmlFor="">Nivel de comida saludabe</label>
                <input type="number" name="healthscore" onChange={handleInput} value={form.healthscore}/>
                {errors.healthscore ? <span style={{color:"red"}}>{errors.healthscore}</span>:null}
                <br />
                <label htmlFor="">Paso a paso</label>
                <input type="text" name="steptostep" onChange={handleInput} value={form.steptostep}/>
                {errors.steptostep ? <span style={{color:"red"}}>{errors.steptostep}</span>:null}
                <br />
                
                <label htmlFor="">Tipos de dieta</label>
                {diets.map((diet)=>{    
                    return <div key={diet.id}>
                        <label htmlFor={diet.name} key={diet.name}>
                        <input key={diet.id} type="checkbox" checked={checked[diet.name]} name={diet.name} id={diet.id} value={diet.id} onClick={handleChecbox}/>
                        {diet.name}
                    </label>
                    </div> 
                })}
                {errors.diet ? <span style={{color:"red"}}>{errors.diet}</span>:null}
                <br />
                <button>Crear Receta</button>
            </form>
        </div>
    )
}

export default Form