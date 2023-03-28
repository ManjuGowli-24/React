import React from 'react'

export default function Contact() {
    const contacttext={
        float: "right",
        marginTop: "70px",
        marginleft: "75px",
        width : "75%",
        
    }
    const contimage={
      size : "100px",
      width : "100%",
    }
   
    
    // const goToSocial=()=>{
    //     window.goToSocial.href=id;
    // }
  return (
  <div >
    <div style={contacttext}>
        <h3>Email Address:</h3>
        <p>manjunathgowli654@gmail.com </p>
        <br/>
        <h3>Contact Number: </h3>
        <p>145-***-****</p>
        <br/>
      
       <div style={contimage}>
        <img src="\image\sidebarimg\fb.jpg"  alt="facebook" /> 
        <img src="\image\sidebarimg\insta.jpg" alt="facebook" />
        <img src="\image\sidebarimg\twit.jpg" alt="facebook" />
        </div>
        </div> 
      </div>
       
  )
}
