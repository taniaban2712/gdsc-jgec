import React from 'react'
import './past.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Past=()=>{
    return(
        <>
         <section id="pastleads">
         <div className="styling-hist">
          </div>
            <div className="container-past">
                <h3 className="head-lead">Our Previous Leaders</h3>
                <div className="timeline-hist">
                    <div className="container-even-hist right-container">
                        <img src="./assets/niloysikdar.png" alt="niloy sikdar" className='lead-img'/>
                        <div className="text-box-hist">
                            <h2>NILOY SIKDAR</h2>
                            <p>2020-2021</p>
                            <LinkedInIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.linkedin.com/in/niloysikdar/")} className="linkedin-icon"/>
                            <TwitterIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://twitter.com/niloysikdar_")} className="linkedin-icon"/>
                            <GitHubIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://github.com/niloysikdar")} className="linkedin-icon"/>
                            <p>He is a Software Engineer at HyperAI and he has been a GSOC Scholar for 2022 as well as 2023 at Score Lab and SugarLabs respectively.</p>
                            <p>He has been an active open source contributor and has participated in many hackathons, as well as mentoring in some of them.</p>
                            
                        </div>
                    </div>
                    <div className="container-even-hist left-container">
                        <img src="./assets/sahilsaha.png" alt="sahilsaha" className='lead-img'/>
                        <div className="text-box-hist">
                            
                            <h2>SAHIL SAHA</h2>
                            <p>2021-2022</p>
                            <LinkedInIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.linkedin.com/in/sahil-saha-76478516b/")} className="linkedin-icon"/>
                            <GitHubIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://github.com/sahilsaha7773")} className="linkedin-icon"/>
                            <p>He is currently SDE Intern at Appwrite and has previously worked with TruckX and Urban Ladder. He was also SIH Winner at 2022 and Google Code-in Winner at Fossasia.</p>
                            <p>He specializes in MERN stack and works with Flutter as well. He is also a Specialist in Codeforces and proficient in the field of Competitive Programing.</p>
                        </div>
                            
                            
                    </div>
                    <div className="container-even-hist right-container">
                    <img src="./assets/shreyasarkar.png" alt="shreyasarkar" className='img-gdsc'/>
                        <div className="text-box-hist">
                            <h2>SHREYA SARKAR</h2>
                            <p>2022-2023</p>
                            <LinkedInIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.linkedin.com/in/shreya-sarkar-a788b4225/")} className="linkedin-icon"/>
                            <TwitterIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://twitter.com/zugzwang03")} className="linkedin-icon"/>
                            <GitHubIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://github.com/zugzwang03")} className="linkedin-icon"/>
                            <p>She is a DESIS Ascend Educare Mentee under the DeShaw Group in 2022 as well as a part of the prestigious Google WE Talentsprint. She was also chosen as a GHC Scholar and a WEAmplify Scholar in 2023.</p>
                            <p>She is also a Beta-MLSA where she has mentored and helped the peers around her to know more about technology and deep-dive into web development. Besides this, she is also the Placement Coordinator of JGEC for 2025 batch.</p>
                            
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
