const {Tbl_recipe, Tbl_diet} = require('../db')

const postCreateRecipte = async (recipe)=>{ 
    const {title,image,summary,healthscore,steptostep,diet} = recipe
    if (!title || !image || !summary || !healthscore || !steptostep || !diet) throw new Error("Faltan datos")

    const recipeCreate = await Tbl_recipe.findOrCreate({where: {title:title},defaults:{
        image:image,
        summary:summary,
        healthScore: healthscore,
        steptostep: steptostep, //Array JSON
    }})

    // const findRecipe = await Tbl_recipe.findOne({where:{id:"28dd2d86-5ee3-4eee-aca3-3c7850637bff"}}) 
    // const findDiet = await Tbl_diet.findOne({where:{id:"17d0e33f-ab8b-466c-b46d-ad5664e835cb"}}) //primal
    for(const dietId of diet) {
        const findDiet = await Tbl_diet.findOne({where:{id:dietId}})
        await recipeCreate[0].addTbl_diet(findDiet) 
    } 
    // console.log(diet);
    // await recipeCreate[0].save()

    // await findRecipe.addTbl_diet(findDiet)
 
    // const recipes = await Tbl_recipe.findOne({where:{title:title}, include: Tbl_diet}) 
    const recipes = await Tbl_recipe.findAll({include: Tbl_diet})
    // const recipes = await Tbl_diet.findOne({where:{name:'primal'}, include: Tbl_recipe})
    // const recipes = await Tbl_recipe.findAll()
    return recipeCreate
} 

module.exports = postCreateRecipte