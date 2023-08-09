import React from 'react'
import './about.css';

const About=()=>{
    return(
        <>
        <section id="about">
         <div className="about-gdsc">
         <div className="styling-abt">
              </div>
            <h3 className='head'>About GDSC JGEC</h3>
            <div className="inform-head">
            <p>
            Google Developer Student Clubs (GDSC) are university-based community groups for students interested in Google technologies and programming. GDSCs are led by students and provide a space for students to learn, network, and build projects with Google technologies.
            </p>
            <p>
            GDSC Jalpaiguri Government Engineering College is a great resource for students who are interested in learning about Google technologies, networking with other developers, and building projects with Google technologies. The club is open to all students, regardless of their major or experience level.
            </p>
            </div>
            <div className="yt-jgec">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9mTnqgmkp6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="scroll-down">
              <a href="#events" id='btn-achieve'> Know about the Various Events organized</a>
              
            </div>
            
         </div>
         
         </section>
        </>
    )
};
export default About;
