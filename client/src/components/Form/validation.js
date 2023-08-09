const validation=(data)=>{
    let incorrect = {}
    let title = data.title.trim()
    let image = data.image.trim()
    let summary = data.summary.trim()
    let healthscore = data.healthscore
    let steptostep = data.steptostep.trim()
    let diet = data.diet

    const regexNumber = RegExp(/^[0-9]+$/)

    if (!title) {
        incorrect.title = "El titulo no puede estar vacio"
    }
     if (!image) {
        incorrect.image = "La imagen no puede estar vacia"
    }
     if (!summary) {
        incorrect.summary = "El resumen no puede estar vacío"
    }
     if (!steptostep) {
        incorrect.steptostep = "El paso a paso no puede estar vacio"
    }

     if (!regexNumber.test(healthscore)) {
       incorrect.healthscore = "Tiene que ser un numero" 
    }else if(healthscore <= 0 || healthscore > 100){
        incorrect.healthscore = "Tiene que ser mayor a 0 y menor a 100"
    }

    if (diet.length <= 0) {
        incorrect.diet = "Tienes que seleccionar por lo menos 1"
    }
    return incorrect
}

export default validation