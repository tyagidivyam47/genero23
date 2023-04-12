import React from 'react'
import overlay from '../assets/generoOverlay.png'
function Home() {
  return (
    <div className='d-flex flex-column justify-content-start align-items-center text-light ' id="home-carousel" style={{ height: '110vh' }}>


      <div className='homeText d-flex align-items-center justify-content-center'>
        <div>

        <p className='generoTopText my-0 animate__animated animate__fadeInUp'>10TH EDITION</p>
        <h1 className=' generoText display-1 my-0 animate__animated animate__fadeInUp'>Genero'23</h1>
        <p className='generoBottomText animate__animated animate__fadeInUp'>THE annual fest of ABESEC</p>
        <button className='btn-grad animate__animated animate__fadeInUp'>register now</button>
        </div>

      </div>
      <div>

      <img src={overlay} className='generoOverlay' width={'100%'} alt="" />
      </div>
    </div>
  )
}

export default Home