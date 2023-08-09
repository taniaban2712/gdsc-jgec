import React from 'react'
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=>{
    return(
        <>
          <div className="footer">
            <div className="copyright">
               <p className='tania'> Made  by  Tania Banerjee</p>
                <div className="icons-link">
                <GitHubIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://github.com/taniaban2712")} className="github-icon"/>
                <LinkedInIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://www.linkedin.com/in/tania-banerjee-9a1a49240/")} className="github-icon"/>
                <TwitterIcon sx={{fontSize:40}} cursor="pointer" onClick={()=>window.open("https://twitter.com/taniaban2712")} className="github-icon"/>
                </div>
            </div>
          </div>
        </>
    )
};
export default Footer;
