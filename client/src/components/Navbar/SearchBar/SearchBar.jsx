import React,{useState} from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../../redux/actions";


const SearchBar = (props)=>{
    const[search, setSearch] = useState("")
    
    const onhandleChange = (event)=>{
        setSearch(event.target.value)
    }

    function onhandleClick(){
        try {
            props.getRecipes(search)
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("Ocurrió un error en la solicitud. Por favor, intenta nuevamente.");
            }
        }
    }

    
    return (
        <div>
            <input type="text" placeholder="Name..." id="" onChange={onhandleChange} value={search}/>
            <button onClick={onhandleClick}>Buscar</button>
            
        </div>  
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getRecipes: (search)=> {dispatch(getRecipes(search))}
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);