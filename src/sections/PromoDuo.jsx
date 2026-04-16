import { Link } from 'react-router-dom';

function PromoDuo() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-chiclin-yellow to-yellow-400 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-chiclin-blue-dark mb-4">
            Promoción Estrella
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-chiclin-blue-navy mb-2">
              Plan DÚO 100MB
            </h3>
            <p className="text-gray-600 mb-4">Internet + Cable</p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl font-bold text-chiclin-blue-base">
                S/ 39.99
              </span>
              <span className="text-xl text-gray-500">x 3 meses</span>
            </div>
            <p className="text-gray-500 line-through text-lg">
              Regular: S/ 65.00
            </p>
          </div>
          <Link
            to="/plans"
            className="inline-block bg-chiclin-blue-dark hover:bg-chiclin-blue-navy text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Contratar Ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PromoDuo;
