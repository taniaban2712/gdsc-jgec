import React from 'react'
import './history.css';

const History=()=>{
    return(
        <>
          <section id="history">
             <h1 className='head-hist'>HISTORY</h1>
             <div className="inform-hist">
                <p>The Club was found by Niloy Sikdar in 2020 and ever since the club has been prospering and reaching new heights.
                The Annual Open Source Event, JWOC, which is one of the biggest Open Source Events in India, is organized by GDSC-JGEC.</p>
                <p>Under the Guidance of one of the best coders in India, development as well as  competitive programming has become the Coding Culture of the Community</p>
                <p>This club aims at spreading the knowledge of coding and programming and how we can implement them to solve real world problems.</p>
             </div>
             <div className="scroll-down">
              <a href="#pastleads" id='btn-hist'> About the Past Leaders of the Club</a>
            </div>
          </section>
        </>
    )
};
export default History;
