import qrImage from '../assets/qr_test.png';

function Payments() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-chiclin-blue-navy text-center mb-8">
          Formas de Pago
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-chiclin-blue-base mb-4">
              Paga tu servicio de forma rápida y segura
            </h2>
            <p className="text-gray-600">
              Por el momento solo aceptamos pagos por billetera digital
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-700 text-center mb-6">
              💳 Yape
            </h3>
            
            <div className="flex flex-col items-center mb-8">
              <img
                src={qrImage}
                alt="QR Yape"
                className="w-64 h-64 object-contain mb-4 rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-center">
                Escanea el código QR con la app de Yape
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Número Yape 1:</p>
                <p className="text-xl font-bold text-chiclin-blue-navy">999-999-999</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Número Yape 2:</p>
                <p className="text-xl font-bold text-chiclin-blue-navy">888-888-888</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-chiclin-blue-base mb-3">
              📝 Instrucciones
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Escanea el código QR con tu app de Yape</li>
              <li>O transfiere al número de Yape de tu preferencia</li>
              <li>Envía el comprobante de pago al WhatsApp: +51 957 321 287</li>
              <li>Indica tu nombre y dirección en el mensaje</li>
            </ol>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/51957321287?text=Hola, ya realicé mi pago, aquí está mi comprobante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Enviar Comprobante por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Payments;
