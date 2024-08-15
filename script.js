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
        inputTxt.id = 'inputOutra'

        containerInput.appendChild(inputTxt) //Exibe o Input na Tela do Usuário
    }

}
)


//Verificação de Dados após Submit
const campoNome = document.getElementById("name")
const nameLabel = document.getElementById("nameLabel")
const campoCel = document.getElementById("cel")
const celLabel = document.getElementById("celLabel")

function verificaSubmit() {
    if (campoNome.value == '' || campoNome.value == "Este Campo é Obrigatório") {
        campoNome.placeholder = "Este Campo é Obrigatório"
        campoNome.style.borderColor = "#ff0000"
        nameLabel.style.color = "#ff0000"
    }

    if (campoCel.value.length < 11 || campoCel.value == "Insira um telefone válido") {
        campoCel.placeholder = "Insira um telefone válido"
        campoCel.style.borderColor = "#ff0000"
        celLabel.style.color = "#ff0000"
    }

}