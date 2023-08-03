import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import About from './components/pages/about/about';
import Home from './components/pages/homepage/homepage';
import Achieve from './components/pages/achievements/achieve';
import History from './components/pages/history/history';
import Event from './components/pages/events/events';
import Past from './components/pages/pastleads/past';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>       
        <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>} />
        <Route path="/achievements" element={<Achieve />} />
        <Route path="/events" element={<Event />} />
        <Route path="/history" element={<History />} />
        <Route path="/pastleads" element={<Past />} />
        </Route>
      </Routes>
    
    <Footer/>
    </>
  );
};

export default App;