import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from "./ParticleConfig";
import Overview from "./Overview";
import MyFace from "../../assets/face.png";


export default class Landing extends Component {
  render() {
    const landing_page = {
      backgroundColor: "#153e72",
      minHeight: "96vh",
    };


    const particles = {
      // position: "absolute",
    };

    console.log(ParticleConfig);
    return (
      <div style={landing_page}>
        <Particles style={particles} params={ParticleConfig}/>
        <Overview/>
      </div>
    )
  }
}
