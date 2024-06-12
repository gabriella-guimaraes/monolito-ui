import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
    </div>
  );
}

export default App;
