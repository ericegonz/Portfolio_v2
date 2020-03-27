import React from 'react';
import './App.css';
import Header from './components/Nav/Nav';
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Timeline from "./components/Timeline/Timeline";


function App() {
  return (
      <div className="App">
          <Header id="header"/>
          <Intro id="intro" />
          <AboutMe id="about_me"/>
          <div id="experience">
              <Timeline/>
          </div>
      </div>
  );
}

export default App;
