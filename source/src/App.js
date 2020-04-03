import React from 'react';
import './App.css';
import { Route,
    BrowserRouter as Router } from "react-router-dom";
import Header from './components/Nav/Nav';
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import ReachOut from "./components/ReachOut/ReachOut";
import Experience from "./components/Experience/Experience";

function App() {
  return (
      <div className="App">
          <Route exact path={`/home`}>
              <Router>
                  <div id="header">
                      <Header/>
                  </div>
                  <div id="intro" >
                      <Intro/>
                  </div>
                  <div id="about_me" className={"main-sections"}>
                      <AboutMe/>
                  </div>
                  <div id="contact" className={"main-sections"}>
                      <ReachOut/>
                  </div>
                  <div id="experience" className={"main-sections"}>
                      <Experience/>
                  </div>
              </Router>
          </Route>
      </div>
  );
}

export default App;
