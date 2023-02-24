import React from 'react'

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
    <div className='container w-25'>
        <h3>Login Now</h3>
        <input className='form-control my-2' type={'email'} placeholder='Enter Email Address'></input>
        <input className="form-control my-2" type={'password'} placeholder='Enter Password'></input>
        <button title='Submit Data to get started' className='btn-primary btn px-3'>Login</button>
    </div>
    </div>
  )
}

export default Login