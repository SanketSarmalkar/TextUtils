import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert';
/*import About from './components/About';*/

function App() {
  const[mode, setMode] = useState("light");  
  const[alert, setAlert] = useState(null);



  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  document.body.style.backgroundColor = (mode==="dark")?"grey":"#FFF8C6";
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      //document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled Successfully", "success");
    }
    else{
      setMode("light");
      //document.body.style.backgroundColor = "#F8F0E3";
      showAlert("Dark mode has been disabled Successfully", "success");
    }
  }
  return (
    <div>
    
        <Navbar title = "Text_Utils" About = "About TextUtils" Home = "Home" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/>*/}
       <div className="container mb-3 my-3"> 
          <TextForm heading="A Tool to Manipulate your Text" mode={mode} Alert={showAlert}/>
        </div>
        {/*<div className="container mb-3">

          <About/>
  </div>*/}

    </div>
  );
}

export default App;
