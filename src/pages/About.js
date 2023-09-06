import React from 'react'
import AboutImage from '../images/computer-engineer1.png'

function About() {
  return (
    <>
    <div className='about-page-section'>
      <div className="about-page">
        <div className="about-image-section">
          <img src={AboutImage} alt="about section" />
        </div>
      <div className="about-text-section">
        <div className="about-header">
          <h1>About us</h1>
          <h3>Dedicated Team For Your Dedicated Dreams</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam labore nisi numquam nulla impedit sapiente, doloribus nostrum laboriosam in exercitationem assumenda officiis quaerat quos temporibus ex harum itaque expedita.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus optio facere sapiente nisi quas, error sequi tempore laborum ullam.</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default About
