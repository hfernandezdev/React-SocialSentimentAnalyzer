import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/Logout';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">¡Bienvenido de vuelta!</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">¡Explora y analiza tus datos sociales con nuestra herramienta de inteligencia artificial!</p>
        <div className="flex justify-center">
          <Link to="/perfil" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
            Mi perfil
          </Link>
          <Link to="/cargar-archivo-csv" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
            Cargar archivo CSV
          </Link>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
