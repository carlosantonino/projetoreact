import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const curso = "React";
    return (
      <div className="App">
        <Header />
        <h1>Olá { curso }</h1>
        <p>Menu primeiro App</p>
      </div>
    );
  
}

export default App;
