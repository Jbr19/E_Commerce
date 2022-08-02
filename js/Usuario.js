if(!sessionStorage.getItem("Login")){
    let loginData = {user: "client", logged: false}
    sessionStorage.setItem("Login",JSON.stringify(loginData));
}


let loggedData = JSON.parse(sessionStorage.getItem("Login"))

if(loggedData.logged && loggedData.user == "client" ){

    const botonlogin = document.querySelector("[data-btn-login]");
    botonlogin.parentNode.innerHTML = "";

    const header = document.querySelector("[data-container-header]")
    const img = document.createElement("img");
    img.classList.add("header__perfil")

    img.src = "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10879124-stock-photo-young-chimpanzee-simia-troglodytes-6.jpg"

    header.appendChild(img);
}



if(loggedData.logged && loggedData.user == "admin" ){

    //Editamos el boton
    const botonlogin = document.querySelector("[data-btn-login]");
    botonlogin.textContent = "Modo Admin";
    botonlogin.addEventListener("click",(event)=>{
        event.preventDefault()
        window.location.href="./admin_page.html"
    })
}