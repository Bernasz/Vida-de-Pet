// Função para coletar os serviços selecionados
function getServicosSelecionadosComoString() {
    const servicos = [];
    
    // Verifique os checkboxes dos serviços e adicione os selecionados à lista
    if (document.getElementById('servicoCompleto').checked) servicos.push('Serviço Completo');
    if (document.getElementById('banho').checked) servicos.push('Banho');
    if (document.getElementById('tosa').checked) servicos.push('Tosa');
    if (document.getElementById('corteUnhas').checked) servicos.push('Corte de Unhas');
    if (document.getElementById('hidratacao').checked) servicos.push('Hidratação');
    if (document.getElementById('higieneBucal').checked) servicos.push('Higiene Bucal');
    
    // Retorna os serviços como uma string separada por vírgulas
    return servicos.join(', ');
}

// Sua função de validação e envio do formulário
function verificaProximo() {
    const campoPetn = $('#petn');
    const opcaoPet = document.getElementById('opcaoPet');
    const campoTam = document.getElementById('tam');
    const obsCampo = document.getElementById('obs');
    
    const petnLabel = $('#petnLabel');
    const tamLabel = $('#tamLabel');
    
    let isValid = true;
    
    // Verifica o nome do pet
    if (campoPetn.val().trim() === '') {
        campoPetn.css('border-color', '#ff0000');
        petnLabel.css('color', '#ff0000');
        isValid = false;
    } else {
        campoPetn.css('border-color', '');
        petnLabel.css('color', '');
    }
    
    // Verifica o tipo de pet
    if (opcaoPet.value === 'Selecione') {
        alert("Por favor, selecione o tipo de pet.");
        isValid = false;
    }

    // Verifica o tamanho do pet
    if (campoTam && campoTam.value === 'Selecione') {
        alert("Por favor, selecione o tamanho do pet.");
        isValid = false;
    }
    
    // Coleta os serviços selecionados como string
    const servicos = getServicosSelecionadosComoString();
    if (servicos.trim() === '') {
        alert("Por favor, selecione ao menos um serviço.");
        isValid = false;
    }
    
    if (isValid) {
        const selectedDate = localStorage.getItem('data_selecionada');
        const selectedTime = localStorage.getItem('hora_selecionada'); // A hora selecionada
        
        // Verifica se a data e a hora estão no formato correto
        if (!selectedDate || !selectedTime) {
            alert("Data ou hora inválidas.");
            return;
        }

        // Formatação para o campo appointmentDateTime no formato ISO
        const dateTimeString = `${selectedDate}T${selectedTime}:00`; // Adiciona os segundos para um formato ISO válido

        // Validação de campos antes de enviar os dados
        const dadosAgendamento = {
            petName: campoPetn.val().trim(),
            petType: opcaoPet.value === "Outro" ? document.getElementById("inputOutra").value.trim() : opcaoPet.value,
            petSize: campoTam.value,
            scheduleDate: {
                date: selectedDate, // Envia apenas a data
                time: selectedTime  // Envia apenas a hora
            },
            serviceType: servicos, // Envia como string separada por vírgulas
            observations: obsCampo.value.trim(),
            appointmentDateTime: dateTimeString // Envia a data e hora no formato ISO
        };

        // Faz a requisição
        fetch('/api/schedules/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAgendamento)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => { throw new Error(text) });
            }
        })
        .then(data => {
            alert('Agendamento realizado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a próxima tela
        })
        .catch(error => {
            alert(error.message || 'Erro desconhecido ao realizar o agendamento.');
            console.error(error);
        });
    }
}
