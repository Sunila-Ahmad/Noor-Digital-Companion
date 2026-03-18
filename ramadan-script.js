// --- Tasbeeh Logic ---
let count = localStorage.getItem('tasbeehCount') || 0;
const display = document.getElementById('count');

function increment() {
    count++;
    display.innerText = count;
    localStorage.setItem('tasbeehCount', count);
    if (window.navigator.vibrate) window.navigator.vibrate(50); // Haptic feedback
}

function resetCounter() {
    count = 0;
    display.innerText = 0;
    localStorage.setItem('tasbeehCount', 0);
}

// --- Ramadan 30-Day Grid Generation ---
const grid = document.getElementById('ramadanDays');
for (let i = 1; i <= 30; i++) {
    let day = document.createElement('div');
    day.className = 'day-box';
    day.innerText = i;
    day.onclick = function() {
        this.classList.toggle('completed');
        // Save status to local storage
        localStorage.setItem(`day-${i}`, this.classList.contains('completed'));
    };
    grid.appendChild(day);
}

// --- Knowledge Content Engine ---
const contentStore = {
    duas: "<h4>Daily Duas</h4><ul><li><b>Suhoor:</b> Wa bisawmi ghadinn nawaiytu min shahri ramadan.</li><li><b>Iftar:</b> Allahumma inni laka sumtu...</li></ul>",
    names: "<h4>Asma-ul-Husna</h4><p>Ar-Rahman, Ar-Raheem, Al-Malik...</p>",
    surahs: "<h4>Panj Surah</h4><ul><li>Surah Yaseen</li><li>Surah Ar-Rahman</li><li>Surah Al-Waqiah</li><li>Surah Al-Mulk</li><li>Surah Al-Muzzammil</li></ul>"
};

function showContent(type) {
    document.getElementById('dynamic-content').innerHTML = contentStore[type];
}