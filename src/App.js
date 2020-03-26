import React from 'react';
import './App.css';
import Header from './components/Nav/Nav';
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro id={"intro"} />
        <AboutMe id={"about_me"}/>
        <Timeline/>
    </div>
  );
}

export default App;
