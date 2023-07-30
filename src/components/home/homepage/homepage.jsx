import React from 'react'
import './homepage.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Home=()=>{
    return(
        <>
        <div className="container">
            <div className="heading">
                <h1>Google Developer Student Clubs</h1>
                <h3>Jalpaiguri Government Engineering College</h3>
            </div>
                <div className="links">
                    <LinkedInIcon sx={{fontSize:40}} onClick={()=>window.open("https://www.linkedin.com/company/gdscjgec/")}/>
                    <YouTubeIcon sx={{fontSize:40}} onClick={()=>window.open("https://www.youtube.com/channel/UCcY06CBxUxl06w9YxwLkXYw")}/>
                </div>
        </div>
        </>
    )
};
export default Home;
