// ===== Initialize Lucide Icons =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ===== Initialize Leaflet Maps =====
    if (typeof L !== 'undefined') {
        // Mapa Hero - Carrusel inicial
        const mapHero = document.getElementById('map-hero');
        if (mapHero) {
            const heroMap = L.map('map-hero', {
                zoomControl: false,
                scrollWheelZoom: false,
                dragging: false,
                attributionControl: false
            }).setView([39.0, -0.3], 6);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: ''
            }).addTo(heroMap);

            // Icono para sede (rojo en el hero)
            const hqIcon = L.divIcon({
                className: 'custom-marker hq-marker',
                html: '<div class="marker-pin hq-red"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            });

            // Icono para tiendas Euronics
            const storeIcon = L.divIcon({
                className: 'custom-marker store-marker',
                html: '<div class="marker-pin store"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            });

            // Icono para tiendas Tien21
            const tien21Icon = L.divIcon({
                className: 'custom-marker tien21-marker',
                html: '<div class="marker-pin tien21"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            });

            // Marcadores de todas las tiendas
            const heroLocations = [
                // Sede Central
                { lat: 39.52006342482848, lng: -0.455911984432042, isHQ: true },
                // Almería
                { lat: 37.3894, lng: -2.1502, isHQ: false },
                { lat: 36.8403, lng: -2.4652, isHQ: false },
                { lat: 36.8508, lng: -2.9397, isHQ: false },
                { lat: 36.7883, lng: -2.9501, isHQ: false },
                { lat: 37.0529, lng: -2.3883, isHQ: false },
                { lat: 36.7761, lng: -2.6921, isHQ: false },
                { lat: 37.1877, lng: -1.8188, isHQ: false },
                { lat: 37.4000, lng: -1.9419, isHQ: false },
                // Murcia
                { lat: 37.9750, lng: -1.2049, isHQ: false },
                { lat: 38.3882, lng: -1.5977, isHQ: false },
                { lat: 37.6400, lng: -0.8741, isHQ: false },
                { lat: 38.0500, lng: -1.2067, isHQ: false },
                { lat: 38.0739, lng: -1.6856, isHQ: false },
                { lat: 37.7894, lng: -0.8205, isHQ: false },
                { lat: 38.6126, lng: -1.1154, isHQ: false },
                { lat: 37.7647, lng: -1.4998, isHQ: false },
                { lat: 38.0842, lng: -1.2611, isHQ: false },
                { lat: 37.5637, lng: -1.6024, isHQ: false },
                // Albacete y Cuenca
                { lat: 38.5106, lng: -1.7012, isHQ: false },
                { lat: 38.9943, lng: -1.8564, isHQ: false },
                { lat: 38.6494, lng: -1.4278, isHQ: false },
                { lat: 39.2884, lng: -1.7737, isHQ: false },
                { lat: 39.4263, lng: -2.0905, isHQ: false },
                { lat: 39.4215, lng: -1.8686, isHQ: false },
                // Alicante
                { lat: 38.4750, lng: -0.6981, isHQ: false },
                { lat: 38.7337, lng: 0.1030, isHQ: false },
                { lat: 38.8600, lng: -0.1083, isHQ: false },
                { lat: 37.9428, lng: -0.8397, isHQ: false },
                { lat: 38.3068, lng: -0.4015, isHQ: false },
                { lat: 38.4771, lng: -0.7932, isHQ: false },
                { lat: 38.8225, lng: -0.1025, isHQ: false },
                { lat: 38.1411, lng: -0.8944, isHQ: false },
                { lat: 38.5842, lng: -0.1403, isHQ: false },
                { lat: 38.8564, lng: -0.1186, isHQ: false },
                { lat: 38.1108, lng: -0.4097, isHQ: false },
                { lat: 38.3452, lng: -0.4810, isHQ: false },
                { lat: 38.2669, lng: -0.6988, isHQ: false },
                { lat: 37.9838, lng: -0.6791, isHQ: false },
                { lat: 38.1058, lng: -0.7764, isHQ: false },
                { lat: 38.6208, lng: -0.1281, isHQ: false },
                { lat: 38.4841, lng: -0.7667, isHQ: false },
                { lat: 38.3710, lng: -0.4280, isHQ: false },
                { lat: 38.7833, lng: 0.1653, isHQ: false },
                { lat: 38.7397, lng: 0.0600, isHQ: false },
                { lat: 37.9300, lng: -0.7500, isHQ: false },
                { lat: 38.5939, lng: -0.7279, isHQ: false },
                // Valencia
                { lat: 39.4699, lng: -0.3763, isHQ: false },
                { lat: 38.8078, lng: -0.5175, isHQ: false },
                { lat: 38.9958, lng: -0.1625, isHQ: false },
                { lat: 39.4699, lng: -0.3663, isHQ: false },
                { lat: 39.5417, lng: -0.4242, isHQ: false },
                { lat: 39.4292, lng: -0.4556, isHQ: false },
                { lat: 39.1897, lng: -0.5136, isHQ: false },
                { lat: 38.9408, lng: -0.2150, isHQ: false },
                { lat: 39.2139, lng: -0.5439, isHQ: false },
                { lat: 39.4950, lng: -0.6233, isHQ: false },
                { lat: 38.9178, lng: -0.3533, isHQ: false },
                { lat: 39.5306, lng: -0.5158, isHQ: false },
                { lat: 39.0792, lng: -0.2833, isHQ: false },
                { lat: 39.0611, lng: -1.0561, isHQ: false },
                { lat: 38.9142, lng: -0.4367, isHQ: false },
                { lat: 38.8706, lng: -0.7697, isHQ: false },
                { lat: 39.4256, lng: -0.3828, isHQ: false },
                { lat: 39.1419, lng: -0.2531, isHQ: false },
                { lat: 39.5708, lng: -0.3894, isHQ: false },
                { lat: 39.5675, lng: -0.3553, isHQ: false },
                { lat: 39.4369, lng: -0.4639, isHQ: false },
                { lat: 38.9681, lng: -0.1803, isHQ: false },
                // Castellón
                { lat: 39.8856, lng: -0.0833, isHQ: false },
                { lat: 39.7331, lng: -0.2233, isHQ: false },
                { lat: 40.0414, lng: 0.1342, isHQ: false },
                { lat: 39.9864, lng: -0.0513, isHQ: false },
                { lat: 39.8489, lng: -0.4872, isHQ: false },
                { lat: 39.9864, lng: -0.0413, isHQ: false }
            ];

            heroLocations.forEach(loc => {
                L.marker([loc.lat, loc.lng], {
                    icon: loc.isHQ ? hqIcon : storeIcon
                }).addTo(heroMap);
            });

            // Tiendas Tien21 en el mapa hero
            const heroTien21Locations = [
                { lat: 39.5667, lng: -1.2072 },
                { lat: 39.6833, lng: -0.4167 },
                { lat: 39.5903, lng: -0.4625 },
                { lat: 39.1636, lng: -0.2536 },
                { lat: 39.7331, lng: -0.2233 },
                { lat: 39.4361, lng: -0.4344 },
                { lat: 38.9167, lng: -0.5500 },
                { lat: 39.5167, lng: -0.3500 },
                { lat: 39.1028, lng: -0.6833 },
                { lat: 39.4206, lng: -0.7919 },
                { lat: 38.9197, lng: -0.1547 },
                { lat: 39.4917, lng: -0.4625 },
                { lat: 39.5833, lng: -0.5167 },
                { lat: 39.9864, lng: -0.0513 },
                { lat: 40.0500, lng: 0.0667 },
                { lat: 39.4778, lng: -0.3278 },
                { lat: 39.0611, lng: -1.0561 },
                { lat: 39.2833, lng: -0.2833 },
                { lat: 39.5833, lng: -0.3083 },
                { lat: 39.4917, lng: -0.3667 },
                { lat: 39.7500, lng: -1.0000 },
                { lat: 39.0167, lng: -0.5667 },
                { lat: 39.5500, lng: -0.3667 },
                { lat: 38.9897, lng: -0.5186 },
                { lat: 40.4167, lng: 0.4333 },
                { lat: 39.3833, lng: -0.4167 },
                { lat: 39.6500, lng: -0.2833 },
                { lat: 39.9667, lng: -0.2667 },
                { lat: 39.4750, lng: -0.4167 },
                { lat: 39.5333, lng: -0.3833 },
                { lat: 38.9417, lng: -0.4500 },
                { lat: 39.5028, lng: -0.4406 },
                { lat: 39.6167, lng: -0.3000 },
                { lat: 39.3583, lng: -0.4583 },
                { lat: 39.4556, lng: -0.4625 },
                { lat: 39.4714, lng: -0.7125 },
                { lat: 38.8217, lng: -0.6061 },
                { lat: 39.7331, lng: -0.2333 },
                { lat: 38.9897, lng: -0.5186 },
                { lat: 40.2833, lng: -0.1000 },
                { lat: 39.4667, lng: -0.3500 },
                { lat: 39.5417, lng: -0.5667 }
            ];

            heroTien21Locations.forEach(loc => {
                L.marker([loc.lat, loc.lng], {
                    icon: tien21Icon
                }).addTo(heroMap);
            });
        }

        // Mapa de Tiendas - Zona Levante
        const mapTiendas = document.getElementById('map-tiendas');
        if (mapTiendas) {
            const tiendasMap = L.map('map-tiendas', { 
                attributionControl: false,
                zoomControl: true,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                touchZoom: false
            }).setView([38.9, -0.5], 7);

            // Permitir zoom solo con Ctrl + scroll dentro del mapa
            mapTiendas.addEventListener('wheel', (evt) => {
                if (!evt.ctrlKey) return;
                evt.preventDefault();
                if (evt.deltaY < 0) {
                    tiendasMap.zoomIn();
                } else {
                    tiendasMap.zoomOut();
                }
            }, { passive: false });
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(tiendasMap);

            // Icono personalizado para sede central
            const hqIcon = L.divIcon({
                className: 'custom-marker hq-marker',
                html: '<div class="marker-pin hq"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            });

            // Icono para tiendas Euronics
            const storeIcon = L.divIcon({
                className: 'custom-marker store-marker',
                html: '<div class="marker-pin store"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            });

            // Icono para tiendas Tien21
            const tien21Icon = L.divIcon({
                className: 'custom-marker tien21-marker',
                html: '<div class="marker-pin tien21"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            });

            // Marcadores de tiendas Euronics
            const locations = [
                // Sede Central
                { lat: 39.52006342482848, lng: -0.455911984432042, name: 'Euronics Paterna (Sede Central)', address: 'Carrer del Manyá, 22, Paterna', isHQ: true },
                
                // Almería
                { lat: 37.3894, lng: -2.1502, name: 'Euronics Albox', address: 'Avda. Pío XII, 1 - Local A, Albox', isHQ: false },
                { lat: 36.8403, lng: -2.4652, name: 'Euronics Almería', address: 'Av. Monserrat, 31, Almería', isHQ: false },
                { lat: 36.8508, lng: -2.9397, name: 'Euronics Berja', address: 'Cádiz, 2, Berja', isHQ: false },
                { lat: 36.7883, lng: -2.9501, name: 'Euronics Adra', address: 'Natalio Rivas, 68, Adra', isHQ: false },
                { lat: 37.0529, lng: -2.3883, name: 'Euronics Tabernas', address: 'Av. Andalucía, 7 y 9, Tabernas', isHQ: false },
                { lat: 36.7761, lng: -2.6921, name: 'Euronics Tecnison', address: 'Avda. Europa, 59, La Mojonera', isHQ: false },
                { lat: 37.1877, lng: -1.8188, name: 'Euronics Veraplaya', address: 'Carr. de Garrucha, 7, Garrucha', isHQ: false },
                { lat: 37.4000, lng: -1.9419, name: 'Euronics Torrente', address: 'Calle Carretera, 169, Huércal-Overa', isHQ: false },
                
                // Murcia
                { lat: 37.9750, lng: -1.2049, name: 'Euronics Alcantarilla', address: 'Avda. Americas N. D5-D6 PI, Alcantarilla', isHQ: false },
                { lat: 38.3882, lng: -1.5977, name: 'Euronics Diego López', address: 'Gran Vía Juan Carlos I, 82, Cieza', isHQ: false },
                { lat: 37.6400, lng: -0.8741, name: 'Euronics La Unión', address: 'Calle San Agustín, 13, La Unión', isHQ: false },
                { lat: 38.0500, lng: -1.2067, name: 'Euronics Molina de Segura', address: 'Calle La Fe, 5, Molina de Segura', isHQ: false },
                { lat: 38.0739, lng: -1.6856, name: 'Euronics Cehegín', address: 'Ctra. de Murcia, 61, Cehegín', isHQ: false },
                { lat: 37.7894, lng: -0.8205, name: 'Euronics Los Alcázares', address: 'Avda. de la Libertad, 165, Los Alcázares', isHQ: false },
                { lat: 38.6126, lng: -1.1154, name: 'Euronics Ripoll', address: 'Martínez Corbalán, 3, Yecla', isHQ: false },
                { lat: 37.7647, lng: -1.4998, name: 'Euronics Totana', address: 'Padre Angel de Novele, 6, Totana', isHQ: false },
                { lat: 38.0842, lng: -1.2611, name: 'Euronics Lorquí', address: 'Calle Velázquez, 2, Lorquí', isHQ: false },
                { lat: 37.5637, lng: -1.6024, name: 'Euronics Mazarrón', address: 'Centro Comercial Camposol, Sector B Local 24, Mazarrón', isHQ: false },
                
                // Albacete
                { lat: 38.5106, lng: -1.7012, name: 'Euronics Balmes', address: 'Balmes, 10, Hellín', isHQ: false },
                { lat: 38.9943, lng: -1.8564, name: 'Euronics Campollano', address: 'Calle I, E, 53, Albacete', isHQ: false },
                { lat: 38.6494, lng: -1.4278, name: 'Euronics Electro Gines', address: 'Veterinario Juan Morcillo Y Olalla, 3, Montealegre Del Castillo', isHQ: false },
                { lat: 39.2884, lng: -1.7737, name: 'Euronics Casas-Ibáñez', address: 'Correos, 7-A, Casas-Ibáñez', isHQ: false },
                
                // Cuenca
                { lat: 39.4263, lng: -2.0905, name: 'Euronics Maroca', address: 'Calvario, 23, Casas de Fernando Alonso', isHQ: false },
                { lat: 39.4215, lng: -1.8686, name: 'Euronics Tevar', address: 'C. Sta. Lucía, 4, Quintanar del Rey', isHQ: false },
                
                // Alicante
                { lat: 38.4750, lng: -0.6981, name: 'Euronics Bazar Celsa', address: 'Gabriel Miro, 1, Sax', isHQ: false },
                { lat: 38.7337, lng: 0.1030, name: 'Euronics Benitachell', address: 'Comercial Al Aire, París, 2, Benitachell', isHQ: false },
                { lat: 38.8600, lng: -0.1083, name: 'Euronics Cepa', address: 'Avda. Del Port, 12, Orba', isHQ: false },
                { lat: 37.9428, lng: -0.8397, name: 'Euronics Ciudad Quesada', address: 'Avda. Salamanca, 11, Rojales', isHQ: false },
                { lat: 38.3068, lng: -0.4015, name: 'Euronics Hondón de las Nieves', address: 'Requejo, 5, Hondón de las Nieves', isHQ: false },
                { lat: 38.4771, lng: -0.7932, name: 'Euronics Elda', address: 'Jaime Balmes, 20, Elda', isHQ: false },
                { lat: 38.8225, lng: -0.1025, name: 'Euronics Benidoleig', address: 'Avda. Luis Pérez, 14, Benidoleig', isHQ: false },
                { lat: 38.1411, lng: -0.8944, name: 'Euronics Cox', address: 'Avda. Del Carmen, 116, Cox', isHQ: false },
                { lat: 38.5842, lng: -0.1403, name: 'Euronics Callosa de Ensarriá', address: 'Jaume Roig, Local 2, Callosa de Ensarriá', isHQ: false },
                { lat: 38.8564, lng: -0.1186, name: 'Euronics Pego', address: 'Jaime I, 17, Pego', isHQ: false },
                { lat: 38.1108, lng: -0.4097, name: 'Euronics Gran Alacant', address: 'Avda. Finlandia, 23, Santa Pola', isHQ: false },
                { lat: 38.3452, lng: -0.4810, name: 'Euronics Janaral', address: "General O'donell, 3, Alicante", isHQ: false },
                { lat: 38.2669, lng: -0.6988, name: 'Euronics Jocar', address: 'Francisco Vicente Rodríguez, 6, Elche', isHQ: false },
                { lat: 37.9838, lng: -0.6791, name: 'Euronics Keaki', address: 'Av. Rosa Mazón Valero, Torrevieja', isHQ: false },
                { lat: 38.1058, lng: -0.7764, name: 'Euronics La Marina', address: 'Pl. Sierra Castilla, 151, San Fulgencio', isHQ: false },
                { lat: 38.2669, lng: -0.7088, name: 'Euronics Morell', address: 'Torres Quevedo, 64, Elche', isHQ: false },
                { lat: 38.6208, lng: -0.1281, name: 'Euronics Orts', address: 'Sagibarba, 19, Polop', isHQ: false },
                { lat: 38.4841, lng: -0.7667, name: 'Euronics Petrer', address: 'Calle Comparsa Moros Nuevos, 2, Petrer', isHQ: false },
                { lat: 37.9428, lng: -0.8397, name: 'Euronics Phonotec', address: 'Calle Misionero Venancio Ortiz, 24, Rojales', isHQ: false },
                { lat: 38.3710, lng: -0.4280, name: 'Euronics Playa San Juan', address: 'Av. Esportista Miriam Blasco, 2, Alicante', isHQ: false },
                { lat: 38.1058, lng: -0.7764, name: 'Euronics San Fulgencio', address: 'C/ Mar Jónico, 4, Local 1, San Fulgencio', isHQ: false },
                { lat: 38.7833, lng: 0.1653, name: 'Euronics Sapena', address: 'San Pedro Mártir, 2, Jávea', isHQ: false },
                { lat: 38.7397, lng: 0.0600, name: 'Euronics Teulada', address: 'Avda. Del Mediterráneo, 115, Teulada', isHQ: false },
                { lat: 37.9300, lng: -0.7500, name: 'Euronics The Electrical Shop', address: 'Pico Lobo, 1, Orihuela Costa', isHQ: false },
                { lat: 38.5939, lng: -0.7279, name: 'Euronics Todo lo Que Busca', address: 'Carlos Arniches, 7, Castalla', isHQ: false },
                
                // Valencia
                { lat: 39.4699, lng: -0.3763, name: 'Euronics Bazar Valencia', address: 'Avda. Primado Reig, 26, Valencia', isHQ: false },
                { lat: 38.8078, lng: -0.5175, name: 'Euronics Beneyto', address: 'Av. San Juan de Ribera, 2, Bocairent', isHQ: false },
                { lat: 38.9958, lng: -0.1625, name: 'Euronics Bernardino', address: 'Carrer Santa Barbara, 43, Piles', isHQ: false },
                { lat: 39.4699, lng: -0.3663, name: 'Euronics Calle Alboraya', address: "C/ d'Alboraia, 31, Valencia", isHQ: false },
                { lat: 39.5417, lng: -0.4242, name: 'Euronics Casa Fernández', address: 'Carrer Ildefons Fierro, 14, Puzol', isHQ: false },
                { lat: 39.4292, lng: -0.4556, name: 'Euronics Centro Quart', address: 'Primero de Mayo, 9, Quart de Poblet', isHQ: false },
                { lat: 39.1897, lng: -0.5136, name: 'Euronics Chenoll', address: 'Carrer Balaguer, 55, Carlet', isHQ: false },
                { lat: 38.9408, lng: -0.2150, name: 'Euronics Domestics Jorda', address: 'Carrer Nicolau Copernic, 16, Oliva', isHQ: false },
                { lat: 39.2139, lng: -0.5439, name: 'Euronics Electrobonet', address: "Carrer Patricio Boronat, 43, L'Alcúdia", isHQ: false },
                { lat: 39.4950, lng: -0.6233, name: 'Euronics Electrodomésticos García', address: 'Carrer Conde Del Real, 17, Real', isHQ: false },
                { lat: 38.9178, lng: -0.3533, name: 'Euronics Electro Hogar Martínez', address: 'Abu Masaifa, 20, Xàtiva', isHQ: false },
                { lat: 39.5306, lng: -0.5158, name: 'Euronics Electrica Sorli', address: 'Carretera de Llíria, 10c, Vilamarxant', isHQ: false },
                { lat: 39.0792, lng: -0.2833, name: 'Euronics Escrihuela', address: 'Avda. Valldigna, 3, Tavernes de la Valldigna', isHQ: false },
                { lat: 39.0611, lng: -1.0561, name: 'Euronics Faustino', address: 'Calle Dr. López Trigo, 60, Ayora', isHQ: false },
                { lat: 38.9142, lng: -0.4367, name: 'Euronics Ferrer Bravo', address: 'Carrer Abajo, 5, La Pobla Del Duc', isHQ: false },
                { lat: 39.4292, lng: -0.4556, name: 'Euronics Marian', address: 'Carrer Juan Ramón Jiménez, 19, Quart de Poblet', isHQ: false },
                { lat: 39.4253, lng: -0.4711, name: 'Euronics Martínez', address: 'Carrer de Sant Lluís Gonzaga, 2, Alaquàs', isHQ: false },
                { lat: 38.8706, lng: -0.7697, name: 'Euronics Micó', address: "Carrer Passeig de l'Estació, 20, Mogente", isHQ: false },
                { lat: 39.4699, lng: -0.3563, name: 'Euronics Roigba', address: 'Ramiro de Maeztu, 8, Valencia', isHQ: false },
                { lat: 39.4256, lng: -0.3828, name: 'Euronics Sedavi', address: 'Carrer de Silla, 6, 8, Sedaví', isHQ: false },
                { lat: 39.1419, lng: -0.2531, name: 'Euronics Servitec', address: 'Carrer La Bega, 8, Cullera', isHQ: false },
                { lat: 39.5708, lng: -0.3894, name: 'Euronics Tele Día Albalat', address: 'Carrer de les Barraques, 5, Albalat dels Sorells', isHQ: false },
                { lat: 39.5675, lng: -0.3553, name: 'Euronics Tele Día Museros', address: 'Avda. de la Cruz, 7, Museros', isHQ: false },
                { lat: 39.4369, lng: -0.4639, name: 'Euronics Torrent', address: 'Plaça de les Corts Valencianes, 9, Torrent', isHQ: false },
                { lat: 38.9681, lng: -0.1803, name: 'Euronics Villarejo', address: 'Carrer Reis Catòlics, 2, Gandia', isHQ: false },
                
                // Castellón
                { lat: 39.8856, lng: -0.0833, name: 'Euronics Cabedo', address: 'Calle Menendez Y Pelayo, 26, Burriana', isHQ: false },
                { lat: 39.7331, lng: -0.2233, name: 'Euronics Ferreres', address: 'Avda. Jaime I, 50, Vall de Uxó', isHQ: false },
                { lat: 40.0414, lng: 0.1342, name: 'Euronics La Plana', address: 'Ferrán I de Antequera, 24, Oropesa Del Mar', isHQ: false },
                { lat: 39.9864, lng: -0.0513, name: 'Euronics Maggober', address: 'Av. dels Germans Bou, 17, Castellón de la Plana', isHQ: false },
                { lat: 39.8489, lng: -0.4872, name: 'Euronics Segorbe', address: 'Plaza Jaime I, 9, Segorbe', isHQ: false },
                { lat: 39.9864, lng: -0.0413, name: 'Euronics Vilarservi', address: 'San Roque, 22, Castellón de la Plana', isHQ: false }
            ];

            // Tiendas Tien21
            const tien21Locations = [
                { lat: 39.5667, lng: -1.2072, name: 'Tien21 Alejandro Gea', address: 'C. Canónigo Muñoz, 10, Utiel, Valencia 46300' },
                { lat: 39.6833, lng: -0.4167, name: 'Tien21 Alvitel', address: 'Carrer Sant Josep, 25, Serra, Valencia 46118' },
                { lat: 39.5903, lng: -0.4625, name: 'Tien21 Broseta', address: 'Carrer José Gascón Sirera, 104, Bétera, Valencia 46117' },
                { lat: 39.1636, lng: -0.2536, name: 'Tien21 Chofre', address: 'Plaza de España, 6, Cullera, Valencia 46400' },
                { lat: 39.7331, lng: -0.2233, name: 'Tien21 Comercial Carreras', address: 'Avinguda Jaume I, 56, La Vall d\'Uixó, Castellón 12600' },
                { lat: 39.4361, lng: -0.4344, name: 'Tien21 Electro Luis', address: 'Calle Sant Pascual, 22, Picanya, Valencia 46210' },
                { lat: 38.9167, lng: -0.5500, name: 'Tien21 Electro Mico', address: 'Avinguda dels Treballadors, 10, L\'Olleria, Valencia 46850' },
                { lat: 39.5167, lng: -0.3500, name: 'Tien21 Electrocasion Meliana', address: 'Carrer Llanterners, 21 y 23, Meliana, Valencia 46133' },
                { lat: 39.1028, lng: -0.6833, name: 'Tien21 Electrohogar Navarres', address: 'Av. Pintor Tarrasó, 73, Navarrés, Valencia 46823' },
                { lat: 39.4206, lng: -0.7919, name: 'Tien21 Electronavarro', address: 'Carrer Ruiz Pons, 14, Buñol, Valencia 46360' },
                { lat: 38.9197, lng: -0.1547, name: 'Tien21 Electrónica Barreres', address: 'Carrer de la Comtessa de Maians, 32, Oliva, Valencia 46780' },
                { lat: 39.4917, lng: -0.4625, name: 'Tien21 Electronica Manises', address: 'Carrer Ribarroja, 32, Manises, Valencia 46940' },
                { lat: 39.5833, lng: -0.5167, name: 'Tien21 Electropeca', address: 'Carrer del Poeta Llorente, 115, La Pobla de Vallbona, Valencia 46185' },
                { lat: 39.9864, lng: -0.0513, name: 'Tien21 Electrozayma', address: 'Carrer Alonso de Arrufat, Castelló de la Plana, Castellón 12001' },
                { lat: 40.0500, lng: 0.0667, name: 'Tien21 Elektrovalero', address: 'Carrer la Sequiota, Benicàssim, Castellón 12560' },
                { lat: 39.4778, lng: -0.3278, name: 'Tien21 Ferretería García', address: 'Carrer del Dalt de la Mar, 73, Valencia' },
                { lat: 39.0611, lng: -1.0561, name: 'Tien21 Ferretería La Estrella', address: 'C Empedra, 12, Ayora, Valencia 46620' },
                { lat: 39.2833, lng: -0.2833, name: 'Tien21 Font', address: 'Carrer de Sueca, s/n, El Perelló, Valencia 46420' },
                { lat: 39.5833, lng: -0.3083, name: 'Tien21 Fuentes', address: 'Avda. Ronda Norte, 46, El Puig de Santa María, Valencia 46540' },
                { lat: 39.4917, lng: -0.3667, name: 'Tien21 Gómez Pérez', address: 'Calle de St Joan de la Penya, 12, Rascanya, Valencia 46019' },
                { lat: 39.7500, lng: -1.0000, name: 'Tien21 Goyse', address: 'Av. de los Madereros, 22, Chelva, Valencia 46176' },
                { lat: 39.0167, lng: -0.5667, name: 'Tien21 Hostalet', address: 'Carrer Santa Anna, 1, La Llosa de Ranes, Valencia 46815' },
                { lat: 39.5500, lng: -0.3667, name: 'Tien21 José Borrás', address: 'Av de la Magdalena, 2, RafelBunyol, Valencia 46138' },
                { lat: 38.9897, lng: -0.5186, name: 'Tien21 José Miñana', address: 'Calle Cerdán Tallada, 8, Xátiva, Valencia 46800' },
                { lat: 40.4167, lng: 0.4333, name: 'Tien21 Lores', address: 'Av. de Catalunya, 6, Benicarló, Castellón 12580' },
                { lat: 39.3833, lng: -0.4167, name: 'Tien21 Mari', address: 'Calle Vicent Iborra, Alcásser, Valencia 46290' },
                { lat: 39.6500, lng: -0.2833, name: 'Tien21 Marzal', address: 'San Juan 4, B, Faura, Valencia 46512' },
                { lat: 39.9667, lng: -0.2667, name: 'Tien21 Milla', address: 'Av. del País Valencià, Onda, Castellón 12200' },
                { lat: 39.4750, lng: -0.4167, name: 'Tien21 Mislata', address: 'Avinguda del Sud, 19, Mislata, Valencia 46920' },
                { lat: 39.5333, lng: -0.3833, name: 'Tien21 Moncada', address: 'Av del 25 d\'Abril, 7, Montcada, Valencia 46113' },
                { lat: 38.9417, lng: -0.4500, name: 'Tien21 Moscardo', address: 'Carrer Dr. Benavent, 12, Benigànim, Valencia 46830' },
                { lat: 39.5028, lng: -0.4406, name: 'Tien21 Paterna', address: 'Carrer del Castell, 7, Paterna, Valencia 46980' },
                { lat: 39.6167, lng: -0.3000, name: 'Tien21 Puzol', address: 'Carrer de Santa Teresa, 8, Puzol, Valencia 46530' },
                { lat: 39.3583, lng: -0.4583, name: 'Tien21 Roselló', address: 'Calle de Cervantes, 22, Picassent, Valencia 46220' },
                { lat: 39.4556, lng: -0.4625, name: 'Tien21 Saizval', address: 'Avinguda Miguel Hernández, 8, Alaquàs, Valencia 46970' },
                { lat: 39.4714, lng: -0.7125, name: 'Tien21 Sergio', address: 'Av Maestro García Navarro, Chiva, Valencia 46370' },
                { lat: 38.8217, lng: -0.6061, name: 'Tien21 TV Pastor', address: 'Carrer de Salvador Tormo, 24, Ontiyent, Valencia 46870' },
                { lat: 39.7331, lng: -0.2333, name: 'Tien21 Ventura', address: 'Cl. de Juan Capó, 36, La Vall d\'Uixó, Castellón 12600' },
                { lat: 38.9897, lng: -0.5186, name: 'Tien21 Vicente Miñana', address: 'Porta de Sant Francesc, 7, Xátiva, Valencia 46800' },
                { lat: 40.2833, lng: -0.1000, name: 'Tien21 Vidal Rull', address: 'Plaça la Concordia, 6, la Vall d\'Alba, Castellón 12194' },
                { lat: 39.4667, lng: -0.3500, name: 'Tien21 Vivó', address: 'Carrer de Rodríguez de Cepeda, 18, Camins al Grau, Valencia 46021' },
                { lat: 39.5417, lng: -0.5667, name: 'Tien21 Ximo', address: 'Carretera de València, 72, Riba-roja de Túria, Valencia 46190' }
            ];

            locations.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng], {
                    icon: loc.isHQ ? hqIcon : storeIcon
                }).addTo(tiendasMap);
                
                marker.bindPopup(`
                    <strong>${loc.name}</strong>
                    ${loc.isHQ ? '<br><span style="color: #ffd700; font-weight: bold;">Sede Central</span>' : '<br><span style="color: #1a4f8b; font-weight: bold;">Euronics</span>'}
                    <br><span style="font-size: 12px; color: #666;">${loc.address}</span>
                `);
            });

            tien21Locations.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng], {
                    icon: tien21Icon
                }).addTo(tiendasMap);
                
                marker.bindPopup(`
                    <strong>${loc.name}</strong>
                    <br><span style="color: #e63946; font-weight: bold;">Tien21</span>
                    <br><span style="font-size: 12px; color: #666;">${loc.address}</span>
                `);
            });

            }

        // Mapa de Contacto
        const mapContacto = document.getElementById('map-contacto');
        if (mapContacto) {
            const contactoMap = L.map('map-contacto', { attributionControl: false }).setView([39.52006342482848, -0.455911984432042], 17);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(contactoMap);

            // Marcador sede
            const hqIcon = L.divIcon({
                className: 'custom-marker hq-marker',
                html: '<div class="marker-pin hq"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            });

            L.marker([39.52006342482848, -0.455911984432042], { icon: hqIcon })
                .addTo(contactoMap)
                .bindPopup('<strong>Euronics Paterna</strong><br>Parque Empresarial<br>Carrer del Manyá, 22<br>46980 Paterna, Valencia<br>Tel: 961 34 30 52');
        }
    }

    // ===== Carousel Functionality =====
    const carousel = document.getElementById('carousel');
    
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentSlide = 0;
        let autoplayInterval;
        const autoplayDelay = 6000;

        function showSlide(index) {
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;
            
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, autoplayDelay);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetAutoplay();
            });
        });

        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                resetAutoplay();
            }
        }

        startAutoplay();
    }

    // ===== Mobile Menu =====
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ===== Smooth Scroll for Navigation =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== Header Scroll Effect =====
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            
            // Hide on scroll down, show on scroll up
            if (currentScroll > lastScroll) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.boxShadow = 'none';
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // ===== Brand Filter (Marcas) =====
    const marcaCats = document.querySelectorAll('.marca-cat');
    const marcaLogos = document.querySelectorAll('.marca-logo');

    marcaCats.forEach(cat => {
        cat.addEventListener('click', () => {
            // Update active state
            marcaCats.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            
            const category = cat.dataset.category;
            
            // Filter logos
            marcaLogos.forEach(logo => {
                if (category === 'all' || logo.dataset.cat === category) {
                    logo.style.display = 'block';
                    logo.style.animation = 'fadeIn 0.3s ease';
                } else {
                    logo.style.display = 'none';
                }
            });
        });
    });

    // ===== Blog Category Filter =====
    const blogCats = document.querySelectorAll('.blog-cat');
    const blogCards = document.querySelectorAll('.blog-card');

    blogCats.forEach(cat => {
        cat.addEventListener('click', () => {
            blogCats.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            
            const category = cat.textContent.trim().toLowerCase();
            
            blogCards.forEach(card => {
                const cardCategory = card.querySelector('.blog-category');
                if (cardCategory) {
                    const cardCatText = cardCategory.textContent.trim().toLowerCase();
                    if (category === 'todos' || cardCatText === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // ===== Blog Search =====
    const blogSearchInput = document.querySelector('.blog-search input');

    function filterBlogBySearch() {
        if (!blogSearchInput) return;
        
        const searchTerm = blogSearchInput.value.trim().toLowerCase();
        
        blogCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const category = card.querySelector('.blog-category')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (blogSearchInput) {
        blogSearchInput.addEventListener('input', filterBlogBySearch);
        blogSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterBlogBySearch();
            }
        });
    }

    // ===== Newsletter Form =====
    const newsletterForms = document.querySelectorAll('#newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const privacyCheckbox = form.closest('.footer-newsletter').querySelector('#newsletter-privacy');
            const successMessage = form.closest('.footer-newsletter').querySelector('.newsletter-success');
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                alert('Por favor, introduce un email válido');
                return;
            }
            
            if (!privacyCheckbox.checked) {
                alert('Debes aceptar la política de privacidad');
                return;
            }
            
            // Simular envío
            form.style.display = 'none';
            form.closest('.footer-newsletter').querySelector('.newsletter-checkbox').style.display = 'none';
            successMessage.style.display = 'flex';
            
            // Reinicializar iconos de Lucide
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });

    // ===== Contact Form with Mailto =====
    const contactForm = document.querySelector('#contacto-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const nombre = contactForm.querySelector('#nombre');
            const telefono = contactForm.querySelector('#telefono');
            const email = contactForm.querySelector('#email');
            const asunto = contactForm.querySelector('#asunto');
            const mensaje = contactForm.querySelector('#mensaje');
            const privacy = contactForm.querySelector('#privacidad-contacto');
            
            let isValid = true;
            
            if (!nombre.value.trim()) {
                showError(nombre, 'Por favor, introduce tu nombre');
                isValid = false;
            } else {
                clearError(nombre);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Por favor, introduce un email válido');
                isValid = false;
            } else {
                clearError(email);
            }
            
            if (!mensaje.value.trim()) {
                showError(mensaje, 'Por favor, escribe un mensaje');
                isValid = false;
            } else {
                clearError(mensaje);
            }
            
            if (!privacy.checked) {
                alert('Debes aceptar la política de privacidad');
                isValid = false;
            }
            
            if (isValid) {
                // Build mailto link
                const mailtoEmail = 'info@divelsa.com';
                const subject = encodeURIComponent(asunto.value.trim() || 'Contacto desde la web');
                const body = encodeURIComponent(
                    `Nombre: ${nombre.value.trim()}\n` +
                    `Teléfono: ${telefono.value.trim()}\n` +
                    `Email: ${email.value.trim()}\n\n` +
                    `Mensaje:\n${mensaje.value.trim()}`
                );
                
                // Open mailto
                window.location.href = `mailto:${mailtoEmail}?subject=${subject}&body=${body}`;
            }
        });
    }

    // ===== Blog Links - Página en construcción =====
    document.querySelectorAll('.blog-card a, .blog-meta a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Este artículo estará disponible próximamente.');
        });
    });

    // ===== Cargar más artículos =====
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            alert('📰 Por ahora no hay más artículos.\n\n¡Vuelve pronto para ver nuevas publicaciones!');
        });
    }

    function showError(input, message) {
        input.style.borderColor = '#e63946';
        const existingError = input.parentNode.querySelector('.error-message');
        if (!existingError) {
            const error = document.createElement('span');
            error.className = 'error-message';
            error.style.cssText = 'color: #e63946; font-size: 0.8rem; margin-top: 4px;';
            error.textContent = message;
            input.parentNode.appendChild(error);
        }
    }

    function clearError(input) {
        input.style.borderColor = '';
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.highlight-card, .ventaja-card, .cifra-card, .fortaleza-card, .valor-card, .servicio-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== Counter Animation =====
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    function formatNumber(num) {
        return num.toLocaleString('es-ES');
    }

    function animateCounter(counter, delay) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 4000; // 4 segundos
        const start = 0;
        const steps = 30; // Solo 30 pasos/saltos
        let lastDisplayedValue = -1;

        setTimeout(() => {
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function para que sea más suave
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(start + (target - start) * easeOutQuart);
                
                // Redondear al paso más cercano para que salte
                const stepSize = Math.ceil(target / steps);
                const roundedValue = Math.round(current / stepSize) * stepSize;
                
                // Solo actualizar si el valor cambió
                if (roundedValue !== lastDisplayedValue) {
                    counter.textContent = formatNumber(Math.min(roundedValue, target));
                    lastDisplayedValue = roundedValue;
                }
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = formatNumber(target);
                }
            }

            requestAnimationFrame(updateCounter);
        }, delay);
    }

    // Función para mostrar todos los + a la vez
    function showAllPlusSigns() {
        const allPlusSigns = document.querySelectorAll('.stat-plus.hidden');
        allPlusSigns.forEach(plus => {
            plus.classList.remove('hidden');
        });
    }

    // Observer para activar contadores cuando sean visibles
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                
                // Encontrar el delay máximo
                let maxDelay = 0;
                counters.forEach(counter => {
                    const delay = parseInt(counter.getAttribute('data-delay')) || 0;
                    if (delay > maxDelay) maxDelay = delay;
                    animateCounter(counter, delay);
                });
                
                // Mostrar todos los + cuando termine el último contador
                const duration = 4000;
                setTimeout(showAllPlusSigns, maxDelay + duration + 100);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .nav.active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #ffffff;
        flex-direction: column;
        padding: 24px 20px 32px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        animation: fadeIn 0.3s ease;
        border-top: 1px solid rgba(0,0,0,0.1);
    }
    
    .nav.active .nav-link {
        padding: 18px 20px;
        font-size: 1.1rem;
        color: #1a4f8b;
    }
    
    .nav.active .nav-link:hover {
        background: #f3f4f6;
        border-radius: 8px;
    }
    
    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);

