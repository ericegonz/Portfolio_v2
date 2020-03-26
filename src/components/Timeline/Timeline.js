import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import './Timeline.css'

export default class Timeline extends Component {
  render() {
    const timelineStyle = {
      padding: '2%',
    };

    const arrowStyle = {
      borderRight: '7px solid rgb(46, 86, 136)'
    };

    const workContentStyle = {
      background: 'rgb(46, 86, 136)',
      color: '#fff'
    };

    const workIconStyle = {
      background: 'rgb(46, 86, 136)',
      boxShadow: '0 0 0 0 #333333, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
      color: '#fff'
    };

    const educationContentStyle = {
      background: 'rgb(46, 86, 136)',
      color: '#fff'
    };

    const educationIconStyle = {
      background: 'rgb(46, 86, 136)',
      color: '#fff'
    };

    const positionName = {
      paddingBottom: "10px",
      fontSize: "22px",
      fontWeight: "600"
    };

    const positionInfo = {
      paddingBottom: "10px",
      fontSize: "13px",
      borderBottom: "solid lightgrey"
    };

    const description = {
      paddingBottom: "10px",
      fontSize: "16px"
    };

    return (
      <div className="timeline" style={timelineStyle}>
        <h1 className={"display-3"}>My Experience</h1>
        <VerticalTimeline className={"resume-timeline"}>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={workContentStyle}
              iconStyle={workIconStyle}
              contentArrowStyle={arrowStyle}
              date="November 2019 – Present"
              icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={positionName}>Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={positionInfo}>ViaTouch Media, Inc | San Diego, CA</h4>
            <p style={description}>
              Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={workContentStyle}
              iconStyle={workIconStyle}
              contentArrowStyle={arrowStyle}
              date="April 2017 – November 2019"
              icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={positionName}>Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={positionInfo}>ViaTouch Media, Inc | Corona, CA</h4>
            <p style={description}>
              Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={workContentStyle}
              iconStyle={workIconStyle}
              contentArrowStyle={arrowStyle}
              date="January 2017 – April 2017"
              icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={positionName}>Software Development Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={positionInfo}>ViaTouch Media, Inc |  Corona, CA</h4>
            <p style={description}>
              Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={workContentStyle}
              iconStyle={workIconStyle}
              contentArrowStyle={arrowStyle}
              date="January 2014 – January 2017"
              icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={positionName}>Media Development Supervisor/</h3>
            <h3 className="vertical-timeline-element-title" style={positionName}>Graphic Designer</h3>
            <h4 className="vertical-timeline-element-subtitle" style={positionInfo}>University of California | Riverside, CA</h4>
            <p style={description}>
              Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={educationContentStyle}
              iconStyle={educationIconStyle}
              contentArrowStyle={arrowStyle}
              date="2017"
              icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={positionName}>B.S. in Computer Science</h3>
            <h3 className="vertical-timeline-element-title" style={positionName}>w/ Business Applications</h3>
            <h4 className="vertical-timeline-element-subtitle" style={positionInfo}></h4>
            <p className="vertical-timeline-element-subtitle" style={description}>
              University of California, Riverside
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    )
  }
}
