import React from 'react';

export default function SignUp() {
  const created =(event) => {
    console.log("wdoiqd")
    alert('Acount created suss');
  }

  // class use extends React.Component{
  //     constructor (user,psw){
  //       const username= this.user;
  //       const password= this.psw;
  //     }
  // }
  return (
    <>
    <div className='log'>
    <h1 style={{color : 'rgb(32, 168, 231)'}}>Sign Up</h1>
    <p>Please fill in this form to create an account.</p><br />

    <label htmlFor="email"><b>Email</b></label><br />
    <input type="text" placeholder="Enter Email"  name="email" required/><br />

    <label htmlFor="psw"><b>Password</b></label><br />
    <input type="password" placeholder="Enter Password" name="psw" required/><br />

    <label htmlFor="psw-repeat"><b>Confim Password</b></label><br />
    <input type="password" placeholder="Re-enter Password" name="psw-repeat" required/><br/>
    <button type="submit" onClick={created} className='btn btn-primary my-2'>Sign Up</button>
    </div>
   
    </>
  )
}