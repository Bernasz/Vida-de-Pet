$(document).ready(function () {
    // Inicializa o Datepicker
    $('#dias').datepicker({
        dateFormat: 'dd/mm/yy',
        onSelect: gerarHorarios 
    });

    $('#botaoProximo').on('click', verificaProximo);
});

// Função para desabilitar horários ocupados no seletor
function desabilitarHorariosOcupados(date) {
    fetch(`/api/schedules/occupied/${date}`) // Endpoint para obter horários ocupados
        .then(response => {
            if (response.ok) {
                return response.json(); // Retorna os horários ocupados como uma lista
            }
            throw new Error('Erro ao verificar horários ocupados.');
        })
        .then(occupiedTimes => {
            const horaSelect = $('#hora');
            if (Array.isArray(occupiedTimes) && occupiedTimes.length > 0) {
                occupiedTimes.forEach(time => {
                    const optionToDisable = horaSelect.find(`option[value="${time}"]`);
                    if (optionToDisable) {
                        optionToDisable.prop('disabled', true); // Desativa o horário ocupado
                        optionToDisable.css('text-decoration', 'line-through'); // Marcar visualmente (opcional)
                    }
                });
            }
        })
        .catch(error => {
            console.error('Erro ao desabilitar horários ocupados:', error);
        });
}

// Atualiza a função de carregar horários disponíveis para incluir a desativação dos horários ocupados
function carregarHorarios(date) {
    fetch(`/api/dates/available?date=${date}`) 
        .then(response => {
            if (response.ok) {
                return response.json(); 
            }
            throw new Error('Erro ao carregar horários disponíveis.');
        })
        .then(data => {
            const horaSelect = $('#hora');
            horaSelect.empty(); 
            horaSelect.append('<option value="Selecione">Selecione</option>'); 

            if (Array.isArray(data) && data.length > 0) {
                data.forEach(time => {
                    const horarioCompleto = time.time || time; 
                    const [hora, minuto] = horarioCompleto.split(':'); 
                    const horarioFormatado = `${hora}:${minuto}`; 
                    horaSelect.append(new Option(horarioFormatado, horarioFormatado)); 
                });

                // Desabilita horários ocupados após carregar as opções disponíveis
                desabilitarHorariosOcupados(date);
            } else {
                alert('Nenhum horário disponível para a data selecionada.');
            }
        })
        .catch(error => {
            alert(error.message || 'Erro desconhecido ao carregar horários.');
            console.error(error);
        });
}

// Atualiza a chamada de `carregarHorarios` para usar a função de desabilitar horários ocupados
function gerarHorarios() {
    const selectedDate = $('#dias').val(); 
    console.log('Data selecionada:', selectedDate); 

    if (!selectedDate) {
        alert('Por favor, selecione uma data válida.');
        return;
    }

    const [day, month, year] = selectedDate.split('/');

    if (!day || !month || !year) {
        alert('Por favor, insira a data no formato DD/MM/AAAA.');
        return;
    }

    const formattedDate = `${year}-${month}-${day}`; 
    console.log('Data formatada:', formattedDate);

    localStorage.setItem('data_selecionada', formattedDate);

    fetch(`/api/dates/generate?date=${formattedDate}`, {
        method: 'POST'
    })
    .then(response => {
        if (response.ok) {
            return response.text(); 
        }
        throw new Error('Erro ao gerar horários.');
    })
    .then(message => {
        alert(message); 
        carregarHorarios(formattedDate); // Inclui a lógica de desativar horários ocupados
    })
    .catch(error => {
        alert(error.message || 'Erro desconhecido ao gerar horários.');
        console.error('Erro ao gerar horários:', error);
    });
}

// Função para verificar dados e passar para a próxima tela
function verificaProximo() {
    const campoDias = $('#dias');
    const diasLabel = $('#diasLabel');
    const campoHora = $('#hora');
    const horaLabel = $('#horaLabel');

    let isValid = true;

    // Verifica o campo de data
    if (campoDias.val().trim() === '') {
        campoDias.css('border-color', '#ff0000');
        diasLabel.css('color', '#ff0000');
        isValid = false;
    } else {
        campoDias.css('border-color', '');
        diasLabel.css('color', '');
    }

    // Verifica o campo de horário
    if (campoHora.val() === 'Selecione') {
        campoHora.css('border-color', '#ff0000');
        horaLabel.css('color', '#ff0000');
        isValid = false;
    } else {
        // Armazena a hora selecionada no localStorage
        localStorage.setItem('hora_selecionada', campoHora.val());
        campoHora.css('border-color', '');
        horaLabel.css('color', '');
    }

    // Redireciona para a próxima tela se todos os dados estiverem válidos
    if (isValid) {
        window.location.href = 'agend2.html'; // Redireciona para agend2.html
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}
