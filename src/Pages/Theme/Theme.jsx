import React from 'react'
import './Theme.css'
function Theme() {
    return (
        <div id='theme' className='theme-back'>
            <div className='theme-text'>
                <h3 className='theme-head-top'>ये है, हमारी थीम</h3>
                <h1 className='theme-head'>indias <span className='theme-head-span'>hidden</span> hues</h1>
                <div className='theme-hr'></div>
                <h4 className='fest-date'>12-13 May, 2023 | ABESEC Campus</h4>
                <div className="d-flex align-items-center flex-wrap justify-content-center">
                <a href='https://drive.google.com/file/d/1kx7sKbX8WTmZ_m4x9WlsmI-ERI1V-bM8/view' className='m-1 ' target='_blank' rel='noreferrer'>
                <button className=''>Want to Sponsor us? Click Here</button>
                </a>
                <a href='https://instagram.com/genero.abesec' className='m-1 ' target='_blank' rel='noreferrer'>
                <button className=''>Follow on instagram for updates</button>
                </a>

                </div>
            </div>
        </div>
    )
}

export default Theme