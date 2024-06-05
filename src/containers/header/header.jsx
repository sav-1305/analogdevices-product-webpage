import React from 'react'
import './header.css'

import ai from '../../assets/ai.png'

const header = () => {
  return (
    <div className="sensor__header section_padding" id="home">
      <div className="sensor__header-content">
        <h1 className="gradient__text">Unlock High-G Precision with the ADXL375 Accelerometer</h1>
        
        <p>The ADXL375 is a high-G MEMS accelerometer designed for impact and shock detection. With its precise measurement capabilities and robust performance, it’s ideal for applications requiring reliable high-force monitoring. Experience advanced data accuracy and durability with the ADXL375.</p>
        
        <div className="sensor__header-content__input">
          <input type="email" placeholder="Your email address"/>
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="sensor__header-image">
          <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default header
