// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import PhotographyData from "../../../EventsData/PhotographyData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard1/EventCard";

import "./PhotographyList.css"
import Navbar from "../../../Atoms/NavCopy";

const PhotographyList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Photography</h1>

            <div className="grid-container">
                {PhotographyData.map((list) => {
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

export default PhotographyList;
