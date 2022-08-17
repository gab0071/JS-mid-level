//TODO CAPITULO SIETE 
//!INTRODUCCION A WINDOW
/*
-Hereda las propiedades de EvenTarget.
-open() - carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
-Close() - cierra la ventana actual, o la ventana en la que se llamo.
-Closed - indica si  la venta referenciada esta cerrada o no.
-Stop()- detiene la carga de recursos en el  contexto de navegacion actual.
-alert() - muestra un cuadro de alerta con el contenido especificado y un boton aceptar.
-print()- abre el cuadro de dialogo imprimir para imprimir el documento actual.
-promt()- abre un cuadro de dialogo con un msj que solicita al usuario un dato (strisg)
-confirm() abre un cuadro de dialogo con un msj de dos botones aceptar y cancelar.



-screen - devuelve una referencia al objeto de pantalla asociada con la ventana.
-screenLeft - devuelve la distancia horizontal entre el borde izquierdo del navegador 
y el borde izquierdo de la pantalla.
-screenTop - devuuelve la distancia vertical entre el borde superior del navegador y el borde
superior de la pantalla.
-scrollX - devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
-scrollY - devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
-scroll() - desplaza la ventana a un lugar particular del documento (con opciones y con posiciones).



-resizeBy() - cambia el tamaño de la ventana actual en una cantidad especifica.
-resizeTo() - redimensiona dinamicamente la ventana.
-moveBy() - mueve la ventana en una ubicacion relativa.
-moveTo() -muevela ventana en una ubicacion absoluta.


-Objetos barprop
    - locationbar
    - menubar
    - personalbar
    - scrollbar
    - statusbar
    - toolbar


    
//! location

- window.location.href -- (devuelve el href (url) de la pagina actual)
- window.location.hostname -- (devuelve el nombre del dominio del servidor web).
- window.location.pathname -- (devuelve la ruta y el nombre del archivo de la pagina actual)
- window.location.protocol -- (devuelve el protocol web utilizado (http:  o https:))
-window.location.assign -- (carga un nuevo documento).

*/

//? EJEMPLO 1  
let alto = window.screen.height; /* screen.availHeight es la altura que puede tener 
                                     la ventana de la del browser si esta maximazada, 
                                      incluida las barras del browser, mientras que 
                                      screen.height basicamente es el alto total de 
                                      la pantalla.*/
let ancho = window.screen.width;


comprar = confirm(`el alto es de: ${alto}  y el ancho es: ${ancho}`)

if (comprar) {
    alert('Compra realizada exitosamente');
} else {
    alert('Compra cancelada exitosamente');
}



