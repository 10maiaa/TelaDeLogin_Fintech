document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const closeButton = document.querySelector('.close-button');
    const modal = document.querySelector('.login-modal');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Fechar o modal de login ao clicar no botão de fechar
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Simplesmente oculta o modal
    });

    // Validar o formulário antes de enviar
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que o formulário seja enviado automaticamente

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Aqui você pode incluir uma lógica para verificar as credenciais
        // Por exemplo, se conectando a um backend ou simulando uma validação
        console.log('Email:', email, 'Senha:', password);

        // Simular o sucesso do login, redirecionando para uma nova página
        window.location.href = 'pagina_inicial.html'; // Mude para a URL desejada
    });
});
