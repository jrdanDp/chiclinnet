import React, { memo } from 'react';

function PlanCard({ name, speed, price, regularPrice, promoMonths, features, isPopular = false, onContract }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
        isPopular ? 'border-chiclin-yellow relative' : 'border-transparent'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-chiclin-yellow text-chiclin-blue-dark px-4 py-1 rounded-full text-sm font-bold">
            Más Popular
          </span>
        </div>
      )}

      {promoMonths && (
        <div className="absolute top-4 right-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Promoción {promoMonths} meses
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold text-chiclin-blue-navy mb-2">{name}</h3>
      <div className="text-5xl font-extrabold text-chiclin-blue-base mb-1">
        S/ {price}
      </div>
      {regularPrice && (
        <div className="text-gray-400 text-sm mb-4">
          Luego: S/ {regularPrice}/mes
        </div>
      )}

      <ul className="space-y-2 mb-6 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onContract}
        className="w-full bg-chiclin-blue-base hover:bg-chiclin-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Contratar Ahora
      </button>
    </div>
  );
}

export default memo(PlanCard);
