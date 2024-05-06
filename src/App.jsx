import { useAuth0 } from "@auth0/auth0-react"
import { Routes, Route, Navigate } from "react-router-dom"

import LoginButton from './components/Login'
import Profile from './components/Profile'
import LogoutButton from './components/Logout'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import LoadCSVFilePage from './pages/LoadCSVFilePage'
import ProcessDataPage from './pages/ProcessDataPage'
import TextAnalysisPage from './pages/TextAnalysisPage'

import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <HomePage /> : <LandingPage /> } />
        <Route path="inicio" element={ isAuthenticated ? <HomePage /> : <Navigate to="/" /> } />
        <Route path="perfil" element={ isAuthenticated ? <ProfilePage /> : <Navigate to="/" /> } />
        <Route path="/cargar-archivo-csv" element={ isAuthenticated ? <LoadCSVFilePage /> : <Navigate to="/" />} />
        <Route path="/procesar-datos" element={ isAuthenticated ? <ProcessDataPage /> : <Navigate to="/" /> } />
        <Route path="/analisis-texto" element={ isAuthenticated ? <TextAnalysisPage /> : <Navigate to="/" /> } />
      </Routes>
    </>
  )
}

export default App
