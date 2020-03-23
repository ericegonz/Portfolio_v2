import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <div>
            <Header></Header>
            <Intro></Intro>
            <AboutMe></AboutMe>
        </div>
    </div>
  );
}

export default App;
