import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/pexels-sevenstorm-juhaszimrus-439416.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='' title='Qui sommes-nous ?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Histoire De Notre Agence' />


            <p>Depuis sa création en 2010, Shop-Immo s'est engagé à faciliter la vente et la location de biens immobiliers, offrant ainsi à ses clients une expérience exceptionnelle. Notre entreprise est profondément enracinée dans l'industrie immobilière, mettant à profit une expertise de plusieurs décennies pour répondre aux besoins changeants du marché.
<br />
Chez Shop-Immo, nous comprenons que chaque maison, appartement ou terrain représente bien plus qu'une simple propriété. C'est pourquoi nous nous engageons à créer des lieux de vie qui allient confort, modernité et qualité, pour répondre aux attentes les plus élevées de nos clients. Notre approche se distingue par notre engagement envers la transparence, la rigueur et la satisfaction client.
<br />
En tant qu'acteur de confiance dans le secteur immobilier, nous avons suivi de près l'évolution du marché et nous sommes fiers d'adopter une vision novatrice et tournée vers l'avenir. Notre objectif est de continuer à innover et à repousser les limites de l'immobilier, en offrant des solutions adaptées aux besoins de chaque client.
<br />
Nous sommes impatients de vous accompagner dans toutes vos démarches immobilières, que ce soit pour l'achat, la vente ou la location de biens. Chez Shop-Immo, notre équipe dévouée et compétente est prête à mettre son expertise à votre service et à vous offrir un service personnalisé, professionnel et fiable. Faites-nous confiance pour concrétiser vos projets immobiliers et réaliser vos rêves.</p>
          
           
          </div>
          <div className='right row1'> 
             <img src='./pexels-photomix-company-101808.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
