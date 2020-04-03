import React, { Component } from 'react';
import './Projects.css'
import MyProjects from "./MyProjectData.json";
import { Accordion, Button, Card } from "react-bootstrap";
// import InDesign from "../../assets/idlarge.png";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.myProjects = MyProjects.map((item, key)=>
        <Card key={item.name}>
          <Card.Header>
            <p className="project-name">
              {item.name} -
              <span className="company-name">
                {item.company_name}
              </span>
            </p>
            <p className="project-brief-description">
              {item.brief_description}
            </p>
            <p className="project-technologies-used">
              Technologies Used: {item.technologies_used}
            </p>
            <Accordion.Toggle className="toggle-button" as={Button} variant="link" eventKey={key}>
              Learn More
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>
              <p className="project-brief-description">
                Description: {item.description}
              </p>
              {/*{item.images.map(img => (*/}
              {/*    <img src={require(`${img.path}`)} alt={"Adobe InDesign"}/>*/}
              {/*))}*/}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
  }

  render() {
    return (
        <Accordion className="main-accordion">
          {this.myProjects}
        </Accordion>
    )
  }
}
