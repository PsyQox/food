import { RECIPES_GET,ORDER_RECIPES } from "./actions_type"

const initialState = {
    recipes:[]
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case RECIPES_GET:
            return{...state,recipes:action.payload}
        case ORDER_RECIPES:
            const recipesOrden = [...state.recipes];
            if (action.payload === 'A' || action.payload === 'D') {
                action.payload === 'A' ? recipesOrden.sort((a,b)=>{return a.healthScore - b.healthScore}): recipesOrden.sort((a,b)=>{return b.healthScore - a.healthScore})
            }else if(action.payload === 'A-Z' || action.payload === 'Z-A'){
                console.log(recipesOrden);
            }
            return{
                ...state,recipes:recipesOrden 
            }
        default:
            return {...state}
    }
}

export default rootReducer