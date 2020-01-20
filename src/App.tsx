import React from 'react';
import './App.css';
import SillyComponent from "./components/SillyComponent";
import Focus from './refs/Focus';

const App: React.FC = () => {
  return (
    <div className="App">
      <Focus />
    </div>
  );
}

export default App;
