import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './parallax.css'
import overlay from '../../assets/generoOverlay.png'

function Home({ parallax }) {
  return (
    <div id="home-carousel" className='d-flex align-items-center justify-content-center fullHeight'>

      <div className='d-flex flex-column justify-content-start align-items-center text-light' id="innerHome">


        <div className='homeText d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column'>
            {/* <span className='generoTextNumber'>23</span> */}
            <p className='generoTopText my-0 animate__animated animate__fadeInUp'> PRESENTING YOU</p>
            <h1 className=' generoText display-1 my-0 animate__animated animate__fadeInUp'>Genero</h1>
            <p className='generoBottomText animate__animated animate__fadeInUp'>CULTURAL FEST OF ABESEC</p>
            <a href='#register' className='homeBtn1 mx-auto'><button className='mx-auto btn-grad animate__animated animate__fadeInUp'>register now</button></a>
          </div>

        </div>
        
        {(parallax !== 'true') ? <div className='parallax-wrapper'>

          <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>
            <ParallaxLayer offset={0} speed={0.6}>
              <div className='animation-layer parallax' id='one'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.25}>
              <div className='animation-layer parallax' id='two'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
              <div className='animation-layer parallax' id='three'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45}>
              <div className='animation-layer parallax' id='four'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.6}>
              <div className='animation-layer parallax' id='five'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
              <div className='animation-layer parallax' id='six'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div className='animation-layer parallax' id='seven'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.32}>
              <div className='animation-layer parallax' id='eight'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.23}>
              <div className='animation-layer parallax' id='nine'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
              <div className='animation-layer parallax' id='ten'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.20}>
              <div className='animation-layer parallax' id='eleven'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.18}>
              <div className='animation-layer parallax' id='twelve'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.25}>
              <div className='animation-layer parallax' id='thirteen'></div>
            </ParallaxLayer></Parallax>

        </div> : ''}

        <div>
          <span className=' faded faded-bottom'>
            <img src={overlay} className='generoOverlay' width={'100%'} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home