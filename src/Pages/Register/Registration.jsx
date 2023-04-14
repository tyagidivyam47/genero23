import React from 'react'
import qr1 from '../../assets/Genero Registration (ABES Students).png'
import qr2 from '../../assets/Genero Registration (Non-ABES Students).png'
import { Link } from 'react-router-dom'
// import TeamPage from '../TeamPage/TeamPage'
function Registration() {
    return (
        <div id='register' className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='col-lg-9 col-11 mx-auto'>
                <h2 className='text-light my-3 text-center '>Don't wait, Register Now</h2>
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-around rounded-3 bg-light" id='qr-box' style={{ height:'70vh'}}>
                    <div className="col-lg-4 col-11 mx-auto text-center">
                        <h4 className='text-black'>ABESEC Students</h4>
                        <img src={qr1} alt="" className='mb-2 w-75' width={'100%'} />
                        <a href='https://pages.razorpay.com/pl_LcoWGGa0d9RsFA/view'><button>Register Now</button></a>
                    </div>
                    <div className="col-lg-4 col-11 mx-auto text-center">
                        <h4 className='text-black'>Non-ABESEC Students</h4>
                        <img src={qr2} alt="" className='mb-2 w-75' width={'100%'} />
                        <a href='https://pages.razorpay.com/pl_Lcoxw6DWcD2ldP/view'><button>Register Now</button></a>
                    </div>
                </div>


                <div className="team-button">
                   
                    <div className="team-button" style={{textAlign: "center", paddingTop: "25px"}}>
                    <Link to="/teampage">Meet the Team</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration