import React from 'react'
import './Special.css'
import SpecialAttraction from '../../assets/events/SA.png'
function Special() {
  return (
    <div className='sa-container'>
        <div>
            <h1>SpecialAttractions</h1>
            <p style={{
                width:'70%',
                margin:'10px auto'
            }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quaerat, eveniet nostrum possimus officia soluta. Architecto minus eos culpa ab!</p>
            <button>Get SA Tickets</button>
        </div>
        <div>

        <img src={SpecialAttraction} />
        </div>
    </div>
  )
}

export default Special