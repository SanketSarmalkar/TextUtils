import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert";
import About from "./components/About";

import { HashRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  document.body.style.backgroundColor = mode === "dark" ? "grey" : "#FFF8C6";
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      //document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled Successfully", "success");
    } else {
      setMode("light");
      //document.body.style.backgroundColor = "#F8F0E3";
      showAlert("Dark mode has been disabled Successfully", "success");
    }
  };
  return (
    <Router>
    <div>
      <Navbar
        title="Text_Utils"
        About="About TextUtils"
        Home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar/>*/}
      <div className="container mb-3 my-3">
      <Routes>
          <Route exact path="/" element={<TextForm
          showAlert={showAlert}
          heading="A Tool to Manipulate your Text"
          mode={mode}
          Alert={showAlert}
        />} />
          <Route exact path="/about" element={<About 
          mode={mode}/>} />
        </Routes>
        
      </div>
      {/*<div className="container mb-3">

          <About/>
  </div>*/}
    </div>
    </Router>
  );
}

export default App;
