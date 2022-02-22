import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Pessoa from './components/Pessoa/pessoa';
import Filme from './components/Filme/filme';
import Carousel from './components/Carousel/carousel';
import Cards from './components/Cards/Cards';

function App() {
  const curso = "React";
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Cards />
        {/* <Filme /> */}

        {/* <h1>Olá { curso }</h1>
        <p>Menu primeiro App</p>
        <Pessoa 
          nome="Carlos"
          idade="49"
          foto="https://via.placeholder.com/150"
          profissao="Programador"
          /> */}


        <Footer />
      </div>
    );
  
}

export default App;
