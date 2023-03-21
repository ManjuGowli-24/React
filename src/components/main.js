import React from 'react'

export default function Main() {
    const content ={
        height:"70%",
        width:"100%",
        borderRadius:"10px",
        border:"5px solid #555"
    }
  return (
    <div>
    <img src={"./image/camel.jpg"} style={content} />
    
    </div>
  )
}