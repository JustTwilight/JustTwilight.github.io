//Mapa 1
(function( ){
    "use strict";
    document.addEventListener('DOMContentLoaded', function (){
var map = L.map('mapa').setView([19.36477191977165, -99.26678598802302], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.36477191977165, -99.26678598802302]).addTo(map)
    .bindPopup('Grupo CORSEC.')
    .openPopup();
} );
})();

//Mapa 2
(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        var map2 = L.map('mapa2').setView([19.080865716905823, -104.28852176907041], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map2);

        L.marker([19.080865716905823, -104.28852176907041]).addTo(map2)
            .bindPopup('Grupo CORSEC.<br> Manzanillo.')
            .openPopup();
    });
})();

//Mapa 3
(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        var map3 = L.map('mapa3').setView([25.644029605292644, -100.35342281988957], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map3);

        L.marker([25.644029605292644, -100.35342281988957]).addTo(map3)
            .bindPopup('Grupo CORSEC.<br> Monterrey.')
            .openPopup();
    });
})();

//Mapa 4
(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        var map4 = L.map('mapa4').setView([19.02844438210098, -98.23689129123645], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map4);

        L.marker([19.02844438210098, -98.23689129123645]).addTo(map4)
            .bindPopup('Grupo CORSEC.<br> Puebla.')
            .openPopup();
    });
})();

//Mostrar mapas

function mostrarMapa(mapaId, ubicacionId) {
    // Ocultar todos los mapas y ubicaciones
    var mapas = document.getElementsByClassName('mapa');
    for (var i = 0; i < mapas.length; i++) {
        mapas[i].style.display = 'none';
    }

    var ubicaciones = document.getElementsByClassName('ubicacion');
    for (var j = 0; j < ubicaciones.length; j++) {
        ubicaciones[j].style.display = 'none';
    }

    // Mostrar el mapa y la ubicación seleccionados
    var mapa = document.getElementById(mapaId);
    mapa.style.display = 'block';

    var ubicacion = document.getElementById(ubicacionId);
    ubicacion.style.display = 'block';
}
