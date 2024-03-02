let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximo = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Hoisting

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (intentos < (intentosMaximo)) {
        

        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número en ${intentos} 
        ${(intentos === 1) ? 'vez' : 'veces'}`); //operador ternario, resume el "if/else en una linea."
            // === significa que tiene que comparar y validar que sean igual en valor y tipo de dato
            document.getElementById('reiniciar').removeAttribute('disabled'); //Se habilita el botón
            
        } else {
            //El usuario no acertó.
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es menor.')
            }
            else {
                asignarTextoElemento('p', 'El número secreto es mayor.')
            }
            intentos++; //contador de intentos
            limpiarCaja(); //llamado de funcion
        }
    } else {
        asignarTextoElemento('p', 'Llegaste a la cantidad maxima de intentos, lo siento.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        
    }
   
    return;
}

function apagarBoton(){
    let botonIntentar = document.getElementById("verificar");
    botonIntentar.disabled = true;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

/*COMO RETORNAR: 
"Retornar", significa que cuando se ejecuta la funcion retorna a un valor,
Un entero en este caso*/
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //generas numero aleatorio del 1 al 10
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


    //Si ya sorteamos todos los números...
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } else {
        //Si el numero generado está incluido en la lista...
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {

    //Titulo
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    //Parrafo
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto(); //se vuelve a llamar a la funcion, misma que se establece al inicio
    intentos = 1;
}

function reiniciarJuego() {
    //Pasos para reiniciar el juego.

    //1) Limpiar la caja.
    limpiarCaja();
    //2) Indicar mensaje de intervalo.
    //3) Generar el número aleatorio.
    //4) Inicializar el número de intentos.
    condicionesIniciales();
    //5) Deshabilitar el boton de "Nuevo juego".
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
 
}

condicionesIniciales();

//Todos los arreglos inician en posición 0.
