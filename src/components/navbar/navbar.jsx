import React from 'react';
import './navbar.css';
import About from '../about/about';

const Navbar = () => {
  return (
    <>
    <section className="h-wrapper">
        <div className="flexCenter padding innerWidth h-container">
            <a href="" className='iconlink'><img src=".\assets\logo.png" alt="logo" className='gdsc-icon'/></a>
            <div className="flexCenter h-menu">
                <a href="#" className='link'>About</a>
                <a href="#" className='link'>History</a>
                <a href="#" className='link'>Events</a>
                <a href="#" className='link'>Past GDSC Leads</a>
                <a href="#" className='link'>Achievements</a>
            </div>
        </div>
    </section>
    </>
  )
};
export default Navbar;