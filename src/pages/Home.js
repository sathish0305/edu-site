import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import HomeImage from '../images/computer-engineer.png'

function Home() {
  return (
    <>
    <div className='home-page'>
        <div className="home-section">
            <div className='home-text'>
              <h2><b>Largest Software Training Institute</b></h2>
              <h4>The institute is a platform where young minds are given the opportunity to build successful careers.</h4>
              <div className='home-buttons'>
              <a href='/' class="button-87">Learn more</a>
              <a href='/' class="button-87">Contact Us</a>
            </div>
            </div>
            
            <div className='home-image'>
              <img src={HomeImage} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home