import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Company from './Components/Company/Company';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Company />
    </div>
  );
}

export default App;
