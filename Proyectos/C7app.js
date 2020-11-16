/**
 * CAPITULO 7 - Cadena de texto
 * 
 * PROPIEDADES
 * .length()
 * Devuelve la longitud de la cadena, lo que resulta muy importante ya que podremos
 * utlizar bucles para recorrer cada una de las letras...
 * 
 */

 var cadena = "JavaScript, ¡Inspirate!";
 console.log("JavasScript, ¡Inspirate! tiene " + cadena.length + " caracteres.");

 console.log("Una cadena vacia tiene " + ' '.length+ " caracteres.");

 
 /**
  * Metodos
  * Hacemos una recopilacion simplificada de los metodos mas utilizados, auque existen muchho mas.
  * 
  * .toLowerCase()
  * Devuelve todo en minusculas
  * */
 console.log("== Metodos ==");
console.log('¡INSPIRATE!'.toLowerCase()); // ¡inspirate!

/**
 * toUpperCase()
 * Devuelve todo en mayuscula.
 */
console.log('¡inspirate!'.toUpperCase()); //¡INSPIRATE!

/**
 * .fromCharCode()
 * Devuelve una cadena creada mediante una secuencia unicode.
 */
console.log("Es el añ0 2020 ( " +String.fromCharCode(8559,8559,8553,8548,85,44)+" ) ");

/**
 * .anchor()
 * Crea un link interno (ancho) HTML
 * 
 */

 console.info(document.body.innerHTML= "Contenidos ". anchor("contenido"));
  //ejecutar consola
//  <a name="contenidos">Contenidos</a>


/**
 * .charAt()
 * Devuelve el caracter especifico.
 */
var cadena = "JavaScript, ¡Inspitare!";
console.log("El caracter(posicion) 4 es: '" + cadena.charAt(4)+"'");

/**
 * Devuelve el valor Unicode.
 * 
 */
 console.log("El caracter(posiscion) 4 es: '" + cadena.charCodeAt(4)+"', en unicode ("+cadena.charCodeAt(4)+")")

 /**#######################################################################################################################
  * .concat()
  * Combina el texto de dos o mas cadenas.
  */
 var cadena1 = "Oh ",
     cadena2 = "que maravillosa ",
     cadena3 = "mañana.";
     
var combinacion = cadena1.concat(cadena2, cadena3);
console.log(combinacion); //Oh que maravillosa mañana.

/**
 * .indexOf()
 * Devuelve la posiscion del elemento si es capaz de localizarlo  o- l en caso contrario.
 */

 console.log("Mundo web".indexOf("Web")); //-1
 console.log("Mundo web".indexOf("web"));//6

 /***
  * .lastIndexOf()
  * Devulve la ultima localizacion del elementos si es capaz de encontrarlo o -1 en caso contrario.
  */

 console.log("JavaScript, ¡Inspírate!".lastIndexOf("I")); //13
 console.log("JavaScript, ¡Inspírate!".lastIndexOf("b")); //-1


 /**################################################################################################
  * .link()
  * Crea un enlace.
  * 
  */

  var textoArchivo = "JavaScript, Inspirate"
  var url = "https://leanpub.com/javascript-inspirate/"
  document.body.innerHTML = "Haga click para volver a " + textoArchivo.link(url);

//   .split()
// Divide una cadena usando un separador y retorna un array.

var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
var meses = cadenaMeses.split(",");
console.log("Los meses son un Array?", Array.isArray(meses))