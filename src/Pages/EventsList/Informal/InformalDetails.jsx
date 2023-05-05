import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import "./CulturalDetails.css";
import InformalData from "../../../EventsData/InformalData";
import Navbar from '../../../Atoms/NavCopy';

const InformalDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const params = useParams();
    console.log(params.id);

    const cultural = InformalData.filter((event) => params.id === event.name);
    console.log(cultural);

    return (
        <div style={{ background: "#1e0e46" }}>
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
                                <a
                                    href="https://rzp.io/l/OLuKyJ3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="btn_2 btn btn-primary">Register as ABESEC Student !</button>
                                </a>
                                <a
                                    href="https://rzp.io/l/9ELBp2Vi1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ marginTop: "4px" }}
                                >
                                    <button className="btn_2 btn btn-primary">Register as NONABESEC Student !</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center" }}>scroll to view more</p>
                </div>
            </section>
        </div>
    )
}

export default InformalDetails
