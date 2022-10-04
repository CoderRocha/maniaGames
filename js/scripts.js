let menu = document.getElementById("menu");

function mostrarMenu() {

    if (menu.style.display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    event.preventDefault();
}

var form = document.getElementById('form');

function clickLogin() {
    if (form.checkValidity()) {
        alert("Login realizado com sucesso!");
    }
}

function clickRegister() {
    if (form.checkValidity()) {
        alert("Registro realizado com sucesso!");
    }
}

function clickContact() {
    if (form.checkValidity()) {
        alert("Formulário enviado com sucesso!");
    }
}