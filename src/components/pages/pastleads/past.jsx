import React from 'react'
import './past.css';

const Past=()=>{
    return(
        <>
         <section id="pastleads">
            <div className="container-past">
                <h3 className="head-lead">Our Past Leaders</h3>
                <div className="timeline-hist">
                    <div className="container-even-hist right-container">
                        <img src="./assets/niloysikdar.png" alt="niloy sikdar"/>
                        <div className="text-box">
                            <h2>NILOY SIKDAR</h2>
                            <p>2020-2021</p>
                            <p></p>
                            <p></p>
                            
                        </div>
                    </div>
                    <div className="container-even-hist left-container">
                        <img src="./assets/gdsc-cp.jpg" alt="gdsc-cp" className='img-gdsc'/>
                        <div className="text-box">
                            
                            <h2>SAHIL SAHA</h2>
                            <p>2021-2022</p>
                            <p></p>
                        </div>
                            
                            
                    </div>
                    <div className="container-even-hist right-container">
                    <img src="./assets/gdsc-wow.png" alt="gdsc-wow" className='img-gdsc'/>
                        <div className="text-box">
                            <h2>SHREYA SARKAR</h2>
                            <p>2022-2023</p>
                            <p></p>
                            
                        </div>
                    </div>
                    </div>
                    <div className="scroll-down">
                    <a href="#about" id='btn-past'>Know More About the Club</a>
                    </div>
            </div>
         </section>
            
            
        </>
    )
};
export default Past;
