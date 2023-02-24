import React from 'react'

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    <div className='container w-25'>
        <h3>Signup Now</h3>
        <input className='form-control my-2' type={'text'} placeholder='Enter Name'></input>
        <input className='form-control my-2' type={'email'} placeholder='Enter Email Address'></input>
        <input className='form-control my-2' type={'text'} placeholder='Enter Location'></input>
        <input className="form-control my-2" type={'password'} placeholder='Enter Password'></input>
        <input className="form-control my-2" type={'password'} placeholder='Confirm Password'></input>
        <button title='Submit Data' className='btn-primary btn px-3'>Signup</button>
    </div>
    </div>
  )
}

export default Signup