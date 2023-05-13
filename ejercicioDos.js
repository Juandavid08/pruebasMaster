/* Te presentamos el siguiente fragmento de código:
function f(x, y, z) {
 let a = x + y;
 let b = a * z;
 let c = Math.sin(b);
 return c;
}
Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función. */


function operador(x, y, z){
    let suma_x_y = x + y;
    let producto_a_y = suma_x_y * z;
    let respuesta = Math.sin(producto_a_y);
    return respuesta;
}

var resultado = operador(4, 7, 4);

console.log(resultado);