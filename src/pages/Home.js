import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1> <code>Além do código</code>  </h1>
            <h2> Porque em tecnologia tem carreira para todos </h2>
            <p>O "Além do código" quer mostrar as diferentes carreiras que você pode seguir
                na tecnologia e descubra qual área faz mais sentido para você!
            </p>
            <Link to="/carreiras">
                <button>CONHEÇA AS CARREIRAS</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Home