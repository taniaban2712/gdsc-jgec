import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {useState, useRef} from 'react'




const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='sticky-nav'>
      <a href="#" onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <img src="./assets/logo.png" className='gdsc-icon'/>
      </a>
      <a href="#" onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
      <a href="#events" onClick={ () => setActiveNav('#events')} className={activeNav === '#events' ? 'active' : ''}>Events</a>
      <a href="#history" onClick={ () => setActiveNav('#history')} className={activeNav === '#history' ? 'active' : ''}>History</a>
      <a href="#pastleads" onClick={ () => setActiveNav('#pastleads')} className={activeNav === '#pastleads' ? 'active' : ''}>Past GDSC Leads</a>
    </nav>
  )
};
export default Navbar;