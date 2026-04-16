function FeaturesGPON() {
  const features = [
    {
      icon: '⚡',
      title: 'Velocidad Real',
      description: 'Obtén exactamente la velocidad que contratas, sin reducciones'
    },
    {
      icon: '🔄',
      title: 'Simetría Total',
      description: 'Misma velocidad de subida y bajada para mejores experiencias'
    },
    {
      icon: '🛡️',
      title: 'Estabilidad sin Cortes',
      description: 'Infraestructura GPON garantiza conexión continua'
    },
    {
      icon: '🎮',
      title: 'Optimizado para Gaming',
      description: 'Latencia mínima para juegos online competitivos'
    },
    {
      icon: '📺',
      title: 'Streaming Perfecto',
      description: 'Sin buffering en 4K y contenido HD'
    },
    {
      icon: '🏠',
      title: 'Instalación Rápida',
      description: 'Listo en menos de 48 horas'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chiclin-blue-navy mb-4">
            Tecnología GPON/FTTO
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestra infraestructura de fibra óptica hasta el hogar (FTTO) con tecnología GPON 
            elimina los cuellos de botella tradicionales, garantizando una experiencia superior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-chiclin-blue-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGPON;
