// OPERADOR DE ASIGNACION

/**
 * Estos operadores. nos permiten alterar de manera sencilla y controlada 
 * el calor de una varible
 */

 // =Asignacion

 /**
 *  MATEMATICA BASICA
 * 
 * @var suma = 5 + 3;
 * @var resta = 10 - 6;
 * @var multiplicacion = 3 * 3;
 * @var division = 6 / 2;
 * @var modulo = 43 % 10;
 */

var x = 1;
var y = 2;
x = y;
console.info("\"x\" vale:",x);

// +=Suma

var x = 1;
var y = 2;
x += y; // x= x + y
console.info("\"x\" vale:",x);

// -= Resta

var x = 1;
var y = 2;
x -= y;//x= x - y
console.info("\"x\" vale:",x);

// *= Multiplicacion
var x = 1;
var y = 2;
x *= y; // x= x * y
console.info("\"x\" vale:",x);


//  /= Division

var x = 1;
var y = 2;
x /= y; // x= x / y
console.info("\"x\" vale:",x);

//  %= Modulo

var x = 1;
var y = 2;
x %= y; // x= x % y
console.info("\"x\" vale:",x);

//#######################################################
//JUGANDO CON LA VARIABLES

var empezandoComo3 = 3;
era3();

empezandoComo3 = 35;
era3();

empezandoComo3 = empezandoComo3 + 30;
era3();

empezandoComo3 += 3;
era3();

empezandoComo3++;
era3();

empezandoComo3 -= 12;
era3();

empezandoComo3--;
era3();

empezandoComo3 *= 10;
era3();

empezandoComo3 /= 11;
era3();

empezandoComo3 += "Text9";
era3();

empezandoComo3 +=20;
era3();

empezandoComo3++;
era3();

function era3(){
    console.log("EmpezoComo3 deberia ser 3, ahora su valor es:" + empezandoComo3);
};

