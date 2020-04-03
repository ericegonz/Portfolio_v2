import React, { Component } from 'react';
import './AboutMe.css'
import Photoshop from "../../assets/pslarge.png";
import Illustrator from "../../assets/ailarge.png";
import Premiere from "../../assets/prlarge.png";
import InDesign from "../../assets/idlarge.png";

export default class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="container-user-details">
                    <h1 className="display-3 container-headers">About Me</h1>
                    <p className="container-description">
                        I am a hard working individual who is always ready to learn. What motivates me the most is my curiosity.
                        This allows me to grasp concepts very easily, especially when it comes to technology.
                        I am thrilled to use my technical and marketing background to help a company excel. With great skills in
                        software development, troubleshooting & debugging, I thrive in collaborative settings the most.
                        I am currently most interested in learning more about the art of Human-Computer Interaction and Artificial
                        Intelligence (including CV and natural language processing).

                        On my down time I like riding my bike, flying drones, exploring off-road trails in my truck and trying new
                        foods.
                    </p>
                </div>

                <div className="container-user-details">
                    <h2 className="display-5 container-sub-headers">Languages & Frameworks</h2>
                    <div className="container-fluid tech-icon-row">
                        <div className="row">
                            <div className="col-sm tech-icons">
                                <i className="devicon-python-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-cplusplus-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-javascript-plain"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-nodejs-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-angularjs-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-react-original colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-mysql-plain-wordmark colored"/>
                            </div>
                        </div>
                    </div>
                    <p className="container-description">
                        I am highly skilled in object-oriented programming languages such as Python and Javascript. I
                        am still learning C# using the .NET framework. I am also familiar with C++ and would be able to
                        jump into an existing project and quickly resume where I left off.
                    </p>
                    <p className="container-description">
                        In terms of front-end development, I am well-versed with Javascript in general, and a few of its
                        frameworks such as AngularJS and Node. I am currently in the process of mastering React, and am
                        anxious to continue learning how to create enterprise level front-end web applications with
                        an heavy focus on API interaction.
                    </p>
                </div>

                <div className="container-user-details">
                    <h2 className="display-5 container-sub-headers">Technologies/Tools</h2>
                    <div className="container-fluid tech-icon-row">
                        <div className="row">
                            <div className="col-sm tech-icons">
                                <i className="devicon-linux-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-debian-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-ubuntu-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-vim-plain colored"/>
                            </div>
                            <div className="col-sm tech-icons">
                                <i className="devicon-github-plain colored"/>
                            </div>
                        </div>
                    </div>
                    <p className="container-description">
                        I have a passion for working with Linux (i.e. Debian, Ubuntu, Jessie, CentOS), Bash shell. I am
                        familiar with development on single-board computers/embedded devices such as the Raspberry Pi
                        (Zero, 3B, 3B+ & 4) and ASUS Tinkerboard family lines. Additionally, I am very comfortable with
                        installing computer hardware such as HDDs, SSDs, RAM & peripherals.
                        I love working with Linux.
                    </p>
                </div>

                <div className="container-user-details">
                    <h2 className="display-5 container-sub-headers">Graphic Design</h2>
                    <div className="container-fluid tech-icon-row">
                        <div className="row">
                            <div className="col-sm tech-icons">
                                <img src={Photoshop} alt={"Adobe Photoshop"}/>
                            </div>
                            <div className="col-sm tech-icons">
                                <img src={Illustrator} alt={"Adobe Illustrator"}/>
                            </div>
                            <div className="col-sm tech-icons">
                                <img src={Premiere} alt={"Adobe Premiere Pro"}/>
                            </div>
                            <div className="col-sm tech-icons">
                                <img src={InDesign} alt={"Adobe InDesign"}/>
                            </div>
                        </div>
                    </div>
                    <p className="container-description">
                        I have a keen eye for aesthetics, a creative mind and years of professional graphic design
                        experience below my belt.
                        I have developed, conceptualized, and implemented creative solutions and then lead a team that met
                        marketing strategies for 4 years with UC Riverside.
                    </p>
                </div>
            </div>
    )
    }
    }
