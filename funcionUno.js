//Crear una función que reciba un número y muestre en pantalla si es un número entero o un número decimal.
let num;
function decimalOentero (num) {
    if (Number.isInteger(num)) {
        console.log("El numero" + num, " es entero"); 
    }
    else console.log("El numero" + num, " es decimal");
}

decimalOentero(2);
