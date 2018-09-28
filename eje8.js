function sumaMatriz(matriz1,matriz2){
    var array;

    for(i=0; i<matriz1.length;i++){
        
    }
}
function sumaMatriz(m1,m2){
    
    var success=true;
     

    if(success){
        var m3=[];
        var mini=[];

        for(let i=0;i<m1.length;i++){
            
            if(m1[i].length!=m2[i].length){
                return "no se puede realizar la suma"
            }

            mini=[];
            for(let j=0;j<m1[i].length;j++){
                mini.push(m1[i][j]+m2[i][j]);
            }
            m3.push(mini);
            mini=[];
            
        }

        for(let i=0;i<m3.length;i++){
            console.log(m3[i]);
        }
    }

}