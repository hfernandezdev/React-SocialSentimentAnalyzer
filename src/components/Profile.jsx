import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mb-8">
        <p className="text-gray-600">Cargando ...</p>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <>
        <div className="border border-gray-300 rounded-lg p-6 mb-4">
          <div className="flex items-center justify-center mb-2">
            <img className="w-20 h-20 rounded-full object-cover mr-4" src={user.picture} alt={user.name} />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
