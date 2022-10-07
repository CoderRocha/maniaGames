let menu = document.getElementById("menu");

function mostrarMenu() {

    if (menu.style.display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    event.preventDefault();
}

/* function mostrarMenuJquery() {
    if ($("#menu").hasClass("menu-jquery-escondido")) {
        $("#menu").addClass("menu-jquery")
        $("#menu").removeClass("menu-jquery-escondido")
    } else {
        $("#menu").addClass("menu-jquery-escondido")
        $("#menu").removeClass("menu-jquery")
    }

    $("#menu").toggle()
}*/

let form = document.getElementById('form');

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

/* DOM -> Document Object Model */
function renderizarProdutos() {
    let secaoProdutos = document.getElementById('secao_produtos')

    let listaProdutos = [
        {
            nome: "Xbox One",
            imagem: "./img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "./img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Notebook Gamer Start",
            imagem: "./img/notebookstart.jpg",
            descricao: "Descrição",
            preco: 3500.00
        },
        {
            nome: "Xbox One",
            imagem: "./img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "./img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Notebook Gamer Start",
            imagem: "./img/notebookstart.jpg",
            descricao: "Descrição",
            preco: 3500.00
        },
        {
            nome: "Xbox One",
            imagem: "./img/xboxone.jpg",
            descricao: "Descrição",
            preco: 2500.00
        },
        {
            nome: "Playstation 4",
            imagem: "./img/ps4.jpg",
            descricao: "Descrição",
            preco: 2500.00
        }
    ]

    // Template Strings (usa crase como separador ``)
    let Template = ""

    for (let index = 0; index < listaProdutos.length; index++) {
        template = template + `
        <div class="produtos card">
            <a href=""><img class="imagemprod" src="${ listaProdutos[index].imagem }"></a>
            <h4>${ listaProdutos[index].nome }</h4>
            <p>${ listaProdutos[index].descricao }</p>
            <p>R$${ listaProdutos[index].preco }</p>
            <a href="">
            <h3 class="button">Comprar</h3>
            </a>
        </div>
        `
    }

    secaoProdutos.innerHTML = template
}