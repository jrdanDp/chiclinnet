import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-chiclin-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-chiclin-yellow">CHICLIN NET</h3>
            <p className="text-gray-300">
              Internet 100% Fibra Óptica con tecnología GPON. Velocidad real, simetría y estabilidad sin cortes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-chiclin-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-chiclin-yellow transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="text-gray-300 hover:text-chiclin-yellow transition-colors">
                  Cobertura
                </Link>
              </li>
              <li>
                <Link to="/payments" className="text-gray-300 hover:text-chiclin-yellow transition-colors">
                  Formas de Pago
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 El Milagro y La Esperanza, Trujillo</li>
              <li>📞 +51 957 321 287</li>
              <li>✉️ contacto@chiclinnet.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CHICLIN NET. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
