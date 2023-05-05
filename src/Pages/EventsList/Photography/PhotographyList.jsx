// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import PhotographyData from "../../../EventsData/PhotographyData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/cards/EventCard1/EventCard";

import "./PhotographyList.css"
import Navbar from "../../../Atoms/navbar/NavCopy";

const PhotographyList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />
            <div className="event-padded">

            <h1 style={{ textAlign: "center" }}>Photography</h1>
            <div className="grid-container">
                {PhotographyData.map((list,index) => {
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

export default PhotographyList;
