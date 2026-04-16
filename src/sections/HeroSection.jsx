import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-chiclin-blue-base to-chiclin-blue-navy text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Internet a la Velocidad de la Luz en Trujillo
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          Tecnología FTTO 100% Fibra Óptica con infraestructura GPON
        </p>
        <p className="text-lg mb-8 text-gray-300">
          Cobertura en El Milagro y La Esperanza
        </p>
        <Link
          to="/plans"
          className="inline-block bg-chiclin-yellow hover:bg-yellow-500 text-chiclin-blue-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
        >
          Ver Planes
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
