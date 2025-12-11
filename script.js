// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto de Click en Botón
    const showMessageBtn = document.getElementById('show-message-btn');
    const messageArea = document.getElementById('message-area');

    if (showMessageBtn) {
        showMessageBtn.addEventListener('click', () => {
            // Muestra u oculta el mensaje
            if (messageArea.style.display === 'none' || messageArea.style.display === '') {
                messageArea.style.display = 'block';
                showMessageBtn.textContent = 'Ocultar Mensaje';
            } else {
                messageArea.style.display = 'none';
                showMessageBtn.textContent = '¡Clic aquí!';
            }
        });
    }

    // 2. Efecto de "Highlight" en Habilidades (Opcional, avanzado)
    const skillsList = document.getElementById('skills-list');
    
    if (skillsList) {
        skillsList.addEventListener('click', (event) => {
            const skillItem = event.target;
            // Solo actúa si se hace clic en un <li> de habilidad
            if (skillItem.tagName === 'LI' && skillItem.parentElement.id === 'skills-list') {
                const skillName = skillItem.textContent.trim();
                console.log(`Habilidad seleccionada: ${skillName}`);
                
                // Efecto visual temporal
                skillItem.style.backgroundColor = '#ffc107'; // Amarillo
                skillItem.style.color = '#333';

                // Restablecer el color después de 300ms
                setTimeout(() => {
                    skillItem.style.backgroundColor = ''; // CSS lo manejará de nuevo
                    skillItem.style.color = '';
                }, 300);
            }
        });
    }

});
