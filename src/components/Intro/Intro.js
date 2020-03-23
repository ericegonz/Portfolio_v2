import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from "./ParticleConfig";
import Overview from "./Overview";


export default class Landing extends Component {
  render() {
    const landing_page = {
      backgroundColor: "#153e72",
      minHeight: "95vh",
    };

    const icon_down = {
      fontSize: "35px",
      bottom: "135px",
      top: "unset"
    };

    const particles = {
      minHeight: "95vh"
    };

    console.log(ParticleConfig);
    return (
      <div style={landing_page}>
        <Particles style={particles} params={ParticleConfig}/>
        <Overview/>
        <a href="#about_me">
          <span className="glyphicon glyphicon-chevron-down" style={icon_down}></span>
        </a>
      </div>
    )
  }
}
