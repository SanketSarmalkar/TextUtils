import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
/*import About from './components/About';*/

function App() {
  const[mode, setMode] = useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div>
    
        <Navbar title = "TextUtils" About = "About TextUtils" Home = "Home" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/>*/}
       <div className="container mb-3">
          <TextForm heading="Enter Your Text Here" mode={mode}/>
        </div>
        {/*<div className="container mb-3">

          <About/>
  </div>*/}

    </div>
  );
}

export default App;
