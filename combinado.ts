//Sumar todos los elementos de un arreglo de números cuyo valor sean mayor al numero recibido

    var arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var nuevoArreglo: number[] = [];
    var numero: number = 4;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > numero) {
            nuevoArreglo.push(arreglo[i]);
        }
    }
    console.log('El arreglo original es: '+arreglo);
    console.log('El arreglo filtrado es: '+nuevoArreglo);
    var suma: number = 0; if (nuevoArreglo.length > 0) {    for (var i = 0; i < nuevoArreglo.length; i++) {
        suma += nuevoArreglo[i];
    }
    console.log('La suma de los elementos del arreglo es: '+suma);
}
else {
    console.log('El arreglo esta vacio');
}
