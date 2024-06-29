let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Numero correcto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Usuario no acertó
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    // Buena practica colocar return aunque no significa que no la función no sea correcta
    return;
}

function limpiarCaja() {
    // document.querySelector('#valorUsuario'); es lo mismo que document.getElementById('reiniciar');
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    } else {
        // Si numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto' );
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}  

function reiniciarJuego() {
    /* Limpia la caja; indica mensaje intervalo de numeros; genera numero aleatorio;
     inabilita el botn 'nuevo juego' e inicializa el numero de intentos.*/
    limpiarCaja();
    condicionesIniciales();
    // deshabilita el boton cuando se acierta 'true'
    
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();