import * as turf from '@turf/turf';

/**
 * Utilidad para verificar cobertura usando Turf.js
 */

/**
 * Verifica si un punto está dentro de un polígono de cobertura
 * @param {number} lat - Latitud del punto
 * @param {number} lng - Longitud del punto
 * @param {Object} coveragePolygon - Polígono GeoJSON MultiPolygon
 * @returns {boolean} - True si tiene cobertura, false si no
 */
export const checkCoverage = (lat, lng, coveragePolygon) => {
  if (!coveragePolygon) {
    throw new Error('Coverage polygon not provided');
  }

  try {
    const point = turf.point([lng, lat]);
    const isCovered = turf.booleanPointInPolygon(point, coveragePolygon);
    return isCovered;
  } catch (error) {
    console.error('Error checking coverage:', error);
    throw error;
  }
};

/**
 * Genera mensaje de resultado de cobertura
 * @param {boolean} hasCoverage - Si tiene cobertura
 * @returns {string} - Mensaje descriptivo
 */
export const getCoverageMessage = (hasCoverage) => {
  return hasCoverage
    ? '¡Felicidades! Tienes cobertura en tu ubicación.'
    : 'Tu ubicación aún no tiene cobertura. Contáctanos para futuras ampliaciones.';
};
