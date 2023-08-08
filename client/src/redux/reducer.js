import { RECIPES_GET,ORDER_RECIPES,FILTER_RECIPES,DIETS_GET } from "./actions_type"

const initialState = {
    recipes:[],
    diets:[],
    recipesCopy:[]
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case RECIPES_GET:
            return{...state,recipes:action.payload, recipesCopy:action.payload}
        case DIETS_GET:
            return{...state,diets: action.payload}

        case ORDER_RECIPES:
            const recipesOrden = [...state.recipes];
            if (action.payload === 'A' || action.payload === 'D') {
                action.payload === 'A' ? recipesOrden.sort((a,b)=>{return a.healthScore - b.healthScore}): recipesOrden.sort((a,b)=>{return b.healthScore - a.healthScore})
            }else if(action.payload === 'A-Z' || action.payload === 'Z-A'){
                action.payload === "A-Z" ? recipesOrden.sort((a,b)=>{
                    const titleA = a.title.toLowerCase()
                    const titleB = b.title.toLowerCase()

                    if (titleA < titleB) {
                        return -1
                    }else if(titleA > titleB){
                        return 1
                    }else{
                        return 0
                    }
                }) : recipesOrden.sort((a,b)=>{
                    const titleA = a.title.toLowerCase()
                    const titleB = b.title.toLowerCase()
                    if (titleA > titleB) {
                        return -1
                    }else if(titleA < titleB){
                        return 1
                    }else{
                        return 0
                    }
                })
            }
            return{
                ...state,recipes:recipesOrden 
            }
        case FILTER_RECIPES:
            let recipesFilter = [...state.recipesCopy] 
             recipesFilter = recipesFilter.filter((recipe)=>{
                return recipe.diets.includes(action.payload)
            })
            return{
                ...state, recipes:recipesFilter
            }
        default:
            return {...state}
    }
}

export default rootReducer