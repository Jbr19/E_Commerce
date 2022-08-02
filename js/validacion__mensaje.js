const formularioMensaje = document.querySelector("[data-form-contacto]");

formularioMensaje.addEventListener("submit", (event) => {
    event.preventDefault();

    const botonEnviar = document.querySelector("[data-mensaje-btn]");
    botonEnviar.textContent = "Mensaje Enviado!";

    const nombreMsj = document.querySelector("[data-mensaje-nombre]");
    const mensajeMsj = document.querySelector("[data-mensaje-mensaje]");

    nombreMsj.value = "";
    mensajeMsj.value = "";

    const cambiarTextoBtn = setInterval(()=>{
        botonEnviar.textContent = "Enviar Mensaje";
        clearInterval(cambiarTextoBtn);
    }, 3000);
})