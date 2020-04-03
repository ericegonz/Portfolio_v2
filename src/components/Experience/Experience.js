import React, { Component } from 'react';
import Timeline from "../Timeline/Timeline";
import Projects from "../Projects/Projects";

export default class Experience extends Component {
  render() {
    const titles = {
      fontSize: "2em",
      fontWeight: "bold",
      margin: "25px 0"
    };

    return (
      <div>
        <h1 className={"display-3"}>My Experience</h1>
        <h2 className={"display-5"} style={titles}>Some of My Projects</h2>
        <Projects/>
        <h2 className={"display-5"} style={titles}>Employment History</h2>
        <Timeline/>
      </div>
    )
  }
}
