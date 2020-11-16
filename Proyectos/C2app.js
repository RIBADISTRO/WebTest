// Capitulo 5 - Bucles
//While
/**
 * FUNCIONAMINETO
 * 
 *  while(-condicion){
 *      -Intruccion-
 *  }
 */
// EJEMPLO:

var condicion  =  true 
while(condicion){
    console.log("Hola");
    condicion = false;
};

// For
/**
 * Este bucle presenta un estructura ptimizada para controlar la ejecucion de la iteracion de
 * manera numerica
 * 
 * El bucle For se divide en tres partes separandas por un punto y coma.
 * 
 *      EXPRESION INICIAL
 *      Sera todo aquello que se ejecutara al iniciarse el bucle.
 *      
 *      CONDICION
 *      Sera evaluada antes de cada iteracion. Este es el unico parametro obligatorio.
 *      
 *      EXPRECION DE ACTULIZACION
 *      Se ejecutara al final de cada iteracion.
 *  
 * FUNCIONAMIENTO
 *      @for (-Expresion inicial-; -Condicion-; -Expresion actulizacion-){
 *          -Instrucciones-
 *      };
 * 
 */
// EJEMPLO clasico

for(var i = 0; i <= 10; i++){
    // console.log(i);
}

// Do... While

/**
 * Funcionamiento 
 * 
 * Estructura
 * 
 * do{
 *  -Instrucciones-
 * }while(-Codicion);
*/

var i=0;
do{
    i++;
    // console.log(i);
    
}while(i<=10);

// Importante
// Al menos se ejecutara una vez, auque la premisa no sea verdadera

do{
    // console.log("Me ejecuto");
}while(false);

// Break y Continue
/**
 * Dos sentencias clave JavaScript, som break y continue, que nos permiten romper
 * o alterar el fujo normal de nuetra aplicacion
 */

 for(var i=0; i < 10; i++){
     //saltar el 5 y sigue...
     if(i==5){
        //  continue;
        break;

     }
    //  console.log("El valor de i es "+i);

 }

/**
 * ERROR COMUNES
 * 
 * Bucle infinito
 *
 *       while(true){
 *            console.log("Este texto se imprime hasta al infinito");
 *      };
 * 
 * 
 *  BUCLE QUE NO SE EJECUTARA
 * 
 * Igualmenet es un error mas sutil, pero por definicion un codigo que jamas
 * se ejcuta... ¡Sobra!
 * 
 * while(false){
 *      console.log("Texto que jamas se imprimira");
 * };
 * 
 */
// EJEMPLO

// var control = 1;
// while(control <= 10){
//     console.log(control);
//     control++;
// };


// ############################################################################3

// USOS AVANZADOS

// Decrecimiento:
for (var i=10; i>0;i--){
    // console.log("Se imprime :"+i+ ": "+i);
}

// ANIDACION:
/**
 * Auque resulte muy tentador... debemos de evitar en la medida de la posible la anidadcion
 * en javascript.Por regla general anidar hasta dos o tres niveles es aceptable.
 * 
 */

 for (var i = 0; i < 10; i++){
    // console.log("Estoy en el primer nivel del bucle");
    for (let j = 10; j >0 ; j--) {
        // console.log("Estoy en el segundo bucle")
        // console.log("Vuelta: "+ i + " - " + j);
        
    }
 }

//  EXPRIMIENDO EL FOR

/**
 * Si dominamos las tres partes basicas que componen el bulce for, podemos plantearnos
 * estructuras tan complejas como estas
 */

 for(var i = 0, x = 1, z = 2, tope = 10; i <= tope; x *= z, i++){
     console.log("i vale "+i+", x vale "+x+", z vale "+z);
 }
 /**
  * Por lo general la varible i suele reserverse para controlar las iteraciones del bucle,
  * auque podemos utlilizar otros nombres... esto suele estar muy aceptado por la comunidad
  * y se considera una buena practica
  * 
  */
 
//  NO REFACTORIZAR 

/**
 * En ocaciones, el codigo evoluciona y no repasamos lo que habiamos construido previamente..
 * lleando a situaciones tan mostruosas como esta.
 * 
 *  ->#antes de refactorizar:
 *      //codigo
 *      for(;i==true;){
 *          //mas codigo
 *      }
 * ->#Despues de refactorizar
 *      //codigo
 *      while(i){
 *          //mas codigo
 *      }
 * 
 * 
 */