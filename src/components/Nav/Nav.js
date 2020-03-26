import React, { Component } from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import './Nav.css'

export default class Header2 extends Component {
    constructor(props){
        super(props);
        this.state={isHide:false};
        this.hideBarIfApplicable = this.hideBarIfApplicable.bind(this)
    }

    hideBarIfApplicable(){
        let {isHide} = this.state;
        if(window.scrollY > this.prev){
            !isHide && this.setState({isHide:true})
        }
        else{
            isHide && this.setState({isHide:false});
        }

        this.prev = window.scrollY;
    }
    componentDidMount(){
        window.addEventListener('scroll',this.hideBarIfApplicable);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.hideBarIfApplicable);
    }

    render() {
        const navbar_brand = {
            fontSize: "140%",
            fontWeight: "900"
        };

        const navbar_links = {
            fontSize: "110%"
        };

        const resume_download = {
            fontSize: "100%"
        };

        let classHide=this.state.isHide?"hide":"";

        return (
            <Navbar className={"topbar "+classHide} bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={navbar_brand}>eric g</Navbar.Brand>
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
