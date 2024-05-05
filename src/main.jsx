import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
        domain="dev-0rlkhqm60x2f0vya.us.auth0.com"
        clientId="VYbZog6s3Ecwj8DPjQW0h11yVpB6PK20"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
    </Auth0Provider>
  </BrowserRouter>,
)
