import React from 'react'
import './Theme.css'
function Theme() {
    return (
        <div id='theme' className='theme-back'>
            <div className='theme-overlay'></div>
            <div className='theme-text'>
                <h1 className='theme-head'>indias <span className='theme-head-span'>hidden</span> hues</h1>
                <a href='https://instagram.com/genero.abesec' target='_blank' rel='noreferrer'>
                <button className=''>See What's Happening on Instagram</button>
                </a>
            </div>
        </div>
    )
}

export default Theme