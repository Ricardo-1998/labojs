function encriptar(cadena){
    var a=cadena.split("");
    for(i=0; i< a.length;i++){
        switch (a[i]){
            case "m":
                a[i] = 0;
                break;
            case "u":
                a[i] = 1;
                break;
            case "r":
                a[i] = 2;
                break;
            case "c":
                a[i] = 3;
                break;
            case "i":
                a[i] = 4;
                break;
            case "e":
                a[i] = 5;
                break;
            case "l":
                a[i] = 6;
                break;
            case "a":
                a[i] = 7;
                break;
            case "g":
                a[i] = 8;
                break;
            case "o":
                a[i] = 9;
                break;                   
        }
    }

    console.log(a.join(""));
}