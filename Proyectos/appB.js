// FORMATEANDORES

/**
 * Formato              Descripcion
 * ______________________________________________
 * %s                   Cadena
 * %d o %i              Numero entero
 * %f                   Decimal
 * %o                   DOM
 * %O                   Objeto js
 * &c                   CSS
 */
/**Ejemplos:
 * 
 * &o para estructura de DOM
 * */ 

 var parrafo = document.getElementsByTagName("p");
console.log("DOM: %o",parrafo);

/**
 * %O para objetos JS
 */

 var objeto = {"nombre":"Yo","Apellido":"Mismo"};
 console.log("Objeto: %O",objeto);

 /**
  * Usando CSS 
  */

  console.log('Esto es aburrido..');
  console.log('%c Pero se puede mejorar facilmente! ', 'background: #3EBDFF;\
   color: #FFF; font-size:36px;');

//    ###########################################################################

/**CARACTERES ESPECIALES:
 * 
 * Incluyendo cierto caracteres especiales en nuestras cadenas de texto, podemos maquetar
 * el resultado que se imprimira la consola.
 */

/**
 * \t Tabulador
 * \' Comillas Simples
 * \" Comillas Dobles
 * \n Salto de linea
 */

 console.log("Hasta aqui... todo correcto. Ahora vamos a \"tabular\":\tves? ya\
 estamos mas lejos.\n\'Otra linea;-)\'");
 

 /**
* Represents a book.
* @constructor
* @param {string} title - The title of the book.
* @param {string} author - The author of the book.
*/
function Book(title, author) {
}

// ##############################################################################

/**
 * TIPOS DE VARIBLES 
 * 
 * Un primer para dominar los tipos de varibles es utilizando el operador typeof,
 * y conocer su especificacion.
 * 
 *          Undefined
 *              @typeof undefined
 *              @typeof noDefinido
 *              @typeof tampocoCreado
 * ____________________________________________________________________________________________________________
 *  Object                  Boolean                           Number            String          Funccion
 * ************************************************************************************************************
 * @typeof null              @typeod false                    @typeof 3         @typeof "Hola"   @typeof function(){}
 * @typeof [15,4]            @typeof true                     @typeof 3.14
 * @typeof new Date()        @typeof Boolean(false)           @typeof Infinity
 *
 */

// #########################################################################################################################
/**
 *  MATEMATICA BASICA
 * 
 * @var suma = 5 + 3;
 * @var resta = 10 - 6;
 * @var multiplicacion = 3 * 3;
 * @var division = 6 / 2;
 * @var modulo = 43 % 10;
 */

 //En javascript el decimal 1.0 y el entero 1, son iguales.
 console.log((5.0 + 1) == (5+1)) //true


 /**
  *             MATEMATICAS BASICAS (Crecimiento y Decrecimiento)
  * 
  * El crecimiento y decrecimiento, puede suceder antes o despues que el valor de la variable
  * sea leido por el navegador, en funcion de donde se situa el operador(++antes o despues++).
  * */  

  var numero = 4;

  console.log(--numero); //4
  console.log(numero--); //5 (luego 4)
  console.log(++numero); //6
  console.log(numero++); //5 (luego 4)