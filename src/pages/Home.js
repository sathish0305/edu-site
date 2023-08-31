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
              <h3>Largest Software Training Institute</h3>
              <h4>The institute is a platform where young minds are given the opportunity to build successful careers.</h4>
            </div>
            <div className='home-image'>
              <img src={HomeImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home
