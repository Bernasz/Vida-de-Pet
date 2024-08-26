const campoDias = document.getElementById("dias")
const diasLabel = document.getElementById("diasLabel")
const campoHora = document.getElementById("hora")
const horaLabel = document.getElementById("horaLabel")

function verificaProximo() {  //Função é executada ao clicar em Próximo
    if (campoDias.value === "Selecione") { //Verifica Dados Campo Dias
        campoDias.style.borderColor = "#ff0000"
        diasLabel.style.color = "#ff0000"
    } else {
        campoDias.style = null
        diasLabel.style = null
    }

    if (campoHora.value === "Selecione") { //Verifica Dados Campo Hora
        campoHora.style.borderColor = "#ff0000"
        horaLabel.style.color = "#ff0000"
    } else {
        campoHora.style = null
        horaLabel.style = null
    }

    if (campoDias.value != "Selecione" && campoHora.value != "Selecione") { //Caso todos os dados estejam corretos, passa para a proxima tela
        window.location.href = "agend2.html"
    }
}