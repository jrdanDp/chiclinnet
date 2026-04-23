function FeaturesGPON() {
  const features = [
    {
      title: 'Pura Fibra',
      description: 'Obtén exactamente la velocidad que contratas, sin reducciones',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Simetría Total',
      description: 'Misma velocidad de subida y bajada para mejores experiencias',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Instalación Rápida',
      description: 'Listo en menos de 48 horas',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-chiclin-blue-base/10 rounded-full px-4 py-1 mb-4">
            <span className="text-chiclin-blue-base font-semibold text-sm">TECNOLOGÍA DE VANGUARDIA</span>
          </div>
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-chiclin-blue-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGPON;
