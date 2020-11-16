// METODOS AVANZADOS
/**
 * .some()
 * Verifica si alguno de los elementos del array pasan la prueb implementada por la 
 * funcion dada.
 */

 function tamañoValido(elemento, indice, arreglo){
    return elemento >= 10;
 }
tamaño1 = [12,4,6,3,8].some(tamañoValido);//true
tamaño2 = [12,54,18,130,44].some(tamañoValido); //true
console.log(tamaño2);

/**
 * .every()
 * Verifica si todo los elementos del array pasan la prueba implementada por la funcion
 * dada
 */

function tamañoValido1(elemento, indice, arreglo){
    return elemento >= 10;
 }
tamaño1 = [12,5,8,130,44].every(tamañoValido1);//true
tamaño2 = [12,54,18,130,44].every(tamañoValido1); //false
console.log(tamaño1);
/**
 * .filter()
 * Crea un nuevo array con aquellos elementos que cumplan la condicion.
 */

 function tamañoValidoE(elemento){
     return elemento >= 10;
 }
 var filtrados = [true,134,10,67,null,"Hola"].filter(tamañoValidoE);
 console.log();//[134, 10, 67]

 /**
  * .forEach()
  * Se ejecuta la funcion por cada elemento del array.
  */
 function logger(element,index,array){
     console.log("array[" + index + "] = " + element);
 }
 [2,3,9].forEach(logger);//  array[0] = 2
                        //  array[1] = 3
                        //  array[2] = 9

/**
 * .map()
 * Itera sobre el array aplicando una tranformacion, que definamos en una funcion y
 * finalmente retorna un nuevo array con todos los componentes modificados.
 */

 var arreglo = ["platano","Fresa", "lima", "manzana"];
 var resultado = arreglo.map(function (elemento){return elemento + " modifcado"});
 console.log(resultado);


 /**
  * ARRAY MULTIDIMENCIONALES
  * 
  * No dejes que el nombre os te asuste, sencillamente cuando tenemos array almacenado
  * dentro de otro array, entendemos que se trabaja sobre Matrices o Array mutlidimencionales
  * ¡Sencillo!.
  */

  var mulArray1 = ["platano","Fresa", "lima", "manzana"];
  var mulArray2= ["Entrante", "Primero", "segundo","postre"];
  var justandoArreglos = [mulArray1,mulArray2];

  console.log(justandoArreglos[0][0]); //platano
  console.log(justandoArreglos[1][0]); // Entrante