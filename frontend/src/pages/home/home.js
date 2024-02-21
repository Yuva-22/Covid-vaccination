import React from 'react'
import './home.css';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/navbar/navbar';

function home() {
  return (
    <div className='home'>
      <div>
         <Navbar />
      </div>

      <div className='herosection'>
          <Hero />
      </div>
    </div>
  )
}

export default home