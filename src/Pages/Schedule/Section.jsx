import React, { useEffect, useState } from 'react'
function Section(props) {
    const [timelines, setTimelines] = useState([])
    const [selected, setSelected] = useState(props.default)
    const [events, setEvents] = useState([])


    useEffect(e => {
        console.log(selected, props.default)
        setSelected(props.default)
        setEvents([])
        var timeData = []
        props.eventObj.map(elem => {
            timeData.push(elem.time)
            return 1;
        })
        setTimelines(new Set([...timeData]))

        console.log(timelines)
        // eslint-disable-next-line
    }, [props.eventObj])

    useEffect(e => {
        const eventsFromTime = props.eventObj.filter(event => event.time === selected)
        setEvents(eventsFromTime)
        // eslint-disable-next-line
    }, [selected])
    return (
        <div className='schedule-contain'>
            <div className='schedule-times'>
                {
                    Array.from(timelines).map(elem => {
                        return <p className={`section-time ${selected === elem ? 'selected' : ''}`} onClick={() => setSelected(elem)}>{elem}</p>
                    })
                }
            </div>
            <select className='schedule-dropdown' onChange={(e) => setSelected(e.target.value)}>
                {
                    Array.from(timelines).map(elem => {
                        return <option value={elem} className={`section-time ${selected === elem ? 'selected' : ''}`}>{elem}</option>
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