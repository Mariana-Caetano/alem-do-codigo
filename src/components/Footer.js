import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon /> <LinkedInIcon /> <InstagramIcon /> 
      </div>
      <p> Feito com amor por Mariana Caetano</p>
    </div>
  )
}

export default Footer