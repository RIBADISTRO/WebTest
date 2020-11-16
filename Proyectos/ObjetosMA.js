// METODOS AVANZADOS 
/**
 * For ... in 
 * itera sobre todas las pripiedades de un objeto, en un orden arbitrario.
 */

 var objeto1 = {
     propiedad1: "hola",
     propiedad2: 2,
     propiedad3: false,
     propiedad4: [true, 2, 5, "...."],
     propiedad5: {
         datos: "mas datos..."
     },
     metodo: function(){
         console.log("hola");
     }
 }
 function mostrarPropiedades(objeto, nombreObjeto){
    var resultado = "";
    for (var i in objeto) {        
            var  resultado = resultado+  nombreObjeto + "." + i + " = " + objeto[i] + "\n";
        
    }
    return resultado;
 }

 console.log(mostrarPropiedades(objeto1, "objeto1"));

 /**
  * Uso Especiales
  * Trabajando con espacios y caracteres especiales
  */

  var miObjeto = {
      nombre: "Objeto",
      "año": 2015,
      "Estado de sistema":"correcto"
  };

  console.log(miObjeto["año"]);
  miObjeto["Estado de sistema"] = "fuera de servicio";
  console.log(miObjeto["Estado de sistema"]);

  /**
   * Acortar Objetos
   * En ocasiones, especialmente al parsear datos de internet en formato JSOn, los objetos
   * pueden estar muy anidados.. dificultando enormemente el manejo. Por eso podremos
   * considerar una buena practica, acortarlos con nuevas variables o sobreescribir al propio
   * objetivo con aquellos datos relevantes:
   */

   var objetoAbreviado = objeto.muy.largo["metodo y propiedades"];
   objetoAbreviado.propiedad1;