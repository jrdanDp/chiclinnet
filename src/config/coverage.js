// Configuración de cobertura
export const COVERAGE_CONFIG = {
  // Centro del mapa por defecto (El Milagro/La Esperanza)
  defaultCenter: [-8.05, -79.06],
  defaultZoom: 13,

  // Configuración del mapa
  map: {
    tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },

  // Configuración de polígonos de cobertura
  polygon: {
    strokeColor: '#0b3a81',
    fillColor: '#fbc704',
    fillOpacity: 0.3,
    weight: 2,
  },

  // Configuración de animación de mapa
  flyTo: {
    zoom: 15,
    duration: 1.5,
  },

  // Archivos de datos geoespaciales
  dataFiles: {
    geojson: '../assets/COBERTURA.geojson',
    kml: '../assets/COBERTURA2.0.kml',
  },
};
