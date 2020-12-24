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
        'New years are like restart buttons. You think you can push the button and start things all over again but then realize your life is too messed up to be restarted fresh!',
        'I hope you start the New Year as the startup of your old habits. Have the same old beautiful life in a box of New Year!',
        'I would quit all my bad habits for the new year, but then I remembered that nobody likes a quitter.',
        'May this upcoming year actually bring change in you – not just all your old habits wrapped in a new package, Oh God! Happy New year, anyways.',
        'I wish even your success amount comes on my account and the right hands can spend them this upcoming year. Happy New Year.'
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
