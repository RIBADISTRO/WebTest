/**
 * Capitulo 10- Funciones
 * Las fuciones de javascript son el alma de este lenguaje, por eso se consideran ciudadanos
 * de primera clase(first-class citizen), ademas de entidades de orden superior.
 * 
 * En javasScript, las funciones tienen "Suoer poderes". Estos son algunos de los mas 
 * importantes;
 * 
 *          Ser pasadas como parametros(callbacks).
 *          Ser parte de los objetivos como metodos.
 *          Ser asignado a una varible(funcion anonima).
 *          Ser retornadas por otra funcion.
 * 
 */

/**
 * MANEJO
 * 
 * Declarar funciones
 * Como sentencia:
 */
function miFuncion1(){
    console.log("Hola")
}

/**
 * Como valor de una varible:
 * */
var miFuncion2 = function(){
    console.log("Hola")
}
/**
 * Como Metodo en un objeto:
 */
var miFuncion3 = {
    propiedad: "Soy una propiedad",
    metodo: function(){
        console.log("Hola")
    }
}
console.log(miFuncion3);

/**
 * Ejecutar funciones
 * Auque pueda parecer algo extraño, desde el principio, ya 
 * estabamos ejecutando funciones.
 */

//  Recuerdar isNaN?
console.log("Recuerdad?",isNaN(NaN));

// Ahora ejecutamos nuestra propia funciones y metodos.

var miFuncion4 = function(){
    console.log("Hola");
}

function otraFuncion(){
    console.log("Hola de nuevo");
}

var obj = {
    metodo: function(){
        console.log("Hola ahora como metodo!");
    }
}
miFuncion4();       //Ejecutando mi funcion
otraFuncion();      //Ejecutando mi fucnion
//obj();              //Ejecutando mi funcion

/**
 * ARGUMENTOS Y PARAMETROS
 * 
 * Cuando queremos hacer funciones con un nivel de abtraccion realmente, tenemos que
 * recurrir al aislamiento. De tal forma que nuetra ducnion no dependa de cierta varible
 * o datos externos a ella.
 * 
 * Cuando definimos (creamos) una funcion, podemos incluir ciertos paramentros entre los
 * parentesis que actuara como referencias. Funionaran internamente igual que variables,
 * de tal forma quea la hora de ejecutar la funcion.. podremos pasarle cierto argumento y
 * asi tener funiones con un mayor nivel de abstraccion.
 * 
 */

 /**
  * Uso normal
  * Declarando Parametros
  */

  function sumar (p1, p2){
      console.log("Suma: ",p1 + p2);      
}

//Pasando Argumentos
//  El exceso de argumento no es un problema.
sumar (2,3,"Mas datos...", 45,true);

// La falta de argumento crea un valor indefinido.

function testeando(p1, p2){
    console.log("P1:" ,p1);
    console.log("P2:" ,p2);
}
// Pasando Argumentos
testeando(2);

/**
 * Parametros Opcionales
 * Podremos simplicar enormente la ejecucion de las funciones si, definimos ciertos 
 * valores por defecto para aquellos parametros que consideremos opcionales.
 * 
 * Este trabajo adicional por nuetra parte, se vera recomensado posteriormente en tareas de 
 * soprte y documetacion que no tendremos que realizar.
 * 
 * Trabajar con valores por defecto nos ayudara mucho para construi librerias y un codigo
 * modular ificiente.
 * 
 *Basicamente existe dos manera de hacer esto
 */

//  Utilizando el operador || (or)

function userID(nombre, numero){
    numero = numero || "000000E";
    console.log("ID: ",nombre +numero)
}
// Ejecutar funcion
userID("Julio",33160856);
userID("Rivera");
userID("Bautista",0)
/**
 * Auque este operador hace un buen trabajo se equivocca con el 0 -entre otro-
 * por eso no es recomendable utlizarlo, especialmente cuando se encarga de 
 * gestionar el parametro por defecto de valores numericos.
 * 
 * 
 * Utilizar un if
 * Podemos hacer una validacion por tipo, lo que descartara cierto s falsos 
 * positivos como el caso del 0
 */

 function sumarI(a,b){
     if(typeof b === 'undefined'){
         b = 0;
     }
     return a+b;
 }

 console.log(sumarI(2, 8));

//  Con un operador ternario se hace mas compacto pero menos legible:
 function sumarII(a, b){
    b = typeof b !== 'undefined' ? b : 0;
    return a+b;
}
console.log(sumarII(2,8));

