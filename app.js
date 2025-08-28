let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados= [];  
let numeroMaximo=10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos=== 1) ? `vez`: `veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   else{ 
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "numero secreto es menor");

        } else{
            asignarTextoElemento ("p","numero secreto es mayor")
        } 
    
         intentos ++;
         limpiarCaja();
        } 
        
    }   
   
function limpiarCaja(){
   let valorCaja= document.querySelector("#valorUsuario");valorCaja.value="";
}   

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
// ya sorteamos todos los numeros 
if(listaNumerosSorteados.length== numeroMaximo){
asignarTextoElemento( "p","ya se sortearon todos los numeros posibles");


}else{

if(listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();

}else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

}

}
 function condicionesIniciales() {
 
asignarTextoElemento("h1","Juego del número secreto!");
asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto() ;
intentos=1;
 } 

function reiniciarJuego() {


//limpiar la caja
limpiarCaja();
//indicar msjes de intervalos de numreros
condicionesIniciales();
//generar numero aleatorio

//inicializar el numero de intentos

//deshabilitar el boton del nuevp juego
document.querySelector("#reiniciar").setAttribute("disabled","true");
}


condicionesIniciales();