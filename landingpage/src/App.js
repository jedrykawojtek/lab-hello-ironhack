import React from 'react';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import ironLogo from "./images/ironhack-logo.svg"
import menuTop from "./images/menu-top.svg"
import './App.css';

import Box from "./components/Box"

function App() {
  return (  
    <div className="App">
      <header className="App-header">

        <div className="nav-bar">
          <img src={ironLogo} className="App-logo" alt="logo" />
          <img src={menuTop} className="App-logo" alt="top-logo" />
        </div>
        
        <div className="hero">
          <h1>Say hello to ReactJS</h1>
          <p>
          You will learn a Frontend framework from scratch to become an Ninka Developer
          </p>

          <button type="submit" class="btn">Awesome!</button>
        </div>
      </header>

      <div className="icon-container">

        <Box icon={icon1} title="Declarative" 
            description="React makes it painless to create interactive Uls"
        />
        <Box icon={icon2} title="Components"
             description="Builed encapsulated components that manage their state."
        />
        <Box icon={icon3} title="Single-Way"
                    description="A set of immutable values are passed to the component's."
        />
        <Box icon={icon4} title="JSX"
                    description="Statically-typed, designed to run on modern browsers."
        />
            
      </div>
      <div className="bottom">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
      </div>
      
    </div>
   

  );
}

export default App;
