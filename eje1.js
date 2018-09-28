function numocurrencias(num, array){
    var cont = 0;
    for (let i=0; i<array.length; i++){
        
        if(num == array[i]){
            cont = cont+1;
            
        }
    }
    console.log(cont);
}