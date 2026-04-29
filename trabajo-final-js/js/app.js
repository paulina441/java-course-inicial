let boton = document.getElementById("consultarBtn");
let inputBuscar = document.getElementById("inputBuscar");
let contenedor = document.getElementById("resultados");

async function cargarDatos() {
    contenedor.innerHTML = "<p>Cargando...</p>";

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los datos");
        }

        const datos = await respuesta.json();

        contenedor.innerHTML = "";

        const textoBusqueda = inputBuscar.value.toLowerCase();

        const filtrados = datos.filter(usuario =>
            usuario.name.toLowerCase().includes(textoBusqueda)
        );

        filtrados.forEach(usuario => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <h3>${usuario.name}</h3>
                <p>${usuario.email}</p>
            `;

            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        contenedor.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

boton.addEventListener("click", () => {
    cargarDatos();
});