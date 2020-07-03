import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Project = () => {
    return (
        <div id='projects'>
            <div className='center'>
                <h1 className='white-text'>Projects</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00838f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="June 2020"
                    iconStyle={{ background: '#006064', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">IT Logger</h4>
                    <h5 className="vertical-timeline-element-subtitle">React Web Application</h5>
                    <p>
                        <li>React web application to maintain the system logs</li>
                        <li>JSON server as a mock backend</li>
                        <li>Redux for state management</li>
                    </p>
                    <p>
                    <a href="https://github.com/nihardarji/IT-Logger" className='btn btn-small right cyan darken-4'>Source-Code</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00838f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="May 2020"
                    iconStyle={{ background: '#006064', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Contact Keeper</h4>
                    <h5 className="vertical-timeline-element-subtitle">MERN stack Web Application</h5>
                    <p>
                        <li>MERN stack Web Application to maintain the contacts of registered users</li>
                        <li>Provides user the functionality to filter, edit, add & delete contacts</li>
                        <li>Developed using React Hooks for state management , context APIs, RESTful APIs
                        for CRUD operations, Mongo Atlas for cloud storage of data & JSON Web Token for authentication</li>
                    </p>
                    <p>
                    <a href="https://lit-meadow-22152.herokuapp.com" className='btn btn-small cyan darken-4'>Demo</a>
                    <a href="https://github.com/nihardarji/ContactKeeper" className='btn btn-small right cyan darken-4'>Source-Code</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00838f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="April 2020"
                    iconStyle={{ background: '#006064', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">My Blog</h4>
                    <h5 className="vertical-timeline-element-subtitle">Full Stack Web Application</h5>
                    <p>
                        <li>Full stack Web Application which enables user to view and upvote the blog , comment on the articles and view articles related to it</li>
                        <li>React Web Application which makes use of Express server as Backend & MongoDB as Database</li>
                    </p>
                    <p>
                    <a href="https://github.com/nihardarji/MyBlog-Fullstack" className='btn btn-small cyan darken-4 right'>Source-Code</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00838f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="March 2020"
                    iconStyle={{ background: '#006064', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Github Finder</h4>
                    <h5 className="vertical-timeline-element-subtitle">React Web Application</h5>
                    <p>
                        <li>React Web Application to find and view Github user’s profile</li>
                        <li>Makes use of React Hooks, context APIs, and Github’s API</li>
                    </p>
                    <p>
                    <a href="https://githubfinder2324.netlify.app" className='btn btn-small cyan darken-4'>Demo</a>
                    <a href="https://github.com/nihardarji/GitHubFinder" className='btn btn-small cyan darken-4 right'>Source-Code</a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#00838f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="July 2017 - May 2018"
                    iconStyle={{ background: '#006064', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Online Milk Ordering</h4>
                    <h4 className="vertical-timeline-element-title">App</h4>
                    <h5 className="vertical-timeline-element-subtitle">An Android Application</h5>
                    <p>
                        <li>An e-commerce application to order milk as well as milk products and to be delivered at the doorstep</li>
                        <li>Developed using Android, Flask (Micro framework of Python) for Backend and MySQL for Database of the Application</li>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Project
