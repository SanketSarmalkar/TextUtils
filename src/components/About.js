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
      <div className={`accordion bg-${(props.mode==="dark")?"dark":"#F8F0E3" }`} id="accordionExample" style={myStyle}>
  <div className={`accordion-item bg-${(props.mode==="dark")?"dark":"light"} `}>
    <h2 className={`accordion-header `} id="headingOne">
      <button className={`accordion-button bg-${(props.mode)} text-${(props.mode==="light")?"dark":"light"}`} type="button" /*style={myStyle}*/ data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Text_Utils?
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
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`} /*style={myStyle}*/>
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed bg-${(props.mode)} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`} /*style={myStyle}*/>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
