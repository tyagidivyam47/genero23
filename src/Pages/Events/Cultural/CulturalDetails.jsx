import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import "./CulturalDetails.css";
import CulturalData from "../../../EventsData/CulturalData";

const CulturalDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const params = useParams();
    console.log(params.id);

    const cultural = CulturalData.filter((event) => params.id === event.name);
    console.log(cultural);

    return (
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
                            <p className="para">{cultural[0].headingPara}</p>
                            <h3 className="heading">Rules</h3>

                            {cultural[0].rules.map((map) => {
                                return <p className="para">{map}</p>;
                            })}
                            <a
                                href={cultural[0].paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn_2 btn btn-primary">Register Now !</button>
                            </a>
                        </div>
                    </div>
                </div>
                        <p className=' p-2 text-center text-dark'>scroll to view more</p>
            </div>
        </section>
    )
}

export default CulturalDetails
