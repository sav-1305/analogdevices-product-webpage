import React from 'react'
import './blog.css';
import CompanyImg from '../../assets/possibility.svg'

const blog = () => {
  return (
    <div className="sensor__company section__padding" id="company">
      <div className="sensor__company-image">
        <img src={CompanyImg} alt="Company"/>
      </div>
      <div className="sensor__company-content">
        <h4>Request for Career Opportunities and More</h4>
        <h1 className="gradient__text">Analog Devices: Next-Gen Power for Next-Gen Innovations</h1>
        <p>Analog Devices, Inc. (ADI) empowers the Intelligent Edge with the most innovative analog, digital, and software solutions, accelerating breakthroughs that benefit society and the planet.</p>
        <h4>Empowering the Intelligent Edge</h4>
      </div>
    </div>
  )
}

export default blog
