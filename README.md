# ONE-Amigo Secreto Challenge
Este desafío está diseñado para desarrollar la funcionalidad de una aplicación que permita a los usuarios ingresar nombres de sus amigos en una lista y que luego a través de un sorteo aleatorio determinar quién es el AMIGO SECRETO.

assets\Amigo Secreto Challenge - Eva - ONE9G_v2.mp4

## La interfaz incluye:
1. Una caja de texto que permite capturar y poblar un listado de nombres a través de un botón Añadir.
2. Una lista que permite visualizar los nombres con los cuales se realizará el sorteo.
3. Ejecutar el sorteo aleatorio a través de un botón Sortear Amigo.
4. Adicionalmente una barra de progreso.
5. Ayuda o ¿Cómo Funciona?

## Comportamiento esperado y funcionalidades requeridas
### 1. Permitir adicionar nombres válidos a una lista que se usará posteriormente para el sorteo.
```
#-- agregarAmigo()
    Gestiona la llamada de las funciones validarNombre, listadoAmigos y actualizarListadoAmigos.
    Adicionalmente verifica si se ha ejecutado un nuevo juego para limpiar las variables.
#-- validarNombre(amigo)
    Valida que el input del nombre no esté vació y que sea solamente letras.
#-- poblarListadoAmigos()
    Adiciona amigos al arreglo mientras estos no estén duplicados.
#-- actualizarListadoAmigos()
    Actualiza objeto DOM tipo lista con los valores que están en el arreglo odenado alfábeticamente.
```

### 2. Permitir realizar el Sorteo aleatorio para seleccionar dentro de la lista al Amigo Secreto
```
#-- sortearAmigo()
    Verifica si al menos hay dos elementos en la lista de amigos para llamar a la función generarResultado
    También establece un Flag para saber si hay un nuevo juego.
#-- generarResultado()
    Gestiona la llamada a las funciones animatedProgressBar, math.ramdon, math.floor, setTimeOut.
    Adicionalmente asigna el resultado del sorteo a un objeto DOM.
#-- animatedProgressBar()
    Está función dibuja una barra de progreso que se ejecuta en 2 segundos y dibuja el avance a razón de 20px por paso.
#-- math.ramdon() y math.floor()
    La primera permitir generar un número aleatorio entre 0 y 1 (excluyente) y la siguiente permite redondear al valor inferior del número generado en la operación.
#-- setTimeOut()
    Un temporizador para darle tiempo a la barra de progreso a ejecutarse (2segundos) antes de mostrar el resultado que fue generado.
```




