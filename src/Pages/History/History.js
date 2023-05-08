import React from 'react'
import './history.css'
import { Link } from 'react-router-dom'

// import historyImg from '../../assets/purple-blue-inv.jpg'
import one from '../../assets/history/2019.jpeg'
import two from '../../assets/history/2017.jpeg'
import three from "../../assets/history/2016.jpeg"
import four from '../../assets/history/2015.jpeg'

export default function history() {
  return (
 
        <div id="history" className="container-history">
            <div className="row-history">
                <div className="col-history">
                    <h1 className='history-heading'>Know about the past genero.</h1>
                    <p className='history-para'>ABES's annual cultural fest is one for those who love and enjoy entertainment. This festival is a treat for music, culture, and theatre art lovers. It has popular events that are not only entertaining but also make you win goodies and exciting cash prizes. Music enthusiasts and dance lovers can never miss this fest, as they have seen the likes of Guru Randhawa, Nikhil D'Souza, Jassie Gill, and Babbal Rai perform here. With its exuberant atmosphere and liveliness, this festival is a full packet of memories and new experiences.</p>
                    <a href='#eventPage' className='history-button'><button>View Gallery</button></a>
                </div>
                    <div className="col-history">
                <Link to="/home" className='history-link'>
                        <div className="card-history">
                            <h5 className='history-sub-heading'>GENERO 2015</h5>
                            <div className="history-image-class">
                                <img src={four} alt="" className='history-img'/>
                            </div>
                        </div>
                        <div className="card-history">
                            <h5 className='history-sub-heading'>GENERO 2016</h5>
                            <div className="history-image-class">
                                <img src={three} alt="" className='history-img'/>
                            </div>
                        </div>
                        <div className="card-history">
                            <h5 className='history-sub-heading'>GENERO 2017</h5>
                            <div className="history-image-class">
                                <img src={two} alt="" className='history-img'/>
                            </div>
                        </div>
                        <div className="card-history">
                            <h5 className='history-sub-heading'>GENERO 2019</h5>
                            <div className="history-image-class">
                                <img src={one} alt="" className='history-img'/>
                            </div>
                        </div>
                </Link>
                    </div>
            </div>
        </div>

  )
}
