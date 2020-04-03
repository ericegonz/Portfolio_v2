import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import './Timeline.css'
import MyTimelineData from "./TimelineData.json";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.myProgrammingJobs = MyTimelineData.code.map((job, key)=>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={job.dates}
            icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">{job.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {job.institution} | {job.location}
          </h4>
            <div className="vertical-timeline-bullet-container">
              <p className="timeline-bullet-point">{job.brief_description}</p>
              {job.bullet_points.map(bullet => (
                  <p className="timeline-bullet-point">{bullet}</p>
              ))}
            </div>
        </VerticalTimelineElement>
    );

    this.myGenericJobs = MyTimelineData.generic.map((job, key)=>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={job.dates}
            icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">{job.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {job.institution} | {job.location}
          </h4>
          <div className="vertical-timeline-bullet-container">
            <p className="timeline-bullet-point">{job.brief_description}</p>
            {job.bullet_points.map(bullet => (
                <p className="timeline-bullet-point">{bullet}</p>
            ))}
          </div>
        </VerticalTimelineElement>
    );

    this.myEducation = MyTimelineData.education.map((job, key)=>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={job.dates}
            icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">{job.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {job.institution} | {job.location}
          </h4>
          <div className="vertical-timeline-bullet-container">
            <p className="timeline-bullet-point">{job.brief_description}</p>
            {job.bullet_points.map(bullet => (
                <p className="timeline-bullet-point">{bullet}</p>
            ))}
          </div>
        </VerticalTimelineElement>
    );
  }

  render() {
    return (
      <div className="timeline">
        <a href={window.$resume_url} target = "_blank" rel="noopener noreferrer">Download my resume as a PDF here.</a>
        <VerticalTimeline className={"resume-timeline"}>
          {this.myProgrammingJobs}
          {this.myGenericJobs}
          {this.myEducation}
        </VerticalTimeline>
      </div>
    )
  }
}
