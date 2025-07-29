//Inicialización de variables globales
const lista = document.getElementById('listaAmigos');
const resultados = document.getElementById('resultado');
 const amigosListados = [];
const titular = document.getElementById('titular');
const divProgreso = document.getElementById("barra");

// Función para sortear un amigo secreto
// Esta función verifica si hay al menos dos amigos en la lista antes de realizar el sorteo
function sortearAmigo() {    
    if (amigosListados.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        resetearJuego(); // Limpiar resultados previos y reiniciar el juego
        return;
    }
    generarResultado(); // Mostrar el resultado del sorteo   
}

// Función para obtener la lista de amigos
// Esta función recorre los elementos de la lista y los almacena en un array
function obtenerListadoAmigos() {
    lista.textContent = ''; // Limpiar la lista antes de poblarla
        for (let i = 0; i < amigosListados.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigosListados[i];
           lista.appendChild(itemLista); 
    }             
}

function generarResultado(listadoAmigos) {
    animateProgressBar(document.getElementById("progresoBarra").clientWidth);// Animar la barra de progreso
    sorteo = Math.floor(Math.random() * amigosListados.length);// Seleccionar un amigo al azar
    setTimeout(() => {// Esperar 2 segundos antes de mostrar el resultado
        divProgreso.style.visibility = "hidden"; // Ocultar la barra de progreso
        resultados.textContent = `Ha resultado sorteado: ${amigosListados[sorteo]}`;
        titular.textContent = 'Puedes volver agregando una nueva lista de amigos!';       
        lista.textContent = ''; // Limpiar la lista de amigos
    }, 2000);

}

// función para agregar un amigo a la listaz
// Esta función toma el valor del input, lo convierte a mayúsculas y lo agrega a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim().toUpperCase();
    if (validarNombre(amigo)) {
        poblarListadoAmigos(amigo); // Llamar a la función para poblar la lista de amigos|          
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }   
    input.value = ''; 
    obtenerListadoAmigos(); // Actualizar la lista de amigos
};

function validarNombre(texto) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(texto);
}

function poblarListadoAmigos(amigo) {   
   
        if (amigosListados.includes(amigo)) {
            alert('Este amigo ya está en la lista.');
            return;
        }     
        amigosListados.push(amigo); // Agregar el amigo a la lista
}

// Función para mostrar el resultado del sorteo
// Esta función selecciona un amigo al azar de la lista y muestra el resultado en la interfaz


// Función para animar la barra de progreso
// Esta función utiliza setInterval para incrementar el ancho de la barra de progreso hasta un valor final
function animateProgressBar(width) {
    divProgreso.style.visibility = "visible"; // Hacer visible la barra de progreso
    const progressBar = document.getElementById("animaSorteo");
    let start = 0;
    const end = width; // Ancho final de la barra de progreso
    const duration = 2000; // Duración de la animación en milisegundos
    const stepTime = 20; // Intervalo de tiempo entre cada paso de la animación
    const steps = duration / stepTime; // Número total de pasos     
    let step = 0; // Contador de pasos
    const stepWidth = end / steps; // Ancho que se incrementa en cada paso
    const interval = setInterval(() => {
        if (step < steps) {
            start += stepWidth;
            progressBar.style.width = `${start}px`;
            progressBar.className = 'animaSorteo'; // Asegurarse de que la clase esté aplicada
            step++;
        } else {
            clearInterval(interval);
            progressBar.style.width = `${end}px`; // Asegurarse de que la barra llegue al final
        }
    }, stepTime);
}

// Función para reiniciar el juego
// Esta función restablece el título, limpia los resultados previos y vacía la lista
function resetearJuego() {
    titular.textContent = 'Digite el nombre de sus amigos!';
    resultados.textContent = ''; // Limpiar resultados previos
    while (amigosListados.length > 0) {// Limpiar la lista de amigos
        amigosListados.pop();
    }
    lista.textContent = ''; // Limpiar la lista de amigos
}

