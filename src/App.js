import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Compnents/About';
import Navbar from './Compnents/Navbar';
import TextForm from './Compnents/TextForm';
import Alert from './Compnents/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'wheat';
      showAlert("Darkmode enabled successfully!", "info");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
      showAlert("Lightmode enabled successfully!", "info");

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Text Here!" alert={alert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
