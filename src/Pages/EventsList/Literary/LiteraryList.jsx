// import classes from "./Technical.module.css";
// import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import LiteraryData from "../../../EventsData/LiteraryData";
import { useEffect } from "react";
import EventCard from "../../../Atoms/EventCard1/EventCard";

import "./LiteraryList.css"
import Navbar from "../../../Atoms/NavCopy";

const LiteraryList = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // console.log(CulturalData);

    return (
        <div className="bd">
            <Navbar />
            <h1 style={{textAlign:"center"}}>Literary</h1>
            
            <div className="grid-container">
                {LiteraryData.map((list) => {
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

export default LiteraryList;
