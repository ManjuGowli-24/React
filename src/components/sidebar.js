import React , {useState} from 'react';
// import { Link } from 'react-router-dom';
// import Web from './Web';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Contact from './Contact.js';
// import TextArea from './textarea.js';
import { Animal } from './Animal.js';

export default function SideBar(props) {

  const gridContainer={
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "10px",
    // padding: "10px",
    // float : "left",
    
    marginTop : "70px",
    marginLeft : "10px",
    backgroundColor: "rgb(239, 245, 245)",
  }
  const sidebaritem={
    gridRow: "1/ 5",
    border : "1px solid black ",
    width : "260px",
    borderRadius: "14px",
    overflow: "hidden",
   
    listStyleType: "none",
  }
  const column={
    padding:"5px",
    opacity: "1"
}
const animal={
    color: "black",
    fontSize:"xx-large",
    textAlign:"center",
    fontFamily:"'Brush Script MT',Open"
}
const mainimage={
  height:"70%",
  width:"100%",
  borderRadius:"10px",
  border:"5px solid #555"
}

const [anim ,setAnim]=useState(Animal);

  return (
  <div>
<div style={gridContainer}>
<div style={sidebaritem}  className="sidebaritem">
    <li><a href="/suggestion" >Rules</a></li>
    <li><a href="/suggestion" >catogory</a><i className="fa fa-caret-down"></i></li>
    <li><a href="/Contact" >Contact Us</a></li>
    <li><a href="/suggestion" >Suggestion</a></li>
  </div>
{
  anim.map((data)=>{
    const {id ,image, diss ,name ,alt }=data;

    return (
      <div style={column} >
        <img src={image} alt={alt} style={mainimage}/><br/>
        <div  style={animal}>{name}</div>
      </div>
    )
  })
}

{/*<div  style={column}>
  <a href="https://en.wikipedia.org/wiki/tiger"/>
  <img src="./image/tiger.jpg"   style={mainimage}/><br/>
  <div style={animal}>Tiger</div>
</div>
<div style={column}>
  <a href="https://en.wikipedia.org/wiki/white tiger"/>
  <img src="./image/wtiger.jpg" style={mainimage}/><br/>
  <div style={animal}>White Tiger</div>
</div>

<div  style={column}>
  <a href="https://en.wikipedia.org/wiki/Leopard"/>
  <img src="./image/lepo.jpg" style={mainimage} /><br/>
  <div  style={animal}>Leopard</div>
</div>
<div style={column}>
  <a href="https://en.wikipedia.org/wiki/fox"/>
  <img src="./image/fox.jpg" style={mainimage} /><br/>
  <div  style={animal}>Fox</div>
</div>
<div style={column}>
  <a href="https://en.wikipedia.org/wiki/bear"/>
  <img src="./image/bear.jpg" style={mainimage} /><br/>
  <div  style={animal}>Bear</div>
</div>

<div style={column}>
  <a href="https://en.wikipedia.org/wiki/camel"/>
  <img src="./image/camel.jpg" style={mainimage}/><br/>
  <div  style={animal}>Camel</div>
</div>
<div  style={column}>
  <a href="https://en.wikipedia.org/wiki/elephant"/>
  <img src="./image/elep.jpg" style={mainimage} /><br/>
  <div  style={animal}>Elephant</div>
</div>
<div style={column}>
  <a href="https://en.wikipedia.org/wiki/rhinoceros"/>
  <img src="./image/rhino.jpg" style={mainimage} /><br/>
  <div style={animal}>Rhinoceros</div>
</div>

<div style={column}>
  <a href="https://en.wikipedia.org/wiki/deer" target="_blank"/>
  <img src="./image/deer.jpg"  style={mainimage}/><br/>
  <div  style={animal}>Deer</div>
</div>
<div  style={column}>
  <a href="https://en.wikipedia.org/wiki/hipo"/>
  <img src="./image/hipo.jpg"   style={mainimage}/><br/>
  <div  style={animal}>Hippopotamus</div>
</div>
<div  style={column}>
  <a href="https://en.wikipedia.org/wiki/zebra"/>
  <img src="./image/zebra.jpg" style={mainimage}/><br/>
  <div  style={animal}>Zebra</div>
</div>*/}

{/* for routeing in sidebar
  </div>
  <Router>
  <Switch>
  
  </Switch>
  </Router> */}

  </div>
  </div>
  )
  }


    
