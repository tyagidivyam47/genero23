import React from 'react'
import './Special.css'
import SpecialAttraction from '../../assets/events/SA.png'
function Special() {
  return (
    <div className='sa-container'>
        <div className=''>
        <h1 className='sa-head'>DJ, <span>Stars</span> & Theatre</h1>
        <img alt="" src={SpecialAttraction} />
        </div>
    </div>
  )
}

export default Special