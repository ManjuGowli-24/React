import React , {useState} from 'react';
// import { Link } from 'react-router-dom';
import Web from './Web';
// import TextArea from './textarea';

export default function SideBar(props) {
    
    const handleUpClick =()=>{
        console.log("Upper case clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleClearClick =()=>{
        let newtext = '';
        setText(newtext);
    }
    
    const handleOnChaneg =(event)=>{
        console.log("on cahange");
        setText(event.target.value);
    }

    const [text,setText]=useState('Enter your text here');
    const backimg={
        backgroundImage:"./image/camel.jpg"
    }
  return (
    <>


<div className="sidebaritem">
  <ul >
    <li><a href="#" className="map"></a>Map</li>
    <li><a href="#" className="locaton"></a>Location </li>
    <li> catogory<i className="fa fa-caret-down"></i></li>
    <li><a href="#" className="mp"></a>anim</li>
    <li><a href="#" className="mp"></a>Support</li>
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
  <Web/>

  </>
  )
  }


    
