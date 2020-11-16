// Template Literals o String Template

const producto1 =  'pizza',
      precio1 = 40,
      producto2 = 'linux',
      precio2 = 78;

 /*let html;
     html = '<ul>' +
            '<li>Orden: ' + producto1 + '</li>' +
            '<li>Precio: ' + precio1 + '</li>' +
            '<li>Orden: ' + producto2 + '</li>' +
            '<li>Precio: ' + precio2 + '</li>' +
            '<li>Total: ' + (precio1 + precio2) + '</li>' +
            '</ul>';
*/

html= `
        <ul>
            <li>Orden: ${producto1} </li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Precio: ${precio2}</li>
            <li>Total: ${total(precio1,precio2)}</li>
        </ul>
    `;
// funcion de sumar totales:
function total(precio1,precio2){
    return precio1 +precio2;
}



document.getElementById('app3').innerHTML = html;
// console.log(html);
