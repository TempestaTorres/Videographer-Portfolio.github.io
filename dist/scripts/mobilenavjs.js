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




}