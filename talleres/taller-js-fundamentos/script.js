// Ejercicio 1 (10 pts)
// Declara:
// • Una variable con tu nombre.
// • Una variable con tu edad.
// • Una variable booleana que indique si estás estudiando JavaScript.
// Imprime todo en consola usando console.log()

let nombre = "Paulina Castaño";
let edad = 20;
let estudiandoJS = true;

console.log(nombre);
console.log(edad);
console.log(estudiandoJS);

// 
// Ejercicio 2 (15 pts)
// 1. Crea un array con 5 comidas favoritas.
// 2. Crea un objeto con información de un producto (nombre, precio, disponible).
// 3. Imprime ambos en consola.
let comidasFavoritas = ["pasta", "Papas fritas", "Helado", "Fresas con crema", "Oblea con creama"];
let producto = { nombre: "Escoba", precio: 10000, disponible: true };

console.log(comidasFavoritas);
console.log(producto);


// Reutilice la variable edad del ejercicio 1
//Ejercicio 3 (15 pts)
// Crea una variable llamada edad.
// • Si es mayor o igual a 18 → imprime "Eres mayor de edad".
// • Si no → imprime "Eres menor de edad".


if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


//  Ejercicio 4 (15 pts)
// Imprime los números del 1 al 20 usando un ciclo for.

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Ejercicio 5 (20 pts)
// Crea una función que:
// • Reciba dos números como parámetros.
// • Retorne la suma.
// • Imprime el resultado llamando la función.

function suma(num1, num2) {
    return num1 + num2;
}
let resultado = suma(20, 30);
console.log("El total de 20 + 30 es : " + resultado);


// Mini Reto Final – Calculadora Básica
// (25 pts)
// Crea funciones para:
// • Sumar
// • Restar
// • Multiplicar
// • Dividir
// Llama cada función e imprime los resultados en consola.

let num1 = 10;
let num2 = 2;

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}
function multiplicacion(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    }
    else {
        return "No se puede dividir por cero";
    }
}
let resultadoSuma = suma(num1, num2);
let resultadoResta = resta(num1, num2);
let resultadoMultiplicacion = multiplicacion(num1, num2);
let resultadoDivision = division(num1, num2);
console.log("La suma de 10 + 2 es : " + resultadoSuma);
console.log("La resta de 10 - 2 es : " + resultadoResta);
console.log("La multiplicación de 10 * 2 es : " + resultadoMultiplicacion);
console.log("La división de 10 / 2 es : " + resultadoDivision);
