import React , {useState} from 'react';
// import { Link } from 'react-router-dom';
// import Web from './Web';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TextArea from './textarea.js';

export default function SideBar(props) {
    
  return (
    <>
<div >
<div className="sidebaritem">
  <ul >
    <li><a href="/suggestion" >Rules</a></li>
    <li><a href="/suggestion" >catogory</a><i className="fa fa-caret-down"></i></li>
    <li><a href="/suggestion" >Contact Us</a></li>
    <li><a href="/suggestion" >Suggestion</a></li>
  </ul>
  </div>

  {/*<div className='cont'>
  <h1>{props.heading}</h1>
  <div className="mb-3">
   <textarea className="form-control"  value={text} onChange={handleOnChaneg} id="mytext" rows="8" ></textarea> 
   </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to upper case</button>
    <button className='btn btn-primary' onClick={handleClearClick}>clear text </button>
  </div>
  
<TextArea/>
  */}
  <Router>
  <Switch>
  <Route path="/suggestion">
  <TextArea/>
  </Route></Switch>
  </Router> 
  </div>
  </>
  )
  }


    
