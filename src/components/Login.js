import React, { useState } from 'react'
import CustomButton from '../items/CustomButton'
import { Navigate } from 'react-router-dom'
function Login() {
  const [nav, setNav]=useState(0)
  return (
    <div className="d-flex justify-content-center col-sm-11 col-lg-5 mx-auto align-items-center" style={{ height: '100vh' }}>
      <div className='container w-100-sm w-25-lg '>
        <div className='text-left'>
          <h3>Login Now</h3>
          <p>Enter your Customer Id to get started</p>
        </div>
        <input className='form-control my-2' style={{
          backgroundColor: 'transparent',
        }} type={'text'} placeholder='ex., E12T1789'></input>
        {nav?<Navigate to="/expert" />:null}
        <CustomButton title='Submit Data to get started' text="Continue" onPress={() => {
          setNav(1)
        }} />
      </div>
    </div>
  )
}

export default Login