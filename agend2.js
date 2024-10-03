//Adiciona textbox ao selecionar a opção "Outro"

//Variaveis para selecionar os elementos do HTML
const opcaoPet = document.getElementById("opcaoPet")
const containerInput = document.getElementById("containerInput")

opcaoPet.addEventListener('change', function caixaTexto() { //Função é executada quando o item do Select é alterado

    containerInput.innerHTML = ''

    if (this.value === "Outro") //Se o valor selecionado for "Outro", o bloco abaixo é executado
    {
        //Cria o Input de Texto
        const inputTxt = document.createElement("input")
        inputTxt.type = "text"
        inputTxt.placeholder = "Especifique"
        inputTxt.id = "inputOutra"

        containerInput.appendChild(inputTxt) //Exibe o Input na Tela do Usuário

    }
}
)

//Verificação de Dados após Submit

//Variaveis para selecionar os elementos do HTML
const servLabel = document.getElementById("servLabel")
const campoTam = document.getElementById("tam")
const tamLabel = document.getElementById("tamLabel")
const tipoLabel = document.getElementById("tipoLabel")
const campoPetn = document.getElementById("petn")
const petnLabel = document.getElementById("petnLabel")

const cbxServicoCompleto = document.getElementById("servicoCompleto")
const cbxBanho = document.getElementById("banho")
const cbxTosa = document.getElementById("tosa")
const cbxCorteUnhas = document.getElementById("corteUnhas")
const cbxHidratacao = document.getElementById("hidratacao")
const cbxHigieneBucal = document.getElementById("higieneBucal")
const servicoLabel = document.getElementsByClassName("servicoLabel")

function verificaDados() {  //Função é executada ao clicar em Agendar

    if (campoTam.value === "Selecione") { //Verifica Dados Campo Tamanho do Pet
        campoTam.style.borderColor = "#ff0000"
        tamLabel.style.color = "#ff0000"
    } else {
        campoTam.style = null
        tamLabel.style = null
    }

    if (opcaoPet.value === "Selecione") { //Verifica Dados Campo Tipo do Pet
        opcaoPet.style.borderColor = "#ff0000"
        tipoLabel.style.color = "#ff0000"
    } else {
        opcaoPet.style = null
        tipoLabel.style = null
    }

    if (campoPetn.value == "") { //Verifica Dados Campo Nome do Pet
        campoPetn.style.borderColor = "#ff0000"
        campoPetn.placeholder = "Insira o Nome do Pet"
        petnLabel.style.color = "#ff0000"
    } else {
        campoPetn.style = null
        petnLabel.style = null
    }

    if (!cbxServicoCompleto.checked && !cbxTosa.checked && !cbxBanho.checked && !cbxCorteUnhas.checked && !cbxHidratacao.checked && !cbxHigieneBucal.checked) {

        for (let i = 0; i < servicoLabel.length; i++) {
            servicoLabel[i].style.color = "#ff0000"
        }
        servLabel.style.color = "#ff0000"
    }
    else {
        for (let i = 0; i < servicoLabel.length; i++) {
            servicoLabel[i].style = null
        }
        servLabel.style = null
    }

    try {
        if (document.getElementById("inputOutra").value == '') { //Verifica Dados Campo Especifique Tipo de Pet
            document.getElementById("inputOutra").style.borderColor = "#ff0000"
            document.getElementById("inputOutra").placeholder = "Insira o Tipo do Pet"
            tipoLabel.style.color = "#ff0000"
        }
        else {
            document.getElementById("inputOutra").style = null
            tipoLabel.style = null
        }
    } catch (e) { }
}

const checkboxes = [cbxBanho, cbxCorteUnhas, cbxHidratacao, cbxHigieneBucal, cbxTosa]

function servCompleto() {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false
    }
}

function outroServ() {
    cbxServicoCompleto.checked = false

    if (cbxBanho.checked && cbxCorteUnhas.checked && cbxHidratacao.checked && cbxHigieneBucal.checked && cbxTosa.checked && !cbxServicoCompleto.checked) {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false
        }
        cbxServicoCompleto.checked = true
    }
}