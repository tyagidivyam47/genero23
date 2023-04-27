import React, { useEffect } from 'react'
import './teampage.css'
import SubTeamData from '../team/SubTeamData'
import Team from '../team/Team'
import Subteam from '../team/Subteam'
import Navbar from '../../../Atoms/navbar/NavCopy'


export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div id='team'>
      <Navbar id='team-navbar' />
      <Team />
      <div className='subteam-unique'>
        {SubTeamData.map((p) =>
          <Subteam key={p.id} post={p} />
        )}
      </div>
    </div>
  )
}