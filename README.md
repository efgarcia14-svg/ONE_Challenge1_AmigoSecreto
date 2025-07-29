# ONE-Amigo Secreto Challenge
Este desafío está diseñado para desarrollar la funcionalidad de una aplicación que permita a los usuarios ingresar nombres de sus amigos en una lista y que luego a través de un sorteo aleatorio determinar quién es el AMIGO SECRETO.

La interfaz incluye:
1. Una caja de texto que permite capturar y poblar un listado de nombres a través de un botón.
2. Una lista que permite vvisualizar los nombres con los cuales se realizará el sorteo.
3. Un botón para ejecutar el sorteo aleatorio.

<video controls src="20250729-0438-27.4107356.mp4" title="InterfazDeUso"></video>

Validaciones de Entrada de Datos:
Adicionalmente la aplicación valida si la caja de texto tiene un valor válido (sólo letras), y también si el listado tiene al menos dos nombres agregados para realizar el sorteo.

Funcionalidades:
Requeridad:
1. sortearAmigo()
Función que realiza la selección aleatoria entre el listado de nombres disponibles para el sorteo. Antes de realizar la ejecución valida que el listado se encuentre con al menos dos nombres.

2. validaListado()
Valida la cantidad de elementos agregados a la lista sea al menos dos para poder realizar el sorteo

3. 


agregarAmigo()
Función para capturar y adicionar los nombres a la lista cuya ejecución se dispara al momento de presionar el botón "Añadir".




