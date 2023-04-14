import React from 'react'

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';

import Bg from '../../assets/generoImg1.png'

import './team.css'

export default function Subteam( {post} ) {
  return (
    <div>
       <div className="team-card" id='subteam'>
                    <div className="bg-img">
                        <img src={Bg} alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" alt="" />
                    </div>
                    <div className="info">
                        <h3>{post.name}</h3>
                        <span>{post.position}</span>
                        {/* <div className="icons">
                            <a href="s"><LinkedInIcon/></a>
                            <a href="	utkarsh.19b211031@abes.com"><EmailIcon/></a>
                            <a href="utkarshsinghh__"><InstagramIcon/></a>
                        </div> */}
                    </div>
                </div>
    </div>
  )
}
