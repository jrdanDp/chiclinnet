import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="bg-chiclin-blue-base text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para experimentar el internet del futuro?
        </h2>
        <p className="text-xl mb-8 text-gray-200">
          Únete a cientos de clientes satisfechos en El Milagro y La Esperanza
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/plans"
            className="inline-block bg-chiclin-yellow hover:bg-yellow-500 text-chiclin-blue-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Ver Planes
          </Link>
          <a
            href="https://wa.me/51957321287?text=test"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
