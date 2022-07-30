import React from 'react'

function CareerItem({ image, name, description, links }) {
  return (
    <div className='careerItem'>
        <div className='careerImage' style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={links} target="_blank" rel="noreferrer">Conheça mais</a>
    </div>
  )
}

export default CareerItem