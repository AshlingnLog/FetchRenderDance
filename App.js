import { useEffect, useState } from 'react';
import './App.css';

function App(){
  const CLIENT_IS = "1f6119fd87a74a4081fa2e49213984c4"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect (() => {
    const hash = window.location.hash
    let token = window. local.Storage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)

    }

      setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className='App'>
      <header className='App-header'>
      <h1>
        Fetch, Render, Dance!
      </h1>
      
      <h2>
        Ashling's Spotify API project for MIT xPro Women's Cohort
      </h2>
      
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      : <button onClick={logout}> Stop Dancing and Logout </button>
      </header>
    </div>
  );
}

export default App;
