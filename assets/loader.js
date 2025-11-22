(() => {
    'use strict';
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');

        // if (window.touched().includes(location.pathname)) {
        //     loader.style.display = 'none';
        //     return;
        // }

        window.touch(location.pathname);

        const slideOutR = document.querySelector('.loader-r');
        const slideOutL = document.querySelector('.loader-l');
        const unlckL = document.querySelector('.unlck-l');
        const unlckR = document.querySelector('.unlck-r');
        const carousel = document.querySelector('#carousel-img');

        setTimeout(() => {
            slideOutR.classList.add('slide-out-r');
            slideOutL.classList.add('slide-out-l');
            [unlckL, unlckR].forEach((el) => { el.classList.add('grow-out'); });
            carousel.classList.remove('slide-in-out');
            carousel.classList.add('shrink-out');
        }, 3 * 1000);

        setTimeout(() => {
            loader.style.display = 'none';
            GLOBAL_INTERVALS.forEach(clearInterval);
        }, window.LOADER_DURATION + 1500);

    })
})();