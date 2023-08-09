require('dotenv').config();
const axios = require('axios');
const {API_KEY} = process.env;
// const data = require('../utils/foodSearch.json')
const data = require('../utils/foodComplexSearch.json')
const {Tbl_recipe,Tbl_diet} = require('../db')

const getRecipeQuery = async (name)=>{
    // throw new Error("No se mando el nombre") 
    if (!name){
        // const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100`)
        // return recipes.data.results

        return data.results
    }else{
        const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}&addRecipeInformation=true
        `)
        return recipes.data.results
    }

}

module.exports = getRecipeQuery