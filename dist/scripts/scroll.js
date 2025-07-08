"use strict";

function addScrollListener(callback) {

    let lastKnownScrollPosition = 0;
    let ticking = false;

    document.addEventListener("scroll", (event) => {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                callback(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });

}