import React from 'react';
import LogoutButton from '../components/Logout';

const ProfilePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 h-screen flex items-center justify-center">
      <div className="max-w-3xl px-8 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Mi Perfil</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Aquí puedes ver y actualizar tu información personal.</p>
        <div className="flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
