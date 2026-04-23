import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-chiclin-blue-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CHICLIN NET" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-chiclin-yellow transition-colors duration-200 font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/plans"
              className="text-white hover:text-chiclin-yellow transition-colors duration-200 font-medium"
            >
              Planes
            </Link>
            <Link
              to="/coverage"
              className="text-white hover:text-chiclin-yellow transition-colors duration-200 font-medium"
            >
              Cobertura
            </Link>
            <Link
              to="/payments"
              className="text-white hover:text-chiclin-yellow transition-colors duration-200 font-medium"
            >
              Formas de Pago
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-chiclin-yellow focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-chiclin-blue-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white hover:text-chiclin-yellow px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/plans"
              className="block text-white hover:text-chiclin-yellow px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Planes
            </Link>
            <Link
              to="/coverage"
              className="block text-white hover:text-chiclin-yellow px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cobertura
            </Link>
            <Link
              to="/payments"
              className="block text-white hover:text-chiclin-yellow px-3 py-2 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Formas de Pago
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
