import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" alt="Heroimage" 
            className="hero-image" />

            <div className="inner-hero-div">

                <img src="https://admin.asterclinic.ae:3000/uploads/1737699228285-1736310961551-h2.png" 
                alt="innerheroimage"
                className='inner-image'
                />

                <h1 className=''>Just Smile!</h1>
                <p>Change Your Smile and Your Life with Invisalign Invisible Aligners! At any age.
                </p>
                <button>BOOK AN APPOINTMENT</button>

            </div>

            <button className="fixed-appointment-btn">
                Book an Appointment
              </button>
        </div>
    );
}

export default HeroSection;