import React from 'react'
import overlay from '../assets/generoOverlay.png'
function Home() {
  return (
    <div className='d-flex justify-content-center text-light ' id="home-carousel" style={{height:'110vh'}}>
        
        <div className=''>

        <div className='text-center' style={{marginTop:'65px'}}>
        <p className='generoTopText my-1'>10TH EDITION</p>
        <h1 className=' generoText display-1 my-1'>Genero'23</h1>
        <p className='generoBottomText'>THE annual fest of ABESEC</p>
        <button className='btn-grad'>register now</button>

        </div>
        <img src={overlay} className='generoOverlay' width={'100%'} alt="" />
        </div>
    </div>
  )
}

export default Home