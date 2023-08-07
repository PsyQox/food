require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;

const getRecipeId = async (id)=>{ 
    if(!id) throw new Error("No se mando el id")
    id = "12"
    id = "sakjdhas-asdas-dasd"

    const recipe = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    return recipe.data
}

module.exports=getRecipeId