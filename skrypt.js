//Responsywnośc menu dla malych ekranów
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

//zmiana języka
function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    const langMap = {
        'pl': 'index.html',
        'en': 'index-en.html',
        'de': 'index-de.html',
        'fr': 'index-fr.html',
        'it': 'index-it.html',
        'nl': 'index-nl.html'
    };
    // Sprawdza, czy plik istnieje, w przeciwnym razie wraca do domyślnego (pl)
    const targetUrl = langMap[lang] || 'index.html';
    window.location.href = targetUrl;
}
    
// Inicjalizacja mapy Leaflet
document.addEventListener('DOMContentLoaded', () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
    
document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([50.877874951656466, 19.057822788785728], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([50.877874951656466, 19.057822788785728]).addTo(map)
        .bindPopup('PHU Trans-Max<br>ul. Częstochowska 85, Biała')
        .openPopup();
});



//animacja pętli ikon w nagłówku
const icons = document.querySelectorAll('.icon');
let currentIndex = 0;

function showNextIcon() {
    icons.forEach(icon => icon.classList.remove('active'));
    icons[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % icons.length;
}

// Pokaz pierwszą ikonę na starcie
icons[currentIndex].classList.add('active');

// Zmiana ikony co 2 sekundy
setInterval(showNextIcon, 2000);    