// Animação de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona o evento de clique ao botão "Agendar Agora"
document.querySelector('.hero-overlay .button.large').addEventListener('click', mostrarAlerta);
