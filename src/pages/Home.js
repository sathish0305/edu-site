import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar'
import '../App.css'
import HomeImage from '../images/computer-engineer.png'

function Home() {
  return (
    <div className='home-page'>
        <NavigationBar />
        <div className="home-section">
            <div className='home-text'>
              <h3><b>Largest Software Training Institute</b></h3>
              <h4>The institute is a platform where young minds are given the opportunity to build successful careers.</h4>
              <div className='home-buttons'>
              <a class="button-87">Learn more</a>
              <a class="button-87">Contact Us</a>
            </div>
            </div>
            
            <div className='home-image'>
              <img src={HomeImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home