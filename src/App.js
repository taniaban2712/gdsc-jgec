import React from 'react';
import { Switch, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import About from './components/pages/about/about';
import Home from './components/pages/homepage/homepage';
import History from './components/pages/history/history';
import Event from './components/pages/events/events';
import Past from './components/pages/pastleads/past';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <Navbar/>

        <Home/>
        <About/>
        <Event />
        <History />
        <Past />

      
    <Footer/>
    </>
  );
};

export default App;