const data = require("./foodComplexSearch.json");

// console.log(data);
//Tipos de dietas
const diets = new Set()

// console.log(data.results[0].diets.forEach(diet => console.log(diet)));

data.results.forEach(recipe =>{
    recipe.diets.forEach(diet =>{
        diets.add(diet)
    })
})

const arrayDiets = Array.from(diets)
console.log(arrayDiets);