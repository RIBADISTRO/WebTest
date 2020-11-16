/**
 * PARTE  II
 * Mecanica del lenguaje
*/
// COMPARADORES

/**
 *           Operadores de Comparación
 * 
 * var mayorQue = 100 > 10;
 * var mayorIgual = 100 >= 10;
 * var menorIgual = 10 <= 100;
 * var igual = 10 == 10;
 * var igualTotalmente = 10 === 10; // Ojo! Usamos también ===
 * var noIgual = 100 != 10;
 * *******************************************************************
 * 
 * var noIgual = 100 != 10 // true
 * var noIgualCadena = 10 == "10" //true
 * var igualTotalmente = 10 === 10; //true
 * var igualmenteTotalCadena = 10 === "10" // false
 * *******************************************************************
 * 
 * var noIgual  = 100 != 10 //true
 * var noIgualCadena = 100 != "100" //false
 * var noigualTotalmente = 100 !==10 //true
 * var noIgualTotalmenteCadena = 100 !== "100" //true
 * *******************************************************************
 
 */
var mayorQue = 10 == 10;
// console.log(mayorQue);

/* 
 *           OPERADORES LOGICOS
 * 
 *  AND(&&)
 */

//   console.log(true && true);   //true 
//   console.log(true && false);  //false
//   console.log(false && false); //false
//   console.log(false && true);  //false


// OR( || )

console.log(true || true);      //true
console.log(true || false);     //true
console.log(false || false);    //false
console.log(false || true);     //true

// Aplicar lo aprendido

var ext1 = true && false
var ext2 = (2==2) && (3 >= 6)
var ext3 = (2>3) || (17<= 40)
var ext4 = false || false
console.log(ext4);

// ##################################################################################

// TODO PUEDE SER BOOLEANO
// Valor real es "TRUE":
console.log("Valor booleanno \"JS\":", Boolean("JS!\""));
console.log("Valor booleano de 12345:", Boolean(12345));
console.log("Valor booleano de -12345:",Boolean(-12345));
console.log("Valor booleano de objeto:",Boolean({saludo: "Hola"}));
console.log("Valor booleano de array:",Boolean(["platano",-1,false]));
console.log("Valor booleano de una funcion:",Boolean(function(){}));

//Sin valor real es"FALSE":

console.log("valor booleano de \" \":",Boolean(" "));
console.log("valor booleano de 0:",Boolean(0));
console.log("valor booleano de -0:",Boolean(-0));
console.log("valor booleano de null:",Boolean(null));
console.log("valor booleano de undefiend:",Boolean(undefined));
console.log("valor booleano de NaN:",Boolean(NaN));


// ASIGNACION POR IGUALDAD

var administrador = 'Yo mismo';
var esadministrador = (administrador === 'Yo mismo')
console.log(esadministrador);
