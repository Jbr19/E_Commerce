const formularioLogin = document.querySelector("[data-formulario-login]")

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault()

    const correo = document.querySelector("[data-email]")
    const password = document.querySelector("[data-password]")

    comprobarlogin(correo,password);
})


const comprobarlogin = (correo,password) => {

    
    const error = document.querySelector("[data-error]");

    
    if(correo.value.includes("@") && password.value == "123456"){

        
        let loggedData = JSON.parse(sessionStorage.getItem("Login"))
        loggedData.user = "admin";
        loggedData.logged = true;
        sessionStorage.setItem("Login",JSON.stringify(loggedData))

        
        window.location.href = "../admin_page.html"

    }
    else{
        
        if(correo.value.includes("@") && password.value != "")
        {
            error.classList.remove("ocultar");
        }
    }

    
}