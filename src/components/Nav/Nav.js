import React, { Component } from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
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
                <Link smooth to={"#header"}>
                    <Navbar.Brand style={navbar_brand}>eric g</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link smooth to={"#about_me"}>
                        <Nav.Link style={navbar_links}>about</Nav.Link>
                    </Link>
                    <Link smooth to={'#experience'}>
                        <Nav.Link style={navbar_links}>experience</Nav.Link>
                    </Link>
                    <Link smooth to={'#contact'}>
                        <Nav.Link style={navbar_links}>contact</Nav.Link>
                    </Link>
                </Nav>
                <Button href={window.$resume_url} target = "_blank" variant="outline-info" style={resume_download} rel="noopener noreferrer">resume</Button>
            </Navbar>
        )
    }
}
