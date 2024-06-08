let menu = document.querySelector(".menu_mobile");
let body = document.body;

function showMenu() {
    menu.classList.toggle("menu_open");
}

document.body.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        if (menu.classList.contains("menu_open")) {
            showMenu();
        }
    }
});

document.querySelector("#menuBox").addEventListener("click", () => {
    showMenu()
})

// watson

window.watsonAssistantChatOptions = {
    integrationID: "85f06573-9891-474a-9baa-92de6c0ec78f", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "69585cf6-59a4-4ef7-896c-7d6d171cf223", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});

//   formulario

const formulario = document.getElementById("formulario");

const nome = document.getElementById("idnome");
const email = document.getElementById("idemail");
const desc = document.getElementById("descricao");

formulario.addEventListener('submit', function (event) {
    if (formularioValido() === false) {
        event.preventDefault();
    } else {
        alert("Mensagem enviada com sucesso!")
    }
})

// executa verificação do input quando fora de foco
nome.addEventListener("focus", () => {
    const divInput = nome.parentElement;
    divInput.className = "input";
})
email.addEventListener("focus", () => {
    const divInput = email.parentElement;
    divInput.className = "input";
})
desc.addEventListener("focus", () => {
    const divInput = desc.parentElement;
    divInput.className = "input";
})

// verificadores de cada input
function verificaNome() {
    const valor = nome.value;
console.log(valor.indexOf("  "))
    if (valor === "" || valor.indexOf("  ") != -1) {
        erroInput(nome, "O nome não pode ser nulo.");
    } else {
        const divInput = nome.parentElement;
        divInput.className = "input";
    }
}

function verificaEmail() {
    const valor = email.value;

    if (valor === "") {
        erroInput(email, "O email não pode ser nulo.");
    } else {
        const divInput = email.parentElement;
        divInput.className = "input";
    }
}

function verificaDesc() {
    const valor = desc.value;

    if (valor === "") {
        erroInput(desc, "A descrição não pode ser nula.");
    } else {
        const divInput = desc.parentElement;
        divInput.className = "input";
    }
}


// exibe erro no input
function erroInput(input, mensagem) {
    const divInput = input.parentElement;
    const txtMensagem = divInput.querySelector("p");

    txtMensagem.innerText = mensagem;

    divInput.className = "input erro"
}

// valida os inputs do formulário
function formularioValido() {
    verificaNome();
    verificaEmail();
    verificaDesc();

    const divsFormulario = formulario.querySelectorAll(".input");

    const valido = [...divsFormulario].every((item) => {
        return item.className === "input";
    })

    return valido;
}