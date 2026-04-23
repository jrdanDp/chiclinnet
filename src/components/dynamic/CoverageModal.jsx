import { memo } from 'react';

function CoverageModal({ isOpen, onClose, result }) {
  if (!isOpen || !result) return null;

  const handleWhatsApp = () => {
    const message = result.success
      ? 'Hola, tengo cobertura y quiero contratar'
      : 'Hola, quiero saber cuando tendré cobertura en mi zona';
    window.open(`https://wa.me/51957321287?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="text-6xl mb-4">
            {result.success ? '🎉' : '📍'}
          </div>

          <h3
            className={`text-2xl font-bold mb-4 ${
              result.success ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {result.success ? '¡Tienes Cobertura!' : 'Sin Cobertura'}
          </h3>

          <p className={`text-lg mb-6 ${result.success ? 'text-green-600' : 'text-red-600'}`}>
            {result.message}
          </p>

          {!result.success && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left">
              <p className="text-blue-700 text-sm font-medium">
                ¡No te preocupes! Contacta a un asesor para encontrar la mejor solución para ti.
              </p>
            </div>
          )}

          <button
            onClick={handleWhatsApp}
            className="w-full bg-chiclin-blue-base hover:bg-chiclin-blue-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {result.success ? 'Contratar Ahora' : 'Contactar Asesor'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(CoverageModal);
