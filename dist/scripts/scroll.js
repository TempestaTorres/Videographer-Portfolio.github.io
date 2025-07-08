
function addScrollListener(callback) {

    "use strict";

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
function isPartiallyVisible(element) {

    "use strict"

    const rc = element.getBoundingClientRect();
    const top = rc.top;
    const bottom = rc.bottom;
    const height = rc.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}