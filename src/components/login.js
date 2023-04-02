import axios from '../axios.js';
import React from 'react'
import { useState } from 'react'

export default function Login() {
  const [userName,setUsername]=useState('');
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');

  const addUser=(e)=>{
    e.preventDefault();

    axios.post('/users/add' , {userName, mail, password}).then(()=>{
      setUsername('');
      setMail('');
      setPassword('');
    }).catch((error) => alert(error.message));
  }


  return (
  
    <div className='log'>
    <h1 style={{color : 'rgb(32, 168, 231)'}}>LogIn</h1><br />
    <label htmlFor='uname' ><b>User name</b></label><br/>
    <input type="text" placeholder='User name' onChange={(e)=>setUsername(e.target.value)} value={userName} required/>
    <br/>
    <label  htmlFor="email"><b>Email</b></label><br />
    <input type="text" placeholder="example@gmail.com" onChange={(e)=>setMail(e.target.value)} value={mail} required/>
    <br />
    <label htmlFor="psw"><b>Password</b></label><br />
    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password} required/><br />
    <button onClick={addUser} type="submit" className='btn btn-primary my-2'  >Login</button>
    <p>Forgot password?</p>
    </div>

  )
}
