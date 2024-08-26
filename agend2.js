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
const campoServ = document.getElementById("serv")
const servLabel = document.getElementById("servLabel")
const campoTam = document.getElementById("tam")
const tamLabel = document.getElementById("tamLabel")
const tipoLabel = document.getElementById("tipoLabel")
const campoPetn = document.getElementById("petn")
const petnLabel = document.getElementById("petnLabel")

function verificaProximo() {  //Função é executada ao clicar em Agendar

    if (campoServ.value === "Selecione") { //Verifica Dados Campo Tipo de Serviço
        campoServ.style.borderColor = "#ff0000"
        servLabel.style.color = "#ff0000"
    } else {
        campoServ.style = null
        servLabel.style = null
    }

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

    if (document.getElementById("inputOutra").value == '') { //Verifica Dados Campo Especifique Tipo de Pet
        document.getElementById("inputOutra").style.borderColor = "#ff0000"
        document.getElementById("inputOutra").placeholder = "Insira o Tipo do Pet"
        tipoLabel.style.color = "#ff0000"
    } else {
        document.getElementById("inputOutra").style = null
        tipoLabel.style = null
    }
}

//Altera o Valor Exibido Baseado no Serviço Selecionado

const botaoAgenda = document.getElementById("botaoAgenda")

function verificarValores() {
    if (campoServ.value == "banhoTosa") {
        botaoAgenda.value = "Agendar - R$100,00"
    }
    else if (campoServ.value == "corteUnhas") {
        botaoAgenda.value = "Agendar - R$50,00"
    }
    else if (campoServ.value == "hidratacao") {
        botaoAgenda.value = "Agendar - R$70,00"
    }
    else if (campoServ.value == "higieneBucal") {
        botaoAgenda.value = "Agendar - R$80,00"
    }
    else if (campoServ.value == "tosaHigienica") {
        botaoAgenda.value = "Agendar - R$90,00"
    }
    else if (campoServ.value == "servicoCompleto") {
        botaoAgenda.value = "Agendar - R$200,00"
    }
    else {
        botaoAgenda.value = "Agendar"
    }
}

const containerBtnAddOpcao = document.getElementById("containerBtnAddOpcao")
function criaBtnAddOpcao(){
    if (campoServ.value != "Selecione") {
        const btnAddOpcao = document.createElement("input")
        btnAddOpcao.type = "button"
        btnAddOpcao.value = "Adicionar Serviço"
        btnAddOpcao.id = "btnAddOpcao"

        containerBtnAddOpcao.appendChild(btnAddOpcao)
    }

    if (campoServ.value == "banhoTosa"){
        document.body.style.backgroundImage = "url('imagens/lobisomem.jpg')"
    }else{
        document.body.style = null
    }

    btnAddOpcao.addEventListener("click", function () {

        this.remove()
    })
}



