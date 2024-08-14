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