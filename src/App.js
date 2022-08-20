//npimport logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFile from './components/TextFile';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  

  const [mode, setmode] = useState('light')

  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="black"
      showalert("Dark Mode is Enabled","Success")
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white"
      showalert("Light Mode is Enabled","Success")
    }
  }

  const [alert, setalert] = useState(null)


  const showalert=(msg,type)=>{
    if(type==='Success')
    {
    setalert({
      msg:msg, type:type,
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);
    }
    else
    {
      setalert({
        msg:msg, type:type,
      })
  
      setTimeout(() => {
        setalert(null)
      }, 2000);
    }
  }

  return (
    <>
      {/* <Router> */}
          <Navbar mode={mode} togglemode={togglemode} title="TextUtil" aboutText="About Us"/>
          <Alert  alert={alert}/>
          <div className="container my-3">
            {<TextFile showalert={showalert} togglemode={togglemode}  mode={mode} heading="Enter Text"/>}
            {/* <Routes> */}
                  {/* <Route path='/about' element={<About/>} /> */}
                  {/* <Route path='' element={<TextFile showalert={showalert} togglemode={togglemode}  mode={mode} heading="Enter Text"/>} /> */}
            {/* </Routes> */}
          </div>
      {/* </Router> */}
    </>
  );
}

export default App;
