// Iteraccion Basica con el Usuarios

/**
 * window.alert()
 * Muestra nuestro mensaje en una ventana.
 */

 alert("¡Bienvenidos a esta web");

 /**
  * Window.confirm()
  * PRegunta al usuario y ofrece dos botones que se traduce en valores booleanos
  * Aceptar(true) y cancelar la ventan(false).
  * 
  */

  confirm("¿Esta seguro que desea abordar esta web?");

//Ejemplo:

var respuesta = confirm ("¡Presione un boton!");
    if(respuesta == true){
        console.log("Has aceptado");
    }else{
        console.log("Has cancelado");
    }

/**
 * Window.prompt()
 * 
 * Pregunta al usuario y permite la escritura devolviendo el menaje.
 * 
 */

 prompt("¿Como te llamas?");

 //Registrando los datos en una varible
 var nombre = prompt("¿Como te llama: ?");