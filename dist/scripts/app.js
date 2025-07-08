document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const nav = document.querySelector(".nav");

    function scrollObserver(scrollPos) {

        navObserver.call(nav, scrollPos);
    }
    // Entry Point
    addScrollListener(scrollObserver);
    mobileNav.call(nav);

});