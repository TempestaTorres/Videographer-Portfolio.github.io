function effectsInit() {

    'use strict';

    const bottomLines = document.querySelectorAll('.has-bottom-line-effect');
    const fadeinToRight = document.querySelectorAll('.has-fadein-to-right-effect-buddy');
    const fromBottom = document.querySelectorAll('.effect-from-bottom');

    function effectsHandler(posY) {

        if (bottomLines.length > 0) {

            baseEffectHandler.call(bottomLines);
        }
        if (fadeinToRight.length > 0) {

            fadeinToRightHandler.call(fadeinToRight);
        }
        if (fromBottom.length > 0) {

            baseEffectHandler.call(fromBottom);
        }

    }
    addScrollListener(effectsHandler);
}

function baseEffectHandler() {
    'use strict';

    for (let i = 0; i < this.length; i++) {

        if (isPartiallyVisible(this[i]) && !this[i].classList.contains('is-active')) {

            this[i].classList.add('is-active');
        }
        else if (this[i].classList.contains('is-active') && !isPartiallyVisible(this[i])) {
            this[i].classList.remove('is-active');
        }

    }
}

function fadeinToRightHandler() {
    'use strict';

    for (let i = 0; i < this.length; i++) {

        if (isPartiallyVisible(this[i]) && !this[i].classList.contains('is-visible')) {

            let durationStart = parseFloat(this[i].dataset.durationStart);
            let durationStep =  parseFloat(this[i].dataset.durationStep);

            this[i].children[0].style.transitionDelay = durationStart + 's';

            for (let j = 1; j < this[i].children.length; j++) {

                durationStart += durationStep;
                this[i].children[j].style.transitionDelay = durationStart + 's';
            }
            this[i].classList.add('is-visible');
        }
        else if (!isPartiallyVisible(this[i]) && this[i].classList.contains('is-visible')) {

            for (let j = 0; j < this[i].children.length; j++) {

                this[i].children[j].style.transitionDelay = 0 + 's';
            }
            this[i].classList.remove('is-visible');
        }
    }
}