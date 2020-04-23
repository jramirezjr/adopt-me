import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js'; 
import HeroImage from './Components/HeroImage/HeroImage';
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroImage />
     <Body />
     <Footer />
     </div>
  );
}

export default App;
