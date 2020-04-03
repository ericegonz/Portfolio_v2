import React, { Component } from 'react';

export default class ReachOut extends Component {
  render() {
    const description = {
      paddingBottom: "10px",
      fontSize: "18px"
    };

    return (
      <div className="reachout">
        <h1 className={"display-3"}>Reach Out</h1>
        <p style={description}>Shoot me an email at
          <a href="mailto:ericegonz.se@gmail.com" target="_blank" rel="noopener noreferrer"> ericegonz.se@gmail.com</a>
          , or feel free to reach out to me on
          <a href="http://linkedin.com/in/ericegonz" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
        </p>
      </div>
    )
  }
}
