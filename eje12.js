function persona(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
}
var array;
function main(){
    var estado = true;
    console.log("Ingresar");
    console.log("Eliminar");
    console.log("Buscar");
    console.log("Modificar");
    console.log("Mostrar");
    console.log("Salir");

    var n = prompt("opcion: ");
    while(estado){
        switch (n){
            case 1:
                ingresar();
                break;
            case 2:
                eliminar();
                break;
            case 3:
                buscar();
                break;
            case 4:
                modificar();
                break;
            case 5:
                mostrar();
                break;
            case 6:
                estado=false;
    
        }
    }
    

}

function ingresar(){
    var nombre = prompt("Nombre: ");
    var edad = prompt("Edad: ");

    var nuevo = new persona(nombre, edad);
    array.push(nuevo);
}

function buscar(){
    var nombre = prompt("Nombre: ");
    for(i=0;i<array.length;i++){
        if(i.nombre == nombre){
            return(i);
        }                                                   
    }
    console.log("no se encontro");
}

function modificar(){
    var nombre = prompt("Nombre: ");
    var nuevonombre = nuevonombre("nuevonombre: ");
    var nuevaedad = nuevaedad("nuevaedad: ");
    for(i=0;i<array.length;i++){
        if(i.nombre == nombre){
            i.nombre=nuevonombre;
            i.nuevaedad= nuevaedad;
        }                                                   
    }
}

function eliminar(){
    var nombre = prompt("Nombre: ");
    var cont=0;
    for(i=0;i<array.length;i++){
        if(i.nombre == nombre){
            cont +=1;
        }                                                   
    }
    delete array[cont];
}

function mostrar(){
    for(i=0;i<array.length;i++){
        console.log(i);                                                   
    }
    
}