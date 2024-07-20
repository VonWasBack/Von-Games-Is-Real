const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
        img.classList.add('clickable');
    });
});

function addClickAnimation(element, animationClass) {
    element.addEventListener('click', () => {
        element.classList.add(animationClass);
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, 300);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach((element, index) => {
        const animationClasses = ['bounce', 'pulse', 'shake'];
        addClickAnimation(element, animationClasses[index % animationClasses.length]);
    });
});
