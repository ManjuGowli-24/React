import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
    
    const location=()=>{
        <a href="https://www.w3schools.com/w3css/w3css_borders.asp " target="_blank"></a>
    }

  return (
    <>
    <nav>
    <h3>{props.name}</h3>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     <div className="navbar" >
            <ul >
                <li><a className="active" href="#home"></a>Home</li>
                <li onClick={location} > Location<a href="#loc" /></li>
                <li><a href="#rules"></a>Rules</li>
                <li><a href="#rate"></a>Rate</li>
                <li><a href="#contact"></a>Contact</li>
                <div  className="serbar" >
                <li>
                    <form>
                        <input type="search" placeholder="Search.." name="search"  className="search"/>
                        <button type="submit" className="button"><i className="fa fa-search" ></i> </button>
                    </form>
                </li>
                </div>
              </ul>
        </div>
    </nav> 
   
    </>
  )
}

NavBar.propTypes={
    name : PropTypes.string
}