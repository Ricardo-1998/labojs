function nuevoarreglo(array,tipo){
    var miarray = [];
    for(i=0; i<array.length;i++){
        switch (tipo){
            case "string":
                if(typeof array[i] == typeof "hola"){
                    miarray[i] = array[i];
                }
                break;
            case "numero":
                if(typeof array[i] == typeof 1){
                    miarray[i] = array[i];
                }
                break;
            case "boolean":
                if(typeof array[i] == typeof true){
                    miarray[i] = array[i];
                }
                break;    
        }
    }
    console.log(miarray);
    

}