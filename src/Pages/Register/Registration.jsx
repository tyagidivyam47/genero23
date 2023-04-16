import React, { useState } from 'react'
import qr1 from '../../assets/Genero Registration (ABES Students).png'
import qr2 from '../../assets/Genero Registration (Non-ABES Students).png'

import './Register.css'
function Registration() {

    const [section, setSection] = useState(0)
    return (
        <div id='register' className='d-flex align-items-center justify-content-around fullHeight' >
            <div>
                <div className='d-flex align-items-center justify-content-around mx-auto col-lg-3 col-12'>
                    <p className={`${section === 0 ? 'bg-white text-dark' : ''} border-1 pointer rounded px-3 py-1`} onClick={() => setSection(0)}>Ticket</p>
                    <p className={`${section === 1 ? 'bg-white text-dark' : ''} border-1 pointer rounded px-3 py-1`} onClick={() => setSection(1)}>Rules</p>
                </div>
                <div className='d-flex align-items-center justify-content-center' style={{ width: '100vw' }}>
                    {(section === 0) ? <div className="ticket">
                        <div className="stub">
                            <div className="top">
                                <span className="admit">Admit</span>
                                <span className="line"></span>
                                <span className="num">
                                    Invitation
                                </span>
                            </div>
                            <div className="number">1</div>
                            <div className="invite">
                                Invite for you
                            </div>
                        </div>
                        <div className="check d-flex align-items-center justify-content-around">
                            <div>

                                <div className="big">
                                    You're <br /> Invited
                                </div>
                                <div className="info">
                                    <section>
                                        <div className="title text-dark">Date</div>
                                        <div className='text-dark'>DD/MM/YYYY</div>
                                    </section>
                                    <section>
                                        <div className="title text-dark">Issued By</div>
                                        <div className='text-dark'>GENERO'23</div>
                                    </section>
                                    <section>
                                        <div className="title text-dark">Invite Number</div>
                                        <div className='text-dark'>XYXXZERO</div>
                                    </section>
                                </div>
                            </div>
                            <div className="qr-box-contain">
                                <div className='qr-box'>
                                    <div>

                                        <img src={qr1} width={'120px'} alt="" />
                                        <a href='https://rzp.io/l/OLuKyJ3'>#ABESEC <i className='fa fa-external-link text-dark mx-2'></i></a>

                                    </div>
                                </div>

                                <div className='qr-box'>
                                    <div>

                                        <img src={qr2} width={'120px'} alt="" />
                                        <a href="https://rzp.io/l/9ELBp2Vi1">#NONABESEC <i className='fa fa-external-link text-dark mx-2'></i></a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> : <div>
                        <p>Following are the rules to be followed by all the participants :</p>
                        <ul>
                            <li> Treat the campus with respect and care, and avoid littering or damaging property.</li>
                            <li> Arrive on time for the event to avoid missing out on any activities or performances.</li>
                            <li> Follow safety instructions provided by the organizers.</li>
                            <li> Show respect and courtesy towards fellow attendees, organizers, and performers.</li>
                            <li> Avoid bringing outside food and drinks to the event as they may not be allowed inside the venue.</li>
                            <li> Alcohol and drugs are strictly prohibited at the event, and any violations will result in immediate expulsion from the event.</li>
                            <li> Dispose of waste properly and help keep the venue clean and tidy.</li>
                            <li> Have fun and enjoy the event, but be responsible and mindful of others around you.</li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Registration

