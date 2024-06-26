
 
 let intentos=1;
 let listaNumerosSorteados=[];
 let numeroMaximo=100;
 let numeroSecreto = generarNumeroSecreto();

 //console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){

    let elementoHtmlTitulo =document.querySelector(elemento);

    elementoHtmlTitulo.innerHTML=texto;

    return
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
     
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`acertaste el numero en  ${intentos} ${(intentos==1) ? 'vez':'veces'} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
         // el usuario no acerto
        if(numeroDeUsuario>numeroSecreto)
       {  
        asignarTextoElemento("p","el numero secreto es menor");

        }else{

        asignarTextoElemento("p","el numero secreto es mayor");

        }
        intentos++
        limpiarCaja();
    }

     
    return
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    
    
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista 
      //  console.log(numeroGenerado);
      //  console.log(listaNumerosSorteados);

    // si ya sortemos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
            asignarTextoElemento("p","ya se sortearon todos los numeros posibles");

      }else
          { 

             if (listaNumerosSorteados.includes(numeroGenerado)) {
                 return generarNumeroSecreto();
            }else{

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            }
    }
}

function mensajesIniciales(){ 
asignarTextoElemento("h1","Juego del nuemero Secreto!");
asignarTextoElemento("p","Indica un numero del 1-100");
numeroSecreto = generarNumeroSecreto();
intentos=1;
}
function reiniciarJuego(){
//limpiar la caja
limpiarCaja() // limpiar caja
mensajesIniciales(); //reinicia el juego
document.getElementById("reiniciar").setAttribute("disabled","true");

}

mensajesIniciales();



/*
// Crea una lista vacía llamada "listaGenerica".
let resultado=0;
let  listaGenerica = []; 

let lenguajeDeProgramacion =["javaScript","C","C++","klotin" ,"python"];

function mostrandoListas(){

    console.log(lenguajeDeProgramacion);
}

mostrandoListas();

function mostrandoListasInversas(){

    let tamanodeArreglo= lenguajeDeProgramacion.length;
   // console.log(tamanodeArreglo);
   let  i =tamanodeArreglo-1;
   // console.log(i);
   
   for ( i ; i >= 0; i--) {
    console.log(lenguajeDeProgramacion[i]);
   }
 

}
mostrandoListasInversas();

// Crea una función que calcule el promedio de los elementos en una lista de números.

function promedio(){

    let listaNumeros=[30,40,50];

 for (let i=0 ; i < listaNumeros.length; i++) {
   
    if (i<listaNumeros.length){ 
    
        resultado=parseInt(listaNumeros[i])+parseInt(listaNumeros[i+1]);
        console.log(resultado);
        }else{

            console.log(resultado);

        }

}

 }

 promedio();

 */