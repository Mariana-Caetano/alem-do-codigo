import React from 'react'
import { CarrersList } from '../carrers/CarrersList'
import CareerItem from '../components/CareerItem'
import '../styles/carreiras.css'


function Carreiras() {
  return (
    <div className='carrers'>
        <h1 className='carrersTitle'>Carreiras em tech</h1>
        <div className='carrersList'>{CarrersList.map((careerItem, key) => {
            return <
              CareerItem 
              key={key}
              image={careerItem.image} 
              name={careerItem.name} 
              description={careerItem.description} 
              links={careerItem.links} 
              />
        })}</div>
    </div>
  )
}

export default Carreiras