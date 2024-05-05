import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 ease-in-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
