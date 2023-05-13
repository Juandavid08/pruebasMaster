/* Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9]. */


function obtenerImpares(numero) {
    var arrayImpares = [];

    for (var item = 1; item <= numero; item++){
        if (item % 2 !==0 ){
            arrayImpares.push(item);
        }
    }
    return arrayImpares;
}

var resultado = obtenerImpares(50);
console.log(resultado);