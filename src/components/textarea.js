import ReactDOM from 'react-dom/client';
import Recat from 'react';
import React,{useState} from 'react';

export default function TextArea(props) {
  const cont={
    float: "right",
    marginTop:"70px",
    marginRight: "500px",

  }
    const handleUpClick =()=>{
        console.log("Upper case clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        const a=ReactDOM.createRoot(document.getElementById('mytext'));
        a.render(text);
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
   
   
  return (
    <>
    <div style={cont}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
     <textarea className="form-control"  value={text} onChange={handleOnChaneg} id="mytext" rows="10"></textarea> 
     </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>convert to upper case</button>
      <button className='btn btn-primary' onClick={handleClearClick}>clear text </button>
      </div>
    </>
  )  
}
