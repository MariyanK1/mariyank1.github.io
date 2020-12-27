function darkMode() {

    const $selectors = {
        btn: () => document.querySelector('#darkMode'),
        h1: () => document.getElementsByTagName('h1')[0],
        p: () => document.getElementsByTagName('p')[0],
        h2: () => document.getElementsByTagName('h2')[0],
        span: () => document.querySelector('span'),
        meal_finder: () => document.querySelectorAll('.projectTitle'),
        techUSed: () => document.querySelectorAll('.techUsed'),
        contact: () => document.querySelector('#contact'),
        email: () => document.querySelector('#contact a'),
        cert: () => document.querySelectorAll('#intro a')
    }

    $selectors.btn().addEventListener('click', e => {
        e.preventDefault();
        switch ($selectors.btn().textContent) {
            case 'switch to dark mode':
                document.body.style.backgroundColor = 'black';
                $selectors.btn().textContent = 'switch to light mode';
                changeColorWhite($selectors.contact());
                changeColorWhite($selectors.p());
                changeColorWhite($selectors.h1());
                changeColorWhite($selectors.h2());
                changeColorWhite($selectors.span());
                changeColorWhite($selectors.meal_finder());
                changeColorWhite($selectors.techUSed());
                changeColorWhite($selectors.email());
                changeColorWhite($selectors.cert());
                break;

            default:
                document.body.style.backgroundColor = 'white';
                $selectors.btn().textContent = 'switch to dark mode';
                changeColorBlack($selectors.contact());
                changeColorBlack($selectors.h1());
                changeColorBlack($selectors.p());
                changeColorBlack($selectors.h2());
                changeColorBlack($selectors.span());
                changeColorBlack($selectors.meal_finder());
                changeColorBlack($selectors.techUSed());
                changeColorBlack($selectors.email());
                changeColorBlack($selectors.cert());
                break;
        }

    })


    function changeColorBlack(el) {
        if (NodeList.prototype.isPrototypeOf(el)) {
            for (let i = 0; i < el.length; i++) {
                el[i].style.color = 'black';
            }

            return el;
        }


        if (el) {
            el.style.color = 'black';
            return el;
        }

    }

    function changeColorWhite(el) {
        if (NodeList.prototype.isPrototypeOf(el)) {
            for (let i = 0; i < el.length; i++) {
                el[i].style.color = 'white';
            }

            return el;
        }


        if (el) {
            el.style.color = 'white';
            return el;
        }

    }

}
