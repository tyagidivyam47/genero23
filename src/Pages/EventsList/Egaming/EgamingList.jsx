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
            <h1 style={{textAlign:"center"}}>Egaming</h1>
            
            <div className="grid-container">
                {EgamingData.map((list) => {
                    // {console.log(list.heading)}
                    return (
                        <EventCard
                            key={list.id}
                            imgSrc={list.imgSrc}
                            name={list.heading}
                            redirectLink={list.redirectLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default EgamingList;
