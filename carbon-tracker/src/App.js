import React from 'react';
import ctLogo from './images/ctLogo.png';
import './App.css';
import CarbonData from './components/CarbonData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ctLogo} className="App-logo" alt="logo" />
        <h1 className='Title'>Carbon Tracking App</h1>
      </header>
      <div>
        <CarbonData />
      </div>
    </div>
  );
}

export default App;
