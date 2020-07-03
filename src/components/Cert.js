import React from 'react'

const Cert = () => {
    return (
        <div id='certifications'>
            <div className='center'>
                <h1 className='white-text'>Certification</h1>
            </div>
            <div className="card row margin cyan darken-3 valign-wrapper">
                <div className="card-content white-text">
                    <span className="card-title"> <li> Certified by Udemy in Full stack (MERN) development</li></span>
                    <p>May 2020</p>
                </div>
            </div>
            <div className="card row margin cyan darken-3 valign-wrapper">
                <div className="card-content white-text">
                    <span className="card-title"> <li> Certified in React Web Application Development by LinkedIn Learning</li></span>
                    <p>April 2020</p>
                </div>
            </div>
            <div className="card row margin cyan darken-3 valign-wrapper">
                <div className="card-content white-text">
                    <span className="card-title"> <li> Certified in MERN stack development by LinkedIn Learning</li></span>
                    <p>March 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Cert