// ===== Handle brand logos loading with local fallback =====
document.addEventListener('DOMContentLoaded', function() {
    const marcaImages = document.querySelectorAll('.marca-card img');
    
    // Mapa de nombres de archivo locales (directamente en img/)
    const localImages = {
        'lg': 'img/lg.webp',
        'samsung': 'img/samsung.png',
        'bosch': 'img/bosch.png',
        'siemens': 'img/siemens.png',
        'aeg': 'img/aeg.png',
        'balay': 'img/balay.png',
        'electrolux': 'img/electrolux.png',
        'haier': 'img/haier.png',
        'hisense': 'img/hisense.png',
        'candy': 'img/candy.svg',
        'whirlpool': 'img/whirpool.png',
        'teka': 'img/teka.png',
        'beko': 'img/beko.png',
        'miele': 'img/miele.png',
        'philips': 'img/philips.png',
        'sony': 'img/sony.svg'
    };
    
    marcaImages.forEach((img) => {
        const originalSrc = img.src;
        const alt = img.alt.toLowerCase();
        const localSrc = localImages[alt];
        let hasLoaded = false;
        let errorCount = 0;
        let retryTimeout = null;
        
        // Marcar cuando la imagen carga correctamente - mantenerla visible
        img.addEventListener('load', function() {
            hasLoaded = true;
            this.style.opacity = '1';
            this.style.display = 'block';
            // Limpiar cualquier timeout pendiente
            if (retryTimeout) {
                clearTimeout(retryTimeout);
            }
            // Si es una imagen local de Samsung o Whirlpool, agregar clase para hacerla más grande
            if (this.src.includes('img/') && (alt === 'samsung' || alt === 'whirlpool')) {
                this.classList.add('logo-large');
            }
            // Asegurarse de que no hay nombre de marca si la imagen cargó
            const existingName = this.parentElement.querySelector('.marca-name:not(.marca-name-permanent)');
            if (existingName) {
                existingName.remove();
            }
        });
        
        // Manejar errores con fallback a local
        img.addEventListener('error', function() {
            // Si ya cargó antes, no hacer nada
            if (hasLoaded) return;
            
            errorCount++;
            
            // Si es el primer error, intentar recargar con timestamp
            if (errorCount === 1) {
                retryTimeout = setTimeout(() => {
                    if (!hasLoaded) {
                        const separator = originalSrc.includes('?') ? '&' : '?';
                        this.src = originalSrc + separator + '_=' + Date.now();
                    }
                }, 500);
            } else if (errorCount === 2 && localSrc) {
                // Si falla de nuevo, intentar con imagen local
                // La clase logo-large se agregará en el evento 'load' cuando la imagen local se cargue
                this.src = localSrc;
            } else if (errorCount >= 3) {
                // Si todo falla, mostrar el nombre de la marca
                if (!hasLoaded) {
                    this.style.display = 'none';
                    if (!this.parentElement.querySelector('.marca-name') && alt) {
                        const marcaName = document.createElement('span');
                        marcaName.className = 'marca-name';
                        // Agregar clase especial para Whirlpool
                        if (alt === 'whirlpool') {
                            marcaName.className += ' whirlpool-large';
                        }
                        marcaName.textContent = alt.toUpperCase();
                        this.parentElement.appendChild(marcaName);
                    }
                }
            }
        });
        
        // Verificar si la imagen ya está cargada al inicio
        if (img.complete && img.naturalHeight !== 0) {
            hasLoaded = true;
            img.style.opacity = '1';
        }
    });
});

