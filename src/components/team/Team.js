import React from 'react'

import  './team.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

// Profile Images
import Chanchal from '../../assets/team/Chanchal.jpg'
import Gaurav from '../../assets/team/Gaurav.jpeg'
import Rohit from '../../assets/team/Rohit.jpeg'
import Utkarsh from '../../assets/team/UtkarshGS.jpeg'
import Aditya from '../../assets/team/adityaJs.png'
import AdityaTers from '../../assets/team/AdityaTres.JPG'
import Siddhant from '../../assets/team/Siddhant.jpg'
import Sidesh from '../../assets/team/Sidesh.jpg'

// Background Images
import Raja from '../../assets/team/raja.png'
import Elep from '../../assets/team/elephant.png'
import Palace from '../../assets/team/palace.png'
import Queen from '../../assets/team/queen.png'
import Fort from '../../assets/team/fort.png'


export default function Team() {
    return (
        <>
        <div id='team'>

        <h1 className='core-team-heading'>The Core Team</h1>
            <div className="main-wrapper">
            
            <div className="team-card">
                    <div className="bg-img">
                        <img src={Raja} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Utkarsh} alt="" />
                    </div>
                    <div className="info">
                        <h3>Utkarsh Singh</h3>
                        <span>General Secretary</span>
                        <p>I am ambitious and driven. I thrive on challenge and constantly set goals for myself.</p>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/utkarsh-singh-506b2a199"><LinkedInIcon/></a>
                            <a href="utkarshsinghh__"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
              
            </div>
            
            <section className="team-container">
    
                <div className="team-card">
                    <div className="bg-img">
                        <img src={Elep} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Rohit} alt="" className='img-rohit' />
                    </div>
                    <div className="info">
                        <h3>Rohit Kumar Singh</h3>
                        <span>Joint Secretary</span>
                        <p>I have a passion for creating unforgettable experiences.</p>
                        <div className="icons">
                            <a href="s"><LinkedInIcon/></a>
                            <a href="https://instagram.com/rohitsinghwall"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="bg-img">
                        <img src={Palace} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Gaurav} alt="" />
                    </div>
                    <div className="info">
                        <h3>Gaurav Malik</h3>
                        <span>Joint Secretary</span>
                        <p> I have exceptional organizational skills and a talent for communication.</p>
                        <div className="icons">
                            <a href="s"><LinkedInIcon/></a>
                            <a href="s"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="bg-img">
                        <img src={Queen} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Chanchal} alt="" />
                    </div>
                    <div className="info">
                        <h3>Chanchal Malik</h3>
                        <span>Joint Secretary</span>
                        <p>I'm a dynamic and versatile individual with a plethora of talents and skills.</p>
                        <div className="icons">
                            <a href="	https://www.linkedin.com/in/chanchal-malik-9a271a204"><LinkedInIcon/></a>
                            <a href="	https://instagram.com/_titan.nick_?igshid=ZDdkNTZiNTM="><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="bg-img">
                        <img src={Fort} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Aditya} alt="" />
                    </div>
                    <div className="info">
                        <h3>Aditya Gupta</h3>
                        <span>Joint Secretary</span>
                        <p className='adityaGupta-para'>Bringing creativity to life as Joint Secretary of Genero 2023. Art, dance and literature enthusiast with a passion for creating memorable experiences.</p>
                        <div className="icons">
                            <a href="	https://www.linkedin.com/in/i-am-aditya-gupta/"><LinkedInIcon/></a>
                            <a href="https://www.instagram.com/aditya_harsh_official/"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
    
            </section>

            <div className="treasurer-wrapper">
            
            <div className="team-card">
                    <div className="bg-img">
                        <img src={Raja} alt="" />
                    </div>
                    <div className="pic">
                        <img src={AdityaTers} alt="" />
                    </div>
                    <div className="info">
                        <h3>Aditya Kumar Singh</h3>
                        <span>Treasurer</span>
                        <p>	The bigger and challenging the task, better the craze to solve it.</p>
                        <div className="icons">
                            <a href="	https://www.linkedin.com/in/aditya-singh-968a231a9"><LinkedInIcon/></a>
                            <a href="https://instagram.com/alone13241423?igshid=ZDdkNTZiNTM="><InstagramIcon/></a>
                        </div>
                    </div>
                </div>

            <div className="team-card">
                    <div className="bg-img">
                        <img src={Raja} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Sidesh} alt="" />
                    </div>
                    <div className="info">
                        <h3>Sidesh Bhatia</h3>
                        <span>Treasurer</span>
                        <p>I do possess required skills as a treasurer.. I'm a dynamic individual. </p>
                        <div className="icons">
                            <a href="s"><LinkedInIcon/></a>
                            <a href="something"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>

            <div className="team-card">
                    <div className="bg-img">
                        <img src={Raja} alt="" />
                    </div>
                    <div className="pic">
                        <img src={Siddhant} alt="" />
                    </div>
                    <div className="info">
                        <h3>Siddhant Chaudhary</h3>
                        <span>Treasurer</span>
                        <p>I am a hard-working and driven individual who isn’t afraid to face a challenge. </p>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/siddhant-singh-3a56081b3"><LinkedInIcon/></a>
                            <a href="something"><InstagramIcon/></a>
                        </div>
                    </div>
                </div>
              
            </div>
            
        </div>
       
        </>
            )
}
