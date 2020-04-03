import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from "./ParticleConfig";
import Overview from "./Overview";


export default class Landing extends Component {
  render() {
    const landing_page = {
      backgroundColor: "#153e72",
      height: "100vh",
      width: "100vw",
      overflow: 'hidden',
      position: 'relative'
  };


    const particles = {
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      position: 'absolute'
    };

    return (
      <div style={landing_page}>
        <Particles style={particles} params={ParticleConfig}/>
        <Overview/>
      </div>
    )
  }
}
