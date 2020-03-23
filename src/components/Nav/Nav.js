import React, { Component } from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";

export default class Header2 extends Component {
  render() {
      const navbar_brand = {
        fontSize: "26px",
        fontWeight: "900"
      };

      const navbar_links = {
          fontSize: "26px"
      };

      const resume_download = {
          fontSize: "20px"
      };

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={navbar_brand}>eric gonzalez</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about_me" style={navbar_links}>about</Nav.Link>
          <Nav.Link href="#experience" style={navbar_links}>experience</Nav.Link>
          <Nav.Link href="#contact" style={navbar_links}>contact</Nav.Link>
        </Nav>
          <Button variant="outline-info" style={resume_download}>resume</Button>
      </Navbar>
    )
  }
}
