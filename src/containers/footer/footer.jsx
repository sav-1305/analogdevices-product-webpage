import React from 'react'
import './footer.css'

import logo from '../../assets/analog.png'

const footer = () => {
  return (
    <div className="sensor__footer section__padding">
      <div className="sensor__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future with us?</h1>
      </div>
      <div className="sensor__footer-btn">
        <p>Place an Order Now!</p>
      </div>

      <div className="sensor__footer-links">
        <div className="sensor__footer-links_logo">
          <img src={logo} alt="logo"/>
          <p>Manipal Institute of Technology, Manipal<br />(All Rights Reserved)</p>
      </div>
      <div className="sensor__footer-links_div">
        <h4>Links</h4>
        <p>Career</p>
        <p>Social Media</p>
        <p>Internships</p>
        <p>Contact</p>
      </div>
      <div className="sensor__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="sensor__footer-links_div">
        <h4>Get in touch</h4>
        <p>Satvik Agrawal</p>
        <p>8920-XXX-XXX</p>
        <p>satvikagrawal.86@gmail.com</p>
      </div>
    </div>

    <div className="sensor__footer-copyright">
      <p>@2021 Analog Devices. All rights reserved.</p>
    </div>
    </div>
  )
}

export default footer
