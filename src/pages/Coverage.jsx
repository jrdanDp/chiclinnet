import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CoverageModal from '../components/CoverageModal';
import CoordinateSearch from '../components/CoordinateSearch';
import { useCoverageData } from '../hooks/useCoverageData';
import { useGeolocation } from '../hooks/useGeolocation';
import { checkCoverage as checkCoverageUtil, getCoverageMessage } from '../utils/coverageChecker';
import { COVERAGE_CONFIG } from '../config/coverage';

function Coverage() {
  const [location, setLocation] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { coveragePolygon, mapPolygons, loading: dataLoading } = useCoverageData();
  const { getLocation } = useGeolocation();

  const handleGetLocation = async () => {
    setLoading(true);
    try {
      const position = await getLocation();
      setSelectedPosition([position.latitude, position.longitude]);
      setLocation({ lat: position.latitude, lng: position.longitude });
      checkCoverage(position.latitude, position.longitude);
    } catch (error) {
      setResult({ success: false, message: error.message });
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const MapController = ({ targetPosition }) => {
    const map = useMap();
    
    useEffect(() => {
      if (targetPosition) {
        map.flyTo(targetPosition, COVERAGE_CONFIG.flyTo.zoom, { duration: COVERAGE_CONFIG.flyTo.duration });
      }
    }, [targetPosition, map]);
    
    return null;
  };

  const handleCoordinateSearch = (lat, lng) => {
    setSelectedPosition([lat, lng]);
    setLocation({ lat, lng });
    checkCoverage(lat, lng);
  };

  const checkCoverage = (lat, lng) => {
    setLoading(true);
    try {
      if (!coveragePolygon) {
        setResult({ success: false, message: 'El polígono de cobertura aún no está cargado.' });
        setLoading(false);
        return;
      }

      const isCovered = checkCoverageUtil(lat, lng, coveragePolygon);

      setResult({
        success: isCovered,
        message: getCoverageMessage(isCovered)
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error checking coverage:', error);
      setResult({ success: false, message: 'Error al verificar la cobertura.' });
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };



  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedPosition([lat, lng]);
        setLocation({ lat, lng });
        checkCoverage(lat, lng);
      },
    });
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-chiclin-blue-navy text-center mb-8">
          Verifica tu Cobertura
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-chiclin-blue-base mb-4">
              ¿Vives en El Milagro o La Esperanza?
            </h2>
            <p className="text-gray-600 mb-6">
              Verifica si tu dirección tiene cobertura de nuestra red de fibra óptica 100% GPON.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleGetLocation}
              disabled={loading}
              className="w-full bg-gradient-to-r from-chiclin-blue-base to-chiclin-blue-light hover:from-chiclin-blue-light hover:to-chiclin-blue-base text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verificando...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Buscar mi ubicación
                </>
              )}
            </button>

            <p className="text-gray-600 text-center">
              Haz clic en el mapa para seleccionar tu ubicación
            </p>

            <div className="h-96 rounded-lg overflow-hidden border-2 border-chiclin-blue-base relative z-10">
              <MapContainer
                center={COVERAGE_CONFIG.defaultCenter}
                zoom={COVERAGE_CONFIG.defaultZoom}
                style={{ height: '100%', width: '100%', zIndex: 1 }}
              >
                <TileLayer
                  url={COVERAGE_CONFIG.map.tileUrl}
                  attribution={COVERAGE_CONFIG.map.attribution}
                />
                {mapPolygons && mapPolygons.map((polygon, index) => (
                  <Polygon
                    key={index}
                    positions={polygon}
                    pathOptions={COVERAGE_CONFIG.polygon}
                  />
                ))}
                {selectedPosition && <Marker position={selectedPosition} />}
                <MapClickHandler />
                <MapController targetPosition={selectedPosition} />
              </MapContainer>
              <CoordinateSearch onSearch={handleCoordinateSearch} />
            </div>
          </div>
        </div>

        <CoverageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          result={result}
        />
      </div>
    </div>
  );
}

export default Coverage;
