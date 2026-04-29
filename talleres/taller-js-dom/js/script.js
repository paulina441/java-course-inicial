//  Ejercicio 1 (15 pts)
// Crea el siguiente HTML:
// <h1 id="titulo">Hola Mundo</h1>
// <p class="descripcion">Texto de prueba</p>
// Selecciona ambos elementos desde JavaScript y muéstralos en consola.

let titulo = document.getElementById("titulo");
let descripcion = document.querySelector(".descripcion");

console.log (titulo);
console.log (descripcion);

//  Ejercicio 2 (15 pts)
// Agrega un botón que al hacer clic cambie el texto del <h1>

const body = document.querySelector("body");
const btn = document.createElement("button");
btn.innerText = "Haz clic aquí";
body.appendChild(btn);

btn.addEventListener("click", () => {
    titulo.innerText = "Hola, hiciste clic al botón";
});

// Ejercicio 3 (20 pts)
// Al hacer clic en el botón:
// • Cambia el color del texto.
// • Cambia el tamaño de la fuente.
// • Cambia el fondo del elemento.

btn.addEventListener("click", () => {
    titulo.style.color = "red";
    titulo.style.fontSize = "30px";
    titulo.style.backgroundColor = "yellow";
});

// Ejercicio 4 (20 pts)
// Crea un input y muestra en tiempo real lo que el usuario escribe dentro de un <p>.
const p = document.querySelector("p");
const input = document.createElement("input");
body.appendChild(input);

input.addEventListener("input", (ev) => {
    const texto = ev.target.value;
    p.innerText = texto;
});

// Mini Proyecto – Contador Interactivo
// (30 pts)
//  Requisitos
// • Crear una variable contador.
// • El botón "+" debe aumentar el número.
// • El botón "-" debe disminuir el número.
// • Actualizar el valor en el DOM cada vez que cambie.
// • Bonus: cambiar el color según el número (positivo verde, negativo rojo, cero negro)

let contador = document.getElementById("numero");
let aumentar = document.getElementById("aumentar");
let disminuir = document.getElementById("disminuir");

aumentar.addEventListener("click", () => {
    contador.innerText = parseInt(contador.innerText) + 1;
      let valor = parseInt(contador.innerText);
    if(valor > 1){
       contador.style.backgroundColor = "green"; 
    }
     else if(valor == 0){
        contador.style.backgroundColor = "black";
        contador.style.color = "white";
    }
});
disminuir.addEventListener("click", () => {
    contador.innerText = parseInt(contador.innerText) - 1;
      let valor = parseInt(contador.innerText);

     if(valor < 0){
       contador.style.backgroundColor = "red"; 
    }
    else if(valor == 0){
        contador.style.backgroundColor = "black";
        contador.style.color = "white";
    }
});