/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
/* eslint-disable-next-line */

function Navbar() {
    return (
        <nav className="px-3 navbar navbar-expand-lg navbar-light ">
            <Link to="/home?loaded=true=query=home-carousel">
                <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" width="50px" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltarkup">
                <div className="navbar-nav align-items-center" >
                    <Link className="nav-item nav-link active text-light" to="/home?loaded=true=query=home-carousel">HOME</Link>
                    <Link className="nav-item nav-link text-light" to="/home?loaded=true=query=about">ABOUT</Link>
                    <Link className="nav-item nav-link text-light" to="/home?loaded=true=query=eventPage">PAST</Link>
                    <Link className="nav-item nav-link text-light" to="/home?loaded=true=query=queries">FAQ</Link>
                    <Link className="nav-item nav-link text-light" to="#">TEAM</Link>
                    <Link className="nav-item nav-link text-light" to="/home?loaded=true=query=register"><button className=''>GET TICKET</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar