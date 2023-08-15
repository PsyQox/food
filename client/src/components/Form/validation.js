const validation=(data)=>{
    let incorrect = {}
    let title = data.title.trim()
    let image = data.image.trim()
    let summary = data.summary.trim()
    let healthscore = data.healthscore
    let steptostep = data.steptostep.trim()
    let diet = data.diet

    const regexNumber = RegExp(/^[0-9]+$/)
    const regexURL =  RegExp(/^(ftp|http|https):\/\/[^ "]+$/)
    const regexLetters = RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/)

    if (data.title) {
        if (!title){
            incorrect.title = "The name cannot be empty."
        }else if(!regexLetters.test(title)){
            incorrect.title = "Only letters"
        }
    }
    if (data.image) {
        if(!image){
            incorrect.image = "The image cannot be empty."
        }else if(!regexURL.test(image)) {
            incorrect.image = "It has to have URL format."
        }
    }
    if (data.summary) {
        if (!summary) incorrect.summary = "The summary cannot be empty."
           
    }
    
    if (data.steptostep) {
        if (!steptostep) incorrect.steptostep = "The step by step cannot be empty."
     }
    
     if (data.healthscore) {
        if (!regexNumber.test(healthscore)) {
            incorrect.healthscore = "Can only be number" 
         }else if(healthscore <= 0 || healthscore > 100){
             incorrect.healthscore = "The number has to be between 0 and 100."
         }   
     }
     
    if (diet.length <= 0) {
        incorrect.diet = "You have to select at least 1."
    }
    return incorrect
}

export default validation