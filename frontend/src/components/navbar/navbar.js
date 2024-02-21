import React from 'react';
import './navbar.css';
import heart from "../../images/cardiogram.png";

function navbar() {
  return (
    <div className='navbar'>
        <div className='headtitle'>
          <img className="logo" src={heart} alt="heart"/>Medico.</div>
        <div className='navlinks'>
            <a href="#" className='link'>Home</a>
            <a href="#" className='link'>About</a>
            <a href="#" className='link'>Contact</a>
            <a href="/login" className='link'>Login</a>
        </div>
        {/* <div className='consult'>
            <a href="#" className='classlink'>Free Consultation</a>
        </div> */}
    </div>
  )
}

export default navbar