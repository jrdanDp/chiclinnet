import { useState, useEffect } from 'react';
import coverageDataRaw from '../assets/COBERTURA.geojson?raw';
import kmlData from '../assets/COBERTURA2.0.kml?raw';
import { parseKMLPolygons } from '../utils/kmlParser';

/**
 * Hook personalizado para cargar datos de cobertura
 * Carga GeoJSON para verificación y KML para visualización
 */
export const useCoverageData = () => {
  const [coveragePolygon, setCoveragePolygon] = useState(null);
  const [mapPolygons, setMapPolygons] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Cargar GeoJSON para verificación con turf
      const coverageData = JSON.parse(coverageDataRaw);
      setCoveragePolygon(coverageData);

      // Parsear KML para visualización en mapa
      const polygons = parseKMLPolygons(kmlData);
      setMapPolygons(polygons);

      setLoading(false);
    } catch (err) {
      console.error('Error cargando datos de cobertura:', err);
      setError('Error al cargar datos de cobertura');
      setLoading(false);
    }
  }, []);

  return { coveragePolygon, mapPolygons, loading, error };
};
