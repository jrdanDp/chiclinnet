import { Link } from 'react-router-dom';
import headerImg2 from '../../assets/img/header-img-2.svg';

function Header2() {
  return (
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${headerImg2})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-chiclin-blue-base/30 to-chiclin-blue-navy/50"></div>
      <div className="relative z-10 px-4 py-20 h-full flex flex-col justify-center ml-8 md:ml-16">
        <div className="inline-block bg-orange-500 text-white font-bold px-4 py-1 rounded-full mb-2 text-sm w-fit">
          VELOCIDAD ULTRA
        </div>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Más velocidad para lo que realmente importa
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Tecnología FTTO 100% Fibra Óptica
          </p>
          <Link
            to="/plans"
            className="inline-block bg-chiclin-yellow hover:bg-yellow-500 text-chiclin-blue-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mt-8 ml-8"
          >
            Ver Planes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header2;
