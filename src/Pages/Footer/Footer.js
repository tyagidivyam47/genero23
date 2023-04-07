import React from 'react'
// import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


const Footer = () => {
    return (
        <div>
            {/* <FontAwesomeIcon className="icons" icon={faInstagram} />
            <FontAwesomeIcon className="icons" icon={faFacebook} />
            <FontAwesomeIcon className="icons" icon={faYoutube} /> */}

            <footer className="footer">
                <div className="row">
                    <div className='des' style={{ flexBasis: "25%" }}>
                        <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" width="100px" alt="generoLogo" />
                        <p style={{ textAlign: "justify" }} className="para">
                            Ullamco aliquip nostrud sint fugiat occaecat adipisicing excepteur duis qui amet ex anim
                            incididunt. Cupidatat exercitation elit irure eiusmod est sit commodo labore sint minim sunt
                            incididunt tempor.
                        </p>
                    </div>

                    <div className="col">
                        <h4>Contact us</h4>
                        <div style={{ marginTop: "1rem" }}>
                            <p>ABES Engineering College</p>
                            <p>19th KM Stone ,
                                NH-09 GHAZIABAD, 201009</p>
                            <p className="email">studentsupport@abes.ac.in</p>
                            <p className="contactNo">01207135112</p>
                        </div>
                    </div>

                    <div className="col">
                        <h4>Links</h4>
                        <ul style={{ marginTop: "1rem" }}>
                            <a
                                href="/#about"
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <li>About</li>
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1SLxIXjaH15v9YmGicoukbGvZyE_W8_Efvn4lJ0mgutc/edit?usp=sharing"
                                rel="noreferrer"
                                target="_blank"
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <li>Rules</li>
                            </a>

                            <a
                                href="https://www.google.com/maps/place/ABES+Engineering+College/@28.6337236,77.4451838,17z/data=!4m14!1m7!3m6!1s0x390cee22c60837b7:0x7c35343eceb7bde0!2sABES+Engineering+College!8m2!3d28.6337236!4d77.4473725!16s%2Fm%2F0jk_wyv!3m5!1s0x390cee22c60837b7:0x7c35343eceb7bde0!8m2!3d28.6337236!4d77.4473725!16s%2Fm%2F0jk_wyv"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <li>Location</li>
                            </a>

                            <a
                                href="https://docs.google.com/document/d/1VjecQnW9YD_Kw4jMvMiKLHyHGK151uaUhKyzN1u-rP4/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <li>Terms and condition</li>
                            </a>

                            <a
                                href="https://docs.google.com/document/d/10hMVoCzz6poGWf1g-47alPsj4dt5C1ghUN7M-xAnAT8/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <li>Refund & Cancellation Policy</li>
                            </a>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Follow us on</h4>
                        <div className="socialIcons">
                            <a
                                href="https://www.instagram.com/genero.abesec/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon className="icons" icon={faInstagram} />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC2FRToMrgAHFEKkCIgZS2Uw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon className="icons" icon={faYoutube} />
                            </a>
                            <a
                                href="https://www.facebook.com/genero.abesec/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon className="icons" icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <p className="copyright">
                    Genero'23 | Copyright &#169; All rights reserved.
                </p>
            </footer>

        </div>
    )
}

export default Footer
