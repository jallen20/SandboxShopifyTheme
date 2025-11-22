(function () {
    'use strict';

    window.GLOBAL_INTERVALS = [];
    window.LOADER_DURATION = 5000;
    window.touched = () => JSON.parse(localStorage.getItem('touched') || '[]') || [];
    window.touch = (path) => {
        const t = window.touched();
        t.push(path);
        localStorage.setItem('touched', JSON.stringify(t));
    }
})();