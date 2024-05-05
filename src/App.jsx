import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from './components/Login'
import Profile from './components/Profile'
import LogoutButton from './components/Logout'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <>
        <HomePage />
      </> : <>
        <LandingPage />
      </>}
    </>
  )
}

export default App
