// Função de login (substitui o script.js para demonstração)
        function login() {
            const selectElement = document.getElementById('opcao1');
            const selectedValue = selectElement.value;

            if (selectedValue) {
                window.open(selectedValue, '_blank'); // Abre o link em uma nova aba
            } else {
                alert('Por favor, selecione uma opção válida para entrar.'); // Usa alert para simplicidade, mas em um app real usaria um modal.
            }
        }

        // Define o título h1 após o carregamento do DOM
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('titulo').textContent = 'Meus Favoritos';
        });

        /*<script src="https://cdn.tailwindcss.com"></script>*/