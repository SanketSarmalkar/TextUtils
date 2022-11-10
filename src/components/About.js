import React, {useState} from 'react';



export default function About(props) {
    const [myStyle, setMyStyle] = useState( {
        color:"black", 
        backgroundColor:"white",
    });
   
    const [buttonText, setButtonText] = useState("enable Dark Mode");

    const toggleStyle = ()=>{
        if(myStyle.color==="white"){
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setButtonText("enable Dark Mode");
        }
        else{
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: '1px solid white',
            });
            setButtonText("enable Light Mode");
        }
    }

  return (
    <div className={`container bg-${(props.mode==="dark")?"dark":"#F8F0E3" } text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/>
        <h1>About us</h1>
      <div className={`accordion bg-${(props.mode==="dark")?"dark":"#F8F0E3" } my-1`} id="accordionExample" /*style={myStyle}*/>
  <div className={`accordion-item bg-${(props.mode==="dark")?"dark":"light"} `}>
    <h2 className={`accordion-header `} id="headingOne">
      <button className={`accordion-button bg-${(props.mode)} text-${(props.mode==="light")?"dark":"light"}`} type="button" /*style={myStyle}*/ data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Text_Utils
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show `} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/ >
        <strong>Text_Utils is a collection of text manipulating tools. All text are just simple, easy to use. A Tool created to help the users play around with the text formatting, the way they need...</strong>
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode} `}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed bg-${(props.mode)} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`}>
        <strong>Text_Utils</strong> software works in any browsers such as Chrome, FireFox, Internet Explorer, Safari , Opera, Microsoft Edge etc. It suits to count characters in Facebook, blogs, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`} /*style={myStyle}*/>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed bg-${(props.mode)} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Free to use
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/>
        <strong>Text_Utils</strong> is a free to use Character counter tool that provides instant character count & word count statistics for a given text. Text_Utils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
</div>
{/*<div className="my-3">
<button type="button" className="btn btn-primary" onClick={toggleStyle}>{buttonText}</button>
  </div>*/}

    </div>
  )
}
