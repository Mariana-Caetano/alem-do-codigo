import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Mariana-Caetano/alem-do-codigo" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a> 

        <a href="https://www.linkedin.com/in/marianacaetanop/" target="_blank" rel="noreferrer">
          <LinkedInIcon /> 
        </a>
        <a href="https://www.instagram.com/nanahcaetano/" target="_blank" rel="noreferrer">
          <InstagramIcon /> 
        </a>
      </div>
      <p> Feito com amor por <a href="https://www.linkedin.com/in/marianacaetanop/" target="_blank" rel="noreferrer" className="nameFooter">Mariana Caetano</a></p>
    </div>
  )
}

export default Footer