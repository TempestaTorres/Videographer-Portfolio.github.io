function mobileNav() {
    "use strict";

    const nav = document.querySelector(".nav");
    const burger = document.querySelector("#burger");

    burger.addEventListener("click", function(e) {

        e.preventDefault();

        nav.classList.toggle("is-active");
        nav.classList.toggle("has-background");
        this.classList.toggle("is-active");

        e.stopPropagation();
    });

    const _navObserver = navObserver.bind(nav);
    let lastScrollPosition = 0;
    let ticking = false;

    document.addEventListener("scroll", (event) => {
        lastScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                _navObserver(lastScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
}
function navObserver(scrollPosition) {
    "use strict";

    if (scrollPosition > 250 && !this.classList.contains('has-background')) {
        this.classList.add('has-background');
    }
    else if (scrollPosition < 250 && this.classList.contains('has-background')) {
        this.classList.remove('has-background');
    }
}