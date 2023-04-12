import React, { useEffect } from 'react'
import './Events.css'

import im1 from './events/img (1).jpeg'
import im2 from './events/img (2).jpeg'
import im3 from './events/img (3).jpeg'
import im4 from './events/img (4).jpeg'
import im5 from './events/img (5).jpeg'
import im6 from './events/img (6).jpeg'
import im7 from './events/img (7).jpeg'
import im8 from './events/img (8).jpeg'
import im9 from './events/img (9).jpeg'
import im10 from './events/img (10).jpeg'
import im11 from './events/img (11).jpeg'
import im12 from './events/img (12).jpeg'

function Events() {

    useEffect(() => {

        document.querySelectorAll(".slider").forEach((item) => {
            let clone = item.querySelector(".slider-items").cloneNode(true);
            clone.classList.add("clone");
            clone.ariaHidden = true;
            item.append(clone);
        });

    })
    return (

        <div id='eventPage' className='d-flex align-items-end justify-content-center' style={{ height: '100vh' }}>
            <div>

            <div className='text-center py-2 pastEventsText'>

                <h1 className='pastHead'>PAST EVENTS</h1>
                <p className='pastPara'>Glimpses of Genero'19</p>
            </div>
            <div id="pastEventsGrid" >
                <div className="slider">
                    <div className="slider-items">
                        <div className="item">

                            <img src={im1} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im2} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im3} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im4} alt="" width="300" height="150" />
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slider-items">
                        <div className="item">

                            <img src={im5} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im6} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im7} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im8} alt="" width="300" height="150" />
                        </div>
                    </div>
                </div>
                <div className="slider hidden-m" >
                    <div className="slider-items">
                        <div className="item">

                            <img src={im9} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im10} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im11} alt="" width="300" height="150" />
                        </div>
                        <div className="item">

                            <img src={im12} alt="" width="300" height="150" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
    )
}

export default Events