import React from 'react';
import LogoutButton from '../components/Logout';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">¡Bienvenido de vuelta!</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">¡Explora y analiza tus datos sociales con nuestra herramienta de inteligencia artificial!</p>
        <div className="flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
