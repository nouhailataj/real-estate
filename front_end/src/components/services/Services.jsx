import React from "react"
import img from "../images/service.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import"../services/services.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Nos Services' cover={img} />
        <div className='featured container'>
          <p>Découvrez nos services immobiliers sur mesure, conçus pour répondre à tous vos besoins en matière de vente, location et gestion de biens immobiliers.</p>
          <br />
          <FeaturedCard />
        </div>
        
      </section>
    </>
  )
}

export default Services
