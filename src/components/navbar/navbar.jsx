import React from 'react';
import './navbar.css';
import{Link} from "react-router-dom";




const Navbar = () => {
  return (
    <>
      <nav>
            <a to="/" className='iconlink'><img src=".\assets\logo.png" alt="logo" className='gdsc-icon'/></a>
            <ul>
              <li><Link to="/" className='link-click'>Home</Link></li> 
              <li><Link to="/about" className='link-click'>About</Link></li> 
              <li><Link to="/achievements" className='link-click'>Achievements</Link></li> 
              <li><Link to="/events" className='link-click'>Events</Link></li> 
              <li><Link to="/history" className='link-click'>History</Link></li> 
              <li><Link to="/pastleads" className='link-click'>Past GDSC Leads</Link></li> 
            </ul>
      </nav>
    </>
  )
};
export default Navbar;