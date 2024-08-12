//Adiciona textbox ao selecionar a opção "Outro"
const opcaoPet = document.getElementById("opcaoPet")
const containerInput = document.getElementById("containerInput")

opcaoPet.addEventListener('change', function caixaTexto(){

    containerInput.innerHTML = ''

    if (this.value === "Outro")
        {
           const inputTxt = document.createElement("input")
           inputTxt.type = "text"
           inputTxt.placeholder = "Especifique"
           inputTxt.id = 'inputOutra'

           containerInput.appendChild(inputTxt)
        }

}
)