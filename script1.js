
/*
let nombre = "Ricardo";
let apellido = "Torino";
let edad = 32;

let misDatos = nombre + " " + apellido + " - " + edad + " años";

// console.log(misDatos)

alert("Mis datos personales son: " + misDatos);
*/
/*
let numeroIngresado = parseInt(prompt("Ingrese un numero"));
let numeroA = 5;
alert("el numero ingresado es " + numeroIngresado + " mas " + numeroA + " es igual a " + (numeroIngresado+numeroA));


let respuesta = confirm("Usted es mayor de 18 años?");

if (respuesta){

    alert("Podes acceder")

}
else{
    alert("No podes pasar")
}
*/
let respuesta = prompt("Queres matecocido o café?")

let bebida1 = "matecocido";
let bebida2 = "cafe"

if (respuesta == bebida1){
    let respuesta2 = confirm("Lo queres con edulco?")
    if (respuesta2) {
        alert("OK")
    }
    else{
        let respuesta3 = confirm("Enotnces lo queres con azucar?")
        if (respuesta3){
            alert("OK")
        }
        else {
            alert("Anda a cagar")
        }
    }
}
else if (respuesta == bebida2){
    let respuesta2 = confirm("Lo queres con edulco?")
    if (respuesta2) {
        alert("OK")
    }
    else{
        let respuesta3 = confirm("Enotnces lo queres con azucar?")
        if (respuesta3){
            alert("OK")
        }
        else {
            alert("Anda a cagar")
        }
    }
}






