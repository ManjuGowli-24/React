import React from 'react'

export default function Contact() {
    const contact={
        float: "right",
        marginTop: "70px",
        marginleft: "75px",
        width : "75%",
    }
    const icon={
      fontSize :"60px",
      padding: "20px",
  // font-size: "30px",
      width: "50px",
      textAlign: "center",
  textDecoration: "none",
    margin: "5px 2px"
      }
  return (
  <>
    <div style={contact}>
        <h3>Email Address:</h3>
        <p>manjunathgowli654@gmail.com </p>
        <br/>
        <h3>Contact Number: </h3>
        <p>145-***-****</p>
        <br/>

        <a   style= {icon} className="fa fa-facebook"></a>
        <a style= {icon} className="fa fa-twitter"></a>
        <a style= {icon}  className="fa fa-instagram"></a>
       {/* <div style={{img}}>
        <img src="\image\sidebarimg\fb.jpg"  alt="facebook" /> 
        <img src="\image\sidebarimg\insta.jpg" alt="facebook" />
        <img src="\image\sidebarimg\twit.jpg" alt="facebook" />
  </div>*/}
  </div>
        
        </>
  )
}
