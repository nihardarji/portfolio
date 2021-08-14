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
                    date="March 2021 - Present"
                    iconStyle={{ background: '#004d40 ', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title" style={{'textAlign':'left'}}>Software Engineer</h4>
                    <h5 className="vertical-timeline-element-subtitle">Shoptelligence Inc.</h5>
                    <p>
                        <li>Involved in implementing new features, improving engineering performance & integrating with public facing APIs</li>
                        <li>Developed features in Python & MySQL</li>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00796b', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Oct 2020 - Dec 2020"
                    iconStyle={{ background: '#004d40 ', color: '#fff' }}
                >
                <h4 className="vertical-timeline-element-title" style={{'textAlign':'left'}}>Software Developer Intern</h4>
                <h5 className="vertical-timeline-element-subtitle">Qnopy Inc.</h5>
                <p>
                    <li>Working as a Web Developer Intern involved in developing web application with React, Redux, Material UI</li>
                    <li>Associated with developing RESTful APIs</li>
                </p>
                </VerticalTimelineElement>
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
                    <li>Worked as a Full Stack (MEAN) Web Developer for product SCIKEY</li>
                    <li>Developed responsive web components using front-end technologies using Angular & 
                        RESTful Express APIs using NodeJS and Implemented MongoDB and mongoose services</li>
                    <li>Worked with JavaScript and jQuery for client-side scripting</li>
                    <li>Manage source code management & builds using GitLab and Jenkins</li>
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
