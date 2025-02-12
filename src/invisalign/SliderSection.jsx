import React from 'react'
import './SliderSection.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SliderSection = () => {
  return (
    <div className='slidercontainer'>

      <div className='headingpart'>
        <h2>Are You a Candidate for Invisible Aligners?</h2>
        <p>Invisible Aligners are ideal for teens and adults with mild to moderate alignment issues. Want to find out if they’re right for you? Book a consultation today and let our experts guide you.</p>
      </div>

      <div className='sliderpart'>

        <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
          
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 1" />
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 2" />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 3" />
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 4" />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 5" />
                <img src="https://www.asterclinic.ae/assets/h4-CJOtfYXY.jpg" className="img-fluid mx-2" alt="Image 6" />
              </div>
            </div>
          </div>

          {/* Previous & Next Buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

      </div>

      <div className='infopart'>
        <h2>Ready to Transform Your Smile?</h2>
        <div className='borderpart'></div>

        <p className='normalpara'>At Aster Clinic, we don’t just straighten teeth—we transform lives, one confident smile at a time. Whether it’s the cutting-edge technology of invisible aligners, the expertise of our trusted orthodontists, or the convenience of finding a dental clinic near you, we’re here to make your smile journey effortless and enjoyable. Don’t let misaligned teeth hold you back—embrace the future of orthodontics with us.</p>

        <p className='boldpara'>A brighter, more confident you is just an appointment away. Schedule your free consultation today and step into a world where your dream smile becomes a reality.</p>
      </div>
    </div>
  )
}

export default SliderSection