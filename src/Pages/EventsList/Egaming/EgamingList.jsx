// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import EgamingData from "../../../EventsData/EgamingData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard1/EventCard";

import "./EgamingList.css"
import Navbar from "../../../Atoms/NavCopy";

const EgamingList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />

            <div className="event-padded">

            <h1 style={{textAlign:"center"}}>Egaming</h1>
            <div className="grid-container">
                {EgamingData.map((list,index) => {
                    // {console.log(list.heading)}
                    return (
                        <EventCard
                            key={list.id}
                            serial={index+1}
                            imgSrc={list.imgSrc}
                            propStyle={{height:'200px'}}
                            name={list.heading}
                            redirectLink={list.redirectLink}
                        />
                    );
                })}
            </div>
            </div>
        </div>
    );
};

export default EgamingList;
