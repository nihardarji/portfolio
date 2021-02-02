import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'

const Education = () => {
    return (
        <div id='education'>
            <div className='center'>
                <h1 className='white-text'>Education</h1>
            </div>
            <Timeline lineColor={'#fff'}>
                <TimelineItem
                    key="001"
                    dateText="Aug 2019 – Present"
                    style={{ color: '#101010', 'textAlign':'justify' }}
                    dateInnerStyle={{ background: '#00838f', color: '#000' }}
                >
                    <h4 className='white-text' style={{ 'textAlign':'left' }}>Illinois Institute of Technology, <i>Chicago</i></h4>
                    <h5 className='white-text' style={{ 'textAlign':'left' }}>Master's in Computer Science</h5>
                    <p className='white-text'>
                        <b>GPA</b>{' '}3.33
                    </p>
                    <p className='white-text'>
                       <b>Relavent Course Work</b>
                        {' '} <i>Introduction to Artificial Intelligence, Introduction to Algorithms, Machine Learning, 
                            Advanced Database Organization, Computer Networks, Big Data Technology, Design & Analysis of Algorithms, 
                            Software Project Management, Data Mining, Geospatial Vision/Visualization</i> 
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="Aug 2014 – May 2018"
                    style={{ color: '#101010', 'textAlign':'justify' }}
                    dateInnerStyle={{ background: '#00838f', color: '#000' }}
                >
                    <h4 className='white-text' style={{ 'textAlign':'left' }}>Birla Vishvakarma Mahavidyalaya</h4>
                    <h5 className='white-text' style={{ 'textAlign':'left' }}>Bachelor of Engineering in Computer Engineering</h5>
                    <p className='white-text'>
                        <b>GPA</b>{' '}3.50
                    </p>
                    <p className='white-text'>
                       <b>Relavent Course Work</b>
                        {' '} <i> Data Structure & Algorithm, Database Management System, Object Oriented Programming, Software Engineering, Data Mining, Operating Systems </i>
                    </p>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Education
