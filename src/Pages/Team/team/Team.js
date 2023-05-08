import React from 'react'

import  './team.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

// Profile Images
import Chanchal from '../../../assets/team/Chanchal.jpg'
import Gaurav from '../../../assets/team/Gaurav.jpeg'
import Rohit from '../../../assets/team/Rohit.jpeg'
import Utkarsh from '../../../assets/team/UtkarshGS.jpeg'
import Aditya from '../../../assets/team/adityaJs.png'
import AdityaTers from '../../../assets/team/AdityaTres.JPG'
import Siddhant from '../../../assets/team/sid.jpeg'
import Sidesh from '../../../assets/team/Sidesh.jpg'

// Background Images
import Raja from '../../../assets/team/raja.png'
import Elep from '../../../assets/team/elephant.png'
import Palace from '../../../assets/team/palace.png'
import Queen from '../../../assets/team/queen.png'
import Fort from '../../../assets/team/fort.png'


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
                        <p className='team-desc'>I am ambitious and driven. I thrive on challenge and constantly set goals for myself.</p>
                        <span>+91 63941 61708</span>
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
                        <p className='team-desc'>I have a passion for creating unforgettable experiences.</p>
                        <span>+91 91693 18989</span>
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
                        <p className='team-desc'> I have exceptional organizational skills and a talent for communication.</p>
                        <span>+91 72920 80190</span>
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
                        <p className='team-desc'>I'm a dynamic and versatile individual with a plethora of talents and skills.</p>
                        <span>+91 89205 08347</span>
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
                        <p className='team-desc'>Bringing creativity to life with a passion for creating memorable experiences.</p>
                        <span>+91 91693 18989</span>
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
                        <p className='team-desc'>	The bigger and challenging the task, better the craze to solve it.</p>
                        <span>+91 96606 77927</span>
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
                        <p className='team-desc'>I do possess required skills as a treasurer.. I'm a dynamic individual. </p>
                        <span>+91 89571 51010</span>
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
                        <p className='team-desc'>I am a hard-working and driven individual who isn’t afraid to face a challenge. </p>
                        <span>+91 72176 75539</span>
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
