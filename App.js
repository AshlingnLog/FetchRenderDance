import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ashling's Fetch & Render Fun with API's Activity <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/station/playlist/37i9dQZF1DX7zd1uDsK3tZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Now Dance!
        </a>
      </header>
    </div>
  );
}

export default App;
