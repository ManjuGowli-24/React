import React from 'react';

export default function SignUp() {
  const created =() => {
    console.log("acc created .")
    alert('Acount created suss');
  }
  return (
    <>
    <div className='log'>
    <h1 style={{color : 'rgb(32, 168, 231)'}}>Sign Up</h1>
    <p>Please fill in this form to create an account.</p><br />

    <label for="email"><b>Email</b></label><br />
    <input type="text" placeholder="Enter Email" name="email" required/><br />

    <label for="psw"><b>Password</b></label><br />
    <input type="password" placeholder="Enter Password" name="psw" required/><br />

    <label for="psw-repeat"><b>Repeat Password</b></label><br />
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/><br/>
    <button type="submit" onClick={created} className='btn btn-primary my-2'>Sign Up</button>
    </div>
   
    </>
  )
}