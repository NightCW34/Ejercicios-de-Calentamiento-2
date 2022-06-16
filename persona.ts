
    var arreglo = [{ nombre: 'Juan', sexo: 'M' }, { nombre: 'Maria', sexo: 'F' }, { nombre: 'Pedro', sexo: 'M' }, { nombre: 'Ana', sexo: 'F' }];

    var nuevoArreglo = [];
    for (var i = 0; i < arreglo.length; i++) { 
        if (arreglo[i].sexo == 'M') { 
            nuevoArreglo.push({ nombre: 'Sr. ' + arreglo[i].nombre }); 
        } else {
            nuevoArreglo.push({ nombre: 'Srta. ' + arreglo[i].nombre }); 
        }
    }

    console.log(arreglo); //arreglo original
    console.log(nuevoArreglo); //arreglo con nombres modificados
    