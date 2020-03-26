import React, { Component } from 'react';
import Photoshop from "../../assets/pslarge.png";
import Illustrator from "../../assets/ailarge.png";
import Premiere from "../../assets/prlarge.png";
import InDesign from "../../assets/idlarge.png";

export default class AboutMe extends Component {
    render() {
        const main_div = {
            lineHeight: "2.25em",
            padding: "5% 0",
            width: "90%",
            margin: "0 auto"
        };

        const icon_container = {
          margin: "20px 0"
        };

        const titles = {
            margin: "35px 0"
        };

        const smaller_div = {
            padding: "3%"
        };

        const dev_icons = {
            height: "110px",
            fontSize: "85px",
            padding: "15px"
        };

        const description = {
            paddingBottom: "10px",
            fontSize: "18px"
        };

        return (
            <div className="aboutme" style={main_div}>
                <div className="user-details" style={smaller_div}>
                    <h1 className={"display-3"}>About Me</h1>
                    <p style={description}>
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

                <div className="tech" style={smaller_div}>
                    <h2 className={"display-4"} style={titles}>Languages/Frameworks</h2>
                    <div className="container-fluid" style={icon_container}>
                        <div className="row">
                            <div className="col-sm">
                                <i className="devicon-python-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-cplusplus-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-javascript-plain" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-nodejs-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-angularjs-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-react-original colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-mysql-plain-wordmark colored" style={dev_icons}/>
                            </div>
                        </div>
                    </div>
                    <p style={description}>
                        I am highly skilled in object-oriented programming languages such as Python and Javascript. I
                        am still learning C# using the .NET framework. I am also familiar with C++ and would be able to
                        jump into an existing project and quickly resume where I left off.
                    </p>
                    <p style={description}>
                        In terms of front-end development, I am well-versed with Javascript in general, and a few of its
                        frameworks such as AngularJS and Node. I am currently in the process of mastering React, and am
                        anxious to continue learning how to create enterprise level front-end web applications with
                        an heavy focus on API interaction.
                    </p>
                </div>

                <div className="tech" style={smaller_div}>
                    <h2 className={"display-4"} style={titles}>Technologies/Tools</h2>
                    <div className="container-fluid" style={icon_container}>
                        <div className="row">
                            <div className="col-sm">
                                <i className="devicon-linux-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-debian-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-ubuntu-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-vim-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-github-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-pycharm-plain colored" style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <i className="devicon-apache-line-wordmark colored" style={dev_icons}/>
                            </div>
                        </div>
                    </div>
                    <p style={description}>
                        I have a passion for working with Linux (i.e. Debian, Ubuntu, Jessie, CentOS), Bash shell. I am
                        familiar with development on single-board computers/embedded devices such as the Raspberry Pi
                        (Zero, 3B, 3B+ & 4) and ASUS Tinkerboard family lines. Additionally, I am very comfortable with
                        installing computer hardware such as HDDs, SSDs, RAM & peripherals.
                        I love working with Linux.
                    </p>
                </div>

                <div className="tech" style={smaller_div}>
                    <h2 className={"display-4"} style={titles}>Graphic Design</h2>
                    <div className="container-fluid" style={icon_container}>
                        <div className="row">
                            <div className="col-sm">
                                <img src={Photoshop} alt={"Adobe Photoshop"} style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <img src={Illustrator} alt={"Adobe Illustrator"} style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <img src={Premiere} alt={"Adobe Premiere Pro"} style={dev_icons}/>
                            </div>
                            <div className="col-sm">
                                <img src={InDesign} alt={"Adobe InDesign"} style={dev_icons}/>
                            </div>
                        </div>
                    </div>
                    <p style={description}>
                        I have a keen eye for aesthetics, a creative mind and years of professional graphic design
                        experience below my belt.
                        I have developed, conceptualized, and implemented creative solutions and then lead a team that met
                        marketing strategies for 4 years with UC Riverside.
                    </p>
                </div>

                <div className="tech" style={smaller_div}>
                  <h2 className={"display-4"} style={titles}>Reach Out</h2>
                  <p style={description}>Shoot me an email at ericegonz.se@gmail.com, or feel free to reach out to me on
                      <a href="http://linkedin.com/in/ericegonz" target="_blank"> LinkedIn</a>.
                  </p>
                </div>
            </div>
    )
    }
    }
