import React from "react"
import img from "../images/architecture-g82532b8f6_1280.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contactez-nous' title='ETRE CONTACTÉ' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Veuillez remplir le formulaire pour être contacté par nos conseillers ou pour planifier une visite. Nous vous remercions de votre coopération.</h4> <br />
            <div>
              <input type='text' placeholder='Nom' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Sujet' />
            <textarea cols='30' rows='10'></textarea>
            <button>Envoyer</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
