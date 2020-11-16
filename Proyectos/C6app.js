// Capitulo 6 Numeros y flechas
/**
 * Numbers
 * 
 * A la hora de trabajar con numeros puede darse el caso de encontrarnos con la notacion cientifica en vez del formato 
 * al ue estamos acostubrados. Su valor y tipo de varible se mantiene auque se represente de forma diferente.
 * 
 * Si deseamos trabajr con unidades monetarias, podemos hacer uso de la libreria 
 *  accounting.js
 * 
 */

// PROPIEDADES

/** 
 * .MAX_VALUE
 * Esta propiedad nos retorna el nuemro (positivo) mas grande representable en 
 * javascript:
 * 
*/

var numero1 = 1.7976931348623157e+308;
var numero2 = 1.7976931348623157e+310;

function verificarValorMAximo(numeros){
    if(numeros <= Number.MAX_VALUE){
        console.log("El numero no es infinito");
    }else{
        console.log("El numero es infinito");
    }
}

verificarValorMAximo(numero1)
verificarValorMAximo(numero2)

/**
 * .MIN_VALUE
 * Nos retornara el numero (negativo) mas pequeños representando(5e-324)
 *  */ 

 var numeroI = 5e-323;
 var numeroII = 5e-326;

 function varificarValorMinimo(minimoValor){
     if(minimoValor>= Number.MIN_VALUE){
         console.log("El numero no es infinito");
     }else{
         console.log("El numero es infinito");
     }
 }

 varificarValorMinimo(numeroI);
 varificarValorMinimo(numeroI);


 /**
  * :POSITIVE_INFINITY
  * Retornara el valor de la propiedades del objeto global Infinity, es decir Infinity.
  *
  */

  var numeroMaximo = Number.MIN_VALUE * 7;
  console.log(numeroMaximo);
// ::::::::::::::::::::::::::::::::::::::::::::
  if(numeroMaximo === Number.POSITIVE_INFINITY){
      numeroMaximo = 0;
  }
  console.log(numeroMaximo);

  /**
   * .NEGATIVE_INFINITY
   * Retornara el valor negativo de la propiedad del objeto global Infinity, es decir -Infinity.
   * 
   */

   var numeroMinimo1 = (-Number.MAX_VALUE) * 2
   console.log(numeroMinimo1);

   if(numeroMinimo1== Number.NEGATIVE_INFINITY){
       numeroMinimo1 = 0;
   }

   console.log(numeroMinimo1);

/*
   .NaN
En ocasiones al realizar operaciones matemáticas de forma errónea podemos encon-
trarnos con que el valor de nuestra variable ha sido sustituido por NAN (Not A Number).
Este es un proceso irreversible que nos obligará a reasignar el valor de la variable
posteriormente. Hasta la llegada de ECMA6 la gestión y detección de estos valores era
compleja, pero con el nuevo método isNaN() podemos solventarlo.
*//*
    NaN === NaN;
    false
    Number.NaN==NaN;
    false
    isNaN(NaN);
    true
    isNaN(Number.NaN);
    true

*/

