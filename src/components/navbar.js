import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import About from '../components/about.js';

export default function NavBar(props) {
    const location=()=>{
        console.log("location was clicked")    
    }
  return (
    <>
    <nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     <div className="navbar" >
            <ul >
                <li><a href="/home">Home</a></li>
                <li> <a href="/location" >Map</a></li>
                <li><a href="/about">About</a></li>
                <div  className="serbar" >
                <li>
                    <form>
                        <input type="search" placeholder="Search.." name="search"  className="search"/>
                        <button type="submit" className="button"><i className="fa fa-search" ></i> </button>
                    </form>
                </li>
                <li><a href="/">LogIn</a></li>
                <li><a href="/signup">SignUp</a></li>
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