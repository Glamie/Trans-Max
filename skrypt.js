  document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });
    
// Inicjalizacja mapy Leaflet
var map = L.map('map').setView([50.877874951656466, 19.057822788785728], 13); // Współrzędne dla Białej
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([50.877874951656466, 19.057822788785728]).addTo(map)
    .bindPopup('PHU Trans-Max<br>ul. Częstochowska 85, Biała')
    .openPopup();
    