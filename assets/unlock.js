(function() {
    'use strict';

    const element = document.getElementById('unlck-container');
    const img = document.getElementsByClassName("unlck");
    element.addEventListener('click', (e) => {
        element.classList.add('unlock-open');
        element.style.background = 'transparent';
        img.forEach(i => {
            i.style.display = 'none';
        })
        console.log('CLICK');
    });



})();