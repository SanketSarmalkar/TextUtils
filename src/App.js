import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
/*import About from './components/About';*/

function App() {
  const[mode, setMode] = useState("light");  
  document.body.style.backgroundColor = (mode==="dark")?"grey":"#FFF8C6";
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      //document.body.style.backgroundColor = "grey";
    
    }
    else{
      setMode("light");
      //document.body.style.backgroundColor = "#F8F0E3";
    }
  }
  return (
    <div>
    
        <Navbar title = "Text_Utils" About = "About TextUtils" Home = "Home" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/>*/}
       <div className="container mb-3 my-3"> 
          <TextForm heading="A Tool to Manipulate your Text" mode={mode}/>
        </div>
        {/*<div className="container mb-3">

          <About/>
  </div>*/}

    </div>
  );
}

export default App;
