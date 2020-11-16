// metodos destacados:
/**
 * .assert()
 * Aparece un mensaje de error en la consola si la afirmacion es falsa.
 */
var controlador= false;
console.assert(controlador,"\"controlador\" es igual a \"false\"");

/**
 * .clear()
 * Limpia la consola.
 */
console.clear()

/**
 * .dir()
 * Retorna una lista interactiva de las propiedades de un objeto.
 */
console.dir(document.body);

/**
 * .dirxml()
 * Retorna una representacion HTML del objeto.
 */

 console.dirxml(document.body);

// #############################################################################
//  AGRUPADORES

/**
 * .group()
 * Crea un grupo de mensaje de consola.
 * 
 * .groupCollapsed()
 * Crea un grupo de mensaje de consola minimizados por defecto
 * 
 * .groupEnd()
 * Cierra el grupo de mensaje
 */

 console.groupCollapsed("bucleFor");

 for(var i=100; i>0; i--){
     console.log("Iterando numero %i",i);
 }
 console.groupEnd();

// ###############################################################################
/**
 * .table()
 * Muestra los datos dentro de una tabla
 */

 var lenguaje=[
     { nombre: "Javascript", extencion: ".js" },
     { nombre: "TypeScript", extencion: ".ts"},
     { nombre: "Coffeescript",extencion: ".coffee"}
 ];
//  console.table(lenguaje);
//  console.table(lenguaje,"extencion");

 /**
  * GESTION DEL TIEMPO
  * 
  * .time()
  * Inicia un contador en ms.
  * 
  * .timeEnd()
  * Para el contador y devuelve el resultado.
  */

 console.time("Medicion de miArray");
 var miArray = new Array(1000000);
 for(var i = miArray.length-1; i >=0; i--){
     miArray[i]= new Object();
 };

 console.timeEnd("Medicion de miArray");

/**
 * NOTIFICADORES
 * 
 * .log()
 * Saca un mensaje por consola.
 */
console.log("Hola en formato clasico");

/**
 * .info()
 * Saca un mensaje por consola con un estilo informativo.
 * 
 */

 console.info("Hola es un formato informativo");

 /**
  * .warn()
  * Saca un mensaje por consola con un estilo alerta.
  * 
  */
 console.warn("Hola en formato alerta");

 /**
  * .error()
  * Saca un mensaje por consola de error, con los mismos estilos, creando confusion.
  * No se recomienda su uso.
  */
console.error("Hola en formato error")