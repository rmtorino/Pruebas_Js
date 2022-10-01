

let nombreIngresado = prompt("Ingrese su nombre")
alert("Bienvenida " + nombreIngresado)
let respuesta = confirm(nombreIngresado + ". Usted esta tomando maca?")

if (respuesta){
    
    let respuesta2 = confirm("Aún estas con Andres?")
    if (respuesta2){
        alert("Avisale al chino cuando se te vaya y mientras hacele un petun")

    }else {
        alert("Prepará el ocote por que el chino quiere tuqui")
    }
    
}else {
    alert("Empeza a tomarla y mientras hacele un petun al chino")
}

