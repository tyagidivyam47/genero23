import React from 'react'
import Bg from '../../assets/generoImg1.png'
import './team.css'

export default function Subteam({post}) {
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
                    </div>
                </div>
    </div>
  )
}
