window.onload = function () {
    // Initialisation de la carte Leaflet centrée sur Paris
    const map = L.map("map").setView([48.866667, 2.333333], 12);

    // Ajout des tuiles de la carte
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

    // Exemple d'ajout de marqueurs d'arbres
    addTreeMarker(48.8584, 2.2945, 'Chêne');
    addTreeMarker(48.8667, 2.3333, 'Sapin');
};


// Fonction pour ajouter des marqueurs d'arbres
function addTreeMarker(lat, lng, type) {
  L.marker([lat, lng]).addTo(map).bindPopup(`<b>${type}</b>`);
}



