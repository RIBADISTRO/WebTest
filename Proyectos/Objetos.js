// Obejtos literales

/**
 * MANEJO
 * Creando unObjeto
 * Vacion
 */
var miObjeto = {};

/**
 * Con propiedades
 */
var miObjeto1 = {
    cadena: 'Este es una cadena',
    numero: 2,
    booleano: false
};

/**
 * Con metodos:
 */

 var miObjeto2 = {
    saludar: function(){
        console.log("Hola");
    }
 };
 /**
  * Usando las propiedades y metodos
  */

  var miObjeto3 = {
      metodo: function(){
          console.log(miObjeto3.propiedad1)
      },
      propiedad1: "Datos"
  };

  //Recuperando el valor de propeidad1
  console.log("miObjeto.propiedad1: ",miObjeto3.propiedad1);
  miObjeto3.metodo();

  
  /**
   * Cambiar un valor de una propiedad
   */

   var miObjeto4 ={
       propiedad: "Datos"
   };

   miObjeto4.propiedad= 123456789;
   console.log(miObjeto4.propiedad)

   /**
    * Borrando elementos
    * 
    * Utilizamos el controvertido operandor @delete. Te recomiendo esta lectura, para mejorar 
    * tu compresion acerca de este operador
    */

    var miObjeto5 = {
        propiedad: "Datos",
        borrame: "Quiero ser borrado"
    };

    console.log(miObjeto5.borrame);
    delete miObjeto5.borrame;
    console.log(miObjeto5.borrame);


    /**
     * .defineProperties()
     * Define nuevas propiedades o modifica las existentes directamente en el objetos,
     * retornando  el objeto modificado.
     */
var miObjeto6 = {propiedad: "Propiedad original"}
Object.defineProperties(miObjeto6, {

    "propiedad1 " : {
        value: true,
        writable: true
    },

    "propiedad2 " : {
        value: "Cadena de texto",
        writable: false
    }

});

console.info(miObjeto6);
miObjeto6.propiedad = "Propiedad Original Modificada"; //Cambiar el valor de la propiedad  original
console.info(miObjeto6.propiedad); //Muestra status actual

miObjeto6.propiedad1 = false;
console.info(miObjeto6.propiedad1);

miObjeto6.propiedad2 = "Cadena de texto... ¿modificada?"
console.info(miObjeto6.propiedad);

/**
 * .getOwnPropertyDescriptor()
 * Devuelve los detalles de las propiedades y metodos del objetos. En caso de no existir
 * retornara undefined.
 * 
 */

 var miObjeto7 = {
     metodo: function(){
         console.log(miObjeto7.propiedad1)
     },
     propiedad1: "Datos1"
 };

 console.info(Object.getOwnPropertyDescriptor(miObjeto7,'propiedad1'));
 //{value: "Datos1", writable: true, enumerable: true, configurable: true}

 console.info(Object.getOwnPropertyDescriptor(miObjeto7,'inventado'));
 //undefined


 /**
  * getOwnPropertyNames()
  * Devuelve un array con todos los nombres de las propiedades y metodos del objetos.
  * 
  */

  var miObjeto8 = {
      metodo: function(){
          console.log(miObjeto8.propiedad1)
      },
      propiedad1: "Datos"
  };
  console.log(Object.getOwnPropertyNames(miObjeto8));
  //["metodo", "propiedad1"]


  /**
   * isExtensible()
   * Determina si un objeto es extensible, es decir que se pueden
   * agregar nuevas propiedades al mismo.
   */

   var miObjeto9 = {
       metodo(){
            console.log(miObjeto9.propiedad1);
       },
       propiedad1: "Datos!"
   };

   console.log("¿Se puede extender?",Object.isExtensible(miObjeto9));
    //    ¿Se puede extender? true

   var sellado = Object.seal(miObjeto9);
   console.log("¿Se puede extender?",Object.isExtensible(sellado));
    //    ¿Se puede extender? false

   var congelado = Object.freeze(miObjeto9);
   console.log("¿Se puede extender?",Object.isExtensible(congelado));
    //    ¿Se puede extender? false

    Object.preventExtensions(miObjeto9);
    console.log("¿Se puede extender?",Object.isExtensible(miObjeto9));
    // ¿Se puede extender? false

    /**
     * .hasOwnProperty()
     * Devuelve true o false si la propiedad existe o no.     * 
     */

     var miObjeto10 = {
         metodo: function(){
             console.log(miObjeto10.propiedadE);
         },
         propiedadE: "Dato1"

     };
     console.log("¿Tiene la propiedadE \"propiedad\"",miObjeto10.hasOwnProperty('propiedadE'));
    //  ¿Tiene la propiedadE "propiedad" true
    console.log("¿Tiene la propiedadE \"propiedad\"",miObjeto10.hasOwnProperty('propiedadE2'));

   /**
    * propertyIsEnumerable()
    * Devuelve true o false, si la propiedad especificada es enumerable, y con ello sabemos
    * si sera incluida en la iteracion de un bucle For ... In.
    */

    var miObjeto11 = {
        metodo: function(){
            console.log(miObjeto11.propiedaB);
        },
        propiedaB: "Datos"
    };

    console.log("¿Es enumerado la \"propiedadB\": ",miObjeto11.propertyIsEnumerable('propiedadB'));
    // ¿Es enumerado la "propiedadB":  false
    console.log("¿Es enumerado la \"propiedadB\": ",miObjeto11.propertyIsEnumerable('propiedaB'));
    //¿Es enumerado la "propiedadB":  true

    /**
     * .toLocaleString
     * Retorna como string (configuracion reginal) todas las propiedades.
     */

     var fecha = new Date(); //instanciar  objeto
     var miObjeto12 = {
         metodo: function(){
             console.log(miObjeto12.propiedadC);
         },
         propiedadC: "Datos",
         fecha: fecha
     };
     miObjeto12.toLocaleString()
     console.log("La fecha es:",miObjeto12.fecha);
