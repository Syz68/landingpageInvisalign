import React from 'react'
import './PerfectSmile.css'

const PerfectSmile = () => {
    return (
        <div className='maincontainers'>
            <div className='firstPart'>
                <h3>Your Path to a Perfect Smile Starts with Aster</h3>
                <div>
                    <div className="feature-container">

                        <div className="feature-grid">
                            <span>Free Consultation</span>
                            <div className="divider"></div>
                            <span>3D Scan & Treatment Plan</span>
                            <div className="divider"></div>
                            <span>Customer Aligner Fabrication</span>
                        </div>

                        <div className="feature-grid">
                            <span>Ongoing Support</span>
                            <div className="divider"></div>
                            <span>Achieve Your Smile Goals</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='secondPart'>
                <h3>Aligner Solutions for Every Smile</h3>

                <div className='anothercontainer'>
                    <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" alt="" />

                    <div className='textpart'>

                        <h2>We offer treatment for a variety of alignment needs, including</h2>
                    
                        <p><span class="icon">✔</span>Overbite</p>
                        <p><span class="icon">✔</span>Underbite</p>
                        <p><span class="icon">✔</span>Crossbite</p>
                        <p><span class="icon">✔</span>Gap Teeth</p>
                        <p><span class="icon">✔</span>Open Bite</p>
                        <p><span class="icon">✔</span>Open Bite</p>
                        <p><span class="icon">✔</span>Crowded Teeth</p>
                        

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PerfectSmile