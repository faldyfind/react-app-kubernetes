import React from 'react';
import logo from './aan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy Birthday <code>mas @aanbaihaki</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stop Narkoba !
        </a>
      </header>
    </div>
  );
}

export default App;
