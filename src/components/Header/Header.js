import React, { Component } from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";

export default class Header2 extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">eric gonzalez</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">about</Nav.Link>
          <Nav.Link href="#features">experience</Nav.Link>
          <Nav.Link href="#pricing">contact</Nav.Link>
        </Nav>
          <Button variant="outline-info">resume</Button>
      </Navbar>
    )
  }
}
