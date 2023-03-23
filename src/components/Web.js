import React from 'react'
// import SideBar from './sidebar'
import Discription from './Discription';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
export default function Web() {
    const mainimage={
        height:"70%",
        width:"100%",
        borderRadius:"10px",
        border:"5px solid #555"
    }
    const row={
        float: "right",
        marginTop: "70px",
        marginleft: "75px",
        width : "75%",
        display: "flex"
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

// const openImg=()=>{
   {/* <Router>
    <Switch>
    <Route path='/Discription'>
    </Route></Switch></Router>*/}

// } 
  return (
    <>
    <div>
        <div style={row} >
            <div style={column}>
                <a href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_image_test" />
                <img src={"./image/lion.jpg"}  style={mainimage}/><br/>
                <div style={animal}>Lion</div>
            </div>
            <div  style={column}>
                <a href="https://en.wikipedia.org/wiki/tiger"/>
                <img src="./image/tiger.jpg"   style={mainimage}/><br/>
                <div style={animal}>Tiger</div>
            </div>
            <div style={column}>
                <a href="https://en.wikipedia.org/wiki/white tiger"/>
                <img src="./image/wtiger.webp" style={mainimage}/><br/>
                <div style={animal}>White Tiger</div>
            </div>
        </div>
        <div style={row} >
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
        </div>
        <div style={row} >
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
        </div>
        <div style={row} >
            <div style={column}>
                <a href="https://en.wikipedia.org/wiki/deer" target="_blank"/>
                <img src="./image/deer.jpg"  style={mainimage}/><br/>
                <div  style={animal}>Deer</div>
            </div>
            <div  style={column}>
                <a href="https://en.wikipedia.org/wiki/hipo"/>
                <img src="./image/hipo.jpeg"   style={mainimage}/><br/>
                <div  style={animal}>Hippopotamus</div>
            </div>
            <div  style={column}>
                <a href="https://en.wikipedia.org/wiki/zebra"/>
                <img src="./image/zebra.jpg" style={mainimage}/><br/>
                <div  style={animal}>Zebra</div>
            </div>
        </div> 
        
        </div> 

    </>
  )
}
