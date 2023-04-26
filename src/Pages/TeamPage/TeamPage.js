import React from 'react'
import './teampage.css'
import SubTeamData from '../../components/team/SubTeamData'
import Team from '../../components/team/Team'
import Subteam from '../../components/team/Subteam'
import Navbar from '../../Atoms/NavCopy'
import Footer from '../Footer/Footer'

export default function TeamPage() {
  return (
    <div id='team'>
      <Navbar id='team-navbar'/>
      <Team/>
      <div className='subteam-unique'>
        {SubTeamData.map((p) => 
           <Subteam key={p.id} post={p}/>
        )}
      </div>
        <Footer/>
    </div>
  )
}