/* 
const container = document.createElement('div');
Crea un nuevo elemento HTML <div> dinámicamente en la memoria.

const note = document.getElementById('textarea').value;
Selecciona el contenido del campo de texto (probablemente un <textarea> con id textarea) y lo guarda en la variable note.

container.textContent = note;
Asigna el texto (extraído del textarea) como contenido del nuevo <div> que se creó.

document.getElementById('notas2').appendChild(container);
Encuentra el elemento con el id notas2 y agrega el nuevo <div> con la nota como hijo. Esto coloca el texto en la página.

document.getElementById('btn2').classList.remove('ocultar');
Encuentra el botón con id btn2 (probablemente oculto inicialmente con una clase ocultar) y le quita esa clase para que se vuelva visible.
 */
document.getElementById('btn').addEventListener('click', function mostrarNota(){
    const container=document.createElement('div');
    const note = document.getElementById('textarea').value;
    container.textContent=note;
    document.getElementById('notas2').appendChild(container)
    document.getElementById('btn2').classList.remove('ocultar');
});
document.getElementById('btn2').addEventListener('click', function eliminarnotas(){
    document.getElementById('notas2').innerHTML=''
    //innerHTML elimina todo el contenido HTML
});
function cambiarTema() { 
    let tema = document.getElementById("tema-selector").value; 
    let estilo = document.getElementById("estilo");
     switch (tema) { 
        case "claro":
         estilo.setAttribute("href", "claro.css");
          break; 
        case "oscuro":
         estilo.setAttribute("href", "oscuro.css"); 
          break; 
        case "azul": 
          estilo.setAttribute("href", "azul.css");  
          break; 
        case "rosa": estilo.setAttribute("href", "rosa.css"); 
          break;  
        case "verde": estilo.setAttribute("href", "verde.css"); 
         break;
     }
    }
/*     
let tema = document.getElementById("tema-selector").value;
document.getElementById("tema-selector"): Esta parte del código selecciona el elemento HTML con el id "tema-selector". En este caso, es el <select> que contiene las opciones de tema.
.value: Este método obtiene el valor actualmente seleccionado del elemento <select>. Por ejemplo, si el usuario selecciona "claro" de la lista, el valor será "claro".
let tema = ...: Asigna el valor seleccionado a la variable tema. Esto nos permite saber qué tema ha escogido el usuario para usarlo más adelante en el código.
let estilo = document.getElementById("estilo");
document.getElementById("estilo"): Esta parte del código selecciona el elemento HTML con el id "estilo". En este caso, es el <link> que apunta a la hoja de estilo actual de la página.
let estilo = ...: Asigna el elemento <link> a la variable estilo. Esto permite modificar el atributo href de este <link> para cambiar la hoja de estilo según la selección del usuario. */