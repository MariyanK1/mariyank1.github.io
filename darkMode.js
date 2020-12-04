function darkMode() {

    const $selectors = {
        btn: () => document.querySelector('#darkMode'),
        h1: () => document.getElementsByTagName('h1')[0],
        p: () => document.getElementsByTagName('p')[0],
        h2: () => document.getElementsByTagName('h2')[0],
        span: () => document.querySelector('span'),
        img: () => document.querySelector('#pic')

    }

    $selectors.btn().addEventListener('click', e => {
        e.preventDefault();

        if ($selectors.btn().textContent === 'switch to dark mode') {
            document.body.style.backgroundColor = 'black';
            $selectors.btn().textContent = 'switch to light mode';
            $selectors.h1().style.color = 'white';
            $selectors.p().style.color = 'white';
            $selectors.h2().style.color = 'white';
            $selectors.span().style.color = 'white';
            $selectors.img().src = "https://images2.imgbox.com/b1/8f/nYGqGA6p_o.png";

        } else {
            document.body.style.backgroundColor = 'white';
            $selectors.btn().textContent = 'switch to dark mode';
            $selectors.h1().style.color = 'black';
            $selectors.p().style.color = 'black';
            $selectors.h2().style.color = 'black';
            $selectors.span().style.color = 'black';
            $selectors.img().src = "https://avatars2.githubusercontent.com/u/58628678?s=400&u=924861bafd3fddf4103190598da3b9f59f495983&v=4";
        }
    })
}
