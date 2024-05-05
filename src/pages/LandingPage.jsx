import React from 'react';
import LoginButton from '../components/Login';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">¡Bienvenido al Analizador de Sentimientos!</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Analiza emociones y sentimientos en tiempo real en las redes sociales con nuestra poderosa herramienta de inteligencia artificial.</p>
        <div className="flex justify-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
