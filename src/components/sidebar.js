import React from 'react'

export default function SideBar() {
    const cat=()=>{
        console.log("clicked on catog")
    }
  return (
<div className="sidebaritem">
  <ul >
    <li><a href="#" className="map"></a>Map</li>
    <li><a href="#" className="locaton"></a>Location </li>
    <li className="location" onClick={cat} >catogory<i className="fa fa-caret-down"></i></li>
    <li><a href="#" className="mp"></a>anim</li>
    <li><a href="#" className="mp"></a>Support</li>
  </ul>
  </div>
  )
}


    
