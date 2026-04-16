/**
 * Hook personalizado para manejar geolocalización
 */
export const useGeolocation = () => {
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Tu navegador no soporta geolocalización.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error('No se pudo obtener tu ubicación. Por favor selecciona tu ubicación en el mapa.'));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error('La información de ubicación no está disponible.'));
              break;
            case error.TIMEOUT:
              reject(new Error('El tiempo de espera para obtener la ubicación ha expirado.'));
              break;
            default:
              reject(new Error('Error desconocido al obtener la ubicación.'));
          }
        }
      );
    });
  };

  return { getLocation };
};
