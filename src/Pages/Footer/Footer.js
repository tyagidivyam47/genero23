import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
// import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-black'>

        <div className="footer col-11 mx-auto d-flex align-items-center flex-lg-row flex-column">
            
            <div className='col-lg-7 col-12 mx-auto d-flex flex-lg-row flex-column'>

                <div className='footer-about col-lg-5 col-11 mx-auto'>
                    <div className='w-100 d-flex'>
                        <img src='https://ccict.abes.ac.in/assets/img/logo1.png' alt='abes' height={90} className='mx-2'></img>
                        <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" alt='logo' height={90} className='mx-2' />
                    </div>
                    <p className='smallFont'>This is the official website of the Annual Fest of ABES Engineering College, Ghaziabad</p>

                </div>
                <div className="foot-list col-lg-3 col-11 mx-auto">
                    <h3 className='ulhead'>Links</h3>
                    <div>

                        <a href='https://drive.google.com/file/d/1kx7sKbX8WTmZ_m4x9WlsmI-ERI1V-bM8/view?usp=sharing'>Sponsorship Brochure</a>
                        <a href="https://drive.google.com/file/d/1O05zyCmPEg-muoht9DzlBuTJDyAP7lB3/view?usp=share_link">Cultural Rules</a>
                        <a href="https://drive.google.com/file/d/1K1qs5Er882QJR5Rq48n1UuUscbelfz96/view?usp=share_link">Event Details</a>
                        {/* <Link to="/cultural">Events</Link> */}
                    </div>
                </div>

                <div className="foot-cta col-lg-4 col-11 text-left mx-auto">
                    <h3 className='ulhead'>Reach us on</h3>

                    <div className='d-flex align-items-center justify-content-start'>
                        <a href='https://instagram.com/genero.abesec'><FontAwesomeIcon className='socialIcon' icon={faInstagram} /></a>
                        <a href='https://instagram.com/genero.abesec'><FontAwesomeIcon className='socialIcon' icon={faYoutube} /></a>
                        <a href='https://www.facebook.com/genero.abesec/'><FontAwesomeIcon className='socialIcon' icon={faFacebook} /></a>
                    </div>
                    <div className='my-2'>
                        <p className='my-0 d-block w-100 opacity-50' style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '12px', fontWeight: 'bold' }}>Mail us at</p>
                        <a className='my-0 d-block w-100' style={{ fontSize: '13px' }} href='mailto:genero_s2023@abes.ac.in'>genero_s2023@abes.ac.in</a>
                        <p className='my-0 d-block w-100 opacity-50 mt-2' style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '12px', fontWeight: 'bold' }}>Aditya Harsh</p>
                        <a className='my-0 d-block w-100' style={{ fontSize: '13px' }} href='tel:+91 91693 18989'>+91 91693 18989</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-11">
                <iframe title='abes' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8889002703554!2d77.4437602149526!3d28.633091682417557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d2df45167%3A0xe0ac343085e12a8f!2sABES%20ENGINEERING%20COLLEGE%2C%20NH%2024%2C%20Chipiyana%20Buzurg%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1666931394472!5m2!1sen!2sin" width="100%" height="200px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    )
}

export default Footer
