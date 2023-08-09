import React from 'react'
import './homepage.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Home=()=>{
    return(
        <>
        <div className="temp">
        <div className="container">
            <div className="heading">
                <div className="sp"></div>
                <h1>Google Developer Student Clubs</h1>
                <h3>Jalpaiguri Government Engineering College</h3>
            </div>
                <div className="links">
                    <LinkedInIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.linkedin.com/company/gdscjgec/")}/>
                    <GitHubIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://github.com/gdscjgec")}/>
                    <TwitterIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://twitter.com/TeamJWOC")}/>
                    <YouTubeIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.youtube.com/channel/UCcY06CBxUxl06w9YxwLkXYw")}/>
                </div>
                <a href="#about" className='btn' id="btn-home"> Click to Know About the Club </a>
               
            </div>
            
        </div>
    
        </>
    )
};
export default Home;
