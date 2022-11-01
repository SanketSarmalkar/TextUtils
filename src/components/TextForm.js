import PropTypes from 'prop-types';
import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("Change occured in textarea");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was Clicked");
        setText(text.toLowerCase());
    }
    const handleClearClick = ()=>{
        console.log("Clear was Clicked");
        setText("");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    // usestate is one of the HOOKs
  const [text, setText] = useState('type or paste your Text here.....');//ratlo useState is used to make new variable
  /*setText("kkkkkk"); this is how you change the text variable*/
  return (
    <>
    <div className={`container text-${(props.mode==="light")?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control text-${(props.mode==="light")?"dark":"white"} bg-${props.mode}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn primary mx-1 my-1 bg-${props.mode} text-${(props.mode==="light")?"dark":"white"}`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn primary mx-1 my-1 bg-${props.mode} text-${(props.mode==="light")?"dark":"white"}`} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn primary mx-1 my-1 bg-${props.mode} text-${(props.mode==="light")?"dark":"white"}`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn primary mx-1 my-1 bg-${props.mode} text-${(props.mode==="light")?"dark":"white"}`} onClick={handleExtraSpaces}>handle Extra Spaces</button>
        
    </div>
    <hr />
    <div className={`container my-2 text-${(props.mode==="light")?"dark":"light"}`}>
        <h2>Text Summary</h2>
        <p>{(text==="")?0:text.split(" ").length} <b>Words</b> and {text.length} <b>Characters</b></p>
        <p>{(text==="")?0:(text.split(" ").length * 0.4).toPrecision(4)} <b>Minutes</b> to read the content.</p>
        <h2>Preview</h2>
        <p>{(text==="")?"The textForm is Empty":text}</p>
        
        <button className={`btn btn primary my-1 bg-${(props.mode==="dark")?"dark":"white"} text-${(props.mode==="light")?"dark":"white"}`} onClick={handleCopy}>Copy Text</button>
    </div>
    </>
  )
}

TextForm.prototype = {
    heading : PropTypes.string,
    mode : PropTypes.string,
}