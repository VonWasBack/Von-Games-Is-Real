document.addEventListener('DOMContentLoaded', () => {
    const clickables = document.querySelectorAll('.clickable');

    clickables.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('fade-in');
            setTimeout(() => {
                element.classList.remove('fade-in');
            }, 500);
        });
    });
});