import React from 'react'
import './HeroInfo.css'

const HeroInfo = () => {
    return (
        <div className='HeroInfo'>

            <h1>Transform Smile with Invisalign at Aster Clinics</h1>
            <div className='contentpart'>

                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" alt="contetnImage" />

                <div className='textpartsection'>
                    
                    <h2>What are Invisalign Aligners?</h2>
                    <p>Invisalign aligners are clear, custom-made dental trays designed to straighten your teeth without the need for traditional metal braces. These modern orthodontic solutions are:</p>

                    <p><span class="icon">✔</span> <strong>Discreet:</strong> Virtually invisible to the eye.</p>
                    <p><span class="icon">✔</span> <strong>Comfortable:</strong> Smooth and irritation-free.</p>
                    <p><span class="icon">✔</span> <strong>Convenient:</strong> Removable for eating and brushing.</p>

                    <p class="description">
                        Whether you're tackling an overbite, underbite, or crowded teeth, invisible aligners offer a hassle-free way to perfect your smile.
                    </p>

                </div>

            </div>


        </div>
    )
}

export default HeroInfo