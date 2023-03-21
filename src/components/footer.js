import React from 'react'

export default function Footer() {
  const foot={
    position: "fixed",
    bottomRight:"0",
    width :"100%"
  }
  return (
    <>
    <div style={foot}>
    <p>© 1999 - 2023 W3schools. All rights reserved. Cookie policy, Privacy and Terms.</p>
    </div>
    </>
  )
}

