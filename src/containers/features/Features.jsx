import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'High-G Impact Measurement (±200 g Range)',
    text: 'The ADXL375 is designed to measure extremely high acceleration levels up to ±200 g. The ability to accurately capture such high-g events is crucial for ensuring precise data collection and analysis in high-impact environments.',
  },
  {
    title: 'Digital Output with 16-Bit Resolution:',
    text: 'The accelerometer provides a 16-bit digital output for each of the three axes (X, Y, and Z). This high resolution allows for detailed and accurate representation of acceleration data, ensuring that even minute changes in motion are captured.',
  },
  {
    title: 'Low Noise Density:',
    text: 'The ADXL375 features low noise density, which enhances the clarity and accuracy of the acceleration measurements by reducing the level of random noise in the output signal.',
  },
  {
    title: 'Built-in Features for Event Detection:',
    text: 'The ADXL375 includes several built-in features designed to facilitate event detection and monitoring. These features include free-fall detection, activity/inactivity monitoring, and a data-ready signal.',
  },
]

const Features = () => {
  return (
    <div className="sensor__features section__padding" id="features">
      <div className="sensor__features-heading">
        <h1 className="gradient__text">The Future of MEMS Accelerometer Technology.</h1>
        <p>Bringing you one step closer to the skies.</p>
      </div>
      <div className="sensor__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
      </div>
    </div>
  )
}

export default Features
