import React from 'react'
import './whatis.css'
import { Feature } from '../../components'

const whatis = () => {
  return (
    <div className="sensor__whatsensor section__margin" id="wsensor">
      <div className="sensor__whatsensor-feature">
        <Feature title="What is the ADXL375?" text="The ADXL375 is a small, thin, 3-axis accelerometer that provides low power consumption and high resolution measurement up to ±200 g. The digital output data is formatted as 16-bit, twos complement data and is accessible through a SPI (3- or 4-wire) or I2C digital interface."/>
      </div>
      <div className="sensor__whatsensor-heading">
        <h1 className="gradient__text">Experience Precision and Performance.</h1>
        <p>Explore the Capabilities</p>
      </div>
      <div className="sensor__whatsensor-container">
        <Feature title="High-G Detection" text="Designed for accurate high-force impact and shock measurements."/>
        <Feature title="Industrial Applications" text="Ideal for monitoring machinery and structural health in demanding environments."/>
        <Feature title="Enhanced Accuracy" text="Provides reliable data for critical analysis and performance assessment."/>
      </div>
    </div>
  )
}

export default whatis
