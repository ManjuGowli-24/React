import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import About from '../components/about.js';

export default function NavBar(props) {
    
  return (
    <>
    <nav>
    <h3>{props.name}</h3>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     <div className="navbar" >
            <ul >
                <li><Link  to="/">Home</Link></li>
                <li ><Link to=""></Link> Location</li>
                <li><Link to=""></Link>Rules</li>
                <li><Link to=""></Link>Rate</li>
                <li><Link to=""></Link>Contact</li>
                <div  className="serbar" >
                <li>
                    <form>
                        <input type="search" placeholder="Search.." name="search"  className="search"/>
                        <button type="submit" className="button"><i className="fa fa-search" ></i> </button>
                    </form>
                </li>
                <li><Link to="/about">About</Link></li>
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