import axios from '../axios.js'
import React from 'react'
import { useState } from 'react'
// import {useHistory} from 'react-router-dom'

export default function Login() {
  const [userName,setUsername]=useState('');
  const [mail,setMail]=useState('');
  const [password,setPassword]=useState('');

  // const history= useHistory();
  // const urls="http://localhost:5000/api/userinfo"

  // const addUser= (e)=>{
  //   // history.push("/home");
  //   e.preventDefault();
  //     axios.post('/api/login', {userName, mail, password}).then(()=>{
  //     setUsername('');
  //     setMail('');
  //     setPassword('');
  //     console.log("enterd");})
  //   // }).catch((error) => alert(error.message));
  //   console.log(userName);
  //   console.log("login clicked");
  // };

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
     {/*<button onClick={addUser} type="submit" className='btn btn-primary my-2' >Login</button> <br/>*/}
    <button type="submit" className='btn btn-primary my-2' ><a href="/home" style={{textDecoration:"none",color:"white"}}> Login </a></button> <br/>
    <a href="/signup">Forgot password?</a>
    </div>
  )
}
