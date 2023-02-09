import React from 'react'
import ContactForm from "../contact/contact";
import './footer.css'

function Footer() {
  return (
    <div>
      <div id="Contact" className="para">
        <h1 className='heading'>Contact</h1>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Footer;
