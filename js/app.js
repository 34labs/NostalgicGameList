// Global State
let currentTab = 'main';
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    updateStats();
});

// --- RENDER FUNCTION ---
function renderGames() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear current

    // Filter Data
    const filteredGames = gamesDB.filter(game => {
        const matchesTab = game.tab === currentTab;
        const matchesCategory = currentFilter === 'all' || game.category === currentFilter;
        return matchesTab && matchesCategory;
    });

    if (filteredGames.length === 0) {
        container.innerHTML = '<div style="padding:20px; text-align:center;">> NO GAMES FOUND IN SECTOR <</div>';
        return;
    }

    // Generate HTML
    filteredGames.forEach(game => {
        const stars = '★'.repeat(game.rating) + '☆'.repeat(5 - game.rating);

        let platformsHtml = '';
        game.platforms.forEach(plat => {
            platformsHtml += `
                <div class="platform-item">
                    <b>${plat.name}:</b>
                    <a href="${plat.url}" class="download-btn" target="_blank">Download</a>
                </div>
            `;
        });

        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-header">
                <span>${game.title}</span>
                <span class="star-rating">${stars}</span>
            </div>
            <div class="game-layout">
                <div class="game-thumb" onclick="openTrailer('${game.title}', 'https://www.youtube.com/embed/${game.trailer}')">
                    <img src="${game.image}" alt="${game.title}">
                    <div class="game-thumb-overlay">[PLAY]</div>
                </div>
                <div class="game-info">
                    <p>${game.description}</p>
                    <div class="platform-links">
                        ${platformsHtml}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- TABS LOGIC ---
function showTab(tabId) {
    currentTab = tabId;
    // Update buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(tabId)) btn.classList.add('active');
    });
    renderGames();
}

// --- FILTER LOGIC ---
function filterGames(category) {
    currentFilter = category;
    // Update tags
    document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
    event.target.classList.add('active');
    renderGames();
}

// --- SEARCH LOGIC ---
document.getElementById('searchInput').addEventListener('input', function (e) {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? 'block' : 'none';
    });
});

// --- STATS ---
function updateStats() {
    document.getElementById('totalGames').innerText = gamesDB.length;
}

// --- MODAL LOGIC ---
function openTrailer(title, url) {
    document.getElementById('modalTitle').innerText = title.toUpperCase();
    document.getElementById('videoFrame').src = url + "?autoplay=1";
    document.getElementById('videoModal').style.display = 'block';
}

function closeTrailer() {
    document.getElementById('videoFrame').src = "";
    document.getElementById('videoModal').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == document.getElementById('videoModal')) {
        closeTrailer();
    }
}