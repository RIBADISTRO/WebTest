// switch
const metodoPago = 'efectivo';
switch(metodoPago){
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
    break;

    case 'cheke':
        console.log(`El usuario pago con ${metodoPago}`);
    break;

    case 'targeta':
        console.log(`El usuario pago con ${metodoPago}`);
    break;

    default:
        console.log('Metodo de pago no soportado');
}