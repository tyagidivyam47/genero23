/* eslint-disable */
import React from 'react'
/* eslint-disable-next-line */

function Navbar() {
    return (
        <nav className="px-3 navbar navbar-expand-lg navbar-light">
            <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" width="50px" alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-none" id="navbarNavAltMarkup">
                <div className="navbar-nav align-items-center">
                    <a className="nav-item nav-link active text-light" href="#home-carousel">HOME <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link text-light" href="#about">ABOUT</a>
                    <a className="nav-item nav-link text-light" href="#eventPage">PAST</a>
                    <a className="nav-item nav-link text-light" href="#queries">FAQ</a>
                    {/* <a className="nav-item nav-link text-light" href="#team">TEAM</a> */}
                    <a className="nav-item nav-link text-light" href="#register"><button className='btn btn-dark'>Register Now</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar