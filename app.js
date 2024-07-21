document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    const likeButton = document.querySelector('.bxs-heart').parentElement;
    const likeCount = likeButton.querySelector('span');
    const playPauseOverlay = document.querySelector('.play-pause-overlay');
    const playPauseIcon = playPauseOverlay.querySelector('i');
    
    // Play/Pause video on click
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseIcon.classList.remove('bx-play');
            playPauseIcon.classList.add('bx-pause');
        } else {
            video.pause();
            playPauseIcon.classList.remove('bx-pause');
            playPauseIcon.classList.add('bx-play');
        }
    });

    // Show/hide play/pause overlay
    video.addEventListener('mouseenter', () => {
        playPauseOverlay.style.opacity = '1';
    });

    video.addEventListener('mouseleave', () => {
        playPauseOverlay.style.opacity = '0';
    });

    // Like functionality
    let isLiked = false;
    likeButton.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            likeButton.classList.add('liked');
            likeCount.textContent = (parseInt(likeCount.textContent) + 1).toLocaleString();
        } else {
            likeButton.classList.remove('liked');
            likeCount.textContent = (parseInt(likeCount.textContent) - 1).toLocaleString();
        }
    });

    // Upload modal functionality
    const uploadBtn = document.querySelector('.upload-btn');
    const uploadModal = document.getElementById('uploadModal');
    const closeUploadModal = uploadModal.querySelector('.close');

    uploadBtn.addEventListener('click', () => {
        uploadModal.style.display = 'block';
    });

    closeUploadModal.addEventListener('click', () => {
        uploadModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === uploadModal) {
            uploadModal.style.display = 'none';
        }
    });

    // Updated Login Modal functionality
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = loginModal.querySelector('.close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Login options functionality (placeholder)
    const loginOptions = document.querySelectorAll('.login-option');
    loginOptions.forEach(option => {
        option.addEventListener('click', () => {
            const method = option.textContent.trim();
            alert(`Logging in with: ${method}`);
            // Here you would typically implement the actual login logic
            loginModal.style.display = 'none';
        });
    });

    // Form submission (placeholder functionality)
    const uploadForm = document.getElementById('uploadForm');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Video uploaded successfully!');
        uploadModal.style.display = 'none';
    });
});