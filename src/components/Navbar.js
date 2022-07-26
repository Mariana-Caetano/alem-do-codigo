import React, { useState } from "react";
import Logo from '../assets/undraw_engineering_team_re_fvat.svg';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  return (
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="três pessoas com um laptop"/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/carreiras"> Carreiras </Link>
          <Link to="/colabore"> Colabore </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/carreiras"> Carreiras </Link>
        <Link to="/colabore"> Colabore </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar