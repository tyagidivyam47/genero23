import React from 'react'
import Bg from '../../../assets/generoImg1.png'
import './team.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Subteam({ post }) {
  return (
    <div>
      <div className="team-card" id='subteam'>
        <div className="bg-img">
          <img src={Bg} alt="" />
        </div>
        <div className="pic">
          <img src={post.photo} alt="img" />
        </div>
        <div className="info">
          <h3>{post.name}</h3>
          <span>{post.position}</span>
          <br />
          <LocalPhoneIcon className='phone-icon'/>
          <span>+91 {post.num}</span>
        </div>
      </div>
    </div>
  )
}
