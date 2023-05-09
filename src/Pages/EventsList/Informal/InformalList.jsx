// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import InformalData from "../../../EventsData/InformalData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/cards/EventCard1/EventCard";

import "./InformalList.css"
import Navbar from "../../../Atoms/navbar/NavCopy";

const InformalList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />

            <div className="event-padded">

            <h1 style={{textAlign:"center"}}>Informal</h1>
            <div className="grid-container">
                {InformalData.map((list,index) => {
                    // {console.log(list.heading)}
                    return (
                        <EventCard
                            key={list.id}
                            imgSrc={list.imgSrc}
                            serial={index+1}
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

export default InformalList;
