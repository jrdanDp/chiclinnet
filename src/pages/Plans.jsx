import { useState } from 'react';
import PlanCard from '../components/dynamic/PlanCard';
import prices from '../data/prices.json';

function Plans() {
  const [activeTab, setActiveTab] = useState('duo');

  const handleContract = (planName) => {
    window.open(`https://wa.me/51957321287?text=Hola, estoy interesado en el plan ${planName}`, '_blank');
  };

  const duoPlans = prices.duos.map(plan => ({
    name: plan.name,
    speed: plan.name.match(/\d+/)[0] + 'MB',
    price: plan.promoPrice ? plan.promoPrice.toString() : plan.regularPrice.toString(),
    regularPrice: plan.promoPrice ? plan.regularPrice.toString() : null,
    promoMonths: plan.promoMonths,
    features: ['Internet + Cable', `${plan.name.match(/\d+/)[0]}MB de velocidad`, '82 canales analógicos', '47 canales HD'],
    isPopular: plan.name.includes('300')
  }));

  const internetPlans = prices.soloInternet.map(plan => ({
    name: plan.name,
    speed: plan.name.match(/\d+/)[0] + 'MB',
    price: plan.regularPrice.toString(),
    regularPrice: null,
    promoMonths: null,
    features: ['100% Fibra Óptica', 'Velocidad simétrica', 'Soporte 24/7', 'Sin cortes'],
    isPopular: plan.name.includes('300')
  }));

  const cablePlans = prices.catv.map(plan => ({
    name: plan.name,
    speed: 'N/A',
    price: plan.promoPrice ? plan.promoPrice.toString() : plan.regularPrice.toString(),
    regularPrice: plan.promoPrice ? plan.regularPrice.toString() : null,
    promoMonths: plan.promoMonths,
    features: ['82 canales analógicos', '47 canales HD', 'Canales nacionales e internacionales', 'Instalación gratuita'],
    isPopular: false
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-chiclin-blue-navy text-center mb-8">
          Nuestros Planes
        </h1>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('duo')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'duo'
                  ? 'bg-chiclin-blue-base text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              DÚO (Internet + Cable)
            </button>
            <button
              onClick={() => setActiveTab('internet')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'internet'
                  ? 'bg-chiclin-blue-base text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Solo Internet
            </button>
            <button
              onClick={() => setActiveTab('cable')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'cable'
                  ? 'bg-chiclin-blue-base text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Solo Cable
            </button>
          </div>
        </div>

        {activeTab === 'duo' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {duoPlans.map((plan, index) => (
              <PlanCard
                key={index}
                {...plan}
                onContract={() => handleContract(plan.name)}
              />
            ))}
          </div>
        )}

        {activeTab === 'internet' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internetPlans.map((plan, index) => (
              <PlanCard
                key={index}
                {...plan}
                onContract={() => handleContract(plan.name)}
              />
            ))}
          </div>
        )}

        {activeTab === 'cable' && (
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <PlanCard
                {...cablePlans[0]}
                onContract={() => handleContract(cablePlans[0].name)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plans;
