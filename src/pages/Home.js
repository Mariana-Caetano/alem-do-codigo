import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import Image from '../assets/undraw_engineering_team_re_fvat.svg'

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1> 
              <code>Além do código</code> 
              <img src={Image} alt="três pessoas com um laptop"/>
            </h1>
            
            <h2> Porque em tecnologia tem carreira para todos </h2>
            <Link to="/carreiras">
                <button><p>CONHEÇA AS CARREIRAS</p></button>
            </Link>

            <div className='sobre'>
                <p>O <code>Além do código</code> quer mostrar as diferentes carreiras que você pode seguir
                  na tecnologia e descubra qual área faz mais sentido para você!
                </p>
            </div>
            
        </div>

    </div>
    
    
  )
}

export default Home