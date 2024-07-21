(function(_0x1fdcc8, _0x4d82a6) {
    var _0x46e0cf = function(_0x2e837e) {
        while (--_0x2e837e) {
            _0x1fdcc8.push(_0x1fdcc8.shift());
        }
    };
    _0x46e0cf(++_0x4d82a6);
}(['addEventListener', 'contextmenu', 'preventDefault', 'keydown', 'ctrlKey', 'key', 'c', 'u', 's', 'p', 'F12', 'DOMContentLoaded'], 0x1b8));

var _0x46e0 = function(_0x1fdcc8, _0x4d82a6) {
    _0x1fdcc8 = _0x1fdcc8 - 0x0;
    return ['addEventListener', 'contextmenu', 'preventDefault', 'keydown', 'ctrlKey', 'key', 'c', 'u', 's', 'p', 'F12', 'DOMContentLoaded'][_0x1fdcc8];
};

document[_0x46e0('0x0')](_0x46e0('0x1'), function() {
    document[_0x46e0('0x2')](_0x46e0('0x3'), function(event) {
        event[_0x46e0('0x4')]();
    });
    document[_0x46e0('0x2')](_0x46e0('0x5'), function(event) {
        if (event[_0x46e0('0x6')] && ['c', 'u', 's', 'p'].includes(event[_0x46e0('0x7')]) || event[_0x46e0('0x7')] === 'F12') {
            event[_0x46e0('0x4')]();
        }
    });
});

const _0x44ac = function() {
    return ['getElementById', 'add', 'display', '733328lqKZeC', 'darkMode', 'querySelectorAll', '40558klIkOU', 'forEach', '49086ATunDn', 'length', '871836FruzvN', 'toggle', 'getElementsByClassName', 'target', '.clickable', 'block', '330485MXYKrY', '2006368MoBkmT', 'contains', 'style', 'pulse', 'classList', 'remove', '13eYxXtA', 'dark-mode', '580716NaBpDG', 'addEventListener', 'close', '24kUpxFZ', 'click', 'enabled', 'img', 'body', 'getItem', 'onclick', 'bounce', 'none', 'clickable', 'modalImage'];
};

document.addEventListener('DOMContentLoaded', () => {
    const _0x1ac8dd = function(index) { return _0x44ac()[index]; };
    const darkModeToggle = document[_0x1ac8dd(0x0)]('darkModeToggle');
    const body = document[_0x1ac8dd(0x1)]('body');
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    const modal = document[_0x1ac8dd(0x1)]('imageModal');
    const modalImage = document[_0x1ac8dd(0x1)]('modalImage');
    const clickableImages = document.querySelectorAll('.clickable');

    function showImage(src) {
        if (modal && modalImage) {
            modal.style.display = 'block';
            modalImage.src = src;
        }
    }

    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            showImage(image.src);
        });
        image.classList.add('clickable');
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
