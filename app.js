function darkMode() {

    const $selectors = {
        btn: () => document.querySelector('#darkMode'),
        h1: () => document.getElementsByTagName('h1'),
        p: () => document.getElementsByTagName('p'),
        h2: () => document.getElementsByTagName('h2'),
        span: () => document.querySelector('span')

    }

    $selectors.btn().addEventListener('click', e => {
        e.preventDefault();

        if ($selectors.btn().textContent === 'switch to dark mode') {
            $selectors.btn().textContent = 'switch to light mode';
            document.body.style.backgroundColor = 'black';
            $selectors.h1()[0].style.color = 'white';
            $selectors.p()[0].style.color = 'white';
            $selectors.h2()[0].style.color = 'white';
            $selectors.span().style.color = 'white';

        } else {
            $selectors.btn().textContent = 'switch to dark mode';
            $selectors.h1()[0].style.color = 'black';
            $selectors.p()[0].style.color = 'black';
            $selectors.h2()[0].style.color = 'black';
            document.body.style.backgroundColor = 'white';
            $selectors.span().style.color = 'black';
        }
    })
}
