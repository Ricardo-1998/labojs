function mediciones(array){
    var promedio;
    var incerteza;
    var sumatoria = 0;
    var n=array.length;
    
    for(i=0;i<n;i++){
        sumatoria = sumatoria + array[i];
    }

    promedio = (1/n)*sumatoria;
    console.log("Promedio: "+ promedio);
    /**INCERTEZA */
    sumatoria=0;
    for(x=0;x<n;x++){
        sumatoria = Math.pow(array[x] - promedio,2);
    }
    incerteza = Math.sqrt(((1/(n-1))*sumatoria))

    
    console.log("Incerteza: " +incerteza);

} 