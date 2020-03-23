import React, { Component } from 'react';
import MyFace from "../../assets/face.png";
import { keyframes } from "styled-components";

export default class Overview extends Component {
  render() {
    // const pulse = keyframes`
    //     0%,to {
    //         -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
    //         filter: alpha(opacity=40);
    //         opacity: .4;
    //         top: 0
    //     }
    //
    //     50% {
    //         -ms-filter: none;
    //         -webkit-filter: none;
    //         filter: none;
    //         opacity: 1;
    //         top: -10px
    //     }
    // `;

    const header = {
      fontWeight: "700"
    };

    const overview_text = {
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "0 auto",
      transform: "translate(-50%,-50%)"
    };

    const my_face = {
      height: "290px"
    };

    // const icon_animation = {
    //     animation: `${pulse} 2s linear infinite`
    // };

    return (
      <div style={overview_text}>
        <img style={my_face} src={MyFace}/>
        <h1 className="display-4" style={header}>eric gonzalez</h1>
        <h2 className="display-5">software engineer</h2>
        <h2 className="display-5">graphic designer</h2>
        <a href="#">
          <span className="glyphicon glyphicon-chevron-down" ></span>
        </a>
      </div>
    )
  }
}
