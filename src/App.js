import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import { BrowserRouter } from 'react-router-dom'
import Cert from './components/Cert';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Education from './components/Education';
import nihar from './resource/DSC_0144.JPG'

const App = () => {

  useEffect(() => {
    M.AutoInit()
  })

  return (
    <BrowserRouter>
      <div style={{'backgroundColor':'#212121', 'fontFamily':'Courier New', 'textAlign':'justify'}}>
        <div className='row no-margin'>
          <Navbar/>
        </div>
        <div>
          <div className='row' style={{'minHeight':'100vh', 'backgroundImage':`url(${nihar})`,'backgroundPosition': 'center','backgroundRepeat': 'no-repeat','backgroundSize': 'cover'}}>
            <About/>
          </div>
          <div className='row' style={{'minHeight':'100vh'}}>
            <Education/>
          </div>
          <div className='row' style={{'minHeight':'100vh'}}>
            <Experience/>
          </div>
          <div className='row' style={{'minHeight':'100vh'}}>
            <Project/>
          </div>
          <div className='row' style={{'minHeight':'100vh'}}>
            <Skills/>
          </div>
          <div className='row' style={{'minHeight':'100vh'}}>
            <Cert/>
          </div>
          <div className='row no-margin' style={{'minHeight':'100vh'}}>
            <Contact/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
