// inicialización de variables y elementos del DOM
const lista = document.getElementById('listaAmigos');
const resultados = document.getElementById('resultado');
const titular = document.getElementById('titular');
const divProgreso = document.getElementById("barra");
const amigosListados = [];
let flagNuevoSorteo = false; // Bandera para indicar si se ha realizado un nuevo sorteo     


// función para iniciar el sorteo
// Esta función verifica si hay al menos dos amigos en la lista antes de realizar el sorteo y generar el resultado al azar
function sortearAmigo() {          
     if (amigosListados.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');               
        return;
    }
    generarResultado(); // Mostrar el resultado del sorteo   
    flagNuevoSorteo = true; // Cambiar la bandera para indicar que se ha realizado un sorteo
}

// Esta función selecciona un amigo al azar de la lista y muestra el resultado en el DOM y llama a la función para animar la barra de progreso
// La barra de progreso se muestra durante 2 segundos antes de revelar el resultado del sorteo
function generarResultado() {
    animateProgressBar(document.getElementById("progresoBarra").clientWidth);// Animar la barra de progreso
    sorteo = Math.floor(Math.random() * amigosListados.length);// Seleccionar un amigo al azar
    setTimeout(() => {// Esperar 2 segundos antes de mostrar el resultado
        divProgreso.style.visibility = "hidden"; // Ocultar la barra de progreso
        resultados.textContent = `Ha resultado sorteado: ${amigosListados[sorteo]}`;
        titular.textContent = 'Puedes volver agregando una nueva lista de amigos!';       
        lista.textContent = ''; // Limpiar la lista de amigos        
    }, 2000);        
}

// función para agregar un nombre de amigo válido al arreglo de amigos adicionalmente actualiza el DOM de la lista de amigos 
// y si se ha realizado un nuevo sorteo llama a una función que reinicia las variables del juego
function agregarAmigo() { 
    const input = document.getElementById('amigo');
    const amigo = input.value.trim().toUpperCase();   // Esta función toma el valor del input, lo convierte a mayúsculas y lo agrega a la lista
   
    if (flagNuevoSorteo) {
        resetearJuego(); // Reiniciar el juego si se ha realizado un nuevo sorteo       
        flagNuevoSorteo = false; // Cambiar la bandera para indicar que se ha realizado un sorteo}
    } 
    
    if (validarNombre(amigo)) { // asegura de que el nombre solo contenga letras y no esté vacío
        poblarListadoAmigos(amigo); // Llamar a la función para poblar la lista de amigos|          
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }   
    input.value = ''; 
    actualizarListadoAmigos(); // Actualizar la lista de amigos en el DOM
};

// Función para validar el nombre del amigo
// Esta función utiliza una expresión regular para asegurarse de que el nombre solo contenga letras
function validarNombre(texto) {
  const regex = /^[A-ZÁÉÍÓÚ]+$/;
  return regex.test(texto);
}

// Función para poblar la lista de amigos
// Esta función verifica si el amigo ya está en la lista antes de agregarlo
function poblarListadoAmigos(amigo) {      
        if (amigosListados.includes(amigo)) {
            alert('Este amigo ya está en la lista.');
            return;
        }     
        amigosListados.push(amigo); // Agregar el amigo a la lista
}

// Función para acutalizar DOM de lista de amigos
// Esta función recorre los elementos del array y los almacena en un lista HTML
function actualizarListadoAmigos() {
    lista.textContent = ''; // Limpiar la lista antes de poblarla 
    amigosListados.sort(); // Ordenar la lista de amigos alfabéticamente  
        for (let i = 0; i < amigosListados.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigosListados[i];
        lista.appendChild(itemLista); 
    }     
          
}

// Función para reiniciar el juego
// Esta función restablece el título, limpia los resultados previos y vacía la lista
function resetearJuego() {
    titular.textContent = 'Digite el nombre de sus amigos!';
    resultados.textContent = ''; // Limpiar resultados previos
    lista.textContent = ''; // Limpiar la lista de amigos
    divProgreso.style.visibility = "hidden"; // Ocultar la barra de progreso
    while (amigosListados.length > 0) {// Limpiar la lista de amigos
        amigosListados.pop();
    }   
}

// Función para animar la barra de progreso
// Esta función toma el ancho de la barra de progreso y anima su crecimiento hasta ese ancho
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