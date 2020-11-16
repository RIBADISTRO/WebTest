let hora = 19;

if(hora > 0 && hora<=10){
    console.log('Buenos dias');
}else if(hora > 10 && hora <= 18){
    console.log('Buenas Tardes');
}else if(hora >18 && hora < 24){
    console.log('Buenas Noches');
}else{
    console.log('Hora invalida');
}

// Operador  ||

let efectivo = 300,
    credito = 700,
    disponible = efectivo+ credito,
    totalCarrito = 500;

    if(totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible){
        console.log('Puedo Pagar');
    }else{
        console.log('No puedo pagar');
    }

// terminario

const logueado = false;

console.log(logueado ===true ? 'Si se logueo' : 'no se logueo');



// switch 

