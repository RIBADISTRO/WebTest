// metodos

/**
 * .toExponetia()
 * Retorna una cadena de texto co el valor de los numero en formato de 
 * potencia
 */

 var numObj= 77.1234;
 console.log(numObj.toExponential()); //7.71234e+1
 console.log(numObj.toExponential(4)); //7.7123e+1
 console.log(numObj.toExponential(2)); //7.71e+1
 console.log(233.4434.toExponential());//2.334434e+2

 /**
  * .toFixed()
  * Retorna una cadena de texto con los numeros decimales.
  * Auque no es la mejor forma, tambien podemos redondear el valor.
  */

  var numObjs= 12345.6789;
  console.log(numObjs.toFixed()); //12346
  /**
   * Podemos alterar la longitud (numero de decimales) con el argumento 
   * que pasamos al metodo.
   */

   console.log(numObjs.toFixed(1));
   console.log(numObjs.toFixed(6));
   console.log((1.23e+20).toFixed(2));
   console.log((0).toFixed(2));
   console.log(2.34.toFixed(1));
   /**
    * Añ utlizar valores decimales negativos es importante albergarlos dentro de 
    * parentesis para que respete el tipo de datos tambien.
    */

    console.log(-2.34.toFixed(1)); //-2.3
    console.log((-2.34).toFixed(1)); //"-2.3"

    //######################################################################################

    /**
     * .toLocaleString()
     * Retorna una cadena cin el valor representando el lenguaje local.
     */

     var numeroB = 3500;
     //En local
     console.log(numeroB.toLocaleString()); //3,500
    //  En Ärabe
    console.log(numeroB.toLocaleString('ar-EG')); //٣٬٥٠٠
    // En chino decimal 
    console.log(numeroB.toLocaleString('zh-Hans-CN-u-nu-hanidec')); //三,五〇〇

    // ######################################################################################

    /**
     * toPrecision()
     * Devuelve un numero con los decmimales deados pero sin redondera
     */

     var numeroC = 5.123456;
     console.log(typeof numeroC.toPrecision()); //5.123456
     console.log(numeroC.toPrecision(5)); //5.1235
     console.log(numeroC.toPrecision(2)); //5.1
     console.log(numeroC.toPrecision(1)); //5
     console.log((1234.5).toPrecision(2)); //1.2e+3

    //  ####################################################################################
    /**
     * .toString
     * Devuelve una cadena con el numero en la base (hexadecimal,binaria...)
     * que determinamos.
     */

     console.log(typeof (17).toString()); //"17" Cadena
     console.log(typeof (17.2).toString()); //"17.2" Cadena
     console.log(typeof (-0xff).toString()); //"-255" Cadena
     console.log(typeof (254).toString(16));//fe
     
    /**
     * .parseFloat()
     * Devuelce un numero decimal o entero partiendo de una cadema
     */

    Number.parseFloat("3.14");
    Number.parseFloat("314e-2");
    Number.parseFloat("0.0314E+2");
    Number.parseFloat("3.14textos...");
    Number.parseFloat("1textos...");

    /**
     * .parseInt()
     * 
     * Devuelve un numero entero partiendo de una cadena
     * Ademas, nos permite seleccionar la base numerica sobre la que
     * trabajamos (binarias con 2, hexadecimal con 16, etc...). Por defecto se utiliza la base 10 (decimal)
     */

    parseInt(" 0xF", 16);
    parseInt(" F", 16);
    parseInt("17", 8);
    parseInt(021, 8);
    parseInt("015", 10);
    parseInt(15.99, 10);
    parseInt("15,123", 10);
    parseInt("FXX123", 16);
    parseInt("1111", 2);
    parseInt("15*3", 10);
    parseInt("15e2", 10);
    parseInt("15px", 10);
    parseInt("12", 13);
    // ###############################################################################################################

    // Metodo
    /**
     * round()
     * Devuelve el valor de un numero redondeado el entero mas cercano.
     */
    Math.round(20.5);// 21
    Math.round(20.49); // 20
    Math.round(-20.51); // -21
    
    /**
     * Floor()
     * Devuelve el maximo entero menor igual a un numero.
     */

    Math.floor(20.5); //21
    Math.floor(20.49); // 20
    Math.floor(-20.51); // -21
/**
 * .random()
 * devulve un numero pseudo-aleatorio entre 1 y 1
 *  -Numero aleatorio entre 0 (incluido) y 1 (excluido).
 * 
 *   Math.random(); 
 * 
 * Número aleatorio entre min (incluido) y max (excluido).
 *      Math.random() * (max - min) + min;
 *      Math.random() * (11 - 0) + 0;
 *  
 * 
 * Número entero aleatorio entre min (incluido) y max (excluido).
 *  Math.floor(Math.random() * (11 - 0)) + 0;
 * 
 * 
 */
