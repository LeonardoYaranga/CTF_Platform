// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("darkModeButton");

    // Comprobar si ya hay un modo oscuro guardado en localStorage
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Activar Modo Claro"; // Cambiar texto del botón
    }

    // Agregar el evento para el botón
    darkModeButton.addEventListener("click", function () {
        // Alternar entre los modos
        document.body.classList.toggle("dark-mode");

        // Guardar la preferencia del usuario en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "true");
            darkModeButton.textContent = "Activar Modo Claro";
        } else {
            localStorage.setItem("darkMode", "false");
            darkModeButton.textContent = "Activar Modo Oscuro";
        }
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recarga de página

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Credenciales correctas
    if (username === "admin" && password === "SuperSecret123") {
        window.location.href = "./dashboard.html";
    } 
    else if(username === "hacker" && password === "Modecrack"){
        window.location.href = "./robots.html";
    }else {
        document.getElementById("error-msg").classList.remove("hidden");
    }
});
