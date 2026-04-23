import { useState, memo } from 'react';

function CoordinateSearch({ onSearch }) {
  const [coordinates, setCoordinates] = useState('');
  const [error, setError] = useState('');
  const [showCoordinates, setShowCoordinates] = useState(false);

  const handleSearch = () => {
    // Parse coordinates from format "lat, lng" or "lat lng"
    const parts = coordinates.split(/[,\s]+/).filter(part => part.trim() !== '');
    
    if (parts.length < 2) {
      setError('Por favor ingresa coordenadas en formato: latitud, longitud (ej: -8.013263, -79.064294)');
      return;
    }

    const latitude = parseFloat(parts[0]);
    const longitude = parseFloat(parts[1]);

    if (isNaN(latitude) || isNaN(longitude)) {
      setError('Por favor ingresa coordenadas válidas');
      return;
    }

    if (latitude < -90 || latitude > 90) {
      setError('Latitud debe estar entre -90 y 90');
      return;
    }

    if (longitude < -180 || longitude > 180) {
      setError('Longitud debe estar entre -180 y 180');
      return;
    }

    setError('');
    onSearch(latitude, longitude);
  };

  return (
    <div className="absolute top-4 right-4 z-[1000] w-72">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Toggle para búsqueda por coordenadas */}
        <button
          onClick={() => setShowCoordinates(!showCoordinates)}
          className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>Buscar por coordenadas</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${showCoordinates ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Sección de coordenadas colapsable */}
        {showCoordinates && (
          <div className="p-4 bg-gray-50 border-t border-gray-200 animate-fade-in">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Coordenadas (latitud, longitud)</label>
                <input
                  type="text"
                  value={coordinates}
                  onChange={(e) => setCoordinates(e.target.value)}
                  placeholder="-8.013263, -79.064294"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chiclin-blue-base focus:border-transparent"
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg">{error}</p>
              )}

              <button
                onClick={handleSearch}
                className="w-full bg-chiclin-yellow hover:bg-yellow-400 text-chiclin-blue-dark font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200"
              >
                Buscar Coordenadas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(CoordinateSearch);
