import React from 'react'
import './history.css'

// import historyImg from '../../assets/purple-blue-inv.jpg'
import one from '../../assets/history/2019.jpeg'
import two from '../../assets/history/2017.jpeg'
import three from "../../assets/history/2016.jpeg"
import four from '../../assets/history/2015.jpeg'

export default function history() {
  return (
 
        <div className="container-history">
            <div className="row-history">
                <div className="col-history">
                    <h1 className='history-heading'>Know about the past Genero.</h1>
                    <p className='history-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni quos! Assumenda ullam possimus rerum cum, repellat eum quidem explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores, fuga assumenda iusto vel sunt nam ea non doloremque. Et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam in, voluptatibus ducimus nihil quae suscipit illum esse doloribus dolorem quis, necessitatibus ut ipsa?</p>
                </div>
                <div className="col-history">
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
                    
                    
                    
                </div>
            </div>
        </div>

  )
}