//? EJEMPLO 2

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></br>`;  //! Importante la expresion += es para sumar la variable.
html += `Hosthname: <b>${hostname}</b></br>`;
html += `Pathname: <b>${pathname}</b></br>`;
html += `Url completa: <b>${href}</b></br>`;

document.write(html);

/////////////////////////////////////////////////////////////////////////////////////

//TODO  CAPITULO OCHO
//!  HERRAMIENTAS DE DESARROLLOS DEL NAVEGADOR CHROME
/**

- Pestañas Elements
   - filtros y buscar por palabras claves.
   - modificar, crear y eliminar etiquetas.
   - modifica propiedades de css
   - eventListener 
   - properties
   - opcieones para copiar el element
   - seguir explorando 

- Pestañas Resources
   - ver y guardar archivos archivos
   - informacion ofrecida
   - cambios en tiempos real
   - Snippets - ejecutar codigos por fragmentos

   
- Pestañas Networks
   - interfaz
   - sort By y filtros de busquedas 
   - limpiar cookies y cache 
   - importar y exportar 

- Pestañas y Timeline
   - uso y grabacion
   - screenshots de la grabacion 
   - controls 
   - overview * FPS. CPU Y NET
   - flame chart 
   - details
   - sugerencias de grabacion
   
- Pestañas aplication 
   - aplication 
   - storages 
   - cache
   - background services
   - frames
*/

//todo  CAPITULO NUEVE
//!  EVENTOS  
/*
- Definicion 
- de Eventos o "Envent Handlers"
- escucha de eventos o "Event listeners"
- el objeto Event
- flujo de eventos o "Event flows"
- Event Blubbling vs Event Caoturing
- event stop propagations()


- Eventos del mouse
    - click - ocurre con un click 
    - doble click -  ocurre con un doble click
    - mouseover -  ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
    - mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.
    ----- otros-----
    - contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menu contextual.
    - mouseenter - ocurre cuando el puntero se mueve sobre un elemento
    - mouseleave - ocurre cuando el puntero se mueve fuera de un elemento
    - mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento
    - mousemove - ocurre cuando el puntero se mueve mientras esta sobre un elemento


- Eventos de Teclado 
    - keypress - ocurre cuando una tecla se presiona
    - keydown - ocurre cuando una tecla se deja de presionar
    - onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.
    
 
- Eventos de la Interfaz
    - abort - ocurre cuando un elemento madre elimina a su hijo.
    - error - ocurre cuando sucede un error durante la carga de un archivo multimedia
    - load - ocurre cuando un objeto se a cargado
    - beforeunload -  ocurre antes de que un documento este apunto de descargarse
    - unload - ocurre una vez que se a descargado una pagina
    - resize - ocurre cuando se cambia el tamaño de la vista de document 
    - scroll - ocurre cuando se desplaza la barra de desplazamiento de un documento
    - select - ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>


-timers(temporizadores) 
   - setTimeout()
   - setInterval()
   - clearTimeout()
   - clearInterval()   
    

-     
*/

//?EJEMPLO addEventListener y remove
const button = document.querySelector(".button");

button.addEventListener("click",saludar);
function saludar() {
    alert("hola");
    button.removeEventListener("click",saludar);
}

//?EJEMPLO DE EVENTOS
const button = document.querySelector(".button");

button.addEventListener("click",(event)=> {
    console.log(event.target)
}); //evento se puede escribir solo (e). 


//? EJEMPLO DEL EVENT FLOW
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


contenedor1.addEventListener("click",(event)=> {
    alert("di click en un contenedor uno")
}, true);

contenedor2.addEventListener("click",(event)=> {
    alert("di click en un contenedor dos")
}, true);

button.addEventListener("click",(event)=> {
    alert("di click en un boton")
});

//? EJEMPLO de stopPropagation

const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


contenedor1.addEventListener("click",(event)=> {
    alert("di click en un contenedor uno")
});

button.addEventListener("click",(event)=> {
    alert("di click en un boton")
    event.stopPropagation() // stopPropagation
    
});

contenedor2.addEventListener("click",(event)=> {
    alert("di click en un contenedor dos")
});


//? doble click

button.addEventListener("dblclick",(event)=> {
   alert("di click en un boton") // doble click 
  
});

//? mouseover
contenedor1.addEventListener("mouseover",(event)=> {  //mouseover
   alert("di click en un contenedor uno")
});

//? mouseout
contenedor1.addEventListener("mouseout",(event)=> {  //mouseout
   alert("di click en un contenedor uno")
});

//? contextmenu

contenedor1.addEventListener("contextmenu",(event)=> {  //contextmenu
   alert("di click en un contenedor uno")
});




//? ejemplos de teclado 
input.addEventListener("keydown",(event)=> {  // 
   console.log("una tecla fue presionada")
});

input.addEventListener("keypress",(event)=> {
   console.log("un usuario presiono una tecla")
   
});

input.addEventListener("keyup",(event)=> {
   console.log("una tecla fue soltada")
});


//? setTimeout()

setTimeout(() => {
   document.write("hola");
   
}, 500);

// otra manera de hacerlo

const saludar = () => {
   document.write("hola");
   
}

setTimeout(saludar,2000);

//? clearTimeout()
const intervalo = setTimeout(() => {
   document.write("hola");
   
}, 2000);

clearTimeout(intervalo);  


//? setInterval()  --> se ejecuta constantemente 

setInterval(() => {
   document.write("hola");
   
}, 2000);


//? clearInterval() --> para que deje de ejecutar la funcion 
//! siempre tener una const para detener la funcion 
const intervalo = setInterval(() => {
   document.write("hola");
   
}, 2000);

clearInterval(intervalo);


//! eventos TIMERS  (profundidad) setTimeout() - setInterval() 
/*
Los programadores usan eventos de tiempo para retrasar la ejecución de cierto código, 
o para repetir código a un intervalo de tiempo específico.

Existen dos funciones nativas en la librería de JavaScript para lograr estas tareas: 
setTimeout() y setInterval().

-----------------setTimeout----------------------
setTimeout() es usada para retrasar la ejecución de la función pasada como argumento por 
un periodo de tiempo determinado.

Hay dos parámetros que se pasan a setTimeout(): la función que quieres llamar y el tiempo 
(expresado en milisegundos) a retrasar la ejecución de la función.

Recuerda que hay 1000 milisegundos (ms) en 1 segundo, entonces 5000 ms equivale a 5 segundos y 
así sucesivamente.

setTimeout() ejecutará la función del primer argumento una vez, tan pronto como haya transcurrido
el tiempo especificado.

Ejemplo:

let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Han pasado 3 segundos.");
}
Cuando la función temporizadorDeRetraso es llamada, ejecutará setTimeout. Luego que pasen 3 segundos (3000 ms), ejecutará funcionConRetraso que mostrará una alerta.



---------------setInterval----------------------------
Usa setInterval() para hacer que una función se repita con un tiempo de retraso entre cada ejecución.

Una vez más, se pasan dos parámetros a setInterval(): la función que quieres llamar y 
el tiempo en milisegundos a retrasar cada ejecución de la función.
setInterval() continuará ejecutándose hasta que sea borrada.

Ejemplo:

let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
  console.log("Ha pasado 1 segundo.");
}

Cuando tu código llama a la función repetirCadaSegundo, ejecutará setInterval. 
setInterval correrá la función mandarMensaje cada segundo (1000 ms).



----------------------clearTimeout y clearInterval----------------------------
También existen funciones nativas correspondientes para detener los eventos de tiempo:
 clearTimeout() y clearInterval().

Como has podido observar, cada función de temporizador setTimeout() y setInterval(),
en los ejemplos anteriores, han sido guardadas en una variable.
Cuando alguna de estas funciones se ejecuta, le es asignada un número 
(identificador), el cual es guardado en dicha variable. Ten en cuenta que JavaScript 
hace todo esto en segundo plano.


El número generado es único para cada instancia de los temporizadores. Este número también 
es la manera como los temporizadores son identificados cuando quieres detenerlos. 
Por esta razón, deberás siempre asignar el temporizador a una variable.

Para que tu código sea entendible, deberías siempre emparejar:

clearTimeout() con setTimeout() y
clearInterval() con setInterval().
Para detener un temporizador, llama a la correspondiente función para borrarlo y pásale 
la variable identificadora que corresponde al temporizador que quieres detener.
La sintaxis para clearInterval() y clearTimeout() son la misma.


 Ejemplo:

let identificadorDeTemporizador;

function temporizadorDeRetraso() {
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Three seconds have elapsed.");
}

function borrarAlerta() {
  clearTimeout(identificadorDeTemporizador);
}
*/
