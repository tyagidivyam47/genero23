// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import CulturalData from "../../../EventsData/CulturalData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/cards/EventCard1/EventCard";

import "./CulturalList.css"
import Navbar from "../../../Atoms/navbar/NavCopy";

const CulturalList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />

            <div className="event-padded">
                <h1 style={{ textAlign: "center" }}>Cultural</h1>

                <div className="grid-container w-100">
                    {CulturalData.map((list, index) => {
                        // {console.log(list.heading)}
                        return (
                            <EventCard
                                serial={index + 1}
                                key={list.id}
                                propStyle={{height:'200px'}}
                                imgSrc={list.imgSrc}
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

export default CulturalList;
