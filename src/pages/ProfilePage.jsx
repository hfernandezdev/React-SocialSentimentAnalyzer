import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from '../components/Logout';
import Profile from '../components/Profile';

const ProfilePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Mi Perfil</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Aquí puedes ver y actualizar tu información personal.</p>
        <Profile />
        <div className="flex justify-center">
          <Link to="/inicio" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out mr-2">
            Volver
          </Link >
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
