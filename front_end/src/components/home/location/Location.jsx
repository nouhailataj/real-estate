import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
        <h4 >SHOP-IMMO vous offre
            différentes propriétés dans
            tout le royaume</h4>

          <div className='content grid3 mtop'>
          
            {location.map((item, index) => (
              <div className={`box-${index}`} key={index}>
                <img src={item.cover} alt='' />
              </div>
            ))}
          </div>
        </div>
        <Heading title='Votre confort, notre objectif' />
      </section>
    </>
  )
}

export default Location
