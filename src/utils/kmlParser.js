/**
 * Utilidad para parsing de archivos KML
 * Extrae coordenadas de polígonos del contenido KML
 */

/**
 * Parsea coordenadas de un archivo KML
 * @param {string} kmlContent - Contenido del archivo KML
 * @returns {Array<Array<Array<number>>>} - Array de polígonos con coordenadas [lat, lng]
 */
export const parseKMLPolygons = (kmlContent) => {
  try {
    const coordinatesMatches = kmlContent.match(/<coordinates>(.*?)<\/coordinates>/gs);
    if (!coordinatesMatches) return [];

    const polygons = coordinatesMatches.map(match => {
      const coordsStr = match.replace('<coordinates>', '').replace('</coordinates>', '').trim();
      const coordsArray = coordsStr
        .split(/\s+/)
        .map(coord => coord.trim())
        .filter(coord => coord.length > 0)
        .map(coord => {
          const parts = coord.split(',').map(p => parseFloat(p.trim()));
          if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return [parts[1], parts[0]]; // Convertir [lng, lat] a [lat, lng] para Leaflet
          }
          return null;
        })
        .filter(coord => coord !== null);
      return coordsArray;
    }).filter(polygon => polygon.length > 0);

    return polygons;
  } catch (error) {
    console.error('Error parsing KML:', error);
    return [];
  }
};
