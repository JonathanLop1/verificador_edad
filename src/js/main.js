function calc() {
    //We call the elements that we will use from the html.
    let nameUser = document.getElementById("nomb").value
    let ageUser = document.getElementById("age").value
    let resultUser = document.getElementById("rest")
    let triedUser = document.getElementById("intent")
    let vacio = nameUser.trim();
    //We validate whether the person is a minor, an adult, or a negative number.
    if(/\d/.test(nameUser)==false){
        if (ageUser < 18 && ageUser > 0) {
            //We use internalhtml to print in html documents.
            resultUser.innerHTML = `Hola ${nameUser}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`
            let calculation = 18 - ageUser
            triedUser.innerHTML = `Hola ${nameUser}, te falta ${calculation} año para poder ser mayor de edad`
        }
    
        if (ageUser < 0) {
            resultUser.innerHTML = `Hola ${nameUser}, estas ingresando un numero negativo, por favor ingresa correctamente este dato`
        }
    
        if (ageUser >= 18) {
            triedUser.innerHTML = ""
            resultUser.innerHTML = `Hola ${nameUser}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!`
        }
    }else{
        alert("ERROR")
    }
    
}
