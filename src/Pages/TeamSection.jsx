import React from 'react'
import { Link } from 'react-router-dom'
import Gaurav from '../assets/team/Gaurav.jpeg'
import Chanchal from '../assets/team/Chanchal.jpg'
import Rohit from '../assets/team/Rohit.jpeg'
import Utkarsh from '../assets/team/UtkarshGS.jpeg'
import Aditya from '../assets/team/adityaJs.png'
function TeamSection() {
  return (
    <>
    <div id='team' className='team-bg fullHeight py-4 d-flex align-items-center justify-content-center '>
      <div>

        <div className='d-flex align-items-center justify-content-center homeTeamCardBox'>

          <img src={Gaurav} className='homeTeamCard c3' alt="" />
          <img src={Utkarsh} className='homeTeamCard c2' alt="" />
          <img src={Chanchal} className='homeTeamCard c1' alt="" />
          <img src={Rohit} className='homeTeamCard c4' alt="" />
          <img src={Aditya} className='homeTeamCard c5' alt="" />

        </div>

        <div className=' w-100'>

          <h1 style={{ fontSize: '50px' }}>#TheTeam</h1>
          <Link to="/teampage?loaded=true=query=team-navbar"><button>See All Members</button></Link>
        </div>
      </div>
      

    </div>
    </>
  )
}

export default TeamSection