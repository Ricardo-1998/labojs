function sumarDatos(array){
    var n = Math.ceil(array.length/2);
    var ultimo = array.length-1;
    for(i=0; i<=n;i++){
        console.log(array[i] + array[ultimo-i]);
    }
    
}


