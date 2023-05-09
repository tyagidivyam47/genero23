import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import "./CulturalDetails.css";
import EgamingData from "../../../EventsData/EgamingData";
import Navbar from "../../../Atoms/navbar/NavCopy";

const EgamingDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const params = useParams();
    console.log(params.id);

    const cultural = EgamingData.filter((event) => params.id === event.name);
    console.log(cultural);

    return (
        <div style={{ background: "rgb(20, 45, 123)" }}>
            <Navbar />
            <section className="ambaSection">
                <div className="ambassadar">
                    <div className='tech'>
                        <div className="imgBox">
                            <img
                                className='img'
                                src={cultural[0].imgSrc}
                                alt="Desafio"
                            />
                        </div>
                        <div className="scrollBox">
                            <div className="headingBox">
                                <h3 className="heading">{cultural[0].heading}</h3>
                                <p style={{ color: "black" }} className="para">{cultural[0].headingPara}</p>
                                <h3 className="heading">Rules</h3>

                                {cultural[0].rules.map((map) => {
                                    return <p style={{ color: "black" }} className="para">{map}</p>;
                                })}
                                <p>For Registrations, Contact {cultural[0].spocDetails}</p>

                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>scroll to view more</p>
                </div>
            </section>
        </div>
    )
}

export default EgamingDetails;
