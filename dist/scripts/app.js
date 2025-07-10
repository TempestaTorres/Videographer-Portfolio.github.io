window.addEventListener("load", (e) => {

    "use strict";

    const formValidateHandler = (form) => {

        const formButton = form.querySelector("button");
        let oldValue = formButton.textContent;

        formButton.textContent = formButton.dataset.name;

        setTimeout(() => {

            formButton.textContent = oldValue;
            form.reset();

        }, 2000);
    };
    // Entry Point
    parallax();
    mobileNav();
    effectsInit();
    // Form Validate
    validateForm(formValidateHandler);
});