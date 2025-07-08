function mobileNav() {
    "use strict";

    const burger = document.querySelector("#burger");
    const nav= this;

    burger.addEventListener("click", function(e) {

        e.preventDefault();

        nav.classList.toggle("is-active");
        nav.classList.toggle("has-background");
        this.classList.toggle("is-active");

        e.stopPropagation();
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