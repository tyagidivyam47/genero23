import React from 'react'
import './team.css'
import Chanchal from '../../assets/team/Chanchal.jpg'
import Gaurav from '../../assets/team/Gaurav.jpeg'
import Rohit from '../../assets/team/Rohit.jpeg'
import Utkarsh from '../../assets/team/UtkarshGS.jpeg'
import Aditya from '../../assets/team/adityaJs.png'
// import aditya from '../../assets/team/Chanchal.jpg'
// import aditya from '../../assets/team/Chanchal.jpg'
// import aditya from '../../assets/team/Chanchal.jpg'
// import aditya from '../../assets/team/Chanchal.jpg'
export default function Team() {
    return (
        <div className='' id='team'>
            <h1>The Team</h1>
            <div className="main-wrapper p-2">


                <section className="team-container">
                    <div className="team-card">
                        <div className="bg-img">
                            <img src={Utkarsh} alt="" />
                        </div>
                        <div className="info">
                            <h3>Utkarsh Singh</h3>
                            <span>General Secretary</span>
                        </div>
                    </div>
                    <div className="team-card">
                        <div className="bg-img">
                            <img src={Rohit} alt="" />
                        </div>
                        <div className="info">
                            <h3>Rohit Kumar Singh</h3>
                            <span>Joint Secretary</span>

                        </div>
                    </div>
                    <div className="team-card">
                        <div className="bg-img">
                            <img src={Gaurav} alt="" />
                        </div>

                        <div className="info">
                            <h3>Gaurav Malik</h3>
                            <span>Joint Secretary</span>

                        </div>
                    </div>
                    <div className="team-card">
                        <div className="bg-img">
                            <img src={Chanchal} alt="" />
                        </div>

                        <div className="info">
                            <h3>Chanchal Malik</h3>
                            <span>Joint Secretary</span>

                        </div>
                    </div>
                    <div className="team-card">
                        <div className="bg-img">
                            <img src={Aditya} alt="" />
                        </div>

                        <div className="info">
                            <h3>Aditya Gupta</h3>
                            <span>Joint Secretary</span>

                        </div>
                    </div>

                </section>

            </div >
        </div>
            )
}
