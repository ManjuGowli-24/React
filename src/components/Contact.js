import React from 'react'

export default function Contact() {
    const contact={
        float: "right",
        marginTop: "70px",
        marginleft: "75px",
        width : "75%",
    }
    // const goToSocial=()=>{
    //     window.goToSocial.href=id;
    // }
  return (
  <>
    <div style={contact}>
        <h3>Email Address:</h3>
        <p>manjunathgowli654@gmail.com </p>
        <br/>
        <h3>Contact Number: </h3>
        <p>145-***-****</p>
        <br/>
        </div>
        <div >
        <img src="\image\sidebarimg\fb.jpg" onClick={goToSocial} alt="facebook" />
        <img src="\image\sidebarimg\insta.jpg" alt="facebook" />
        <img src="\image\sidebarimg\twit.jpg" alt="facebook" />
        </div>
        </>
  )
}
