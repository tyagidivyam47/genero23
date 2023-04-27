// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import CulturalData from "../../../EventsData/CulturalData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard1/EventCard";

import "./CulturalList.css"
import Navbar from "../../../Atoms/NavCopy";

const CulturalList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />
            <h1 style={{textAlign:"center"}}>Cultural</h1>
            
            <div className="grid-container">
                {CulturalData.map((list) => {
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

export default CulturalList;
