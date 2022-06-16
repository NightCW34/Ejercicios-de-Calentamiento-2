//Arreglo filtrado menor que el numero recibido

  var arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var nuevoArreglo: number[] = [];
  var numero: number = 4;
  for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] < numero) {
          nuevoArreglo.push(arreglo[i]);
      }
  }
  console.log('El arreglo original es: '+arreglo);
  console.log('El arreglo filtrado es: '+nuevoArreglo);
