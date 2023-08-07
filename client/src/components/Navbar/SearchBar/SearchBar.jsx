import React,{useState} from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../../redux/actions";


const SearchBar = (props)=>{
    const[search, setSearch] = useState("")
    
    const onhandleChange = (event)=>{
        setSearch(event.target.value)
    }

    function onhandleClick(){
        props.getRecipes(search)
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