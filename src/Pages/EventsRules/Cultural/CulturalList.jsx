// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import CulturalData from "../../../EventsData/CulturalData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard/EventCard";

import "./CulturalList.css"

const CulturalList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="">
            <div style={{ width: "100vw" }} >
                <h1 style={{ color: "black", textAlign: "center" }}>Cultural</h1>
            </div>
            <div className=" eventSlider d-flex justify-content-center">
                {CulturalData.map((list) => {
                    // {console.log(list.heading)}
                    return (
                        <EventCard
                            key={list.id}
                            imgSrc={list.imgSrc}
                            heading={list.heading}
                            redirectLink={list.redirectLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CulturalList;
