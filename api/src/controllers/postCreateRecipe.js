const {Tbl_recipe} = require('../db')

const postCreateRecipte = async (recipe)=>{ 
    const {name,image,summary,healthscore,steptostep,tblDietId} = recipe
    if (!name || !image || !summary || !healthscore || !steptostep || !tblDietId) throw new Error("Faltan datos")
    await Tbl_recipe.findOrCreate({where: {name:name},defaults:{
        image:image,
        summary:summary,
        healthscore: healthscore,
        steptostep: steptostep, //Array JSON
        tblDietId: tblDietId
    }})
    const recipes = await Tbl_recipe.findAll()
    return recipes
} 

module.exports = postCreateRecipte