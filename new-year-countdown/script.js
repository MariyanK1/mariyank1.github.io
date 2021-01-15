const $domElements = {
    days: () => document.querySelector('#days'),
    hours: () => document.querySelector('#hours'),
    minutes: () => document.querySelector('#minutes'),
    seconds: () => document.querySelector('#seconds'),
    countdown: () => document.querySelector('#countdown'),
    year: () => document.querySelector('#year'),
    loading: () => document.querySelector('#loading'),
    wishBtn: () => document.querySelector('#wish'),
    divWishes: () => document.querySelector('#wishes')
}

const currentYear = new Date().getFullYear();
$domElements.year().innerText = currentYear + 1;

$domElements.wishBtn().addEventListener('click', generateWish);

setTimeout(() => {
    $domElements.loading().remove();
    $domElements.countdown().style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);


function generateWish(e) {
    e.preventDefault();

    const wishes = [
        'New Year’s is the time to forget all your fears, drink a few beers, leave behind all your tears!',
        'Happy New Year to you and your family! Wishing you 365 days of good luck!',
        'Happy new year to the sweetest person alive. Thanks for being in my life.',
        'Happy new year to the best person in the world! Wish you a blessed life.',
        'I wish you a very Happy New Year. Hope you have a great time ahead.',
        'Happy New Year! I hope all your endeavors are successful.'
    ]

    $domElements.divWishes().innerHTML = wishes[Math.floor(Math.random() * Math.floor(6))];
}

function updateCountdown() {
    const currentTime = new Date();
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    $domElements.days().innerHTML = d;
    $domElements.hours().innerHTML = h < 10 ? '0' + h : h;
    $domElements.minutes().innerHTML = m < 10 ? '0' + m : m;
    $domElements.seconds().innerHTML = s < 10 ? '0' + s : s;
}
