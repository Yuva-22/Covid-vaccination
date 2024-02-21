import './hero.css';
import React from 'react';
import babyimg from "../../images/babyimg1.jpg";

function hero() {
  return (
    <div className='hero'>
      <div className='lefthero'>
          <h1>YOUR TRUSTED PATH TO RECOVERY</h1>
          <p>We believe that healthcare should be more than just a service.
            It should be a compassionate and colloborative journey towards Wellness!</p>
          <div className='btnbox'>
            <a href="#" className='btn'>Get Appointment</a>
            <a href="#" className='btn'>Free Consultation</a>
          </div>
        </div>
        <div className='righthero'>
          <img className="hero-img" src={babyimg} alt="img" />
       </div>
    </div>
  )
}

export default hero