import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/homepage/homepage';
import Inform from './components/info/info';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Inform/>
    <Footer/>
    </>
  );
};

export default App;