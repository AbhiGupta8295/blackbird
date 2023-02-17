import Vector from './Vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Vector} className="App-logo" alt="logo" />
        <p>
          <code>blackbird</code>
        </p>
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          propeller
        </a>
      </header>
    </div>
  );
}

export default App;
