import { useAuth0 } from "@auth0/auth0-react"
import { Routes, Route } from "react-router-dom"

import LoginButton from './components/Login'
import Profile from './components/Profile'
import LogoutButton from './components/Logout'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <HomePage /> : <LandingPage /> } />
        <Route path="inicio" element={ <HomePage /> } />
        <Route path="perfil" element={ <ProfilePage /> } />
      </Routes>
    </>
  )
}

export default App
