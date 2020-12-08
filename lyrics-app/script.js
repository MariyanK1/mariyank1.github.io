const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
const btn = document.querySelector('button');

const apiURL = 'https://api.lyrics.ovh';

// TO DO
async function getMoreSongs(url) {
    const response = await fetch(`${url}`);
    const data = await response.json();

    showData(data);
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
        alert('The search field is empty.');
        return
    }

    searchSong(searchTerm);
})
