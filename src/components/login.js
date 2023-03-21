import React from 'react'

export default function Login() {
  return (
  
    <div className='log'>
    <h1 style={{color : 'rgb(32, 168, 231)'}}>LogIn</h1><br />
    <label  for="uname"><b>Username</b></label><br />
    <input className='logcont' type="" placeholder="Enter Username" name="uname" required/>
    <br />
    <label for="psw"><b>Password</b></label><br />
    <input type="password" placeholder="Enter Password" name="psw" required/><br />
    <button type="submit" className='btn btn-primary my-2'>Login</button>
    <p>Forgot password?</p>
    </div>

  )
}
