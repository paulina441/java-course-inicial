let boton = document.getElementById("consultarBtn");
let contenedor = document.getElementById("resultados");

async function cargarDatos() {
    contenedor.innerHTML = "";

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await respuesta.json();

    datos.forEach(usuario => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${usuario.name}</h3>
            <p>${usuario.email}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

boton.addEventListener("click", () => {
    cargarDatos();
});