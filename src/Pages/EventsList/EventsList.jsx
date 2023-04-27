import React, { useEffect } from 'react'
import Navbar from '../../Atoms/NavCopy'

import './EventsList.css';
import EventCard from '../../Atoms/EventCard/EventCard';

const EventsList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <div className='bd'>
            <Navbar />
            <h1 style={{textAlign:"center"}}>Events</h1>
            <div className='grid-container'>
                <EventCard
                    key={"list.id"}
                    imgSrc="https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    name="E-Gaming"
                    redirectLink="/events/egaming"
                />

                <EventCard
                    key={"list.id"}
                    imgSrc="https://images.unsplash.com/photo-1603587979462-2591fd6f5144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    name="Informal"
                    redirectLink="/events/informal"
                />

                <EventCard
                    key={"list.id"}
                    imgSrc="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    name="Photography"
                    redirectLink="/events/photography"
                />  

                <EventCard
                    key={"list.id"}
                    imgSrc="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    name="Literary"
                    redirectLink="/events/literary"
                />

                <EventCard
                    key={"list.id"}
                    imgSrc="https://images.unsplash.com/photo-1546778316-dfda79f1c84e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    name="Cultural"
                    redirectLink="/events/cultural"
                />
            </div>

        </div>
    )
}

export default EventsList
