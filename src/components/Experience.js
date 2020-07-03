import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div id='experience'>
            <div className='center'>
                <h1 className='white-text'>Experience</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00796b', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff ' }}
                    date="Sept 2018 - July 2019"
                    iconStyle={{ background: '#004d40 ', color: '#fff' }}
                >
                <h4 className="vertical-timeline-element-title" style={{'textAlign':'left'}}>Associate Software Developer</h4>
                <h5 className="vertical-timeline-element-subtitle">SRKay Consulting Group</h5>
                <p>
                    <li>Worked as a Full Stack (MEAN) Web Developer for product SCIKEY which is Talent Hiring Platform using AI, Mathematics & Psychology</li>
                    <li>Contributed towards designing and developing web applications using Node.JS , Express.JS, AngularJS and MongoDB</li>
                    <li>Experience on working with REST APIs</li>
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00796b', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="June 2017 - July 2018"
                    iconStyle={{ background: '#004d40 ', color: '#fff' }}
                >
                <h4 className="vertical-timeline-element-title">Intern</h4>
                <h5 className="vertical-timeline-element-subtitle">Reliance Inc. Ltd.</h5>
                <p>
                    <li>Study of Automation System in SBR plant</li>
                    <li>Relational Database Management</li>
                    <li>Study of OPC</li>
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
