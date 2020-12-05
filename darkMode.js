function darkMode() {

    const $selectors = {
        btn: () => document.querySelector('#darkMode'),
        h1: () => document.getElementsByTagName('h1')[0],
        p: () => document.getElementsByTagName('p')[0],
        h2: () => document.getElementsByTagName('h2')[0],
        span: () => document.querySelector('span'),
        img: () => document.querySelector('#pic'),
        thatsAll: () => document.querySelector('#thatsAll'),
        formValidator: () => document.querySelector('#formValidator'),
        techUSed: () => document.querySelector('#techUsed'),

    }

    $selectors.btn().addEventListener('click', e => {
        e.preventDefault();
        switch ($selectors.btn().textContent) {
            case 'switch to dark mode':
                document.body.style.backgroundColor = 'black';
                $selectors.btn().textContent = 'switch to light mode';
                $selectors.img().src = "https://images2.imgbox.com/b1/8f/nYGqGA6p_o.png";
                $selectors.thatsAll().src = "https://images2.imgbox.com/1c/c1/bLYVqJtQ_o.png";
                changeColorWhite($selectors.p());
                changeColorWhite($selectors.h1());
                changeColorWhite($selectors.h2());
                changeColorWhite($selectors.span());
                changeColorWhite($selectors.formValidator());
                changeColorWhite($selectors.techUSed());
                break;

            default:
                document.body.style.backgroundColor = 'white';
                $selectors.btn().textContent = 'switch to dark mode';
                $selectors.img().src = "https://avatars2.githubusercontent.com/u/58628678?s=400&u=924861bafd3fddf4103190598da3b9f59f495983&v=4";
                $selectors.thatsAll().src = "https://images2.imgbox.com/66/b2/3NDjZFfy_o.png";
                changeColorBlack($selectors.h1());
                changeColorBlack($selectors.p());
                changeColorBlack($selectors.h2());
                changeColorBlack($selectors.span());
                changeColorBlack($selectors.formValidator());
                changeColorBlack($selectors.techUSed());
                break;
        }

    })


    function changeColorBlack(el) {
        if (el) {
            el.style.color = 'black';
            return el;
        }

    }

    function changeColorWhite(el) {
        if (el) {
            el.style.color = 'white';
            return el;
        }

    }

}
