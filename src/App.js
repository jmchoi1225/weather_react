import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import RouterApp from './RouterApp';

const App = () => {
  const cityName = "Seoul"
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
