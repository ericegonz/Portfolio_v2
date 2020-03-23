import React from 'react';
import './App.css';
import Header from './components/Nav/Nav';
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <AboutMe id={"about_me"}/>
    </div>
  );
}

export default App;
