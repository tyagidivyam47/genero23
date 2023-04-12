import React from 'react'
import sideImage from '../assets/generoImg.png'
function About() {
  return (
    <div id="about" className='col-11 pt-4 mx-auto text-dark d-lg-flex align-items-center justify-content-center'  style={{ height: '110vh' }}>
      

      <div className='col-lg-6 col-11 mx-lg-0 mx-auto'>
        <div className='w-75 mx-auto'>

        <h1 className='text-light animate__animated animate__fadeInUp'>About Genero</h1>
        <p className='generoAbout animate__animated animate__fadeInUp'>Genero is a two-day fiesta
          that calls in for various
          cultural, informal, literary, egaming, and photography
          events, wrapped up with an
          exclusive event for each day.
          ABES has been organizing
          Genero for over a decade
          now, and with a foot fall of
          6000+ students from different
          colleges in Delhi NCR, Genero
          has been a success story</p>
        <button className="button-82-pushable py-2 animate__animated animate__fadeInUp">
          <a href="https://youtu.be/3Er4V2mwHPw">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text-dark">
              WATCH AFTERMOVIE
            </span>
          </a>

        </button>
        </div>
      </div>
      <div className='col-lg-6 col-11 mx-lg-0 mx-auto'>

        {/* <img className="rounded w-100" src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" alt="" /> */}
        <img className="rounded w-100" src={sideImage} alt="" />
      </div>

    </div>
  )
}

export default About