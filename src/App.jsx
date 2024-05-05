import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from './components/Login'
import Profile from './components/Profile'
import LogoutButton from './components/Logout'
import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <h1>React-SocialSentimentAnalyzer</h1>
      {isAuthenticated ? <>
        <Profile />
        <LogoutButton />
      </> : <>
        <LoginButton />
      </>}
    </>
  )
}

export default App
