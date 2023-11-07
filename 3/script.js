// script.js

document.addEventListener("DOMContentLoaded", function () {
    const projectsButton = document.getElementById('projects-button');
    const projectsList = document.getElementById('projects-list');
    const contactsButton = document.getElementById('contacts-button');
    const contactsList = document.getElementById('contacts-list');

    const toggleSection = (button, section) => {
        let isVisible = false;

        button.addEventListener('click', () => {
            isVisible = !isVisible;
            if (isVisible) {
                section.style.display = 'block';
                button.textContent = 'Скрыть';
                setTimeout(() => {
                    section.style.opacity = 1;
                    section.style.transform = 'translateY(0)';
                }, 100);
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    section.style.display = 'none';
                    button.textContent = 'Показать';
                }, 1000);
            }
        });
    };

    toggleSection(projectsButton, projectsList);
    toggleSection(contactsButton, contactsList);
    
    // Анимация отображения всей страницы
    const container = document.querySelector('.container');
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
});
