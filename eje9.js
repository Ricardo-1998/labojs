
function juego(numero){
    var array;
    var estado=false;
    for(i=0;i<20;i++){
        array.push(Math.floor(Math.random()*100+1));
    }

    for(x=0;x<20;x++){
        if(numero = array[x]){
            estado = true;
        }
    }
    if(estado){
        console.log("Has adivinado");
    }
    else{
        console.log("no has adivinado");
    }
}