(function() {
    'use strict';
    let selectedNav = undefined;
    const initNav = (self, event, container) => {
        if (selectedNav) {
            selectedNav.classList.remove('active');
        }
        selectedNav = event.target;
        selectedNav.classList.add('active');

    }

    const nav = document.getElementById('p-nav');
    console.log('Nav', nav);
    nav.addEventListener('click', (e) => {
        console.log("Clicked ->", e);
    })
})();