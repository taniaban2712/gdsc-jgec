import React from 'react'
import './events.css';

const Event=()=>{
    return(
        <>
        <section id="events">
            <div className="container-event">
                <h1 className='head-event'>Events</h1>
                <div className="timeline">
                    <div className="container-even right-container">
                        <img src="./assets/jwoc.png" alt="jwoc"/>
                        <div className="text-box">
                            <h2>JGEC WINTER OF CODE</h2>
                            <p>JWOC ( JGEC Winter of Code) is an open-source program organized by Developers' JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.</p>
                            <p>This year, there were 1200+ Pull Requests Merged, 950+ issues solved on Github, 1700+ mentees from more than 300 colleges across India.</p>
                            
                        </div>
                    </div>
                    <div className="container-even left-container">
                        <img src="./assets/gdsc-cp.jpg" alt="gdsc-cp" className='img-gdsc'/>
                        <div className="text-box">
                            <h2>Dive Into Google #HASHCODE</h2>
                            <p>This was an event organized by the competitive programmers of the College, guiding their fellow batchmates, as well as juniors towards their first venture into Competitive programming. Google Hashcode is one of the most prestigious competitive programming event among competitive programmers</p>
                        </div>
                            
                            
                    </div>
                    <div className="container-even right-container">
                    <img src="./assets/gdsc-wow.png" alt="gdsc-wow" className='img-gdsc'/>
                        <div className="text-box">
                            <h2>GDSC WOW</h2>
                            <p>GDSC WOW (Wonder of Wonders) is a collaborative event of Google Developer Student Clubs (GDSCs) from India. It is a three-day virtual event that provides a platform for students to learn about the latest technologies, network with other developers, and build projects with Google technologies</p>
                            
                        </div>
                    </div>
                    <div className="scroll-down">
              <a href="#history" id='btn-event'> Know about the History of the Club</a>
              
            </div>
                    <div className="styling-even">
                 </div>
                </div>
                
            </div>

        </section>
        </>
    )
};
export default Event;
