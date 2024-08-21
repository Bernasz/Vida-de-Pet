// Adiciona textbox ao selecionar a opção "Outro"
const opcaoPet = document.getElementById("opcaoPet");
const containerInput = document.getElementById("containerInput");

opcaoPet.addEventListener('change', function caixaTexto() {
    containerInput.innerHTML = ''; // Limpa o container

    if (this.value === "Outro") {
        const inputTxt = document.createElement("input");
        inputTxt.type = "text";
        inputTxt.placeholder = "Especifique";
        inputTxt.id = "inputOutra";

        containerInput.appendChild(inputTxt); // Adiciona o input de texto
    }
});

// Adiciona uma nova caixa de seleção de serviços ao clicar no botão "+"
const servContainer = document.getElementById('servContainer');
const addServiceButton = document.getElementById('addService');

addServiceButton.addEventListener('click', function() {
    const newServiceSelect = document.createElement('select');
    newServiceSelect.name = 'serv';
    newServiceSelect.classList.add('service-select');
    newServiceSelect.innerHTML = `
        <option value="Selecione">Selecione</option>
        <option>Banho</option>
        <option>Banho + Tosa</option>
        <option>Hidratação</option>
        <option>Serviço Completo</option>
    `;

    // Adiciona a nova caixa de seleção antes do botão "+"
    servContainer.insertBefore(newServiceSelect, addServiceButton);
});

// Verificação de Dados após Submit
const campoNome = document.getElementById("name");
const nameLabel = document.getElementById("nameLabel");
const campoCel = document.getElementById("cel");
const celLabel = document.getElementById("celLabel");
const servLabel = document.getElementById("servLabel");
const campoTam = document.getElementById("tam");
const tamLabel = document.getElementById("tamLabel");
const tipoLabel = document.getElementById("tipoLabel");
const campoPetn = document.getElementById("petn");
const petnLabel = document.getElementById("petnLabel");

function verificaSubmit() {
    let formValido = true;

    if (campoNome.value == '') {
        campoNome.placeholder = "Este Campo é Obrigatório";
        campoNome.style.borderColor = "#ff0000";
        nameLabel.style.color = "#ff0000";
        formValido = false;
    } else {
        campoNome.style = null;
        nameLabel.style = null;
    }

    if (campoCel.value.length != 11) {
        campoCel.value = '';
        campoCel.placeholder = "Insira um telefone válido";
        campoCel.style.borderColor = "#ff0000";
        celLabel.style.color = "#ff0000";
        formValido = false;
    } else {
        campoCel.style = null;
        celLabel.style = null;
    }

    const servicos = document.querySelectorAll('.service-select');
    servicos.forEach(servico => {
        if (servico.value === "Selecione") {
            servico.style.borderColor = "#ff0000";
            servLabel.style.color = "#ff0000";
            formValido = false;
        } else {
            servico.style = null;
            servLabel.style = null;
        }
    });

    if (campoTam.value === "Selecione") {
        campoTam.style.borderColor = "#ff0000";
        tamLabel.style.color = "#ff0000";
        formValido = false;
    } else {
        campoTam.style = null;
        tamLabel.style = null;
    }

    if (opcaoPet.value === "Selecione") {
        opcaoPet.style.borderColor = "#ff0000";
        tipoLabel.style.color = "#ff0000";
        formValido = false;
    } else {
        opcaoPet.style = null;
        tipoLabel.style = null;
    }

    if (campoPetn.value == '') {
        campoPetn.placeholder = "Este Campo é Obrigatório";
        campoPetn.style.borderColor = "#ff0000";
        petnLabel.style.color = "#ff0000";
        formValido = false;
    } else {
        campoPetn.style = null;
        petnLabel.style = null;
    }

    // Submeter o formulário se válido
    if (formValido) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar o formulário
    }
}
