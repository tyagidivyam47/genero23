// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import InformalData from "../../../EventsData/InformalData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard1/EventCard";

import "./InformalList.css"
import Navbar from "../../../Atoms/NavCopy";

const InformalList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />
            <h1 style={{textAlign:"center"}}>Informal</h1>
            
            <div className="grid-container">
                {InformalData.map((list) => {
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

export default InformalList;
