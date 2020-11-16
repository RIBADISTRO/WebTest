/**
 * Caputlo 8 - Arrays
 * 
 * Los array son estructura que nos permiten almacenar muchos datos,
 * sin tener que preucuparnos por el orden o la organizacion interna.
 * 
 * Otra forma mas sencillo de entenderlo, es imaginar que un array es sencillamente como una
 * lista de compra.
 * 
 * Partiendo de estas analogia sera sencillo añadir elementos nuestras lista:
 * 
 * 
 * -Tomates
 * -Café
 * -Brócoli
 * -Cilandro
 * -Bombillas
 * 
 * 
 * Cuando añadimos elementos a la lsira el orden puede alterarse o no, en funcion de si se 
 * añadiran antes o despues de otrp elementos.
 * 
 * 0 - Tomates
 * 1 - Cafe
 * 2 - Te        (Nuevo)
 * 3 - Brócoli   (Movido)
 * 4 - Cilandro  (Movido)
 * 6 - Bobillas  (Movido)
 * 6 - Pen Drive
 */

 /**
  * MANEJO
  * Creando un array
  * 
  * Vacío:
  */

  var arreglo = [];
//   Con elementos y Usando Indices
var arreglo = [1,"Platanos","Pisicina","manzana",true];
console.log("arreglo[4]:" + arreglo[4]);

// Cambiando un valor del Indice

var arreglo = [1,"Platanos","Pisicina","manzana",true];
arreglo[0] = "fresa";
arreglo[4] = "Pera";
arreglo[5] = "Limón";
console.log("arreglo[1]:" + arreglo[1]);

 /**
  * Borrando elementos
  * 
  * Sobrescribiendo a undefined
  * 
  * En ocaciones solo queremos dejar el hueco vacio y no cambiar el orden de los elementos
  *  de un array.
  *  En caso lo mejor es ustituir el valor por @undefined ya que usando @delete o igualando.
  * 
  *  var arreglo = [1, "plátano"];
  *  arreglo[0] = undefined;
  *  delete arreglo[1];
  */

//   Borando el elemento
//Al eliminar un elemento del array cambiamos el orden del array.
  var arreglo = [1, "Platanos","manzana"];
  arreglo.splice(1,1);
  console.log(arreglo[1]);

/***************************************************************************+**************
 * PROPIEDADES
 * 
 * .length
 * Podremos saber cuantos elementos contiene un array
 */

 var arreglo1 =  [1, "Platanos", "Manzana"]
 console.log(arreglo1.length);

/**
 * Al tener este dato clave podremos hacer bucles que realicen sus iteraciones en  funiones
 * de la cantidad de elementos.
 * 
 * Presta atencion al uso de la varible  "i" en el interior del bucle para recorrer
 * el array.
 */

 var numero = [0, 1,2,3,4,5,6,7,8,9,10];
 for(var i = 0; i< numero.length; i++){
    numero[i] *= 10;
    console.info(typeof numero[i]);
 }

 /**
  * Metodos
  * 
  * .isArray()
  * Retorna un booleano en funcion que el parametros es un array o no.
  */
 var arrelo2= [1,2,3];

//  esto es true
console.info(Array.isArray([1]));
console.info(Array.isArray(arrelo2));

// estos son false
console.info(Array.isArray());
console.info(Array.isArray({}));
console.info(Array.isArray(null));
console.info(Array.isArray(undefined));

/**
 * .sort()
 * Permite organiza los elementos de un array, por orden alfabetico o en funciones numericas
 * (ascentente)
 * 
 */


 var frutas = ['platanos', 'manzanas', 'durazno', 'mango', 'sandia'];
 var numeros = [0, 45, 2, -5, 123, -47];
 var miArray = ['uno',2,true,'mas datos...'];

 console.info(frutas.sort());
 console.info(numeros.sort());
 console.log(miArray.sort());

/**
 * .reverse()
 * Invierte el orden de un array
 */
miArray.reverse();
 console.log(miArray);

 /**
  * .join()
  * Retorna una cadena con todo los elementos de array dentro
  * 
  */

  var array = ['dato1',2,'masDatos'];
  var datosJuntos = array.join(); //dato1,2,masDatos
  var datosJuntos2 = array.join(''); // dato12masDatos
  var datosJuntos3 = array.join(' + '); //
  console.log(datosJuntos3); // dato1 + 2 + masDatos

  /**
   * toSrting();
   * Retorna una cadena de texto con todos los elementos.
   */

   var amigos = ['Arely','Idalia', 'Pablo', 'Rodrigo'];
   console.log(amigos.toString()); //Arely,Idalia,Pablo,Rodrigo

   /**
    * .toLocalString()    * 
    * Retorna como string (configurando regional) todos los elementos.
    */

    var numero = 1337.89;
    var fecha = new Date();
    var miArray = [numero,fecha, 'mas datos'];

    var arrayConvertida = miArray.toLocaleString();
    console.log(arrayConvertida);

    /**
     * .concat()
     * Retorna un nuevo array con los arrays especificados concatenados
     * - Dos arrays:
     */

     var arreglo1 = ['a', 2, true,false];
     var arreglo2 = [1,2,3]
     var nuevaAray= arreglo1.concat(arreglo2);
     console.log(nuevaAray);   
     
     /**
      * Multiples array:
      * 
      */

      var arreglo1 = ['a', 2, true];
      var arreglo2 = [1,2,4];
      var otroArreglo = ['b', 1, false];
      var nuevaArray = arreglo1.concat(arreglo2, [2,434,3,2], otroArreglo);
      console.log(nuevaArray);


      /**
       *.indexOf()
       *Devuelve la posicion donde se encutra el elemento en si o -1, si no lo encuentra.
       */

       var arra1 = [2,5,9,4,6,3,8,0,7,1];
       var index = arra1.indexOf(4); //3
       var index = arra1.indexOf(12); // -1
       console.log(index);
/**
 * 
 * .lastIndexOf()
 * Devuelve la posicion del ultimo elemento en si que conincide o -1, si no lo encuentra.
 */

       var array11 = [7,1,3,7];
       console.log(array11.lastIndexOf(7)); //3
       console.log(array11.lastIndexOf(2)); //-1

       /**
        * .push()
        * Añadir nuevos elementos al final de un array.
        * 
        */

        var arrayLista = [1, "Platano", "Manzana"];
        console.log("antes: "+ arrayLista.length);
        arrayLista.push("Nuevo","Otronuevo");
        console.log("Despues: ", arrayLista.length);
        console.log("Arreglo[4]: "+arrayLista[4]);


         var miarray1 = [1,2,3,6];
         miarray1.pop(); //Elimina el ultimo elemento del array.
         miarray1.shift(); //Elmina el primer elemento del array.
        //  miarray1.unshift(true, "Otro datos...!"); //Añade nuevo elemento al principio del array
         console.log("Longitud actual: ",miarray1.length);
/**
 * .splice()
 * 
 * Borrar elementos del array, alterando con ello la posicion de los demas.
 */

 var frutas1 =  ["Platano","Manzana","Lechuga",3,true,[1.23,4,"Lentidu"], "Mango"];
console.log("frutas1[5]: ",frutas1[5]); //(3) [1.23, 4, "Lentidu"]
frutas1.splice(1,3);
console.log("Frutas1[3]:" , frutas1[1]); //platanos
console.log("frutas.length: ",frutas1.length); //4