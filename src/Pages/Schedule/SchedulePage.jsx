import React, { useEffect, useState } from 'react'
import './Schedule.css'
import Section from './Section'
import { eventsData } from './eventsData'
import Navbar from '../../Atoms/navbar/NavCopy'
import Footer from '../../Atoms/footer/Footer'
function Schedule() {

    const [selected, setSelected] = useState(0)
    return (
        <div>
            <Navbar />
            <div className='schedule-box'>
                <div>
                    <h1 className='schedule-head'>Events Schedule</h1>
                    <div className='schedule-tab-container'>
                        <div className={`schedule-tab ${(selected === 0 ? 'selected' : '')}`} onClick={() => setSelected(0)}>
                            Day 1
                        </div>
                        <div className={`schedule-tab ${(selected === 1 ? 'selected' : '')}`} onClick={() => setSelected(1)}>
                            Day 2
                        </div>
                    </div>

                    <div>
                        {
                            (selected === 0) ? <div>
                                <Section eventObj={eventsData['Day 1']} />
                            </div> : <div>
                                <Section eventObj={eventsData['Day 2']} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule