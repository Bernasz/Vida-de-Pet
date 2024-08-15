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
const campoNome = document.getElementById("name")
const nameLabel = document.getElementById("nameLabel")
const campoCel = document.getElementById("cel")
const celLabel = document.getElementById("celLabel")
const campoServ = document.getElementById("serv")
const servLabel = document.getElementById("servLabel")
const campoTam = document.getElementById("tam")
const tamLabel = document.getElementById("tamLabel")
const tipoLabel = document.getElementById("tipoLabel")
const campoPetn = document.getElementById("petn")
const petnLabel = document.getElementById("petnLabel")

function verificaSubmit() {  //Função é executada ao clicar em Agendar

    if (campoNome.value == '') { //Verifica Dados Campo Nome
        campoNome.placeholder = "Este Campo é Obrigatório"
        campoNome.style.borderColor = "#ff0000"
        nameLabel.style.color = "#ff0000"
    } else {
        campoNome.style = null
        nameLabel.style = null
    }

    if (campoCel.value.length != 11) { //Verifica Dados Campo Telefone
        campoCel.value = ''
        campoCel.placeholder = "Insira um telefone válido"
        campoCel.style.borderColor = "#ff0000"
        celLabel.style.color = "#ff0000"
    } else {
        campoCel.style = null
        celLabel.style = null
    }

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