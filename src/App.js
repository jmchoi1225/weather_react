import React from 'react';
import './App.css';
import Header from './components/Header.js';

function App() {
  const cityName = "Seoul"
  return (
    <div className="App">
      <Header cityName = {cityName}/>
      <p>Hello World!</p>
    </div>
  );
}

export default App;
