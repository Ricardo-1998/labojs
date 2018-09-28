function sumaArreglo(array){
    var total = 0;
    var promedio;
    for (let i=0; i<array.length; i++){
        total = total + array[i];
    }
    promedio = total/array.length;
    console.log("Total: " + total);
    console.log("Promedio: " + promedio);
}