/**
 * El orden es clave
 * 
 * El orden de los parametro es muy importantes, ya que su posicicion 
 * puede alterar enormente usabilidad la hora de la ejecucion, por eso el
 * orden  siempre sera
 * 
 *  -> Parametros fijos (primero)
 *  -> Parametros opcionales(despues)
 */

 /**
  * Objeto como argumento
  */

  constacto = [];
  function crearContacto (nombre, usuarioTwitter, referencia, nota, fotoUrl){
      constacto.push({
          "nombre": nombre,
          "@": "@"+ twitter
      })
  }

//   console.log(crearContacto("Julio","Invetario","amigo","etc","mas cosas.."));

/**
 * ¡Refactorizamos!
 */

 function crearContactoII (dato){
     constactos.push({
         "nombre": nombre,
         "@" : "@"+ twitter
     })
 }

//  Puedo pasar ls atributos en el orden que quieras
// crearContactoII({twitter: "Invitado", nombre: "Pepe", fotoUrl: "http://...."});

/**
 * Avanzado: Objeto arguments
 * El objeto Arguments no es un array, solo es similar
 */

 function pruebArgumentos(){
     console.log(arguments);
     console.log(arguments[0]);
     console.log(arguments[1]);
 }

 pruebArgumentos(1, "value",true);

 /**
  * RETORNO
  * El retorno nos permite devolver un valor al terminar de ejecutarse la funcion.
  * este valor puede ser cualquier tipo de dato de los muchos que tenemos en javascript
  * operaciones realizadas.
  */


  function validarPar(numero){
      var esPar = numero % 2 !== 1;
      var mensaje;

      if(esPar){
          mensaje = "Bravo es un numero par. ;)";
      }else{
          mensaje = "Error! no es un numero par.... ¬¬\"";
      }
      return mensaje;
  };

  console.log("El 5 es un  numero par?: ", validarPar(4));

  /**
   * Una suma de cuadrados en el retorno. Las operaciones tambien pueden ser
   * realizada en el retorno de la funcion.
   */

   function sumaCuadrado(a,b){
       return (a * b) + (a * b);
   }

   var resultado = sumaCuadrado(1,2);
   console.log("la suma es:",resultado);

   /**
    * Anidacion
    * 
    * Dentro de una funcion, podremos crear nuevas fucniones al igual que varibles
    * de todo tipo.
    * Este es un recursp a tener en cuenta, pero no debemos abusar de anidacion... ya que,
    * el codigo puede volverse muy dificil de leer y depurar.
    */

function saludar(quien){
    function alertaSaludo(){
        console.log("Hola "+ quien);
    }
    return alertaSaludo;
}


var saluda = saludar("Amigo/a");
saluda(); //Ejecutamos le funcion con la varible almacenado

/**
 * Tambien podemos usar parametros, al igual que una funcion normal
 * 
 */
function saludarI(quien){
    function alertaSaludo(){
        console.log("Hola "+ quien);
    }
    return alertaSaludo;
}


saludarI("Amigo/a")();

/**
 * AMBITO (Scope)
 * Por defecto e javaScript existe dos tipos de ambitos, local y global. Domindanar los ambitos
 * nos hara llegar a ser grandes artesanos, pero no es una tarea sencilla.
 */

 var ambitoGlobal = "Soy una varible global";

 function miFuncion(){
     var ambitoLocal = "Soy varible local";
     console.log("Desde local puedo ver ambitoGlobal", ambitoGlobal);
     console.log("Desde local puedo ver ambitoGlobal", ambitoLocal);
 }
 console.log("Desde local puedo ver ambitoGlobal",ambitoGlobal);
 //console.log("Desde local puedo ver ambitoLocal",ambitoLocal);// Uncaught ReferenceError: ambitoLocal is not definedat

 /**
  * Funciones Anonimas
  * 
  * En JavaScript podemos crear tantas funciones como queremos, sinembargo entre los
  * requisitos de creacion no esta incluir un nombre necesariamente.
  * 
  * 
  * Funciones eque retornan Funciones
  * 
  * Cuando una funcion una nuevas funciones, esta nueva funcion logicamente sera
  * anonima.
  */

  function salduos(quien){
      return function(){
          console.log("HOla" + quien);
      }
  }

  salduos(" Amigo")();


  /**
   * Funciones anonimas autoejecutadas
   * 
   * Es uno de los patrones mas clasicos y utilizados en javaScript, para encapsular
   * nuetros codigo y prevenir que pueda ser alterado desde el exterior.
   * 
   */

   (function (){
       console.log("Hola amigo")
   })();
   /**
    * Como podemos, ver la esctructura basica seria algo asi:
    */

    (function (){})();

    /**
     * Auque existe bastante variantes y debates:
     */

     (function(){}());
     !function(){}();
     +function(){}();
     !1%-+~function(){}();

     /**
      * Al igual que el resto de funciones podemos hacer uso de los parametros
      */

      (function(quien){
          console.log("Hola "+ quien);
      })("Amigos/a");  