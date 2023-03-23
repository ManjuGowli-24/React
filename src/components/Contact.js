import React from 'react'

export default function Contact() {
    const cont={
        float: "left",
        marginTop:"150px",
        marginLeft: "400px",
      }
      const logo={
        width:"100px"
        
      }
  return (
    <div style={cont}>
      <h3 >Email :</h3> <p>**********@gmail.com</p>
      <h3>Contact Number :</h3><p> 190-903-***-*****</p>
      <img style={logo} src='./image/contact.jpg'></img>
    </div>
  )
}
