const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
const btn = document.querySelector('button');

const apiURL = 'https://api.lyrics.ovh';

// Get prev and next songs
async function getMoreSongs(url) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await response.json();

    showData(data);
}

// Get lyrics

async function getLyrics(artist, title) {

    const response = await fetch(`${apiURL}/v1/${artist}/${title}`);
    const data = await response.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `
    <h2><strong>${artist}</strong></h2>
    <span>
    ${lyrics}
    </span>
    `;

    more.innerHTML = '';
}

// Search by song or artist

async function searchSong(term) {
    const response = await fetch(`${apiURL}/suggest/${term}`);
    const data = await response.json();

    showData(data);
}

// Show result in DOM

function showData(data) {
    result.innerHTML = `
    <ul class="songs">
    ${data.data
            .map(song =>
                `<li>
        <span>
            <strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`).join('')}
    </ul
    `

    if (data.prev || data.next) {
        more.innerHTML = `
        ${data.prev ? `<button id="next" onclick="getMoreSongs('${data.prev}')">Prev</button>` : ''}
        ${data.next ? `<button id="next" onclick="getMoreSongs('${data.next}')">Next</button>` : ''}
        `
    } else {
        more.innerHTML = '';
    }
}



// Event listeners

btn.addEventListener('click', e => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('The search field cannot be empty.');
        return
    }

    searchSong(searchTerm);
})

result.addEventListener('click', e => {
    const clickedEl = e.target;

    if (clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
})
