document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openModal(imgSrc) {
        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = imgSrc;
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            if (modal) {
                modal.style.display = "none";
            }
        }
    }

    window.onclick = function(event) {
        if (event.target == modal && modal) {
            modal.style.display = "none";
        }
    }

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
        img.classList.add('clickable');
    });

    function addClickAnimation(element, animationClass) {
        element.addEventListener('click', () => {
            element.classList.add(animationClass);
            setTimeout(() => {
                element.classList.remove(animationClass);
            }, 300);
        });
    }

    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach((element, index) => {
        const animationClasses = ['bounce', 'pulse'];
        addClickAnimation(element, animationClasses[index % animationClasses.length]);
    });
});