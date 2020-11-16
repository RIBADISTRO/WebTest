// Date

var ahora = new Date();
console.log(ahora);

//Usando milisesundos(desde el 1/1/1970 00:00)

var despues = new Date(3600*24*1000);
console.log(despues);

/**
 * Usando cadena de texto
 * Poco recomendado.
 */

 var newYear1 =  new Date("January 1, 2020 00:00:00");
 console.log(newYear1);

 /**
  * Usando numeros
  * Recomendable, auque tiene cierta complejidad coculta a simple vista.
  * 
  * 
  */
 var newYear = new Date(2020, 4, 16); // AAAA, MM,DD
 var newYear = new Date(2020, 4, 16, 0, 0, 0); //AAAA,MM, DD, HH, MM, SS
// USando UTC

var newYear = new Date(Date.UTC(2020,1,1));

 console.log("Usando UTC: "+newYear);

 /**
  * METODOS:
  * 
  * Hacemos una recopilacion simplificada de los metodos mas utilizados, auque existen
  * mucho mas.
  * 
  * En el caso de las fechas, podemos dividir casi todos los metodos en tres categorias 
  * principales:
  * 
  *         Getters
  *             Que nos devuelven informacion concreta.
  *         Setters.
  *             Que nos permiten ajuntar informacion concreta.
  *         Otros:
  *             Que nos facilita enormemente el trabajo
  * 
  */

  /**################################################################################################################
   * Getters
   *    version UTC:
   */
  var ahora = new Date();
  console.log("Con UTC: ");
  console.log("=== FECHA ===");
  console.log("El año: "+ ahora.getUTCFullYear());//El año: 2020
  console.log("El mes: "+ ahora.getUTCMonth()); //0 - 11
  console.log("El dia de la semana: "+ahora.getUTCDay()); //0 - 6 (D - S)
  console.log("El dia del mes: "+ahora.getUTCDate()); //1-31
  console.log("=== HORA ==");
  console.log("Horas: "+ahora.getUTCHours());
  console.log("Minutos: "+ ahora.getUTCMinutes());
  console.log("Segundos: "+ ahora.getUTCSeconds());
  console.log("Milisegundo: "+ ahora.getUTCMilliseconds());

  /**
   * Version Local
   * 
   */
  var ahoraA = new Date();
  console.log("La fecha es: "+ ahoraA);
  console.log("== FECHA ==");
  console.log("El años: "+ ahoraA.getFullYear());
  console.log("El mes: " + ahoraA.getMonth())
  console.log("El dia de la semana: "+ ahoraA.getDay());
  console.log("El dia del mes: " + ahoraA.getDate());
  console.log("=== HORAS ===");
  console.log("Hora: "+ ahoraA.getHours());
  console.log("Minutos: "+ ahoraA.getMinutes());
  console.log("Segundos: "+ ahoraA.getSeconds());
  console.log("Milisegundos desde 1/1/1970: "+ ahoraA.getTime());
  console.log("Milisegundos: "+ ahoraA.getMilliseconds());
  console.log("=== OTROS ===");
  console.log("Diferencia horari respecto a UTC: " +ahoraA.getTimezoneOffset());

  /**
   * ################################################################################################################
   * Setters:
   * Los setters en el caso de las fechas estan planteados como una manera de ajustar la fecha y
   * la hora dentro de un marco determinado. 
   */
// Dentro del marco

var newYear2= new Date(Date.UTC(2020,1,1));
console.info("La fecha es: "+newYear2);

newYear2.setFullYear(1980);
console.info("La fecha es:"+ newYear2);

newYear2.setUTCMilliseconds(1500);
console.log("La fecha es: "+ newYear2);

/**
 * Fuera del marco
 * Debes tener en cueta las leyes naturales: un dias tiene 24 horas, un mes tiene un maximo 
 * de 31 dias
 * 
 *  Si olvidamos esta logica, JavaScript improvisa una nueva fecha, pero esta no suele ser 
 * correcta.
 */
console.log("==== FUERA DEL MARCO===")

 newYear2.setDate(56); // Al dia 56 de Enera
console.info("La fecha es 1: "+ newYear2);

newYear2.getUTCHours(36);//Pasamos la hora de 36 dias;
console.info("La fecha es 2: "+ newYear2);

newYear2.getMonth(-6);
console.info("La fecha es 3: " + newYear2);

/**
 * Otros:
 * 
 * .toString()
 * .toDateString()
 * .toTimeString()
 *Devuelve una cadena de texto con la fecha. 
 * 
 * */ 

 console.log("==== OTROS =======");
 var ahoraB = new Date();
 console.info("La fecha es:" + ahoraB.toString());
 console.info("La fecha es:" + ahoraB.toDateString());
 console.info("La fecha es:" + ahoraB.toTimeString());

/**
 * .toUTCString()
 * .toISOString()
 * Devulve una cadena con la fecha en formatos especificos UTC e ISO 8601
 * 
 * El formato ISO 8601  sera de gran ayuda para comunicarnos con otras plataformas,
 * librerias y sustemas, por tanto.. 
 *  ¡Aprende como Funciona!
 */

 var ahoraC =  new Date();
 console.info(ahoraC.toISOString());
 console.log(ahoraC.toUTCString());

 /**
  * .toLocalString()
  * Devuelve una cadena con la fecha en verison local. Si quieres un idiama/ region 
  * especificas deberas recurrir a la LISta de codigo IETF.
  * 
  * Tambien permite una configuracion detallada.
  * 
  */

  var ahora = new Date();
  console.info(ahoraC.toLocaleString());
// Codigo de idioma IETF para Aleman
console.info(ahoraC.toLocaleString("de-DE"));

//Opciones avanzadas para fechas

var opciones ={
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
console.log(ahoraC.toLocaleDateString('de-DE',opciones));
/**
 * 
 * Benchmark
 * Ahora que ya sabemos manejar el tiempo, facilmente podremos hacer pruebas
 * basica de rendimiento
 * 
 * podremos crear una primera fecha antes de ejecutar cierto codigo y ahora justo al final del mismo
 * para asi comprar el tiempo transcurrido
 * 
 * las pruebas de rendimiento(bechmark), pueden ser de gran ayuda para tomar decisiones
 * importantes a la hora de refactorizar nuestro codigo.
 */

 /**
  * Nota:
  * Se puede realizar pruebas de rendimiento con la consola
  * del navegador (consola.time() y console.tiemEnd())
  */
 var inicio = new Date();
//  Codigo a testear

var fin = new Date();

var trascurso = fin.getTime() - inicio.getTime();
console.info("Pasaron: "+ trascurso+"ms");

