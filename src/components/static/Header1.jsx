import { Link } from 'react-router-dom';
import headerImg1 from '../../assets/img/header-img-1.png';

function Header1() {
  return (
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${headerImg1})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-chiclin-blue-base/50 to-chiclin-blue-navy/60"></div>
      <div className="relative z-10 mx-auto text-center px-4 py-20 h-full flex flex-col justify-center">
        <h1 className="text-6xl md:text-6xl font-bold mb-6 text-white">
          Internet que une a la familia
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          Tu hogar siempre conectado
        </p>
        <div className="text-left max-w-4xl mx-auto">
          <Link
            to="/plans"
            className="inline-block bg-chiclin-yellow hover:bg-yellow-500 text-chiclin-blue-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Ver Planes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header1;
