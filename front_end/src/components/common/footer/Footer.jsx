import React from "react"
import { footer , img } from "../../data/Data"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>

          
              <p> Nous collecterons et utiliserons vos informations personnelles
                (qui peuvent inclure des cookies que nous collectons via votre
                utilisation de realestate.com.au et de nos autres sites Web)
                pour vous offrir une expérience utilisateur personnalisée (par exemple,
                recommander des propriétés qui pourraient vous intéresser ou recevoir
                des recherches enregistrées par e-mail) et pour promouvoir
                les services de realestate.com.au et de tiers. 
                Notre politique de
                confidentialité explique en outre comment nous collectons,
                utilisons et divulguons les informations personnelles et comment
                accéder, corriger ou se plaindre du traitement des informations
                personnelles</p>

            </div>
          </div>

          {footer.map((val) => (
            <div className='box2'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li><Link to={items.path}>{items.list}</Link>  </li>
                ))}
              </ul>
              
            </div>
          ))}
          <div className="box2" >
                <h3>Contactez-Nous</h3>
                {img.map((val) => (
          
              <ul className="social"> 
                  <li><img src={val.cover} alt='' /></li>
              
              </ul>
              
        
          ))}

                </div>
        </div>
      </footer>
      
      <div className='legal'>
      <img className="img-footer" src='../images/SHOP-IMMO1.png' alt='SHOP-IMMO' />
    
        <span>Copyright © 2023 SHOP-IMMO -- All Rights Reserved.</span>
      </div>
    </>
  )
}

export default Footer
