// CONDICIONALES

//if (si)

if(1 === 1){
    console.log("1 es igual a 1 y por eso me ejecuto")
}

if(1 === "1"){
    console-log("No son los mismo tipo y por eso... este texto jamas sera ejecutado en la consola");
}


// if..else
console.log("Pase lo que pase ... Esto se ejecutara")
if(true){
    console.log("True, por eso me ejecuta");
}else{
    console.log("False, por eso me ejecuto");
}
console.log("Pase lo que pase.. esto se ejecutara");

// Else if...
var condicion = 2;
if(condicion==1){
    console.log("1, por eso me ejcutado");
}else if (condicion==2){
    console.log("2, por eso me ejecutado");
}else{
    console.log("No es 1 o 2, por eso me ejecutado");
}

//SWITCH

/**
 * Switch permite crear estructuras optimizadas para cubrir un amplio abanico de casos posibles.
 * 
 * Por otra parte Switch tiene varias desventajas notables:
 *      No tiene una sintaxis sencillas
 *      Es importante utlilizar y comprender conceptos propios como case, break o default.
 *      En ocasiones puede ser dificil de depurar.
 *      Erroneamente  se piensa que switch es exageradamente mas rapido que if-else , auque
 *      una simple prueba demustra lo contrario
 * 
 * ENTENDIENDO LA ESTRUCTURA
 * 
 * switch(condicion){
 *      case n1:
 *          //Codigo
 *          break;
 *      case n2:
 *          //codigo
 *          //break;
 *      default:
 *          //codigo
 * }
 */

//  TRABAJANDO CON "caso unico"

 var nombre = "Idalia";
 switch(nombre){
     case 'Julio':
         console.log("Hola Julio");
         break;
    case 'Idalia':
        console.log("Hola Idalia");
        break;
    default: 
        console.log("Ningulo de os nombres elegidos es...!");

 }

//  Trabajando con "multiples coincidencias"

var nombre1 = "";
switch(nombre1){
    case 'Pepe':
    case 'Luis':
    case 'Antonio':
        alert('hola '+nombre1);
        break;
    default:
        console.log('Ninguno de los nombres que pensamos... es ' + nombre1);
}

// OPERADOR TERNARIO
/*
    Entendiendo la estructura:
    condicion ? expresion1 : expresion2
________________________________________

    Múltiples expresiones (desaconsejado):
condicion ? (
    expresion1,
    expresion2,
    otraexpresion
    ) : (
    expresion1,
    expresion2,
    otraexpresion
    );
________________________________________

    Evaluaciones múltiples (muy desaconsejado):
condicion ? expresion1 : condicion2 ? expresion1 : expresion2;

*/
// EJEMPLO:
var esMiebro = true;
console.info("El pago son: "+ (esMiebro ? "20.00€": "50:00€"));


// Evaluacion multiples (muy desaconsejado):
var esMiembro= true;
var esAdulto = true;
console.info(esMiebro ? "El pago son 27.00€" : esAdulto ? "Puede enviar 1\
a solicitud cuando quieras" : "Tienes que esperar aun. Lo siento.");


// Multiples expresiones (desconsejado):
var mensaje, esMiebro1 = false;
esMiebro1 ? (
    mensaje = "El pago son 20.00€",
    console.info(mensaje)
) : (
    mensaje = "El pago son 50.00€",
    console.log(mensaje)
);