import React, { useEffect, useState } from 'react'
function Section({ eventObj }) {
    const [timelines, setTimelines] = useState([])
    const [selected, setSelected] = useState('')
    const [events, setEvents] = useState([])


    useEffect(e => {
        var timeData=[]
        eventObj.map(elem => {
            timeData.push(elem.time)
            return 1;
        })

        setTimelines(new Set([...timeData]))

        console.log(timelines)

        const eventsFromTime = eventObj.filter(event => event.time === timelines[0])
        setEvents(eventsFromTime)
    }, [eventObj])

    useEffect(e => {
        const eventsFromTime = eventObj.filter(event => event.time === selected)
        setEvents(eventsFromTime)
    }, [selected])
    return (
        <div className='schedule-contain'>
            <div className='schedule-times'>
                {
                    Array.from(timelines).map(elem => {
                        return <p className={`section-time ${selected===elem?'selected':''}`} onClick={() => setSelected(elem)}>{elem}</p>
                    })
                }
            </div>
            <select className='schedule-dropdown'>
                {
                    Array.from(timelines).map(elem => {
                        return <option className={`section-time ${selected===elem?'selected':''}`} onClick={() => setSelected(elem)}>{elem}</option>
                    })
                }
            </select>
            <div className='schedule-events'>
                {
                    events.map(event => {
                        return <div className='schedule-div'>
                            <p className='eventName'>{event.event}</p>
                            <p className='eventVenue'><i className='fa fa-location-arrow' />{event.venue}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Section