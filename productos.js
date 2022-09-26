
let salida = 0;
while(salida != 1 ) {
    let producto = prompt("Que producto estas buscando?")
    if (producto == "cera de soja"){
        alert("producto disponible")
    }
    else if  (producto == "pabilo")
   {
    alert("producto disponible")
   } 

   else if  (producto == "manteca de cacao")
   {
    alert("producto disponible")
   } 
   else if  (producto == "escencias")
   {
    alert("producto disponible")
   } 
   else {
    alert("producto sin stock o inexistente, por favor intentelo de nuevo")  
   }
   salida = prompt("Si desea finalizar la busqueda, ingrese el numero 1 para salir:") 
}